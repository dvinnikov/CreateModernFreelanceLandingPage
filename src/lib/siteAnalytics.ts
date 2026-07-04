type AnalyticsPayload = {
  type: "page_view" | "cta_click" | "contact_submit";
  path: string;
  visitorId: string;
  meta?: Record<string, unknown>;
};

const visitorKey = "dmytro.dev.visitorId";

function getVisitorId() {
  const existing = window.localStorage.getItem(visitorKey);
  if (existing) {
    return existing;
  }

  const next = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  window.localStorage.setItem(visitorKey, next);
  return next;
}

async function postJson(path: string, payload: Record<string, unknown>) {
  try {
    await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // Analytics should never interrupt the landing page experience.
  }
}

function currentPath() {
  return `${window.location.pathname}${window.location.hash}` || "/";
}

function track(payload: Omit<AnalyticsPayload, "visitorId" | "path"> & { path?: string }) {
  return postJson("/api/events", {
    ...payload,
    path: payload.path || currentPath(),
    visitorId: getVisitorId(),
  });
}

function contactPayload(form: HTMLFormElement) {
  const inputs = Array.from(form.querySelectorAll("input, textarea, select")) as Array<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;

  return {
    name: inputs[0]?.value || "",
    email: inputs[1]?.value || "",
    details: inputs[2]?.value || "",
    budget: inputs[3]?.value || "",
    visitorId: getVisitorId(),
    path: currentPath(),
  };
}

function submitContact(form: HTMLFormElement) {
  const payload = contactPayload(form);

  if (!payload.name || !payload.email || !payload.details) {
    return;
  }

  void postJson("/api/contact", payload);
}

export function initSiteAnalytics() {
  if (typeof window === "undefined") {
    return;
  }

  void track({ type: "page_view" });

  window.addEventListener("hashchange", () => {
    void track({ type: "page_view" });
  });

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a") as HTMLAnchorElement | null;
      if (!link) {
        return;
      }

      const href = link.getAttribute("href") || "";
      if (href === "#contact" || href === "#services") {
        void track({
          type: "cta_click",
          meta: {
            label: link.textContent?.trim() || href,
            href,
          },
        });
      }
    },
    { capture: true },
  );

  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target as HTMLFormElement | null;
      if (form?.closest("#contact")) {
        submitContact(form);
      }
    },
    { capture: true },
  );
}
