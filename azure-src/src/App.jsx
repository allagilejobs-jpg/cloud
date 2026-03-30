import { useState, useEffect } from "react";
import { WEEKS, CERT_COLORS } from "./data/weeks";
import ProgressBar from "./components/ProgressBar";
import WeekCard from "./components/WeekCard";

const STORAGE_KEY = "azure-plan-v3-completed";
const CERTS = ["AZ-900", "AZ-104", "AZ-204", "AZ-305", "AZ-400", "AZ-500"];
const RESOURCES = [
  { icon: "☁️", text: "Azure Free Account — $200 credit + free tier", url: "https://azure.microsoft.com/free" },
  { icon: "📘", text: "Microsoft Learn — Free certification paths", url: "https://learn.microsoft.com/en-us/training/" },
  { icon: "🧪", text: "Azure Portal", url: "https://portal.azure.com" },
  { icon: "💻", text: "VS Code + Azure Extensions", url: "https://code.visualstudio.com" },
  { icon: "🐳", text: "Docker Desktop (Weeks 8-9)", url: "https://docker.com/products/docker-desktop" },
  { icon: "🔧", text: "Azure CLI", url: "https://learn.microsoft.com/en-us/cli/azure/install-azure-cli" },
  { icon: "📐", text: "Terraform (Week 11)", url: "https://terraform.io" },
  { icon: "🤖", text: "Claude — Your AI tutor & lab assistant", url: "https://claude.ai" },
];
const TUTOR_PROMPTS = [
  '"Explain [topic] like I\'m 5" — conceptual understanding',
  '"Generate a hands-on lab for [service]" — practice exercises',
  '"Quiz me on [cert] with 20 questions" — exam prep',
  '"Write Terraform/Bicep for [infra]" — IaC practice',
  '"Review my architecture for [scenario]" — design validation',
  '"Debug this error: [paste error]" — troubleshooting',
  '"Generate INSERT statements for [schema]" — database practice',
  '"Write Azure Policy for [requirement]" — governance practice',
];

export default function App() {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [completedWeeks, setCompletedWeeks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [view, setView] = useState("plan");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedWeeks]));
    } catch { /* noop */ }
  }, [completedWeeks]);

  const toggleWeek = (w) => setExpandedWeek(expandedWeek === w ? null : w);
  const toggleSection = (s) => setExpandedSection(expandedSection === s ? null : s);
  const toggleComplete = (w, e) => {
    e.stopPropagation();
    setCompletedWeeks((prev) => {
      const next = new Set(prev);
      next.has(w) ? next.delete(w) : next.add(w);
      return next;
    });
  };

  const filteredWeeks =
    filter === "all" ? WEEKS
    : filter === "infused" ? WEEKS.filter((w) => w.infused?.length > 0)
    : WEEKS.filter((w) => w.cert.includes(filter));

  const pct = Math.round((completedWeeks.size / 17) * 100);

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
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "6px 12px", fontSize: "10px", fontWeight: 700, border: "1px solid rgba(255,255,255,0.2)", lineHeight: 1.6 }}>
            ✦ REDISTRIBUTED<br />✦ 11 PROJECTS<br />✦ 70+ LABS
          </div>
        </div>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {CERTS.map((c) => (
            <span key={c} style={{ background: "rgba(255,255,255,0.2)", padding: "2px 10px", borderRadius: "20px", fontSize: "10px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)" }}>
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Stats ─── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "16px" }}>
        {[
          { l: "Weeks", v: "17", c: "#0078D4" },
          { l: "Labs", v: "70+", c: "#5C2D91" },
          { l: "Projects", v: "11", c: "#F25022" },
          { l: "Certs", v: "6", c: "#00A4EF" },
        ].map((s) => (
          <div key={s.l} style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "10px 6px", textAlign: "center" }}>
            <div style={{ fontSize: "22px", fontWeight: 700, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: "10px", fontWeight: 600 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ─── Progress ─── */}
      <div style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 600, marginBottom: "4px" }}>Your Progress</div>
          <ProgressBar current={completedWeeks.size} total={17} />
        </div>
        <div style={{ fontSize: "24px", fontWeight: 700, color: pct === 100 ? "#10b981" : "#0078D4" }}>{pct}%</div>
      </div>

      {/* ─── Tabs ─── */}
      <div style={{ display: "flex", gap: "3px", marginBottom: "10px", background: "var(--tag-bg)", borderRadius: "8px", padding: "3px" }}>
        {[
          { key: "plan", label: "📅 Plan" },
          { key: "projects", label: "🚀 Projects" },
          { key: "resources", label: "📚 Resources" },
          { key: "infused", label: "✦ Infused" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => { setView(t.key); setFilter(t.key === "infused" ? "infused" : "all"); }}
            style={{
              flex: 1, padding: "8px 4px", borderRadius: "6px",
              fontSize: "11px", fontWeight: 600,
              background: view === t.key ? "var(--card-bg)" : "transparent",
              color: view === t.key ? "#0078D4" : "var(--text-muted)",
              boxShadow: view === t.key ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
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
            ...CERTS.map((c) => ({ key: c, label: c })),
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
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {/* ─── Plan View ─── */}
      {(view === "plan" || view === "infused") && (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {filteredWeeks.map((w) => (
            <WeekCard
              key={w.week}
              week={w}
              isOpen={expandedWeek === w.week}
              isDone={completedWeeks.has(w.week)}
              expandedSection={expandedSection}
              onToggleWeek={toggleWeek}
              onToggleComplete={toggleComplete}
              onToggleSection={toggleSection}
            />
          ))}
        </div>
      )}

      {/* ─── Projects View ─── */}
      {view === "projects" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {WEEKS.filter((w) => w.project).map((w) => (
            <div key={w.week} style={{ border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "14px", borderLeft: `3px solid ${w.color}` }}>
              <div style={{ display: "flex", gap: "5px", marginBottom: "3px" }}>
                <span style={{ fontSize: "9px", padding: "1px 6px", borderRadius: "8px", background: w.color + "10", color: w.color, fontWeight: 700 }}>
                  WEEK {w.week}
                </span>
                <span style={{ fontSize: "9px", padding: "1px 6px", borderRadius: "8px", background: "var(--tag-bg)", color: "var(--text-secondary)", fontWeight: 600 }}>
                  {w.cert}
                </span>
              </div>
              <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "3px" }}>{w.project.name}</div>
              <div style={{ fontSize: "11.5px", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "6px" }}>
                {w.project.description}
              </div>
              <div style={{ fontSize: "10.5px", padding: "6px 8px", borderRadius: "5px", background: "var(--card-bg-alt)", border: "1px solid var(--border-subtle)", lineHeight: 1.5 }}>
                <strong style={{ color: "#059669" }}>Scenario:</strong> {w.project.dummyData}
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

      {/* ─── Footer ─── */}
      <div style={{ textAlign: "center", marginTop: "16px", fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.5px" }}>
        Azure Mastery Plan v3 — 17 Weeks • 11 Projects • 70+ Labs • 6 Certifications • Built with Claude
      </div>
    </>
  );
}
