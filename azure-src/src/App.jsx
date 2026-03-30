import { useState, useEffect, useCallback } from "react";
import { WEEKS, PHASES, CERTS, CERT_COLORS, GAP_INFUSIONS, RESOURCES, TUTOR_PROMPTS } from "./data/weeks";
import ProgressBar from "./components/ProgressBar";
import WeekCard from "./components/WeekCard";
import WeekDetail from "./components/WeekDetail";

const STORAGE_KEY = "azure-mastery-v3";
const THEME_KEY = "azure-theme";

function App() {
  const [progress, setProgress] = useState({});
  const [activeWeek, setActiveWeek] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("dashboard");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark");

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

  // Calculate totals
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
    : WEEKS.filter(w => w.cert === filter);

  if (search.trim()) {
    const q = search.toLowerCase();
    filteredWeeks = filteredWeeks.filter(w =>
      w.title.toLowerCase().includes(q) ||
      w.labs.some(l => (l.title || "").toLowerCase().includes(q)) ||
      w.topics?.some(t => t.toLowerCase().includes(q)) ||
      w.services?.some(s => s.toLowerCase().includes(q))
    );
  }

  if (!loaded) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg, #0a0e1a)", color: "#0078D4", fontFamily: "monospace" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>☁️</div>
          Initializing...
        </div>
      </div>
    );
  }

  const sel = activeWeek !== null ? WEEKS[activeWeek] : null;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=DM+Sans:wght@400;500;600;700&display=swap');
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
        ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:var(--card-bg)}::-webkit-scrollbar-thumb{background:var(--border-hover);border-radius:3px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideIn{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        .cd{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;transition:all .2s}.cd:hover{border-color:var(--border-hover)}
        .bt{border:none;cursor:pointer;border-radius:8px;font-family:inherit;font-weight:600;transition:all .15s}.bt:active{transform:scale(.97)}
        .chip{padding:3px 10px;border-radius:16px;font-size:10px;font-weight:600;border:1px solid;cursor:pointer}
        .tg{display:inline-block;padding:3px 8px;border-radius:8px;font-size:10px;font-weight:600}
        .gb{font-size:9px;padding:2px 6px;border-radius:8px;font-weight:700;background:#f59e0b20;color:#f59e0b}
        input,textarea{font-family:inherit}
        a{color:var(--primary)}
        @media print{.no-print{display:none!important}}
      `}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#0f1424,#1a1f3a)", borderBottom: "1px solid var(--border)", padding: "14px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, background: "linear-gradient(135deg,#0078D4,#5C2D91)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#fff" }}>☁️</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Azure Cloud Mastery</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{totalHours}h · 17 Weeks · 12 Phases · 6 Certs</div>
            </div>
          </div>
          <div className="no-print" style={{ display: "flex", gap: 5, flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bt" style={{ padding: "6px 10px", background: "var(--card-bg)", color: "var(--text)", fontSize: 12, border: "1px solid var(--border)" }}>
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            {[["dashboard", "📅 Dashboard"], ["projects", "🚀 Projects"], ["resources", "📚 Resources"], ["gaps", "🔥 Gaps"], ["certs", "🏅 Certs"]].map(([v, l]) => (
              <button 
                key={v} 
                className="bt" 
                onClick={() => { setView(v); setActiveWeek(null); setFilter("all"); setSearch(""); }}
                style={{ padding: "6px 12px", background: view === v ? "#0078D4" : "var(--card-bg)", color: view === v ? "#fff" : "var(--text-secondary)", fontSize: 12, border: view === v ? "none" : "1px solid var(--border)" }}
              >
                {l}
              </button>
            ))}
            <button onClick={exportProgress} className="bt" style={{ padding: "6px 12px", background: "var(--card-bg)", color: "var(--text-secondary)", fontSize: 12, border: "1px solid var(--border)" }}>
              Export
            </button>
            <button 
              className="bt" 
              onClick={() => { if (confirm("Reset all progress?")) { setProgress({}); try { localStorage.removeItem(STORAGE_KEY); } catch {} }}}
              style={{ padding: "6px 12px", background: "var(--card-bg)", color: "#ef4444", fontSize: 12, border: "1px solid var(--border)" }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 20px 60px" }}>
        
        {/* Stats & Progress (Dashboard only) */}
        {view === "dashboard" && !sel && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 16 }}>
              {[
                { l: "Progress", v: `${pct}%`, c: pct === 100 ? "#10b981" : "#0078D4", bar: true },
                { l: "Labs", v: `${cLabs}/${tLabs}`, c: "#5C2D91" },
                { l: "Projects", v: `${cProj}/${tProj}`, c: "#F25022" },
                { l: "Hours", v: `~${totalHours}`, c: "#00A4EF" }
              ].map((s, i) => (
                <div key={i} className="cd" style={{ padding: 14, textAlign: "center" }}>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: .8, marginBottom: 4 }}>{s.l}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: s.c, fontFamily: "'JetBrains Mono', monospace" }}>{s.v}</div>
                  {s.bar && (
                    <div style={{ marginTop: 6 }}>
                      <ProgressBar current={cLabs + cProj} total={tLabs + tProj} color="#0078D4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search */}
            <div className="no-print" style={{ marginBottom: 12 }}>
              <input
                type="text"
                placeholder="🔍 Search weeks, labs, topics, services..."
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
            <div className="no-print" style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 16 }}>
              {[
                { key: "all", label: "All" },
                { key: "infused", label: "✦ Infused" },
                ...CERTS.map(c => ({ key: c.code, label: c.code }))
              ].map(f => (
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

        {/* Dashboard - Phase groups */}
        {view === "dashboard" && !sel && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            {filteredWeeks.length === 0 ? (
              <div style={{ textAlign: "center", padding: 40, color: "var(--text-muted)" }}>No weeks match your search.</div>
            ) : (
              PHASES.map(p => {
                const phaseWeeks = filteredWeeks.filter(w => w.phase === p.num);
                if (phaseWeeks.length === 0) return null;
                return (
                  <div key={p.num} style={{ marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <span style={{ fontSize: 15 }}>{p.icon}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                        Phase {p.num} · Wk {p.weeks}
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
            onNavigate={(idx) => setActiveWeek(idx)}
            totalWeeks={WEEKS.length}
            copiedId={copiedId}
            onCopy={copy}
          />
        )}

        {/* Projects View */}
        {view === "projects" && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>All Projects</h2>
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
              {tProj} hands-on projects across 17 weeks
            </p>
            <div style={{ display: "grid", gap: 12 }}>
              {WEEKS.filter(w => w.project).map(w => {
                const phase = PHASES.find(p => p.num === w.phase);
                return (
                  <div 
                    key={w.week} 
                    className="cd" 
                    style={{ padding: 16, borderLeft: `3px solid ${phase?.color || w.color}`, cursor: "pointer" }}
                    onClick={() => { setView("dashboard"); setActiveWeek(w.week - 1); }}
                  >
                    <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                      <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 8, background: (phase?.color || w.color) + "15", color: phase?.color || w.color, fontWeight: 700 }}>
                        WEEK {w.week}
                      </span>
                      {w.cert && (
                        <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 8, background: "var(--card-bg-alt)", color: "var(--text-secondary)", fontWeight: 600 }}>
                          {w.cert}
                        </span>
                      )}
                      {progress[w.project?.id] && (
                        <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 8, background: "#22c55e20", color: "#22c55e", fontWeight: 600 }}>
                          ✓ DONE
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
                      {w.project.title || w.project.name}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: 8 }}>
                      {w.project.description}
                    </div>
                    {w.project.dummyData && (
                      <div style={{ fontSize: 11, padding: "6px 10px", borderRadius: 6, background: "var(--card-bg-alt)", border: "1px solid var(--border)", lineHeight: 1.5 }}>
                        <strong style={{ color: "#059669" }}>Scenario:</strong> {w.project.dummyData.substring(0, 150)}...
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Resources View */}
        {view === "resources" && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>Resources & Tools</h2>
            
            <div className="cd" style={{ padding: 16, marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>🎯 Core Resources for All 17 Weeks</div>
              <div style={{ display: "grid", gap: 8 }}>
                {RESOURCES.map((r, i) => (
                  <a 
                    key={i} 
                    href={r.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--text)", textDecoration: "none" }}
                  >
                    <span style={{ fontSize: 16 }}>{r.icon}</span>
                    <span style={{ color: "#0078D4", fontWeight: 500 }}>{r.text}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div style={{ background: "#0078D408", border: "1px solid #0078D420", borderRadius: 12, padding: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>💡 How to Use Claude as Your Azure Tutor</div>
              <div style={{ display: "grid", gap: 6 }}>
                {TUTOR_PROMPTS.map((t, i) => (
                  <div key={i} style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                    <span style={{ color: "#0078D4", marginRight: 6 }}>→</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gaps View */}
        {view === "gaps" && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>Gap Infusion Map</h2>
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
              Every gap infused into the exact week it belongs pedagogically.
            </p>
            {[
              { label: "CRITICAL — Would hurt you in interviews", color: "#ef4444", items: GAP_INFUSIONS.filter(g => g.severity === "critical") },
              { label: "IMPORTANT — Separates good from guru", color: "#f59e0b", items: GAP_INFUSIONS.filter(g => g.severity === "important") },
              { label: "COMPETITIVE EDGE — Makes you stand out", color: "#00BCD4", items: GAP_INFUSIONS.filter(g => g.severity === "edge") }
            ].map((group, gi) => (
              <div key={gi} className="cd" style={{ padding: 16, marginBottom: 12, borderLeft: `3px solid ${group.color}` }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: group.color, padding: "2px 8px", background: group.color + "15", borderRadius: 8, display: "inline-block", marginBottom: 10 }}>{group.label}</span>
                {group.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: i < group.items.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: group.color, marginTop: 7, flexShrink: 0 }} />
                    <div>
                      <span style={{ fontWeight: 700, fontSize: 13, color: "var(--text)" }}>{item.gap}</span>
                      <span style={{ fontSize: 12, color: "#22c55e", marginLeft: 8 }}>→ {item.where}</span>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 1 }}>{item.why}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Certs View */}
        {view === "certs" && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>6 Certifications Track</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {CERTS.map((c, i) => (
                <div key={i} className="cd" style={{ padding: 16, display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ fontSize: 28 }}>{c.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text)" }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{c.code} · Weeks {c.weeks}</div>
                  </div>
                  <div style={{ 
                    padding: "4px 12px", borderRadius: 20, 
                    background: (CERT_COLORS[c.code] || "#0078D4") + "15",
                    color: CERT_COLORS[c.code] || "#0078D4",
                    fontSize: 11, fontWeight: 600
                  }}>
                    {c.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 40, fontSize: 10, color: "var(--text-muted)" }}>
          Azure Cloud Mastery — 17 Weeks • 12 Phases • 6 Certs • {tLabs} Labs • {tProj} Projects
          <br /><span style={{ fontSize: 9 }}>Keyboard: j/k navigate weeks, Esc close</span>
        </div>
      </div>
    </div>
  );
}

export default App;
