import { FormEvent, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  Github,
  Mail,
  Menu,
  ServerCog,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";

const contactEmail = "hello@dmytro.dev";
const githubUrl = "https://github.com/dvinnikov";
const mailtoUrl = `mailto:${contactEmail}?subject=Project inquiry for .NET development`;

function SectionLabel({ children }: { children: string }) {
  return <span className="font-['JetBrains_Mono'] text-xs text-[#E07B3F] uppercase tracking-widest">{children}</span>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Cases", href: "#cases" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F6F4EF]/90 backdrop-blur-md border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group" aria-label="Dmytro.dev home">
          <span className="w-7 h-7 rounded-md bg-[#182130] flex items-center justify-center">
            <span className="font-mono text-[10px] text-[#E07B3F] font-medium">.D</span>
          </span>
          <span className="font-['Fraunces'] text-[#182130] text-lg font-semibold tracking-tight">
            Dmytro<span className="text-[#E07B3F]">.</span>dev
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-[#182130]/60 hover:text-[#182130] transition-colors font-['Plus_Jakarta_Sans']">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden lg:inline-flex bg-[#E07B3F] text-white text-sm font-['Plus_Jakarta_Sans'] font-medium px-5 py-2.5 rounded-full hover:bg-[#c96b32] transition-colors">
          Book a free call
        </a>

        <button className="lg:hidden text-[#182130]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F6F4EF] border-t border-border px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-[#182130]/70 font-['Plus_Jakarta_Sans']" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-[#E07B3F] text-white text-sm font-medium font-['Plus_Jakarta_Sans'] px-5 py-2.5 rounded-full text-center" onClick={() => setOpen(false)}>
            Book a free call
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const proof = ["Senior .NET / C#", "APIs, CRM, automations", "Production-first delivery"];

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="grid lg:grid-cols-[1fr_500px] gap-12 lg:gap-20 items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07B3F]" />
            <span className="text-xs text-[#182130]/60 font-['Plus_Jakarta_Sans']">Available for new projects</span>
          </div>

          <h1 className="font-['Fraunces'] text-[#182130] text-4xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.12] mb-6">
            Reliable .NET development for business systems that cannot afford messy software.
          </h1>

          <p className="font-['Plus_Jakarta_Sans'] text-[#182130]/60 text-lg leading-relaxed mb-8 max-w-2xl">
            I help founders and small teams design, build, modernize, and integrate backend platforms with clean C#, ASP.NET Core, SQL, cloud infrastructure, and calm delivery.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="bg-[#182130] text-[#F6F4EF] font-['Plus_Jakarta_Sans'] font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#1e2d40] transition-colors flex items-center gap-2">
              Discuss a project <ArrowRight size={15} />
            </a>
            <a href="#cases" className="border border-[#182130]/20 text-[#182130] font-['Plus_Jakarta_Sans'] font-medium text-sm px-7 py-3.5 rounded-full hover:border-[#182130]/40 transition-colors">
              View examples
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {proof.map((item) => (
              <span key={item} className="bg-white border border-border rounded-full px-4 py-2 text-xs text-[#182130]/55 font-['JetBrains_Mono']">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:block bg-white border border-border rounded-2xl p-6 shadow-sm">
          <div className="bg-[#182130] rounded-xl p-5 mb-5 text-[#F6F4EF] font-['JetBrains_Mono'] text-xs leading-7">
            <p><span className="text-[#E07B3F]">GET</span> /api/orders/sync</p>
            <p><span className="text-[#E07B3F]">200</span> OK - 38ms</p>
            <p>queue.processed = 18,420</p>
            <p>errors.last_24h = 0</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Uptime", value: "99.97%" },
              { label: "Avg API", value: "38ms" },
              { label: "Deploys", value: "CI/CD" },
              { label: "Scope", value: "MVP -> scale" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F6F4EF] rounded-xl p-4">
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/45 mb-1">{item.label}</p>
                <p className="font-['Fraunces'] text-[#182130] text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = ["C#", ".NET 8", "ASP.NET Core", "SQL Server", "PostgreSQL", "Docker", "Azure", "AWS", "REST API", "EF Core", "RabbitMQ", "GitHub Actions"];

  return (
    <section className="border-t border-b border-border bg-white py-5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-wrap gap-x-8 gap-y-3 items-center">
        <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/35 uppercase tracking-widest shrink-0">Technologies</span>
        {items.map((item) => (
          <span key={item} className="font-['JetBrains_Mono'] text-xs text-[#182130]/55 whitespace-nowrap">{item}</span>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    title: "Backend & API Development",
    desc: "REST APIs, service layers, authentication, validation, background jobs, OpenAPI documentation, and deployment-ready architecture.",
    icon: ServerCog,
  },
  {
    title: "CRM & Internal Tools",
    desc: "Custom modules for quoting, approvals, customer records, reporting, roles, audit trails, and workflows your team can actually use daily.",
    icon: Database,
  },
  {
    title: "Integrations & Automation",
    desc: "Payments, ERP, eCommerce, email, spreadsheets, queues, scheduled tasks, and data synchronization between systems that currently do not talk.",
    icon: Zap,
  },
  {
    title: "Refactoring & Performance",
    desc: "Legacy .NET cleanup, slow query fixes, migration planning, test coverage, observability, and safer releases without full rewrites.",
    icon: Code2,
  },
];

function Services() {
  return (
    <section id="services" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
      <div className="mb-14 max-w-2xl">
        <SectionLabel>How I can help</SectionLabel>
        <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-4xl font-semibold mt-3 leading-tight">Practical engineering for the parts of your business that must keep working</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <a key={service.title} href="#contact" className="bg-white border border-border rounded-2xl p-7 flex flex-col gap-6 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#F6F4EF] flex items-center justify-center text-[#E07B3F]"><Icon size={22} /></div>
              <div>
                <h3 className="font-['Fraunces'] text-[#182130] text-lg font-semibold mb-2 leading-snug">{service.title}</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[#182130]/55 text-sm leading-relaxed">{service.desc}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1 text-[#E07B3F] text-xs font-['Plus_Jakarta_Sans'] font-medium">
                Ask about this <ChevronRight size={13} />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

const packages = [
  { name: "Audit Sprint", price: "1-2 weeks", desc: "Architecture review, bottleneck map, risk list, and a prioritized technical plan before you invest in a larger build." },
  { name: "MVP Backend", price: "4-8 weeks", desc: "A production-ready API, database model, authentication, admin workflows, deployment pipeline, and documentation." },
  { name: "Ongoing Delivery", price: "Monthly", desc: "A steady senior .NET partner for feature delivery, refactoring, integrations, monitoring, and release support." },
];

function Packages() {
  return (
    <section className="bg-white border-y border-border py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>Engagement options</SectionLabel>
          <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-4xl font-semibold mt-3 leading-tight">Start with the level of certainty your project needs</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          {packages.map((item) => (
            <div key={item.name} className="bg-[#F6F4EF] border border-border rounded-2xl p-8">
              <p className="font-['JetBrains_Mono'] text-xs text-[#E07B3F] mb-4">{item.price}</p>
              <h3 className="font-['Fraunces'] text-2xl font-semibold mb-3">{item.name}</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130]/55 leading-relaxed mb-6">{item.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-['Plus_Jakarta_Sans'] font-medium text-[#182130] hover:text-[#E07B3F]">
                Request this option <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { label: "Discover", title: "Map the real problem", desc: "We clarify goals, users, constraints, data flows, current stack, and what must be true for the project to be worth shipping." },
  { label: "Estimate", title: "Shape a useful scope", desc: "You get milestones, risks, assumptions, timeline, and a clear delivery plan before development starts." },
  { label: "Build", title: "Ship in small increments", desc: "Working code, staging demos, weekly updates, and technical decisions explained in plain language." },
  { label: "Launch", title: "Deploy and support", desc: "Production rollout, monitoring, documentation, handover, and optional maintenance after the first release." },
];

function Process() {
  return (
    <section id="process" className="bg-[#182130] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>How work starts</SectionLabel>
          <h2 className="font-['Fraunces'] text-white text-3xl lg:text-4xl font-semibold mt-3 leading-tight">A simple process that keeps scope, money, and risk visible</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.label} className="border border-white/10 rounded-2xl p-7 h-full flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-[#E07B3F]/40 flex items-center justify-center font-['JetBrains_Mono'] text-[#E07B3F] text-xs">0{index + 1}</span>
                <span className="font-['JetBrains_Mono'] text-white/30 text-xs uppercase tracking-wider">{step.label}</span>
              </div>
              <h3 className="font-['Fraunces'] text-white text-xl font-semibold">{step.title}</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const techGroups = [
  { category: "Backend", items: ["C# 12", ".NET 8", "ASP.NET Core", "Minimal APIs", "SignalR"] },
  { category: "Data", items: ["SQL Server", "PostgreSQL", "Redis", "MongoDB", "EF Core"] },
  { category: "Cloud & Delivery", items: ["Docker", "Azure", "AWS", "GitHub Actions", "Nginx"] },
  { category: "Quality", items: ["xUnit", "FluentAssertions", "Testcontainers", "OpenAPI", "Serilog"] },
  { category: "Messaging", items: ["RabbitMQ", "Azure Service Bus", "Hangfire", "BackgroundService"] },
  { category: "Frontend touchpoints", items: ["React", "TypeScript", "Admin panels", "API clients"] },
];

function TechStack() {
  return (
    <section id="tech-stack" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
      <div className="mb-14 max-w-2xl">
        <SectionLabel>Tech stack</SectionLabel>
        <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-4xl font-semibold mt-3 leading-tight">Tools chosen for maintainable systems, not resume decoration</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techGroups.map((group) => (
          <div key={group.category} className="bg-white border border-border rounded-2xl p-7">
            <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/40 uppercase tracking-widest mb-4">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="font-['JetBrains_Mono'] text-xs text-[#182130] bg-[#F6F4EF] border border-border rounded-full px-3 py-1.5">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const cases = [
  { tag: "Integration", title: "ERP to eCommerce sync engine", desc: "A reliable synchronization layer for product, inventory, and order data between a legacy ERP and a storefront.", metric: "40k+ SKUs synced", bg: "#182130", fg: "#FFFFFF" },
  { tag: "CRM Module", title: "Custom quoting workflow", desc: "A role-based quoting module with audit history, PDF output, and email handoff for a team previously living in spreadsheets.", metric: "80% faster quotes", bg: "#FFFFFF", fg: "#182130" },
  { tag: "API Platform", title: "Multi-tenant SaaS backend", desc: "Tenant isolation, JWT auth, rate limiting, Stripe billing, OpenAPI docs, and deployment automation for a product MVP.", metric: "MVP to 3k users", bg: "#E07B3F", fg: "#FFFFFF" },
];

function Cases() {
  return (
    <section id="cases" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32 border-t border-border">
      <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <SectionLabel>Cases</SectionLabel>
          <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-4xl font-semibold mt-3 leading-tight">Examples of problems I am a good fit for</h2>
        </div>
        <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130]/45 max-w-xs">Names and exact details are anonymized where needed. Full context can be discussed privately.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {cases.map((item) => (
          <div key={item.title} className="rounded-2xl p-8 flex flex-col gap-6 min-h-72" style={{ background: item.bg }}>
            <span className="font-['JetBrains_Mono'] text-xs px-3 py-1.5 rounded-full self-start" style={{ color: item.fg, background: item.fg === "#FFFFFF" ? "rgba(255,255,255,0.12)" : "rgba(24,33,48,0.07)" }}>{item.tag}</span>
            <div className="flex-1">
              <h3 className="font-['Fraunces'] text-2xl font-semibold mb-3 leading-snug" style={{ color: item.fg }}>{item.title}</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm leading-relaxed" style={{ color: item.fg, opacity: 0.65 }}>{item.desc}</p>
            </div>
            <div className="border-t pt-5" style={{ borderColor: item.fg === "#FFFFFF" ? "rgba(255,255,255,0.12)" : "rgba(24,33,48,0.08)" }}>
              <p className="font-['JetBrains_Mono'] text-xs" style={{ color: item.fg, opacity: 0.45 }}>Outcome</p>
              <p className="font-['Fraunces'] text-xl font-semibold mt-0.5" style={{ color: item.fg }}>{item.metric}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const faq = [
  { q: "Can you join an existing team?", a: "Yes. I can work as an independent delivery partner, join your sprint rhythm, or take ownership of a contained backend project." },
  { q: "Do you only work with .NET?", a: ".NET/C# is the core specialty, but I regularly connect .NET backends to React frontends, third-party APIs, SQL databases, cloud services, and automation tools." },
  { q: "Can you help before we know the exact scope?", a: "Yes. An audit or discovery sprint is often the best first step when the system is unclear, risky, or already in production." },
];

function FAQ() {
  return (
    <section id="faq" className="bg-white border-y border-border py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-4xl font-semibold mt-3 leading-tight">A few useful answers before we talk</h2>
        </div>
        <div className="space-y-4">
          {faq.map((item) => (
            <div key={item.q} className="border border-border rounded-2xl p-6">
              <h3 className="font-['Fraunces'] text-xl font-semibold mb-2">{item.q}</h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130]/55 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", details: "", budget: "" });
  const [sent, setSent] = useState(false);

  const handle = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#F6F4EF] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_540px] gap-16 lg:gap-24 items-start">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-['Fraunces'] text-[#182130] text-3xl lg:text-5xl font-semibold mt-3 leading-tight mb-6">Tell me what you are trying to build</h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[#182130]/55 text-lg leading-relaxed mb-10">Share the problem, the system you already have, and what a good outcome looks like. I will reply with the next sensible step.</p>

            <div className="space-y-5">
              {[
                { icon: Clock3, label: "Response time", value: "Within 1 business day" },
                { icon: ShieldCheck, label: "Working style", value: "Direct senior delivery" },
                { icon: CheckCircle2, label: "Best fit", value: "APIs, CRM, integrations, automation" },
                { icon: Mail, label: "Email", value: contactEmail, href: mailtoUrl },
              ].map((item) => {
                const Icon = item.icon;
                const value = item.href ? <a href={item.href} className="text-[#E07B3F] hover:underline">{item.value}</a> : item.value;
                return (
                  <div key={item.label} className="flex items-center gap-4 border-b border-border pb-5">
                    <Icon size={18} className="text-[#E07B3F] shrink-0" />
                    <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130]/40 w-32 shrink-0">{item.label}</span>
                    <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130] font-medium">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 lg:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E07B3F]/10 flex items-center justify-center"><CheckCircle2 className="text-[#E07B3F]" /></div>
                <h3 className="font-['Fraunces'] text-[#182130] text-2xl font-semibold">Message sent</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[#182130]/55 text-sm">I will review your project details and reply within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handle} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-1.5 font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/50 uppercase tracking-wider">
                    Name
                    <input type="text" required placeholder="Alex Johnson" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="bg-[#F6F4EF] border border-border rounded-xl px-4 py-3 text-sm text-[#182130] placeholder:text-[#182130]/30 focus:outline-none focus:ring-2 focus:ring-[#E07B3F]/30 normal-case tracking-normal" />
                  </label>
                  <label className="flex flex-col gap-1.5 font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/50 uppercase tracking-wider">
                    Email
                    <input type="email" required placeholder="alex@company.com" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="bg-[#F6F4EF] border border-border rounded-xl px-4 py-3 text-sm text-[#182130] placeholder:text-[#182130]/30 focus:outline-none focus:ring-2 focus:ring-[#E07B3F]/30 normal-case tracking-normal" />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5 font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/50 uppercase tracking-wider">
                  Project details
                  <textarea required rows={5} placeholder="What are you building, what is broken, and what should happen next?" value={form.details} onChange={(event) => setForm({ ...form, details: event.target.value })} className="bg-[#F6F4EF] border border-border rounded-xl px-4 py-3 text-sm text-[#182130] placeholder:text-[#182130]/30 focus:outline-none focus:ring-2 focus:ring-[#E07B3F]/30 resize-none normal-case tracking-normal" />
                </label>

                <label className="flex flex-col gap-1.5 font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/50 uppercase tracking-wider">
                  Budget range
                  <select value={form.budget} onChange={(event) => setForm({ ...form, budget: event.target.value })} className="bg-[#F6F4EF] border border-border rounded-xl px-4 py-3 text-sm text-[#182130] focus:outline-none focus:ring-2 focus:ring-[#E07B3F]/30 normal-case tracking-normal">
                    <option value="" disabled>Select a range</option>
                    <option>Under EUR 5k</option>
                    <option>EUR 5k - EUR 15k</option>
                    <option>EUR 15k - EUR 50k</option>
                    <option>EUR 50k+</option>
                    <option>Ongoing retainer</option>
                  </select>
                </label>

                <button type="submit" className="bg-[#E07B3F] text-white font-['Plus_Jakarta_Sans'] font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#c96b32] transition-colors flex items-center justify-center gap-2 mt-2">
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

function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2" aria-label="Dmytro.dev home">
          <span className="w-6 h-6 rounded-md bg-[#182130] flex items-center justify-center"><span className="font-mono text-[9px] text-[#E07B3F] font-medium">.D</span></span>
          <span className="font-['Fraunces'] text-[#182130] text-base font-semibold">Dmytro<span className="text-[#E07B3F]">.</span>dev</span>
        </a>
        <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/35 text-center">© 2026 Dmytro.dev · Senior .NET / C# Developer</p>
        <div className="flex items-center gap-5">
          <a href={mailtoUrl} className="inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/45 hover:text-[#182130]"><Mail size={13} /> Email</a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/45 hover:text-[#182130]"><Github size={13} /> GitHub</a>
          <a href="#contact" className="font-['Plus_Jakarta_Sans'] text-xs text-[#182130]/45 hover:text-[#182130]">Book call</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#F6F4EF] min-h-screen">
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <Packages />
      <Process />
      <TechStack />
      <Cases />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
