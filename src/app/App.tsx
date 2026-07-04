import { useState } from "react";
import { ArrowRight, Menu, X, ChevronRight } from "lucide-react";

// ─── Inline SVG Illustrations ────────────────────────────────────────────────

function IllustrationApi() {
  return (
    <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="30" width="160" height="100" rx="12" fill="#FFFFFF" stroke="#E0DDD5" strokeWidth="1.5"/>
      <rect x="36" y="50" width="60" height="6" rx="3" fill="#E07B3F" opacity="0.7"/>
      <rect x="36" y="64" width="110" height="4" rx="2" fill="#E0DDD5"/>
      <rect x="36" y="74" width="85" height="4" rx="2" fill="#E0DDD5"/>
      <rect x="36" y="84" width="95" height="4" rx="2" fill="#E0DDD5"/>
      <rect x="36" y="102" width="44" height="16" rx="6" fill="#182130"/>
      <text x="58" y="113" fontSize="7" fill="#F6F4EF" fontFamily="JetBrains Mono" textAnchor="middle">GET</text>

      <rect x="240" y="30" width="160" height="100" rx="12" fill="#FFFFFF" stroke="#E0DDD5" strokeWidth="1.5"/>
      <rect x="256" y="50" width="60" height="6" rx="3" fill="#182130" opacity="0.5"/>
      <rect x="256" y="64" width="110" height="4" rx="2" fill="#E0DDD5"/>
      <rect x="256" y="74" width="78" height="4" rx="2" fill="#E0DDD5"/>
      <rect x="256" y="84" width="100" height="4" rx="2" fill="#E0DDD5"/>
      <rect x="256" y="102" width="44" height="16" rx="6" fill="#E07B3F"/>
      <text x="278" y="113" fontSize="7" fill="#FFFFFF" fontFamily="JetBrains Mono" textAnchor="middle">POST</text>

      <rect x="130" y="175" width="160" height="130" rx="12" fill="#182130"/>
      <rect x="146" y="195" width="80" height="4" rx="2" fill="#E07B3F" opacity="0.8"/>
      <rect x="146" y="208" width="110" height="3" rx="1.5" fill="#FFFFFF" opacity="0.25"/>
      <rect x="146" y="218" width="90" height="3" rx="1.5" fill="#FFFFFF" opacity="0.18"/>
      <rect x="146" y="228" width="100" height="3" rx="1.5" fill="#FFFFFF" opacity="0.18"/>
      <rect x="146" y="241" width="60" height="3" rx="1.5" fill="#E07B3F" opacity="0.5"/>
      <rect x="146" y="251" width="115" height="3" rx="1.5" fill="#FFFFFF" opacity="0.18"/>
      <rect x="146" y="261" width="80" height="3" rx="1.5" fill="#FFFFFF" opacity="0.18"/>
      <rect x="146" y="274" width="90" height="18" rx="6" fill="#E07B3F"/>
      <text x="191" y="285" fontSize="7" fill="#FFFFFF" fontFamily="JetBrains Mono" textAnchor="middle">200 OK</text>

      <line x1="180" y1="130" x2="210" y2="175" stroke="#E07B3F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6"/>
      <line x1="240" y1="130" x2="210" y2="175" stroke="#E0DDD5" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>

      <circle cx="30" cy="270" r="16" fill="#EAE7DF" stroke="#E0DDD5" strokeWidth="1.5"/>
      <text x="30" y="274" fontSize="8" fill="#182130" fontFamily="JetBrains Mono" textAnchor="middle" opacity="0.6">DB</text>
      <circle cx="390" cy="80" r="16" fill="#EAE7DF" stroke="#E0DDD5" strokeWidth="1.5"/>
      <text x="390" y="84" fontSize="7" fill="#E07B3F" fontFamily="JetBrains Mono" textAnchor="middle">API</text>
      <line x1="44" y1="262" x2="130" y2="230" stroke="#E0DDD5" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
      <line x1="375" y1="88" x2="320" y2="110" stroke="#E0DDD5" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
    </svg>
  );
}

function IllustrationBackend() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="8" y="12" width="64" height="16" rx="5" fill="#182130"/>
      <circle cx="18" cy="20" r="3" fill="#E07B3F"/>
      <rect x="26" y="17" width="36" height="3" rx="1.5" fill="#FFFFFF" opacity="0.2"/>
      <rect x="8" y="33" width="64" height="16" rx="5" fill="#EAE7DF"/>
      <circle cx="18" cy="41" r="3" fill="#182130" opacity="0.3"/>
      <rect x="26" y="38" width="30" height="3" rx="1.5" fill="#182130" opacity="0.2"/>
      <rect x="8" y="54" width="64" height="16" rx="5" fill="#EAE7DF"/>
      <circle cx="18" cy="62" r="3" fill="#E07B3F" opacity="0.5"/>
      <rect x="26" y="59" width="40" height="3" rx="1.5" fill="#182130" opacity="0.2"/>
    </svg>
  );
}

function IllustrationCrm() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="6" y="6" width="68" height="68" rx="10" fill="#EAE7DF"/>
      <circle cx="28" cy="26" r="8" fill="#182130" opacity="0.12"/>
      <circle cx="28" cy="26" r="5" fill="#182130" opacity="0.25"/>
      <rect x="10" y="38" width="60" height="3" rx="1.5" fill="#182130" opacity="0.1"/>
      <rect x="10" y="47" width="28" height="22" rx="5" fill="#FFFFFF"/>
      <rect x="14" y="52" width="20" height="2.5" rx="1.25" fill="#E07B3F" opacity="0.7"/>
      <rect x="14" y="58" width="16" height="2" rx="1" fill="#182130" opacity="0.2"/>
      <rect x="14" y="63" width="18" height="2" rx="1" fill="#182130" opacity="0.15"/>
      <rect x="42" y="47" width="28" height="22" rx="5" fill="#182130"/>
      <rect x="46" y="52" width="16" height="2.5" rx="1.25" fill="#E07B3F" opacity="0.8"/>
      <rect x="46" y="58" width="20" height="2" rx="1" fill="#FFFFFF" opacity="0.2"/>
      <rect x="46" y="63" width="14" height="2" rx="1" fill="#FFFFFF" opacity="0.15"/>
      <circle cx="52" cy="26" r="8" fill="#E07B3F" opacity="0.15"/>
      <circle cx="52" cy="26" r="5" fill="#E07B3F" opacity="0.3"/>
    </svg>
  );
}

function IllustrationIntegration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="6" y="28" width="22" height="22" rx="6" fill="#182130"/>
      <rect x="52" y="28" width="22" height="22" rx="6" fill="#E07B3F"/>
      <path d="M28 39 L36 39 M44 39 L52 39" stroke="#182130" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="34" y="34" width="12" height="10" rx="3" fill="#FFFFFF" stroke="#E0DDD5" strokeWidth="1"/>
      <path d="M40 36 L40 42 M37 39 L43 39" stroke="#E07B3F" strokeWidth="1" strokeLinecap="round"/>
      <rect x="14" y="56" width="18" height="4" rx="2" fill="#EAE7DF"/>
      <rect x="48" y="56" width="18" height="4" rx="2" fill="#EAE7DF"/>
      <circle cx="14" cy="20" r="5" fill="#EAE7DF" stroke="#E0DDD5" strokeWidth="1"/>
      <circle cx="66" cy="20" r="5" fill="#EAE7DF" stroke="#E0DDD5" strokeWidth="1"/>
    </svg>
  );
}

function IllustrationPerf() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M10 65 Q20 30 30 45 Q40 60 50 25 Q60 10 70 20" stroke="#E07B3F" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M10 65 Q20 45 30 52 Q40 65 50 40 Q60 25 70 32" stroke="#182130" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3"/>
      <circle cx="70" cy="20" r="4" fill="#E07B3F"/>
      <line x1="10" y1="68" x2="72" y2="68" stroke="#182130" strokeWidth="1" opacity="0.15"/>
      <line x1="10" y1="68" x2="10" y2="14" stroke="#182130" strokeWidth="1" opacity="0.15"/>
    </svg>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Services", "Process", "Tech Stack", "Cases", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-[#F6F4EF]/90 backdrop-blur-md border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-md bg-[#182130] flex items-center justify-center">
            <span className="font-mono text-[10px] text-[#E07B3F] font-medium">.D</span>
          </span>
          <span className="font-['Fraunces'] text-[#182130] text-lg font-semibold tracking-tight">
            Dmytro<span className="text-[#E07B3F]">.</span>dev
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-[#182130]/60 hover:text-[#182130] transition-colors font-['Plus_Jakarta_Sans']"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="bg-[#E07B3F] text-white text-sm font-['Plus_Jakarta_Sans'] font-medium px-5 py-2.5 rounded-full hover:bg-[#c96b32] transition-colors"
          >
            Book a free call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#182130]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#F6F4EF] border-t border-border px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-[#182130]/70 font-['Plus_Jakarta_Sans']"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#E07B3F] text-white text-sm font-medium font-['Plus_Jakarta_Sans'] px-5 py-2.5 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Book a free call
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07B3F]" />
            <span className="text-xs text-[#182130]/60 font-['Plus_Jakarta_Sans']">
              Available for new projects · Senior .NET Developer
            </span>
          </div>

          <h1 className="font-['Fraunces'] text-[#182130] text-4xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.12] tracking-[-0.02em] mb-6">
            Reliable .NET&nbsp;development for&nbsp;businesses that need clean,&nbsp;
            <em className="not-italic text-[#E07B3F]">scalable</em> software.
          </h1>

          <p className="font-['Plus_Jakarta_Sans'] text-[#182130]/60 text-lg leading-relaxed mb-10 max-w-xl">
            I build backend systems, APIs, CRM features, integrations and automation tools — from idea to production. Clean architecture, measurable outcomes.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#182130] text-[#F6F4EF] font-['Plus_Jakarta_Sans'] font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#1e2d40] transition-colors flex items-center gap-2"
            >
              Discuss a project <ArrowRight size={15} />
            </a>
            <a
              href="#services"
              className="border border-[#182130]/20 text-[#182130] font-['Plus_Jakarta_Sans'] font-medium text-sm px-7 py-3.5 rounded-full hover:border-[#182130]/40 transition-colors"
            >
              View services
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden lg:block relative">
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm" style={{ height: 340 }}>
            <IllustrationApi />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-6 bg-[#182130] text-[#F6F4EF] rounded-xl px-4 py-3">
            <div className="font-['JetBrains_Mono'] text-[11px] text-[#E07B3F] mb-0.5">Response</div>
            <div className="font-['JetBrains_Mono'] text-xs opacity-70">200 OK · 38ms</div>
          </div>
          <div className="absolute -top-4 -right-4 bg-white border border-border rounded-xl px-4 py-3 shadow-sm">
            <div className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/50 mb-0.5">Uptime</div>
            <div className="font-['Fraunces'] text-[#182130] text-xl font-semibold">99.97%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Strip ──────────────────────────────────────────────────────────────

function TrustStrip() {
  const items = [
    "C#", ".NET 8", "ASP.NET Core", "SQL Server", "PostgreSQL",
    "Docker", "Azure / AWS", "REST API", "EF Core", "RabbitMQ",
  ];
  return (
    <section className="border-t border-b border-border bg-white py-5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
          <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/35 uppercase tracking-widest shrink-0">
            Technologies
          </span>
          {items.map((t) => (
            <span
              key={t}
              className="font-['JetBrains_Mono'] text-xs text-[#182130]/55 whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

const services = [
  {
    num: "01",
    title: "Backend & API Development",
    desc: "Well-architected REST APIs, microservices, and server-side logic built on ASP.NET Core. Performance-first, with proper authentication, validation, and OpenAPI docs.",
    icon: <IllustrationBackend />,
    accent: "#182130",
  },
  {
    num: "02",
    title: "CRM / Business Systems",
    desc: "Custom CRM modules, ERP integrations, and internal tooling that replaces fragile spreadsheets with reliable, auditable workflows.",
    icon: <IllustrationCrm />,
    accent: "#E07B3F",
  },
  {
    num: "03",
    title: "Integrations & Automation",
    desc: "Connecting your systems — from payment gateways and ERPs to third-party SaaS tools. Background jobs, event pipelines, and scheduled processes.",
    icon: <IllustrationIntegration />,
    accent: "#182130",
  },
  {
    num: "04",
    title: "Refactoring & Performance",
    desc: "Auditing legacy codebases, reducing technical debt, improving slow queries and bottlenecks, and migrating to modern .NET versions without breaking changes.",
    icon: <IllustrationPerf />,
    accent: "#E07B3F",
  },
];

function Services() {
  return (
    <section id="services" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
      <div className="mb-14">
        <span className="font-['JetBrains_Mono'] text-xs text-[#E07B3F] uppercase tracking-widest">
          How I can help
        </span>
        <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-4xl font-semibold mt-3 leading-tight tracking-[-0.01em]">
          The right tool for every layer of your stack
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <div
            key={s.num}
            className="bg-white border border-border rounded-2xl p-7 flex flex-col gap-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14">{s.icon}</div>
              <span
                className="font-['JetBrains_Mono'] text-xs opacity-30 mt-1"
                style={{ color: s.accent }}
              >
                {s.num}
              </span>
            </div>
            <div>
              <h3 className="font-['Fraunces'] text-[#182130] text-lg font-semibold mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[#182130]/55 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
            <div className="mt-auto">
              <span className="inline-flex items-center gap-1 text-[#E07B3F] text-xs font-['Plus_Jakarta_Sans'] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    label: "Discover",
    title: "Understand the problem",
    desc: "A 30-minute call to map your requirements, existing stack, and constraints. No sales pitch — just honest scoping.",
  },
  {
    num: "02",
    label: "Estimate",
    title: "Clear plan & price",
    desc: "You receive a written proposal with scope, milestones, timeline, and a fixed or time-and-materials quote. No surprises.",
  },
  {
    num: "03",
    label: "Build",
    title: "Iterative delivery",
    desc: "Weekly updates, working code in staging, and direct access to me. No account managers or hand-offs.",
  },
  {
    num: "04",
    label: "Launch & Support",
    title: "Ship and maintain",
    desc: "Production deployment, monitoring setup, documentation handover, and optional ongoing support retainer.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-[#182130] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="mb-14">
          <span className="font-['JetBrains_Mono'] text-xs text-[#E07B3F] uppercase tracking-widest">
            How work starts
          </span>
          <h2 className="font-['Fraunces'] text-white text-3xl lg:text-4xl font-semibold mt-3 leading-tight tracking-[-0.01em]">
            Four steps from first message to production
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+16px)] w-[calc(100%+0px)] h-px bg-white/10" style={{ width: "calc(100% - 20px)", left: "calc(100% + 10px)" }} />
              )}
              <div className="border border-white/10 rounded-2xl p-7 h-full flex flex-col gap-5 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full border border-[#E07B3F]/40 flex items-center justify-center font-['JetBrains_Mono'] text-[#E07B3F] text-xs">
                    {s.num}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-white/30 text-xs uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
                <div>
                  <h3 className="font-['Fraunces'] text-white text-xl font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-white/45 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────

const techGroups = [
  {
    category: "Languages & Runtime",
    items: ["C# 12", ".NET 8", "TypeScript"],
  },
  {
    category: "Frameworks",
    items: ["ASP.NET Core", "Entity Framework Core", "Minimal APIs", "SignalR"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "PostgreSQL", "Redis", "MongoDB"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Azure", "AWS", "GitHub Actions", "Nginx"],
  },
  {
    category: "Messaging & Queues",
    items: ["RabbitMQ", "Azure Service Bus", "Hangfire"],
  },
  {
    category: "Testing & Quality",
    items: ["xUnit", "FluentAssertions", "Testcontainers", "SonarQube"],
  },
];

function TechStack() {
  return (
    <section id="tech-stack" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
      <div className="mb-14">
        <span className="font-['JetBrains_Mono'] text-xs text-[#E07B3F] uppercase tracking-widest">
          Tech Stack
        </span>
        <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-4xl font-semibold mt-3 leading-tight tracking-[-0.01em]">
          Tools I use every day
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techGroups.map((g) => (
          <div key={g.category} className="bg-white border border-border rounded-2xl p-7">
            <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/40 uppercase tracking-widest mb-4">
              {g.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="font-['JetBrains_Mono'] text-xs text-[#182130] bg-[#F6F4EF] border border-border rounded-full px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Cases ────────────────────────────────────────────────────────────────────

const cases = [
  {
    tag: "Integration",
    title: "ERP ↔ eCommerce sync engine",
    desc: "Built a real-time sync layer between a legacy ERP (NAV) and a Shopify storefront for a B2B distributor. 40k+ SKUs, bi-directional order flow, zero data loss.",
    metric: "40k+ SKUs synced",
    bg: "#182130",
    fg: "#FFFFFF",
  },
  {
    tag: "CRM Module",
    title: "Custom quoting system for a logistics firm",
    desc: "Replaced a manual Excel-based quoting process with a multi-user CRM module. Role-based access, PDF generation, audit trail, and Outlook integration.",
    metric: "80% faster quotes",
    bg: "#FFFFFF",
    fg: "#182130",
  },
  {
    tag: "API Platform",
    title: "Multi-tenant API platform for SaaS product",
    desc: "Designed and built a REST API platform from scratch for a startup. JWT auth, tenant isolation, rate limiting, Stripe billing, and full OpenAPI docs.",
    metric: "From MVP to 3k users",
    bg: "#E07B3F",
    fg: "#FFFFFF",
  },
];

function Cases() {
  return (
    <section id="cases" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32 border-t border-border">
      <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#E07B3F] uppercase tracking-widest">
            Cases
          </span>
          <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-4xl font-semibold mt-3 leading-tight tracking-[-0.01em]">
            Recent work
          </h2>
        </div>
        <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130]/45 max-w-xs">
          Names and specific details anonymised per NDA. Full details discussed on request.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {cases.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl p-8 flex flex-col gap-6 min-h-72"
            style={{ background: c.bg }}
          >
            <span
              className="font-['JetBrains_Mono'] text-xs px-3 py-1.5 rounded-full self-start"
              style={{
                color: c.fg,
                background: c.fg === "#FFFFFF" ? "rgba(255,255,255,0.12)" : "rgba(24,33,48,0.07)",
              }}
            >
              {c.tag}
            </span>
            <div className="flex-1">
              <h3
                className="font-['Fraunces'] text-2xl font-semibold mb-3 leading-snug"
                style={{ color: c.fg }}
              >
                {c.title}
              </h3>
              <p
                className="font-['Plus_Jakarta_Sans'] text-sm leading-relaxed"
                style={{ color: c.fg, opacity: 0.6 }}
              >
                {c.desc}
              </p>
            </div>
            <div
              className="border-t pt-5"
              style={{ borderColor: c.fg === "#FFFFFF" ? "rgba(255,255,255,0.12)" : "rgba(24,33,48,0.08)" }}
            >
              <p className="font-['JetBrains_Mono'] text-xs" style={{ color: c.fg, opacity: 0.45 }}>
                Outcome
              </p>
              <p className="font-['Fraunces'] text-xl font-semibold mt-0.5" style={{ color: c.fg }}>
                {c.metric}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", details: "", budget: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white border-t border-border py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_540px] gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#E07B3F] uppercase tracking-widest">
              Contact
            </span>
            <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-5xl font-semibold mt-3 leading-tight tracking-[-0.02em] mb-6">
              Let&apos;s talk about your project
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[#182130]/55 text-lg leading-relaxed mb-10">
              Tell me what you&apos;re building and I&apos;ll get back within one business day. The first call is free, no strings attached.
            </p>

            <div className="space-y-5">
              {[
                { label: "Response time", value: "Within 24 hours" },
                { label: "Time zone", value: "CET (UTC+1)" },
                { label: "Availability", value: "Open to new projects" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 border-b border-border pb-5">
                  <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130]/40 w-32 shrink-0">
                    {item.label}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130] font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F6F4EF] rounded-2xl p-8 lg:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E07B3F]/10 flex items-center justify-center">
                  <span className="text-[#E07B3F] text-xl">✓</span>
                </div>
                <h3 className="font-['Fraunces'] text-[#182130] text-2xl font-semibold">Message sent!</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[#182130]/55 text-sm">
                  I&apos;ll review your project details and reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handle} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/50 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Johnson"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white border border-border rounded-xl px-4 py-3 text-sm font-['Plus_Jakarta_Sans'] text-[#182130] placeholder:text-[#182130]/30 focus:outline-none focus:ring-2 focus:ring-[#E07B3F]/30 focus:border-[#E07B3F]/50 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/50 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-white border border-border rounded-xl px-4 py-3 text-sm font-['Plus_Jakarta_Sans'] text-[#182130] placeholder:text-[#182130]/30 focus:outline-none focus:ring-2 focus:ring-[#E07B3F]/30 focus:border-[#E07B3F]/50 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/50 uppercase tracking-wider">
                    Project details
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Briefly describe your project, the problem you're solving, and any technical context..."
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className="bg-white border border-border rounded-xl px-4 py-3 text-sm font-['Plus_Jakarta_Sans'] text-[#182130] placeholder:text-[#182130]/30 focus:outline-none focus:ring-2 focus:ring-[#E07B3F]/30 focus:border-[#E07B3F]/50 transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/50 uppercase tracking-wider">
                    Budget range
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="bg-white border border-border rounded-xl px-4 py-3 text-sm font-['Plus_Jakarta_Sans'] text-[#182130] focus:outline-none focus:ring-2 focus:ring-[#E07B3F]/30 focus:border-[#E07B3F]/50 transition-all appearance-none"
                  >
                    <option value="" disabled>Select a range...</option>
                    <option>Under €5k</option>
                    <option>€5k – €15k</option>
                    <option>€15k – €50k</option>
                    <option>€50k+</option>
                    <option>Ongoing retainer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-[#E07B3F] text-white font-['Plus_Jakarta_Sans'] font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#c96b32] transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  Send request <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border bg-[#F6F4EF] py-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#182130] flex items-center justify-center">
            <span className="font-mono text-[9px] text-[#E07B3F] font-medium">.D</span>
          </span>
          <span className="font-['Fraunces'] text-[#182130] text-base font-semibold">
            Dmytro<span className="text-[#E07B3F]">.</span>dev
          </span>
        </div>
        <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/35 text-center">
          © 2024 Dmytro.dev · Senior .NET / C# Developer · hello@dmytro.dev
        </p>
        <div className="flex items-center gap-5">
          {["LinkedIn", "GitHub", "Upwork"].map((l) => (
            <a key={l} href="#" className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/40 hover:text-[#182130] transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-[#F6F4EF] min-h-screen">
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <Process />
      <TechStack />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
}
