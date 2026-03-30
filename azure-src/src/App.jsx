import { useState, useEffect, useCallback } from "react";
import { WEEKS, CERT_COLORS, PHASES, CERTS, GAP_INFUSIONS, RESOURCES, TUTOR_PROMPTS } from "./data/weeks";
import ProgressBar from "./components/ProgressBar";
import WeekCard from "./components/WeekCard";
import WeekDetail from "./components/WeekDetail";

const STORAGE_KEY = "azure-mastery-v3";
const THEME_KEY = "azure-theme";

export default function App() {
  const [progress, setProgress] = useState({});
  const [activeWeek, setActiveWeek] = useState(null);
  const [view, setView] = useState("dashboard");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark");
  const [copiedId, setCopiedId] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setProgress(JSON.parse(saved));
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme) setTheme(savedTheme);
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }, [theme]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "Escape" && activeWeek !== null) setActiveWeek(null);
      if (e.key === "j" && activeWeek !== null && activeWeek < WEEKS.length - 1) setActiveWeek(activeWeek + 1);
      if (e.key === "k" && activeWeek !== null && activeWeek > 0) setActiveWeek(activeWeek - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeWeek]);

  const save = useCallback((p) => {
    setProgress(p);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
  }, []);

  const toggle = useCallback((id) => save({ ...progress, [id]: !progress[id] }), [progress, save]);
  
  const copy = useCallback((text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const exportProgress = () => {
    const data = { progress, exportedAt: new Date().toISOString(), app: "azure-mastery-v3" };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `azure-progress-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Calculations
  const tLabs = WEEKS.reduce((s, w) => s + w.labs.length, 0);
  const cLabs = WEEKS.reduce((s, w) => s + w.labs.filter(l => progress[l.id]).length, 0);
  const tProj = WEEKS.filter(w => w.project).length;
  const cProj = WEEKS.filter(w => w.project && progress[w.project?.id]).length;
  const pct = tLabs + tProj > 0 ? Math.round(((cLabs + cProj) / (tLabs + tProj)) * 100) : 0;

  const totalMins = WEEKS.reduce((sum, w) => {
    const labMins = w.labs.reduce((s, l) => s + (parseInt(l.duration?.match(/(\d+)/)?.[1]) || 30), 0);
    return sum + labMins + (w.project ? 60 : 0);
  }, 0);
  const totalHours = Math.round(totalMins / 60);

  // Filter & Search
  let filteredWeeks = filter === "all" ? WEEKS
    : filter === "infused" ? WEEKS.filter(w => w.infused?.length > 0)
    : WEEKS.filter(w => w.cert?.includes(filter));

  if (search.trim()) {
    const q = search.toLowerCase();
    filteredWeeks = filteredWeeks.filter(w =>
      w.title.toLowerCase().includes(q) ||
      w.labs.some(l => (l.name || l.title || "").toLowerCase().includes(q)) ||
      w.topics?.some(t => t.toLowerCase().includes(q)) ||
      w.services?.some(s => s.toLowerCase().includes(q))
    );
  }

  if (!loaded) {
    return (
      <div className="loading">
        <div style={{ fontSize: 40, marginBottom: 16 }}>☁️</div>
        Initializing...
      </div>
    );
  }

  const sel = activeWeek !== null ? WEEKS[activeWeek] : null;

  return (
    <div className="app">
      <style>{`
        :root, [data-theme="dark"] {
          --bg: #0a0e1a; --card-bg: #111827; --card-bg-alt: #0f172a;
          --border: #1e293b; --border-hover: #334155;
          --text: #e2e8f0; --text-muted: #64748b; --text-secondary: #94a3b8;
          --primary: #0078D4; --primary-light: #0078D420;
        }
        [data-theme="light"] {
          --bg: #f8fafc; --card-bg: #ffffff; --card-bg-alt: #f1f5f9;
          --border: #e2e8f0; --border-hover: #cbd5e1;
          --text: #1e293b; --text-muted: #64748b; --text-secondary: #475569;
          --primary: #0078D4; --primary-light: #0078D420;
        }
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:var(--bg);color:var(--text);font-family:'DM Sans',system-ui,sans-serif}
        .app{min-height:100vh;padding:16px;max-width:900px;margin:0 auto}
        .loading{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--primary)}
        .cd{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;transition:all .2s}
        .cd:hover{border-color:var(--border-hover)}
        .bt{border:none;cursor:pointer;border-radius:8px;font-family:inherit;font-weight:600;transition:all .15s}
        .bt:active{transform:scale(.97)}
        .chip{padding:3px 10px;border-radius:16px;font-size:10px;font-weight:600;border:1px solid;cursor:pointer}
        @keyframes slideIn{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:translateX(0)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @media print{.no-print{display:none!important}.app{max-width:100%}}
        input,textarea{font-family:inherit}
        a{color:var(--primary)}
      `}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0078D4 0%, #5C2D91 50%, #D83B01 100%)", borderRadius: 16, padding: "20px 20px 16px", marginBottom: 16, color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: "100%", background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, position: "relative" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", opacity: 0.85, marginBottom: 4, fontWeight: 600 }}>17-WEEK INTEGRATED CURRICULUM</div>
            <h1 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 700 }}>Azure Cloud Mastery</h1>
            <p style={{ margin: 0, fontSize: 11, opacity: 0.9, maxWidth: 400 }}>
              {totalHours}h total · {tLabs} labs · {tProj} projects · 6 certs
            </p>
          </div>
          <div className="no-print" style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bt" style={{ background: "rgba(255,255,255,0.15)", padding: "6px 10px", color: "#fff", fontSize: 12 }}>
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button onClick={exportProgress} className="bt" style={{ background: "rgba(255,255,255,0.15)", padding: "6px 10px", color: "#fff", fontSize: 11 }}>
              Export
            </button>
            <button onClick={() => { if (confirm("Reset all progress?")) { setProgress({}); try { localStorage.removeItem(STORAGE_KEY); } catch {} }}} className="bt" style={{ background: "rgba(255,255,255,0.15)", padding: "6px 10px", color: "#fff", fontSize: 11 }}>
              Reset
            </button>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4, marginTop: 10, flexWrap: "wrap" }}>
          {CERTS.map(c => (
            <span key={c.code} style={{ background: "rgba(255,255,255,0.2)", padding: "2px 8px", borderRadius: 12, fontSize: 9, fontWeight: 600 }}>{c.code}</span>
          ))}
        </div>
      </div>

      {/* Stats + Progress (Dashboard only) */}
      {view === "dashboard" && !sel && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 12 }}>
            {[
              { l: "Progress", v: `${pct}%`, c: pct === 100 ? "#10b981" : "#0078D4" },
              { l: "Labs", v: `${cLabs}/${tLabs}`, c: "#5C2D91" },
              { l: "Projects", v: `${cProj}/${tProj}`, c: "#F25022" },
              { l: "Hours", v: `~${totalHours}`, c: "#00A4EF" }
            ].map(s => (
              <div key={s.l} className="cd" style={{ padding: "10px 6px", textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: s.c }}>{s.v}</div>
                <div style={{ fontSize: 9, fontWeight: 600, color: "var(--text-muted)" }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div className="cd" style={{ padding: "10px 14px", marginBottom: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 600, marginBottom: 4 }}>Overall Progress</div>
            <ProgressBar current={cLabs + cProj} total={tLabs + tProj} />
          </div>

          {/* Search */}
          <div className="no-print" style={{ marginBottom: 12 }}>
            <input
              type="text"
              placeholder="🔍 Search weeks, labs, topics..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", padding: "10px 14px", fontSize: 12,
                background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 8,
                color: "var(--text)", outline: "none"
              }}
            />
          </div>

          {/* Filter chips */}
          <div className="no-print" style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 12 }}>
            {[{ key: "all", label: "All" }, { key: "infused", label: "✦ Infused" }, ...CERTS.map(c => ({ key: c.code, label: c.code }))].map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className="chip"
                style={{
                  background: filter === f.key ? (CERT_COLORS[f.key] || "#0078D4") + "15" : "transparent",
                  borderColor: filter === f.key ? (CERT_COLORS[f.key] || "#0078D4") + "50" : "var(--border)",
                  color: filter === f.key ? (CERT_COLORS[f.key] || "#0078D4") : "var(--text-muted)"
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Tabs */}
      <div className="no-print" style={{ display: "flex", gap: 3, marginBottom: 12, background: "var(--card-bg)", borderRadius: 8, padding: 3, overflowX: "auto" }}>
        {[["dashboard", "📅 Dashboard"], ["projects", "🚀 Projects"], ["resources", "📚 Resources"], ["gaps", "🔥 Gaps"], ["certs", "🏅 Certs"]].map(([v, l]) => (
          <button
            key={v}
            onClick={() => { setView(v); setActiveWeek(null); setFilter("all"); setSearch(""); }}
            className="bt"
            style={{
              flex: 1, padding: "8px 10px", fontSize: 11, minWidth: 70,
              background: view === v ? "#0078D4" : "transparent",
              color: view === v ? "#fff" : "var(--text-muted)"
            }}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Dashboard - Phase Groups with Grid Cards */}
      {view === "dashboard" && !sel && (
        <div style={{ animation: "fadeUp .3s ease" }}>
          {filteredWeeks.length === 0 ? (
            <div style={{ textAlign: "center", padding: 40, color: "var(--text-muted)" }}>No weeks match your search.</div>
          ) : (
            PHASES.map(p => {
              const phaseWeeks = filteredWeeks.filter(w => w.phase === p.name);
              if (phaseWeeks.length === 0) return null;
              return (
                <div key={p.name} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 15 }}>{p.icon}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: 1, textTransform: "uppercase", fontFamily: "monospace" }}>
                      Wk {p.weeks}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{p.title}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 10 }}>
                    {phaseWeeks.map(w => (
                      <WeekCard
                        key={w.week}
                        week={w}
                        progress={progress}
                        onSelect={setActiveWeek}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Week Detail */}
      {view === "dashboard" && sel && (
        <WeekDetail
          week={sel}
          progress={progress}
          onToggle={toggle}
          onBack={() => setActiveWeek(null)}
          onNavigate={setActiveWeek}
          totalWeeks={WEEKS.length}
          copiedId={copiedId}
          onCopy={copy}
        />
      )}

      {/* Projects View */}
      {view === "projects" && (
        <div style={{ animation: "fadeUp .3s ease" }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>All Projects</h2>
          <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 14 }}>{tProj} hands-on projects</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {WEEKS.filter(w => w.project).map(w => (
              <div
                key={w.week}
                className="cd"
                style={{ padding: 14, borderLeft: `3px solid ${w.color}`, cursor: "pointer" }}
                onClick={() => { setView("dashboard"); setActiveWeek(w.week - 1); }}
              >
                <div style={{ display: "flex", gap: 5, marginBottom: 4 }}>
                  <span style={{ fontSize: 9, padding: "1px 6px", borderRadius: 8, background: w.color + "15", color: w.color, fontWeight: 700 }}>WEEK {w.week}</span>
                  <span style={{ fontSize: 9, padding: "1px 6px", borderRadius: 8, background: "var(--card-bg-alt)", color: "var(--text-secondary)", fontWeight: 600 }}>{w.cert}</span>
                  {progress[w.project?.id] && (
                    <span style={{ fontSize: 9, padding: "1px 6px", borderRadius: 8, background: "#10b98120", color: "#10b981", fontWeight: 600 }}>✓ DONE</span>
                  )}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{w.project.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }}>{w.project.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resources View */}
      {view === "resources" && (
        <div style={{ animation: "fadeUp .3s ease" }}>
          <div className="cd" style={{ padding: 14, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>🎯 Core Resources</div>
            {RESOURCES.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, marginBottom: 4 }}>
                <span>{r.icon}</span>
                <a href={r.url} target="_blank" rel="noopener noreferrer">{r.text}</a>
              </div>
            ))}
          </div>
          <div style={{ background: "#0078D408", border: "1px solid #0078D420", borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>💡 Claude Tutor Prompts</div>
            {TUTOR_PROMPTS.map((t, i) => (
              <div key={i} style={{ fontSize: 11, marginBottom: 4, color: "var(--text-secondary)" }}>
                <span style={{ color: "#0078D4", marginRight: 6 }}>→</span>{t}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gaps View */}
      {view === "gaps" && (
        <div style={{ animation: "fadeUp .3s ease" }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Gap Infusion Map</h2>
          <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 14 }}>Every gap infused into the exact week it belongs.</p>
          {[
            { label: "CRITICAL", color: "#ef4444", items: GAP_INFUSIONS.filter(g => g.severity === "critical") },
            { label: "IMPORTANT", color: "#f59e0b", items: GAP_INFUSIONS.filter(g => g.severity === "important") },
            { label: "EDGE", color: "#00BCD4", items: GAP_INFUSIONS.filter(g => g.severity === "edge") }
          ].map((g, i) => (
            <div key={i} className="cd" style={{ padding: 14, marginBottom: 10, borderLeft: `3px solid ${g.color}` }}>
              <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 8, background: g.color + "20", color: g.color, fontWeight: 700 }}>{g.label}</span>
              {g.items.map((item, j) => (
                <div key={j} style={{ display: "flex", gap: 8, padding: "6px 0", borderBottom: j < g.items.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: g.color, marginTop: 6, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 12 }}>{item.gap}</span>
                    <span style={{ fontSize: 11, color: "#10b981", marginLeft: 8 }}>→ {item.where}</span>
                    <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 1 }}>{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Certs View */}
      {view === "certs" && (
        <div style={{ animation: "fadeUp .3s ease" }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>6 Certifications Track</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {CERTS.map((c, i) => (
              <div key={i} className="cd" style={{ padding: 14, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 26 }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.code} · Weeks {c.weeks}</div>
                </div>
                <div style={{ padding: "4px 10px", borderRadius: 16, background: (CERT_COLORS[c.code] || "#0078D4") + "15", color: CERT_COLORS[c.code] || "#0078D4", fontSize: 10, fontWeight: 600 }}>
                  {c.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 24, fontSize: 9, color: "var(--text-muted)" }}>
        Azure Cloud Mastery · 17 Weeks · {tLabs} Labs · {tProj} Projects · 6 Certs
        <br /><span style={{ fontSize: 8 }}>Keyboard: j/k navigate weeks, Esc close</span>
      </div>
    </div>
  );
}
