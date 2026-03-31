import { useState, useEffect, useCallback } from "react";
import { WEEKS, PHASES, CERTS, GAPS } from "./data/weeks";
import WeekCard from "./components/WeekCard";
import WeekDetail from "./components/WeekDetail";
import "./index.css";

const STORAGE_KEY = "netsec-progress";

function App() {
  const [progress, setProgress] = useState({});
  const [activeWeek, setActiveWeek] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("dashboard");

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

  // Stats
  const totalLabs = WEEKS.reduce((s, w) => s + w.labs.length, 0);
  const completedLabs = WEEKS.reduce((s, w) => s + w.labs.filter(l => progress[l.id]).length, 0);
  const totalProjects = WEEKS.filter(w => w.project).length;
  const completedProjects = WEEKS.filter(w => w.project && progress[w.project.id]).length;
  const pct = totalLabs + totalProjects > 0 ? Math.round(((completedLabs + completedProjects) / (totalLabs + totalProjects)) * 100) : 0;
  const weeksComplete = WEEKS.filter(w => {
    const allLabs = w.labs.every(l => progress[l.id]);
    const projDone = !w.project || progress[w.project?.id];
    return w.labs.length > 0 ? allLabs && projDone : projDone;
  }).length;

  if (!loaded) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0e17", color: "#E53935", fontFamily: "monospace" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🛡️</div>
          Initializing...
        </div>
      </div>
    );
  }

  const selectedWeek = activeWeek !== null ? WEEKS[activeWeek] : null;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0e17", color: "#e2e8f0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f1420, #1a1028)", borderBottom: "1px solid #1e293b", padding: "14px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, background: "linear-gradient(135deg, #E53935, #B71C1C)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🛡️</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Network Security Mastery</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>16 Weeks · Palo Alto NGFW · 5 Certs · All Gaps Infused</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {[["dashboard", "📅 Dashboard"], ["gaps", "🔥 Gap Map"], ["certs", "🏅 Certs"]].map(([v, l]) => (
              <button 
                key={v} 
                className="bt" 
                onClick={() => { setView(v); setActiveWeek(null); }}
                style={{ padding: "6px 12px", background: view === v ? "#E53935" : "#1e293b", color: view === v ? "#fff" : "#94a3b8", fontSize: 12 }}
              >
                {l}
              </button>
            ))}
            <button 
              className="bt" 
              onClick={() => { if (confirm("Reset all progress?")) { setProgress({}); try { localStorage.removeItem(STORAGE_KEY); } catch {} } }}
              style={{ padding: "6px 12px", background: "#1e293b", color: "#ef4444", fontSize: 12 }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 20px 60px" }}>
        {/* Gap Map View */}
        {view === "gaps" && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Gap Infusion Map — What Your Syllabus Was Missing</h2>
            <p style={{ fontSize: 12, color: "#64748b", marginBottom: 18 }}>Every gap identified and infused at the right pedagogical moment.</p>
            {[
              { label: "CRITICAL — Would hurt you in interviews", cls: "gc", color: "#ef4444", items: GAPS.filter(g => g.severity === "critical") },
              { label: "IMPORTANT — Separates junior from senior", cls: "gi", color: "#FF9900", items: GAPS.filter(g => g.severity === "important") },
              { label: "COMPETITIVE EDGE — Makes you stand out", cls: "ge", color: "#CE93D8", items: GAPS.filter(g => g.severity === "edge") }
            ].map((group, gi) => (
              <div key={gi} className="cd" style={{ padding: 16, marginBottom: 12, borderLeft: `3px solid ${group.color}` }}>
                <span className={`tg ${group.cls}`} style={{ marginBottom: 10, display: "inline-block" }}>{group.label}</span>
                {group.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, padding: "6px 0", borderBottom: i < group.items.length - 1 ? "1px solid #1e293b" : "none" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: group.color, marginTop: 7, flexShrink: 0 }} />
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
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Certification Track (2026 Updated)</h2>
            <div style={{ padding: 12, background: "#E5393520", border: "1px solid #E5393540", borderRadius: 10, fontSize: 12, color: "#EF9A9A", marginBottom: 16 }}>
              ⚠️ PCNSA & PCNSE are retired as of 2025. The new Palo Alto certifications are role-based: Network Security Professional and NGFW Engineer (Specialist).
            </div>
            {CERTS.map((c, i) => (
              <div key={i} className="cd" style={{ padding: 16, marginBottom: 10, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ fontSize: 22 }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{c.code} · Weeks {c.weeks}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dashboard View - Week List */}
        {view === "dashboard" && !selectedWeek && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))", gap: 12, marginBottom: 22 }}>
              {[
                { l: "Progress", v: `${pct}%`, bar: true },
                { l: "Labs", v: `${completedLabs}/${totalLabs}` },
                { l: "Projects", v: `${completedProjects}/${totalProjects}` },
                { l: "Weeks", v: `${weeksComplete}/16` }
              ].map((s, i) => (
                <div key={i} className="cd" style={{ padding: 14 }}>
                  <div style={{ fontSize: 10, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 4 }}>{s.l}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: i === 0 ? "#E53935" : "#fff", fontFamily: "'JetBrains Mono', monospace" }}>{s.v}</div>
                  {s.bar && (
                    <div style={{ marginTop: 6, height: 4, background: "#1e293b", borderRadius: 2 }}>
                      <div style={{ height: "100%", background: "linear-gradient(90deg, #E53935, #B71C1C)", borderRadius: 2, width: `${pct}%`, transition: "width .5s" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Phases with Weeks */}
            {PHASES.map(phase => {
              const phaseWeeks = WEEKS.filter(w => w.phase === phase.num);
              return (
                <div key={phase.num} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 15 }}>{phase.icon}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: phase.color, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                      Phase {phase.num} · Wk {phase.weeks}
                    </span>
                    <span style={{ fontSize: 12, color: "#64748b" }}>{phase.title}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(285px, 1fr))", gap: 10 }}>
                    {phaseWeeks.map(w => (
                      <WeekCard 
                        key={w.week} 
                        week={w} 
                        progress={progress} 
                        onSelect={(idx) => setActiveWeek(idx)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Week Detail View */}
        {view === "dashboard" && selectedWeek && (
          <WeekDetail
            week={selectedWeek}
            progress={progress}
            onToggle={toggle}
            onBack={() => setActiveWeek(null)}
            onNavigate={(idx) => setActiveWeek(idx)}
            totalWeeks={WEEKS.length}
            copiedId={copiedId}
            onCopy={copy}
          />
        )}
      </div>
    </div>
  );
}

export default App;
