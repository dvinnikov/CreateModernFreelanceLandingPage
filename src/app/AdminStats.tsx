import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, BarChart3, Eye, Mail, MousePointerClick, RefreshCw, Users } from "lucide-react";

type StatsResponse = {
  ok: boolean;
  rangeDays: number;
  totals: {
    events: number;
    pageViews: number;
    uniqueVisitors: number;
    ctaClicks: number;
    contacts: number;
  };
  topPages: Array<{ page: string; views: number }>;
  recentContacts: Array<{ id: string; name: string; email: string; budget: string; createdAt: string }>;
  recentEvents: Array<{ id: string; type: string; path: string; visitorId: string; createdAt: string }>;
};

const tokenKey = "dmytro.dev.adminToken";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function StatCard({ label, value, icon: Icon }: { label: string; value: number; icon: typeof Eye }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130]/45">{label}</span>
        <Icon size={18} className="text-[#E07B3F]" />
      </div>
      <p className="font-['Fraunces'] text-[#182130] text-4xl font-semibold">{value}</p>
    </div>
  );
}

export default function AdminStats() {
  const [token, setToken] = useState(() => window.localStorage.getItem(tokenKey) || "");
  const [days, setDays] = useState(30);
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasToken = token.trim().length > 0;

  const conversionRate = useMemo(() => {
    if (!stats || stats.totals.pageViews === 0) {
      return 0;
    }

    return Math.round((stats.totals.contacts / stats.totals.pageViews) * 1000) / 10;
  }, [stats]);

  async function loadStats(nextToken = token) {
    if (!nextToken.trim()) {
      setError("Enter the admin token to view statistics.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/stats?days=${days}`, {
        headers: { Authorization: `Bearer ${nextToken.trim()}` },
      });

      if (!response.ok) {
        throw new Error(response.status === 401 ? "Invalid admin token." : "Failed to load statistics.");
      }

      const payload = (await response.json()) as StatsResponse;
      setStats(payload);
      window.localStorage.setItem(tokenKey, nextToken.trim());
    } catch (err) {
      setStats(null);
      setError(err instanceof Error ? err.message : "Failed to load statistics.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (hasToken) {
      void loadStats(token);
    }
  }, [days]);

  return (
    <div className="bg-[#F6F4EF] min-h-screen text-[#182130]">
      <header className="border-b border-border bg-white/75 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm text-[#182130]/65 hover:text-[#182130]">
            <ArrowLeft size={16} /> Back to site
          </a>
          <div className="flex items-center gap-3">
            <select
              value={days}
              onChange={(event) => setDays(Number(event.target.value))}
              className="bg-white border border-border rounded-full px-4 py-2 text-sm font-['Plus_Jakarta_Sans']"
            >
              <option value={7}>7 days</option>
              <option value={30}>30 days</option>
              <option value={90}>90 days</option>
            </select>
            <button
              type="button"
              onClick={() => void loadStats()}
              className="bg-[#182130] text-white rounded-full px-4 py-2 text-sm font-['Plus_Jakarta_Sans'] inline-flex items-center gap-2 disabled:opacity-50"
              disabled={loading}
            >
              <RefreshCw size={15} /> Refresh
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
        <div className="mb-10">
          <span className="font-['JetBrains_Mono'] text-xs text-[#E07B3F] uppercase tracking-widest">Private dashboard</span>
          <h1 className="font-['Fraunces'] text-4xl lg:text-5xl font-semibold mt-3 mb-3">Site statistics</h1>
          <p className="font-['Plus_Jakarta_Sans'] text-[#182130]/55 max-w-2xl">
            Track visits, CTA interest, and incoming project requests from the freelance landing page.
          </p>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            void loadStats();
          }}
          className="bg-white border border-border rounded-2xl p-5 mb-8 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="password"
            placeholder="ADMIN_TOKEN"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            className="flex-1 border border-border rounded-xl px-4 py-3 text-sm font-['Plus_Jakarta_Sans'] focus:outline-none focus:ring-2 focus:ring-[#E07B3F]/30"
          />
          <button className="bg-[#E07B3F] text-white rounded-xl px-6 py-3 text-sm font-['Plus_Jakarta_Sans'] font-medium">
            Load stats
          </button>
        </form>

        {error && <div className="bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 mb-8 text-sm">{error}</div>}

        {stats && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <StatCard label="Page views" value={stats.totals.pageViews} icon={Eye} />
              <StatCard label="Visitors" value={stats.totals.uniqueVisitors} icon={Users} />
              <StatCard label="CTA clicks" value={stats.totals.ctaClicks} icon={MousePointerClick} />
              <StatCard label="Contacts" value={stats.totals.contacts} icon={Mail} />
              <StatCard label="Conversion %" value={conversionRate} icon={BarChart3} />
            </div>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
              <section className="bg-white border border-border rounded-2xl p-6">
                <h2 className="font-['Fraunces'] text-2xl font-semibold mb-5">Top pages</h2>
                <div className="space-y-3">
                  {stats.topPages.length === 0 ? (
                    <p className="text-sm text-[#182130]/45">No page views yet.</p>
                  ) : (
                    stats.topPages.map((page) => (
                      <div key={page.page} className="flex items-center justify-between border-b border-border pb-3">
                        <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#182130]/70">{page.page}</span>
                        <span className="font-['JetBrains_Mono'] text-xs text-[#E07B3F]">{page.views}</span>
                      </div>
                    ))
                  )}
                </div>
              </section>

              <section className="bg-white border border-border rounded-2xl p-6">
                <h2 className="font-['Fraunces'] text-2xl font-semibold mb-5">Recent contacts</h2>
                <div className="space-y-4">
                  {stats.recentContacts.length === 0 ? (
                    <p className="text-sm text-[#182130]/45">No contact requests yet.</p>
                  ) : (
                    stats.recentContacts.map((contact) => (
                      <div key={contact.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between gap-4 mb-1">
                          <p className="font-['Plus_Jakarta_Sans'] text-sm font-medium">{contact.name}</p>
                          <span className="font-['JetBrains_Mono'] text-[11px] text-[#182130]/35">{formatDate(contact.createdAt)}</span>
                        </div>
                        <a href={`mailto:${contact.email}`} className="text-sm text-[#E07B3F] hover:underline">{contact.email}</a>
                        {contact.budget && <p className="text-xs text-[#182130]/45 mt-1">Budget: {contact.budget}</p>}
                      </div>
                    ))
                  )}
                </div>
              </section>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
