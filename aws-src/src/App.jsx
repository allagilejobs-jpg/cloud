import { useState, useEffect, useCallback } from "react";
import { WEEKS, PHASES, CERTS, CERT_COLORS, GAP_INFUSIONS, RESOURCES, TUTOR_PROMPTS } from "./data/weeks";
import ProgressBar from "./components/ProgressBar";
import WeekCard from "./components/WeekCard";
import WeekDetail from "./components/WeekDetail";

const STORAGE_KEY = "aws-mastery-v3";

function App() {
  const [progress, setProgress] = useState({});
  const [activeWeek, setActiveWeek] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("dashboard");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setProgress(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

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

  // Calculate totals
  const tLabs = WEEKS.reduce((s, w) => s + w.labs.length, 0);
  const cLabs = WEEKS.reduce((s, w) => s + w.labs.filter(l => progress[l.id]).length, 0);
  const tProj = WEEKS.filter(w => w.project).length;
  const cProj = WEEKS.filter(w => w.project && progress[w.project.id]).length;
  const pct = tLabs + tProj > 0 ? Math.round(((cLabs + cProj) / (tLabs + tProj)) * 100) : 0;

  // Filter weeks
  const filteredWeeks = filter === "all" ? WEEKS
    : filter === "infused" ? WEEKS.filter(w => w.infused?.length > 0)
    : WEEKS.filter(w => w.cert === filter);

  if (!loaded) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0e1a", color: "#FF9900", fontFamily: "monospace" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>⚡</div>
          Initializing...
        </div>
      </div>
    );
  }

  const sel = activeWeek !== null ? WEEKS[activeWeek] : null;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0e1a", color: "#e2e8f0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=DM+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#0f1424}::-webkit-scrollbar-thumb{background:#2a3352;border-radius:3px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideIn{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        .cd{background:#111827;border:1px solid #1e293b;border-radius:12px;transition:all .2s}.cd:hover{border-color:#334155}
        .bt{border:none;cursor:pointer;border-radius:8px;font-family:inherit;font-weight:600;transition:all .15s}.bt:active{transform:scale(.97)}
        .tg{display:inline-block;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:.5px}
        .ck{width:22px;height:22px;border-radius:6px;border:2px solid #334155;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;flex-shrink:0}.ck.dn{background:#FF9900;border-color:#FF9900}.ck:hover{border-color:#FF9900}
        .tb{padding:10px 16px;border-radius:8px;border:none;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;transition:all .15s;background:transparent;color:#64748b;white-space:nowrap}.tb:hover{color:#e2e8f0;background:#1e293b}.tb.ac{background:#FF9900;color:#0a0e1a}
        .gb{font-size:9px;padding:2px 7px;border-radius:10px;font-weight:700;letter-spacing:.5px;display:inline-block;margin-left:4px}
        .gc{background:#ef444430;color:#ef4444}.gi{background:#FF990030;color:#FF9900}.ge{background:#00BCD430;color:#00BCD4}
      `}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#0f1424,#1a1f3a)", borderBottom: "1px solid #1e293b", padding: "14px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, background: "linear-gradient(135deg,#FF9900,#FF6600)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#0a0e1a" }}>⚡</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>AWS Cloud Mastery</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>18 Weeks · 6 Phases · 6 Certs · All Gaps Infused</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {[["dashboard", "📅 Dashboard"], ["projects", "🚀 Projects"], ["resources", "📚 Resources"], ["gaps", "🔥 Gaps"], ["certs", "🏅 Certs"]].map(([v, l]) => (
              <button 
                key={v} 
                className="bt" 
                onClick={() => { setView(v); setActiveWeek(null); setFilter("all"); }}
                style={{ padding: "6px 12px", background: view === v ? "#FF9900" : "#1e293b", color: view === v ? "#0a0e1a" : "#94a3b8", fontSize: 12 }}
              >
                {l}
              </button>
            ))}
            <button 
              className="bt" 
              onClick={() => { if (confirm("Reset all progress?")) { setProgress({}); try { localStorage.removeItem(STORAGE_KEY); } catch {} }}}
              style={{ padding: "6px 12px", background: "#1e293b", color: "#ef4444", fontSize: 12 }}
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
                { l: "Progress", v: `${pct}%`, c: "#FF9900", bar: true },
                { l: "Labs", v: `${cLabs}/${tLabs}`, c: "#1A73E8" },
                { l: "Projects", v: `${cProj}/${tProj}`, c: "#00C853" },
                { l: "Weeks", v: `${WEEKS.filter(w => {
                  const labsDone = w.labs.every(l => progress[l.id]);
                  const projDone = !w.project || progress[w.project?.id];
                  return w.labs.length > 0 ? labsDone && projDone : projDone;
                }).length}/18`, c: "#E040FB" }
              ].map((s, i) => (
                <div key={i} className="cd" style={{ padding: 14, textAlign: "center" }}>
                  <div style={{ fontSize: 10, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: .8, marginBottom: 4 }}>{s.l}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: s.c, fontFamily: "'JetBrains Mono', monospace" }}>{s.v}</div>
                  {s.bar && (
                    <div style={{ marginTop: 6 }}>
                      <ProgressBar current={cLabs + cProj} total={tLabs + tProj} color="#FF9900" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Filter chips */}
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 16 }}>
              {[
                { key: "all", label: "All" },
                { key: "infused", label: "✦ Infused" },
                ...CERTS.map(c => ({ key: c.code, label: c.code }))
              ].map(f => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  style={{
                    padding: "4px 12px", borderRadius: 16,
                    fontSize: 11, fontWeight: 600,
                    border: "1px solid",
                    background: filter === f.key ? (CERT_COLORS[f.key] || "#FF9900") + "15" : "transparent",
                    borderColor: filter === f.key ? (CERT_COLORS[f.key] || "#FF9900") + "50" : "#334155",
                    color: filter === f.key ? (CERT_COLORS[f.key] || "#FF9900") : "#64748b",
                    cursor: "pointer"
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
            {PHASES.map(p => {
              const phaseWeeks = filteredWeeks.filter(w => w.phase === p.num);
              if (phaseWeeks.length === 0) return null;
              return (
                <div key={p.num} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 15 }}>{p.icon}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                      Phase {p.num} · Wk {p.weeks}
                    </span>
                    <span style={{ fontSize: 12, color: "#64748b" }}>{p.title}</span>
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
            })}
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
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>All Projects</h2>
            <p style={{ fontSize: 12, color: "#64748b", marginBottom: 18 }}>
              {WEEKS.filter(w => w.project).length} hands-on projects across 18 weeks
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
                        <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 8, background: "#1e293b", color: "#94a3b8", fontWeight: 600 }}>
                          {w.cert}
                        </span>
                      )}
                      {progress[w.project.id] && (
                        <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 8, background: "#22c55e20", color: "#22c55e", fontWeight: 600 }}>
                          ✓ DONE
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                      {w.project.title || w.project.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5, marginBottom: 8 }}>
                      {w.project.description}
                    </div>
                    {w.project.dummyData && (
                      <div style={{ fontSize: 11, padding: "6px 10px", borderRadius: 6, background: "#0a0e1a", border: "1px solid #1e293b", lineHeight: 1.5 }}>
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
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Resources & Tools</h2>
            
            <div className="cd" style={{ padding: 16, marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>🎯 Core Resources for All 18 Weeks</div>
              <div style={{ display: "grid", gap: 8 }}>
                {RESOURCES.map((r, i) => (
                  <a 
                    key={i} 
                    href={r.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#e2e8f0", textDecoration: "none" }}
                  >
                    <span style={{ fontSize: 16 }}>{r.icon}</span>
                    <span style={{ color: "#FF9900", fontWeight: 500 }}>{r.text}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div style={{ background: "#FF990008", border: "1px solid #FF990020", borderRadius: 12, padding: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>💡 How to Use Claude as Your AWS Tutor</div>
              <div style={{ display: "grid", gap: 6 }}>
                {TUTOR_PROMPTS.map((t, i) => (
                  <div key={i} style={{ fontSize: 12, color: "#cbd5e1" }}>
                    <span style={{ color: "#FF9900", marginRight: 6 }}>→</span>
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
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Gap Infusion Map</h2>
            <p style={{ fontSize: 12, color: "#64748b", marginBottom: 18 }}>
              Every gap infused into the exact week it belongs pedagogically.
            </p>
            {[
              { label: "CRITICAL — Would hurt you in interviews", cls: "gc", items: GAP_INFUSIONS.filter(g => g.severity === "critical") },
              { label: "IMPORTANT — Separates good from guru", cls: "gi", items: GAP_INFUSIONS.filter(g => g.severity === "important") },
              { label: "COMPETITIVE EDGE — Makes you stand out", cls: "ge", items: GAP_INFUSIONS.filter(g => g.severity === "edge") }
            ].map((group, gi) => (
              <div key={gi} className="cd" style={{ padding: 16, marginBottom: 12, borderLeft: `3px solid ${gi === 0 ? "#ef4444" : gi === 1 ? "#FF9900" : "#00BCD4"}` }}>
                <span className={`tg ${group.cls}`} style={{ marginBottom: 10, display: "inline-block" }}>{group.label}</span>
                {group.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: i < group.items.length - 1 ? "1px solid #1e293b" : "none" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: gi === 0 ? "#ef4444" : gi === 1 ? "#FF9900" : "#00BCD4", marginTop: 7, flexShrink: 0 }} />
                    <div>
                      <span style={{ fontWeight: 700, color: "#fff", fontSize: 13 }}>{item.gap}</span>
                      <span style={{ fontSize: 12, color: "#22c55e", marginLeft: 8 }}>→ {item.where}</span>
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 1 }}>{item.why}</div>
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
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 16 }}>6 Certifications Track</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {CERTS.map((c, i) => (
                <div key={i} className="cd" style={{ padding: 16, display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ fontSize: 28 }}>{c.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>{c.code} · Weeks {c.weeks}</div>
                  </div>
                  <div style={{ 
                    padding: "4px 12px", borderRadius: 20, 
                    background: (CERT_COLORS[c.code] || "#FF9900") + "15",
                    color: CERT_COLORS[c.code] || "#FF9900",
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
        <div style={{ textAlign: "center", marginTop: 40, fontSize: 10, color: "#475569" }}>
          AWS Cloud Mastery — 18 Weeks • 6 Phases • 6 Certs • {tLabs} Labs • {tProj} Projects
        </div>
      </div>
    </div>
  );
}

export default App;
