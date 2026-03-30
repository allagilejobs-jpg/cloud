import { useState, useEffect, useCallback } from "react";
import { WEEKS, CERT_COLORS, PHASES, CERTS, GAP_INFUSIONS, RESOURCES, TUTOR_PROMPTS } from "./data/weeks";
import ProgressBar from "./components/ProgressBar";
import WeekCard from "./components/WeekCard";

const STORAGE_KEY = "azure-mastery-v3";

export default function App() {
  const [progress, setProgress] = useState({});
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [view, setView] = useState("plan");
  const [filter, setFilter] = useState("all");
  const [loaded, setLoaded] = useState(false);

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

  const toggleWeek = (w) => setExpandedWeek(expandedWeek === w ? null : w);
  const toggleSection = (s) => setExpandedSection(expandedSection === s ? null : s);

  // Calculate totals
  const tLabs = WEEKS.reduce((s, w) => s + w.labs.length, 0);
  const cLabs = WEEKS.reduce((s, w) => s + w.labs.filter(l => progress[l.id]).length, 0);
  const tProj = WEEKS.filter(w => w.project).length;
  const cProj = WEEKS.filter(w => w.project && progress[w.project?.id]).length;
  const pct = tLabs + tProj > 0 ? Math.round(((cLabs + cProj) / (tLabs + tProj)) * 100) : 0;

  const filteredWeeks =
    filter === "all" ? WEEKS
    : filter === "infused" ? WEEKS.filter((w) => w.infused?.length > 0)
    : WEEKS.filter((w) => w.cert && w.cert.includes(filter));

  if (!loaded) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-color, #0f172a)", color: "#0078D4" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>☁️</div>
          Initializing...
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ─── Header ─── */}
      <div
        style={{
          background: "linear-gradient(135deg, #0078D4 0%, #5C2D91 50%, #D83B01 100%)",
          borderRadius: "16px", padding: "28px 24px", marginBottom: "20px",
          color: "#fff", position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "100%", background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.85, marginBottom: "6px", fontWeight: 600 }}>
              17-WEEK INTEGRATED CURRICULUM — PROPERLY SEQUENCED
            </div>
            <h1 style={{ margin: "0 0 6px", fontSize: "24px", fontWeight: 700, lineHeight: 1.2 }}>
              Azure Mastery Learning Plan v3
            </h1>
            <p style={{ margin: "0 0 14px", fontSize: "12px", opacity: 0.9, maxWidth: "540px", lineHeight: 1.5 }}>
              Topics infused where they naturally belong — tagging from Day 1, policy with identity, SQL with storage, Functions with compute, cost management throughout.
            </p>
          </div>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "6px 12px", fontSize: "10px", fontWeight: 700, border: "1px solid rgba(255,255,255,0.2)", lineHeight: 1.6 }}>
              ✦ {tLabs} LABS<br />✦ {tProj} PROJECTS
            </div>
            <button
              onClick={() => { if (confirm("Reset all progress?")) { setProgress({}); try { localStorage.removeItem(STORAGE_KEY); } catch {} }}}
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "8px", padding: "8px 12px", color: "#fff", fontSize: "10px", fontWeight: 600, cursor: "pointer" }}
            >
              Reset
            </button>
          </div>
        </div>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {CERTS.map((c) => (
            <span key={c.code} style={{ background: "rgba(255,255,255,0.2)", padding: "2px 10px", borderRadius: "20px", fontSize: "10px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)" }}>
              {c.code}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Stats ─── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "16px" }}>
        {[
          { l: "Progress", v: `${pct}%`, c: pct === 100 ? "#10b981" : "#0078D4" },
          { l: "Labs", v: `${cLabs}/${tLabs}`, c: "#5C2D91" },
          { l: "Projects", v: `${cProj}/${tProj}`, c: "#F25022" },
          { l: "Certs", v: "6", c: "#00A4EF" },
        ].map((s) => (
          <div key={s.l} style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "10px 6px", textAlign: "center" }}>
            <div style={{ fontSize: "22px", fontWeight: 700, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: "10px", fontWeight: 600 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ─── Progress Bar ─── */}
      <div style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", fontWeight: 600, marginBottom: "6px" }}>Your Progress</div>
        <ProgressBar current={cLabs + cProj} total={tLabs + tProj} />
      </div>

      {/* ─── Tabs ─── */}
      <div style={{ display: "flex", gap: "3px", marginBottom: "10px", background: "var(--tag-bg)", borderRadius: "8px", padding: "3px", flexWrap: "wrap" }}>
        {[
          { key: "plan", label: "📅 Plan" },
          { key: "projects", label: "🚀 Projects" },
          { key: "resources", label: "📚 Resources" },
          { key: "gaps", label: "🔥 Gaps" },
          { key: "certs", label: "🏅 Certs" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => { setView(t.key); setFilter("all"); setExpandedWeek(null); }}
            style={{
              flex: 1, padding: "8px 4px", borderRadius: "6px",
              fontSize: "11px", fontWeight: 600, minWidth: "60px",
              background: view === t.key ? "var(--card-bg)" : "transparent",
              color: view === t.key ? "#0078D4" : "var(--text-muted)",
              boxShadow: view === t.key ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              border: "none", cursor: "pointer"
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ─── Filter Chips ─── */}
      {view === "plan" && (
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginBottom: "12px" }}>
          {[
            { key: "all", label: "All" },
            { key: "infused", label: "✦ Infused" },
            ...CERTS.map((c) => ({ key: c.code, label: c.code })),
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                padding: "3px 10px", borderRadius: "16px",
                fontSize: "10px", fontWeight: 600,
                border: "1px solid",
                background: filter === f.key ? (CERT_COLORS[f.key] || "#0078D4") + "12" : "transparent",
                borderColor: filter === f.key ? (CERT_COLORS[f.key] || "#0078D4") + "40" : "var(--border-subtle)",
                color: filter === f.key ? CERT_COLORS[f.key] || "#0078D4" : "var(--text-muted)",
                cursor: "pointer"
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {/* ─── Plan View ─── */}
      {view === "plan" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {filteredWeeks.map((w) => (
            <WeekCard
              key={w.week}
              week={w}
              isOpen={expandedWeek === w.week}
              progress={progress}
              expandedSection={expandedSection}
              onToggleWeek={toggleWeek}
              onToggle={toggle}
              onToggleSection={toggleSection}
            />
          ))}
        </div>
      )}

      {/* ─── Projects View ─── */}
      {view === "projects" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {WEEKS.filter((w) => w.project).map((w) => (
            <div 
              key={w.week} 
              style={{ border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "14px", borderLeft: `3px solid ${w.color}`, cursor: "pointer" }}
              onClick={() => { setView("plan"); setExpandedWeek(w.week); }}
            >
              <div style={{ display: "flex", gap: "5px", marginBottom: "3px", alignItems: "center" }}>
                <span style={{ fontSize: "9px", padding: "1px 6px", borderRadius: "8px", background: w.color + "10", color: w.color, fontWeight: 700 }}>
                  WEEK {w.week}
                </span>
                <span style={{ fontSize: "9px", padding: "1px 6px", borderRadius: "8px", background: "var(--tag-bg)", color: "var(--text-secondary)", fontWeight: 600 }}>
                  {w.cert}
                </span>
                {progress[w.project?.id] && (
                  <span style={{ fontSize: "9px", padding: "1px 6px", borderRadius: "8px", background: "#10b98120", color: "#10b981", fontWeight: 600 }}>
                    ✓ DONE
                  </span>
                )}
              </div>
              <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "3px" }}>{w.project.name}</div>
              <div style={{ fontSize: "11.5px", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "6px" }}>
                {w.project.description}
              </div>
              <div style={{ fontSize: "10.5px", padding: "6px 8px", borderRadius: "5px", background: "var(--card-bg-alt)", border: "1px solid var(--border-subtle)", lineHeight: 1.5 }}>
                <strong style={{ color: "#059669" }}>Scenario:</strong> {w.project.dummyData?.substring(0, 150)}...
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── Resources View ─── */}
      {view === "resources" && (
        <div>
          <div style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "6px" }}>🎯 Core Resources for All 17 Weeks</div>
            <div style={{ fontSize: "11.5px", lineHeight: 1.8 }}>
              {RESOURCES.map((r, i) => (
                <div key={i}>
                  <span style={{ marginRight: "3px" }}>{r.icon}</span>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 500 }}>
                    {r.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#0078D405", border: "1px solid #0078D420", borderRadius: "10px", padding: "14px" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "6px" }}>💡 How to Use Claude as Your Azure Tutor</div>
            <div style={{ fontSize: "11.5px", lineHeight: 1.8 }}>
              {TUTOR_PROMPTS.map((t, i) => (
                <div key={i}>
                  <span style={{ color: "#0078D4", marginRight: "3px" }}>→</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── Gaps View ─── */}
      {view === "gaps" && (
        <div>
          <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>Gap Infusion Map</h2>
          <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "14px" }}>
            Every gap infused into the exact week it belongs pedagogically.
          </p>
          {[
            { label: "CRITICAL — Would hurt you in interviews", color: "#ef4444", items: GAP_INFUSIONS.filter(g => g.severity === "critical") },
            { label: "IMPORTANT — Separates good from guru", color: "#f59e0b", items: GAP_INFUSIONS.filter(g => g.severity === "important") },
            { label: "COMPETITIVE EDGE — Makes you stand out", color: "#00BCD4", items: GAP_INFUSIONS.filter(g => g.severity === "edge") }
          ].map((group, gi) => (
            <div key={gi} style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "14px", marginBottom: "10px", borderLeft: `3px solid ${group.color}` }}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: group.color, marginBottom: "10px", padding: "2px 8px", background: group.color + "15", borderRadius: "8px", display: "inline-block" }}>
                {group.label}
              </div>
              {group.items.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", padding: "6px 0", borderBottom: i < group.items.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: group.color, marginTop: 7, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, fontSize: "12px" }}>{item.gap}</span>
                    <span style={{ fontSize: "11px", color: "#10b981", marginLeft: "8px" }}>→ {item.where}</span>
                    <div style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "1px" }}>{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* ─── Certs View ─── */}
      {view === "certs" && (
        <div>
          <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "14px" }}>6 Certifications Track</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {CERTS.map((c, i) => (
              <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "14px", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ fontSize: "26px" }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "14px" }}>{c.name}</div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{c.code} · Weeks {c.weeks}</div>
                </div>
                <div style={{ 
                  padding: "4px 10px", borderRadius: "16px", 
                  background: (CERT_COLORS[c.code] || "#0078D4") + "15",
                  color: CERT_COLORS[c.code] || "#0078D4",
                  fontSize: "10px", fontWeight: 600
                }}>
                  {c.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Footer ─── */}
      <div style={{ textAlign: "center", marginTop: "16px", fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.5px" }}>
        Azure Mastery Plan v3 — 17 Weeks • {tProj} Projects • {tLabs} Labs • 6 Certifications • Built with Claude
      </div>
    </>
  );
}
