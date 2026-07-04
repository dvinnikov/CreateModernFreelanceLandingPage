import express from "express";
import cors from "cors";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT || 4000);
const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";
const dataDir = process.env.DATA_DIR || path.join(__dirname, "data");
const statsFile = path.join(dataDir, "stats.json");

app.use(cors({ origin: allowedOrigin, credentials: false }));
app.use(express.json({ limit: "64kb" }));

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });

  try {
    await fs.access(statsFile);
  } catch {
    await fs.writeFile(statsFile, JSON.stringify({ events: [], contacts: [] }, null, 2));
  }
}

async function readStore() {
  await ensureStore();
  const raw = await fs.readFile(statsFile, "utf8");
  return JSON.parse(raw);
}

async function writeStore(store) {
  await fs.writeFile(statsFile, JSON.stringify(store, null, 2));
}

function clientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }

  return req.socket.remoteAddress || "unknown";
}

function normalizePath(value) {
  if (typeof value !== "string" || value.trim().length === 0) {
    return "/";
  }

  return value.slice(0, 180);
}

function normalizeEventType(value) {
  const allowed = new Set(["page_view", "cta_click", "contact_submit"]);
  return allowed.has(value) ? value : "custom";
}

function eventFromRequest(req, overrides = {}) {
  const body = req.body || {};

  return {
    id: crypto.randomUUID(),
    type: normalizeEventType(overrides.type || body.type),
    path: normalizePath(overrides.path || body.path),
    visitorId: typeof body.visitorId === "string" ? body.visitorId.slice(0, 80) : "anonymous",
    userAgent: String(req.headers["user-agent"] || "unknown").slice(0, 240),
    ipHash: crypto.createHash("sha256").update(clientIp(req)).digest("hex").slice(0, 16),
    meta: typeof body.meta === "object" && body.meta !== null ? body.meta : {},
    createdAt: new Date().toISOString(),
  };
}

function sinceDate(days) {
  const normalizedDays = Number.isFinite(days) ? Math.max(1, Math.min(days, 365)) : 30;
  const date = new Date();
  date.setDate(date.getDate() - normalizedDays);
  return date;
}

function countBy(items, selector) {
  return items.reduce((acc, item) => {
    const key = selector(item) || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "freelance-landing-api" });
});

app.post("/api/events", async (req, res, next) => {
  try {
    const store = await readStore();
    const event = eventFromRequest(req);
    store.events.push(event);
    await writeStore(store);
    res.status(201).json({ ok: true, eventId: event.id });
  } catch (error) {
    next(error);
  }
});

app.post("/api/contact", async (req, res, next) => {
  try {
    const { name, email, details, budget, visitorId, path: pagePath } = req.body || {};

    if (!name || !email || !details) {
      return res.status(400).json({ ok: false, error: "name, email and details are required" });
    }

    const contact = {
      id: crypto.randomUUID(),
      name: String(name).trim().slice(0, 120),
      email: String(email).trim().slice(0, 160),
      details: String(details).trim().slice(0, 4000),
      budget: typeof budget === "string" ? budget.slice(0, 80) : "",
      visitorId: typeof visitorId === "string" ? visitorId.slice(0, 80) : "anonymous",
      path: normalizePath(pagePath),
      ipHash: crypto.createHash("sha256").update(clientIp(req)).digest("hex").slice(0, 16),
      createdAt: new Date().toISOString(),
    };

    const store = await readStore();
    store.contacts.push(contact);
    store.events.push(eventFromRequest(req, { type: "contact_submit", path: contact.path }));
    await writeStore(store);

    res.status(201).json({ ok: true, contactId: contact.id });
  } catch (error) {
    next(error);
  }
});

app.get("/api/stats", async (req, res, next) => {
  try {
    const days = Number(req.query.days || 30);
    const start = sinceDate(days);
    const store = await readStore();
    const events = store.events.filter((event) => new Date(event.createdAt) >= start);
    const contacts = store.contacts.filter((contact) => new Date(contact.createdAt) >= start);
    const pageViews = events.filter((event) => event.type === "page_view");
    const visitors = new Set(events.map((event) => event.visitorId).filter(Boolean));
    const pageCounts = countBy(pageViews, (event) => event.path);

    res.json({
      ok: true,
      rangeDays: Math.max(1, Math.min(days || 30, 365)),
      totals: {
        events: events.length,
        pageViews: pageViews.length,
        uniqueVisitors: visitors.size,
        ctaClicks: events.filter((event) => event.type === "cta_click").length,
        contacts: contacts.length,
      },
      topPages: Object.entries(pageCounts)
        .map(([page, views]) => ({ page, views }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 10),
      recentContacts: contacts.slice(-10).reverse().map(({ id, name, email, budget, createdAt }) => ({
        id,
        name,
        email,
        budget,
        createdAt,
      })),
      recentEvents: events.slice(-25).reverse(),
    });
  } catch (error) {
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ ok: false, error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Backend API listening on http://localhost:${port}`);
});
