import { useState } from "react";
import { PHASES } from "../data/weeks";

export default function WeekDetail({ week, progress, onToggle, onBack, onNavigate, totalWeeks, copiedId, onCopy }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedLab, setExpandedLab] = useState(null);
  
  const phase = PHASES.find(p => p.num === week.phase);
  
  // Gap badge styling
  const getGapClass = (g) => {
    const critical = ["LINUX", "WIRESHARK", "PYTHON", "COMPLIANCE"];
    if (critical.includes(g)) return "gc";
    return "gi";
  };
  
  return (
    <div style={{ animation: "fadeUp .3s ease" }}>
      {/* Back button */}
      <button 
        className="bt" 
        onClick={onBack}
        style={{ padding: "6px 12px", background: "#1e293b", color: "#94a3b8", fontSize: 12, marginBottom: 12 }}
      >
        ← Back
      </button>
      
      {/* Header */}
      <div className="cd" style={{ padding: 18, marginBottom: 14, borderLeft: `4px solid ${phase?.color || "#E53935"}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
          <span className="tg" style={{ background: (phase?.color || "#E53935") + "22", color: phase?.color || "#E53935" }}>
            PHASE {phase?.num || week.phase}
          </span>
          <span className="tg" style={{ background: "#1e293b", color: "#94a3b8" }}>
            WEEK {week.week}
          </span>
          {(week.gapBadges || []).map(g => (
            <span key={g} className={`gb ${getGapClass(g)}`}>GAP FIX: {g}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{week.title}</h1>
        
        {/* Services */}
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {week.services?.map(s => (
            <span key={s} className="tg" style={{ background: "#E5393510", color: "#EF9A9A", border: "1px solid #E5393528" }}>
              {s}
            </span>
          ))}
        </div>
      </div>
      
      {/* Tabs */}
      <div style={{ display: "flex", gap: 5, marginBottom: 14, flexWrap: "wrap", overflowX: "auto" }}>
        {["overview", "prompts", "labs", ...(week.project ? ["project"] : []), "resources"].map(t => (
          <button 
            key={t} 
            className={`tb ${activeTab === t ? "ac" : ""}`}
            onClick={() => setActiveTab(t)}
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
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 10 }}>Learning Objectives</h3>
          {week.objectives.map((o, i) => (
            <div key={i} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: i < week.objectives.length - 1 ? "1px solid #1e293b" : "none" }}>
              <span style={{ color: "#22c55e", fontSize: 12, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.5 }}>{o}</span>
            </div>
          ))}
        </div>
      )}
      
      {/* Prompts Tab */}
      {activeTab === "prompts" && (
        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ padding: 10, background: "#E5393510", border: "1px solid #E5393528", borderRadius: 10, fontSize: 12, color: "#EF9A9A" }}>
            💡 Copy prompts → paste into Claude → learn interactively.
          </div>
          {week.prompts?.map((p, i) => {
            const pid = `p-${week.week}-${i}`;
            return (
              <div key={i} className="cd" style={{ padding: 16, animation: `slideIn .3s ease ${i * 0.03}s both` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{p.title}</h4>
                  <button 
                    className="bt" 
                    onClick={() => onCopy(p.prompt, pid)} 
                    style={{ padding: "4px 10px", background: copiedId === pid ? "#22c55e" : "#E53935", color: "#fff", fontSize: 11 }}
                  >
                    {copiedId === pid ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <pre style={{ 
                  background: "#0a0e17", borderRadius: 8, padding: 10, fontSize: 11, 
                  color: "#94a3b8", lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word",
                  fontFamily: "'JetBrains Mono', monospace", border: "1px solid #1e293b",
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
          {week.labs.map((lab, i) => {
            const done = !!progress[lab.id];
            const open = expandedLab === lab.id;
            return (
              <div key={lab.id} className="cd" style={{ overflow: "hidden", animation: `slideIn .3s ease ${i * 0.03}s both` }}>
                <div 
                  style={{ padding: 14, display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} 
                  onClick={() => setExpandedLab(open ? null : lab.id)}
                >
                  <div 
                    className={`ck ${done ? "dn" : ""}`} 
                    onClick={e => { e.stopPropagation(); onToggle(lab.id); }}
                  >
                    {done && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: done ? "#22c55e" : "#fff" }}>{lab.title}</div>
                    <div style={{ display: "flex", gap: 5, marginTop: 3 }}>
                      <span className="tg" style={{ background: "#1e293b", color: "#64748b" }}>⏱ {lab.duration}</span>
                      <span className="tg" style={{ 
                        background: lab.difficulty === "Beginner" ? "#22c55e16" : lab.difficulty === "Intermediate" ? "#FF990016" : "#ef444416",
                        color: lab.difficulty === "Beginner" ? "#22c55e" : lab.difficulty === "Intermediate" ? "#FF9900" : "#ef4444"
                      }}>
                        {lab.difficulty}
                      </span>
                    </div>
                  </div>
                  <span style={{ color: "#475569", fontSize: 14, transition: "transform .2s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
                </div>
                {open && (
                  <div style={{ padding: "0 14px 14px", animation: "fadeUp .2s ease" }}>
                    <div style={{ background: "#0a0e17", borderRadius: 10, padding: 12, border: "1px solid #1e293b" }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#E53935", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                        Step-by-Step
                      </div>
                      {lab.steps.map((s, si) => (
                        <div key={si} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: si < lab.steps.length - 1 ? 6 : 0 }}>
                          <div style={{ 
                            width: 24, height: 24, borderRadius: "50%", background: "#E5393516", color: "#E53935",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 11, fontWeight: 700, flexShrink: 0, fontFamily: "'JetBrains Mono', monospace", marginTop: 1
                          }}>
                            {si + 1}
                          </div>
                          <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.5, paddingTop: 2 }}>{s}</div>
                        </div>
                      ))}
                      <div style={{ 
                        marginTop: 10, padding: "7px 10px", background: "#22c55e0a", 
                        border: "1px solid #22c55e28", borderRadius: 8, fontSize: 12, color: "#22c55e"
                      }}>
                        ✓ <strong>Verify:</strong> {lab.verify}
                      </div>
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
          <div style={{ padding: 16, borderBottom: "1px solid #1e293b", display: "flex", alignItems: "center", gap: 10 }}>
            <div 
              className={`ck ${progress[week.project.id] ? "dn" : ""}`} 
              onClick={() => onToggle(week.project.id)}
            >
              {progress[week.project.id] && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{week.project.title}</h3>
              <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{week.project.description}</p>
            </div>
          </div>
          <div style={{ padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "#E53935", textTransform: "uppercase", letterSpacing: 1 }}>Claude Prompt</span>
              <button 
                className="bt" 
                onClick={() => onCopy(week.project.prompt, week.project.id)} 
                style={{ padding: "4px 10px", background: copiedId === week.project.id ? "#22c55e" : "#E53935", color: "#fff", fontSize: 11 }}
              >
                {copiedId === week.project.id ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre style={{ 
              background: "#0a0e17", borderRadius: 8, padding: 10, fontSize: 11, 
              color: "#94a3b8", lineHeight: 1.5, whiteSpace: "pre-wrap", wordBreak: "break-word",
              fontFamily: "'JetBrains Mono', monospace", border: "1px solid #1e293b",
              maxHeight: 180, overflow: "auto"
            }}>
              {week.project.prompt}
            </pre>
          </div>
        </div>
      )}
      
      {/* Resources Tab */}
      {activeTab === "resources" && (
        <div style={{ display: "grid", gap: 8 }}>
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
                width: 34, height: 34, borderRadius: 8, background: "#E5393510",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0
              }}>
                📄
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{r.name}</div>
                <div style={{ fontSize: 11, color: "#64748b", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.url}</div>
              </div>
              <span style={{ color: "#E53935" }}>→</span>
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
            style={{ padding: "7px 14px", background: "#1e293b", color: "#94a3b8", fontSize: 12 }}
          >
            ← Wk {week.week - 1}
          </button>
        ) : <div />}
        {week.week < totalWeeks ? (
          <button 
            className="bt" 
            onClick={() => onNavigate(week.week)}
            style={{ padding: "7px 14px", background: "#E53935", color: "#fff", fontSize: 12 }}
          >
            Wk {week.week + 1} →
          </button>
        ) : <div />}
      </div>
    </div>
  );
}
