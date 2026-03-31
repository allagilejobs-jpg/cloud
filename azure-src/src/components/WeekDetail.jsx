import { useState } from "react";
import { PHASES, CERT_COLORS } from "../data/weeks";

export default function WeekDetail({ week, progress, onToggle, onBack, onNavigate, totalWeeks, copiedId, onCopy }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedLab, setExpandedLab] = useState(null);
  
  const phase = PHASES.find(p => p.num === week.phase);
  const hasInfused = week.infused && week.infused.length > 0;
  
  return (
    <div style={{ animation: "fadeUp .3s ease" }}>
      {/* Back button */}
      <button 
        className="bt" 
        onClick={onBack}
        style={{ padding: "6px 12px", background: "var(--card-bg-alt)", color: "var(--text-muted)", fontSize: 12, marginBottom: 12, border: "1px solid var(--border)" }}
      >
        ← Back
      </button>
      
      {/* Header */}
      <div className="cd" style={{ padding: 18, marginBottom: 14, borderLeft: `4px solid ${phase?.color || week.color}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
          <span className="tg" style={{ background: (phase?.color || week.color) + "22", color: phase?.color || week.color }}>
            PHASE {phase?.num || week.phase}
          </span>
          <span className="tg" style={{ background: "var(--card-bg-alt)", color: "var(--text-muted)" }}>
            WEEK {week.week}
          </span>
          {week.cert && (
            <span className="tg" style={{ 
              background: (CERT_COLORS[week.cert] || week.color) + "15", 
              color: CERT_COLORS[week.cert] || week.color 
            }}>
              {week.cert}
            </span>
          )}
          {(week.gapBadges || []).map(g => (
            <span key={g} className="gb">
              {g}
            </span>
          ))}
        </div>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>{week.title}</h1>
        
        {/* Services */}
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: hasInfused ? 10 : 0 }}>
          {week.services?.map(s => (
            <span key={s} className="tg" style={{ background: "#0078D410", color: "#0078D4", border: "1px solid #0078D428" }}>
              {s}
            </span>
          ))}
        </div>
        
        {/* Infused banner */}
        {hasInfused && (
          <div style={{
            marginTop: 10, padding: "8px 10px",
            borderRadius: "6px", background: "#00857508",
            border: "1px solid #00857520",
            fontSize: "11px", lineHeight: 1.5
          }}>
            <strong style={{ color: "#008575" }}>✦ Infused:</strong>{" "}
            <span style={{ color: "var(--text-secondary)" }}>{week.infused.join(" • ")}</span>
          </div>
        )}
      </div>
      
      {/* Tabs */}
      <div style={{ display: "flex", gap: 5, marginBottom: 14, flexWrap: "wrap" }}>
        {["overview", "prompts", "labs", ...(week.project ? ["project"] : []), "resources"].map(t => (
          <button 
            key={t} 
            className="bt"
            onClick={() => setActiveTab(t)}
            style={{
              padding: "8px 14px", fontSize: 12,
              background: activeTab === t ? "#0078D4" : "var(--card-bg)",
              color: activeTab === t ? "#fff" : "var(--text-muted)",
              border: activeTab === t ? "none" : "1px solid var(--border)"
            }}
          >
            {t === "overview" ? "📋 Overview" :
             t === "prompts" ? `💬 Prompts (${week.prompts?.length || 0})` :
             t === "labs" ? `🔬 Labs (${week.labs.length})` :
             t === "project" ? "🚀 Project" : "📚 Resources"}
          </button>
        ))}
      </div>
      
      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="cd" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>Learning Objectives</h3>
          {week.objectives?.map((o, i) => (
            <div key={i} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: i < week.objectives.length - 1 ? "1px solid var(--border)" : "none" }}>
              <span style={{ color: "#22c55e", fontSize: 12, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{o}</span>
            </div>
          ))}
          
          {/* Topics */}
          {week.topics && week.topics.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Topics</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {week.topics.map((t, i) => (
                  <span key={i} style={{ 
                    fontSize: 11, padding: "3px 8px", borderRadius: "4px",
                    background: "var(--card-bg-alt)", border: "1px solid var(--border)", color: "var(--text)"
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Prompts Tab */}
      {activeTab === "prompts" && (
        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ padding: 10, background: "#0078D410", border: "1px solid #0078D428", borderRadius: 10, fontSize: 12, color: "#0078D4" }}>
            💡 Copy these prompts and paste into a new Claude chat.
          </div>
          {(week.prompts || []).map((p, i) => {
            const pid = `p-${week.week}-${i}`;
            return (
              <div key={i} className="cd" style={{ padding: 16, animation: `slideIn .3s ease ${i * .03}s both` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{p.title}</h4>
                  <button 
                    className="bt" 
                    onClick={() => onCopy(p.prompt, pid)}
                    style={{ padding: "4px 10px", background: copiedId === pid ? "#22c55e" : "#0078D4", color: "#fff", fontSize: 11 }}
                  >
                    {copiedId === pid ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <pre style={{ 
                  background: "var(--card-bg-alt)", borderRadius: 8, padding: 10, fontSize: 11, 
                  color: "var(--text-muted)", lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word",
                  fontFamily: "'JetBrains Mono', monospace", border: "1px solid var(--border)",
                  maxHeight: 160, overflow: "auto"
                }}>
                  {p.prompt}
                </pre>
              </div>
            );
          })}
        </div>
      )}
      
      {/* Labs Tab */}
      {activeTab === "labs" && (
        <div style={{ display: "grid", gap: 10 }}>
          {week.labs.length === 0 && (
            <div className="cd" style={{ padding: 24, textAlign: "center", color: "var(--text-muted)" }}>
              This week focuses on projects and certification prep.
            </div>
          )}
          {week.labs.map((lab, i) => {
            const done = !!progress[lab.id];
            const open = expandedLab === lab.id;
            return (
              <div key={lab.id} className="cd" style={{ overflow: "hidden", animation: `slideIn .3s ease ${i * .03}s both` }}>
                <div 
                  style={{ padding: 14, display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
                  onClick={() => setExpandedLab(open ? null : lab.id)}
                >
                  <div 
                    style={{
                      width: 22, height: 22, borderRadius: 6, cursor: "pointer", flexShrink: 0,
                      background: done ? "#22c55e" : "transparent",
                      border: done ? "none" : "2px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}
                    onClick={e => { e.stopPropagation(); onToggle(lab.id); }}
                  >
                    {done && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: done ? "#22c55e" : "var(--text)" }}>
                      {lab.title || lab.name}
                    </div>
                    <div style={{ display: "flex", gap: 5, marginTop: 3 }}>
                      <span className="tg" style={{ background: "var(--card-bg-alt)", color: "var(--text-muted)" }}>⏱ {lab.duration}</span>
                      <span className="tg" style={{ 
                        background: lab.difficulty === "Beginner" ? "#22c55e16" : lab.difficulty === "Intermediate" ? "#f59e0b16" : "#ef444416",
                        color: lab.difficulty === "Beginner" ? "#22c55e" : lab.difficulty === "Intermediate" ? "#f59e0b" : "#ef4444"
                      }}>
                        {lab.difficulty}
                      </span>
                    </div>
                  </div>
                  <span style={{ color: "var(--text-muted)", fontSize: 14, transition: "transform .2s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
                </div>
                
                {open && (
                  <div style={{ padding: "0 14px 14px", animation: "fadeUp .2s ease" }}>
                    <div style={{ background: "var(--card-bg-alt)", borderRadius: 10, padding: 12, border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#0078D4", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                        Step-by-Step
                      </div>
                      {lab.steps?.map((s, si) => (
                        <div key={si} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: si < lab.steps.length - 1 ? 6 : 0 }}>
                          <div style={{ 
                            width: 24, height: 24, borderRadius: "50%", 
                            background: "#0078D416", color: "#0078D4",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 11, fontWeight: 700, flexShrink: 0,
                            fontFamily: "'JetBrains Mono', monospace", marginTop: 1
                          }}>
                            {si + 1}
                          </div>
                          <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, paddingTop: 2 }}>{s}</div>
                        </div>
                      ))}
                      {lab.verify && (
                        <div style={{ marginTop: 10, padding: "7px 10px", background: "#22c55e0a", border: "1px solid #22c55e28", borderRadius: 8, fontSize: 12, color: "#22c55e" }}>
                          ✓ <strong>Verify:</strong> {lab.verify}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      
      {/* Project Tab */}
      {activeTab === "project" && week.project && (
        <div className="cd" style={{ overflow: "hidden" }}>
          <div style={{ padding: 16, borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
            <div 
              style={{
                width: 22, height: 22, borderRadius: 6, cursor: "pointer", flexShrink: 0,
                background: progress[week.project?.id] ? "#22c55e" : "transparent",
                border: progress[week.project?.id] ? "none" : "2px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
              onClick={() => onToggle(week.project?.id)}
            >
              {progress[week.project?.id] && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{week.project.title || week.project.name}</h3>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{week.project.description}</p>
            </div>
          </div>
          <div style={{ padding: 16 }}>
            {/* Project steps if available */}
            {week.project.steps && week.project.steps.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#22c55e", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                  Project Steps
                </div>
                {week.project.steps.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4, fontSize: 12, lineHeight: 1.5, color: "var(--text-secondary)" }}>
                    <span style={{ color: phase?.color || week.color, fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Dummy data */}
            {week.project.dummyData && (
              <div style={{ marginTop: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#0078D4", textTransform: "uppercase", letterSpacing: 1 }}>
                    Scenario / Dummy Data
                  </span>
                  <button 
                    className="bt" 
                    onClick={() => onCopy(week.project.dummyData, "d-" + week.project?.id)}
                    style={{ padding: "4px 10px", background: copiedId === "d-" + week.project?.id ? "#22c55e" : "#0078D4", color: "#fff", fontSize: 11 }}
                  >
                    {copiedId === "d-" + week.project?.id ? "✓" : "Copy"}
                  </button>
                </div>
                <pre style={{ 
                  background: "var(--card-bg-alt)", borderRadius: 8, padding: 10, fontSize: 10,
                  color: "var(--text-muted)", lineHeight: 1.5, whiteSpace: "pre-wrap",
                  fontFamily: "'JetBrains Mono', monospace", border: "1px solid var(--border)",
                  maxHeight: 120, overflow: "auto"
                }}>
                  {week.project.dummyData}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Resources Tab */}
      {activeTab === "resources" && (
        <div style={{ display: "grid", gap: 8 }}>
          {(week.resources || []).length === 0 && (
            <div className="cd" style={{ padding: 24, textAlign: "center", color: "var(--text-muted)" }}>
              No resources for this week.
            </div>
          )}
          {(week.resources || []).map((r, i) => (
            <a 
              key={i} 
              href={r.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cd" 
              style={{ padding: 12, display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}
            >
              <div style={{ 
                width: 34, height: 34, borderRadius: 8, 
                background: r.type === "video" ? "#DC262610" : "#0078D410",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, flexShrink: 0
              }}>
                {r.type === "video" ? "▶️" : "📄"}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{r.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.url}</div>
              </div>
              <span style={{ color: "#0078D4" }}>→</span>
            </a>
          ))}
        </div>
      )}
      
      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
        {week.week > 1 ? (
          <button 
            className="bt" 
            onClick={() => onNavigate(week.week - 2)}
            style={{ padding: "7px 14px", background: "var(--card-bg)", color: "var(--text-muted)", fontSize: 12, border: "1px solid var(--border)" }}
          >
            ← Wk {week.week - 1}
          </button>
        ) : <div />}
        {week.week < totalWeeks ? (
          <button 
            className="bt" 
            onClick={() => onNavigate(week.week)}
            style={{ padding: "7px 14px", background: "#0078D4", color: "#fff", fontSize: 12 }}
          >
            Wk {week.week + 1} →
          </button>
        ) : <div />}
      </div>
    </div>
  );
}
