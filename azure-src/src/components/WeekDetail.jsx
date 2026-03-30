import { useState } from "react";
import { CERT_COLORS } from "../data/weeks";

export default function WeekDetail({ week: w, progress, onToggle, onBack, onNavigate, totalWeeks, copiedId, onCopy }) {
  const [tab, setTab] = useState("overview");
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(`azure-notes-${w.week}`);
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  const saveNote = (id, text) => {
    const updated = { ...notes, [id]: text };
    setNotes(updated);
    try { localStorage.setItem(`azure-notes-${w.week}`, JSON.stringify(updated)); } catch {}
  };

  const labsDone = w.labs.filter(l => progress[l.id]).length;
  const projDone = w.project && progress[w.project?.id] ? 1 : 0;
  const totalItems = w.labs.length + (w.project ? 1 : 0);
  const doneItems = labsDone + projDone;

  const totalMins = w.labs.reduce((sum, l) => {
    const m = l.duration?.match(/(\d+)/);
    return sum + (m ? parseInt(m[1]) : 30);
  }, 0) + (w.project ? 60 : 0);

  const isCmd = (s) => /^(az |kubectl|terraform|docker|npm|curl |git |code |Run:|Deploy:)/.test(s);

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "prompts", label: "Prompts", icon: "💬", count: w.prompts?.length },
    { id: "labs", label: "Labs", icon: "🧪", count: w.labs.length },
    { id: "project", label: "Project", icon: "🚀", hide: !w.project },
    { id: "resources", label: "Resources", icon: "📚", count: w.resources?.length }
  ].filter(t => !t.hide);

  return (
    <div style={{ animation: "slideIn .3s ease" }}>
      {/* Back + Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <button onClick={onBack} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, padding: "6px 12px", color: "#94a3b8", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          ← All Weeks
        </button>
        <div style={{ display: "flex", gap: 6 }}>
          <button disabled={w.week <= 1} onClick={() => onNavigate(w.week - 2)} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, padding: "6px 12px", color: w.week <= 1 ? "#475569" : "#94a3b8", fontSize: 12, fontWeight: 600, cursor: w.week <= 1 ? "not-allowed" : "pointer" }}>
            ← Prev
          </button>
          <button disabled={w.week >= totalWeeks} onClick={() => onNavigate(w.week)} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, padding: "6px 12px", color: w.week >= totalWeeks ? "#475569" : "#94a3b8", fontSize: 12, fontWeight: 600, cursor: w.week >= totalWeeks ? "not-allowed" : "pointer" }}>
            Next →
          </button>
        </div>
      </div>

      {/* Header Card */}
      <div style={{ background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)", border: "1px solid #334155", borderRadius: 12, padding: 16, marginBottom: 12, borderLeft: `4px solid ${w.color}` }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: w.color + "20", color: w.color, fontWeight: 700 }}>WEEK {w.week}</span>
          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: "#1e293b", color: "#94a3b8", fontWeight: 600 }}>Phase {w.phase}</span>
          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: (CERT_COLORS[w.cert] || w.color) + "15", color: CERT_COLORS[w.cert] || w.color, fontWeight: 600 }}>{w.cert}</span>
          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: "#0ea5e915", color: "#0ea5e9", fontWeight: 600 }}>⏱️ ~{Math.round(totalMins / 60)}h</span>
        </div>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>{w.title}</h2>
        
        {/* Progress bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ flex: 1, height: 6, background: "#1e293b", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ width: `${totalItems > 0 ? (doneItems / totalItems) * 100 : 0}%`, height: "100%", background: doneItems === totalItems ? "#10b981" : w.color, transition: "width .3s" }} />
          </div>
          <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>{doneItems}/{totalItems}</span>
        </div>

        {/* Infused banner */}
        {w.infused?.length > 0 && (
          <div style={{ marginTop: 10, padding: "8px 10px", background: "#00857510", border: "1px solid #00857530", borderRadius: 6, fontSize: 11 }}>
            <strong style={{ color: "#008575" }}>✦ Infused:</strong> <span style={{ color: "#94a3b8" }}>{w.infused.join(" • ")}</span>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 12, background: "#111827", borderRadius: 8, padding: 4, overflowX: "auto" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, minWidth: 70, padding: "8px 10px", borderRadius: 6, border: "none", cursor: "pointer",
            background: tab === t.id ? w.color : "transparent",
            color: tab === t.id ? "#fff" : "#64748b",
            fontSize: 11, fontWeight: 600, whiteSpace: "nowrap",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 4
          }}>
            <span>{t.icon}</span> {t.label}
            {t.count > 0 && <span style={{ background: tab === t.id ? "rgba(255,255,255,0.2)" : "#1e293b", padding: "1px 5px", borderRadius: 8, fontSize: 9 }}>{t.count}</span>}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 12, padding: 16 }}>
        
        {/* Overview */}
        {tab === "overview" && (
          <div>
            {w.objectives?.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontSize: 12, fontWeight: 700, color: "#10b981", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>🎯 Learning Objectives</h3>
                {w.objectives.map((o, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4, fontSize: 12, color: "#e2e8f0" }}>
                    <span style={{ color: "#10b981" }}>✓</span> {o}
                  </div>
                ))}
              </div>
            )}
            {w.services?.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontSize: 12, fontWeight: 700, color: w.color, marginBottom: 8 }}>☁️ Services</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {w.services.map((s, i) => (
                    <span key={i} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 12, background: w.color + "15", color: w.color, fontWeight: 500 }}>{s}</span>
                  ))}
                </div>
              </div>
            )}
            {w.topics?.length > 0 && (
              <div>
                <h3 style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", marginBottom: 8 }}>📝 Topics</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {w.topics.map((t, i) => (
                    <span key={i} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 4, background: "#1e293b", border: "1px solid #334155", color: "#cbd5e1" }}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Prompts */}
        {tab === "prompts" && (
          <div>
            {w.prompts?.length > 0 ? w.prompts.map((p, i) => (
              <div key={i} onClick={() => onCopy(p.prompt, `prompt-${w.week}-${i}`)} style={{
                background: "#0f172a", border: "1px solid #1e293b", borderRadius: 8, padding: 12, marginBottom: 8, cursor: "pointer",
                transition: "all .15s"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{p.title}</span>
                  <span style={{ fontSize: 10, color: copiedId === `prompt-${w.week}-${i}` ? "#10b981" : "#64748b", fontWeight: 600 }}>
                    {copiedId === `prompt-${w.week}-${i}` ? "✓ Copied!" : "Click to copy"}
                  </span>
                </div>
                <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
                  {p.prompt?.substring(0, 200)}{p.prompt?.length > 200 ? "..." : ""}
                </div>
              </div>
            )) : <div style={{ color: "#64748b", fontSize: 12 }}>No prompts for this week.</div>}
          </div>
        )}

        {/* Labs */}
        {tab === "labs" && (
          <div>
            {w.labs.map((lab, li) => {
              const done = progress[lab.id];
              return (
                <div key={li} style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 8, padding: 12, marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div onClick={() => onToggle(lab.id)} style={{
                      width: 22, height: 22, borderRadius: 6, flexShrink: 0, cursor: "pointer",
                      border: done ? "none" : "2px solid #334155",
                      background: done ? "#10b981" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      {done && <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>✓</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: done ? "#10b981" : "#fff", textDecoration: done ? "line-through" : "none" }}>
                        {lab.title || lab.name}
                      </div>
                      <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                        {lab.duration && <span style={{ fontSize: 10, color: "#64748b" }}>⏱️ {lab.duration}</span>}
                        {lab.difficulty && (
                          <span style={{
                            fontSize: 9, padding: "1px 6px", borderRadius: 8,
                            background: lab.difficulty === "Beginner" ? "#10b98120" : lab.difficulty === "Intermediate" ? "#f59e0b20" : "#ef444420",
                            color: lab.difficulty === "Beginner" ? "#10b981" : lab.difficulty === "Intermediate" ? "#f59e0b" : "#ef4444",
                            fontWeight: 600
                          }}>{lab.difficulty}</span>
                        )}
                      </div>
                      {lab.steps?.length > 0 && (
                        <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid #1e293b" }}>
                          {lab.steps.map((s, si) => (
                            <div key={si} style={{ display: "flex", gap: 8, marginBottom: 4, fontSize: 11, lineHeight: 1.5 }}>
                              <span style={{ width: 18, height: 18, borderRadius: "50%", background: w.color + "20", color: w.color, fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{si + 1}</span>
                              <span style={{ color: "#cbd5e1", fontFamily: isCmd(s) ? "monospace" : "inherit", fontSize: isCmd(s) ? 10 : 11 }}>{s}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {lab.verify && (
                        <div style={{ marginTop: 8, padding: "6px 10px", background: "#10b98110", border: "1px solid #10b98130", borderRadius: 6, fontSize: 11 }}>
                          <span style={{ color: "#10b981", fontWeight: 600 }}>✓ Verify:</span> <span style={{ color: "#cbd5e1" }}>{lab.verify}</span>
                        </div>
                      )}
                      {/* Notes */}
                      <div style={{ marginTop: 8 }}>
                        <textarea
                          placeholder="Add notes..."
                          value={notes[lab.id] || ""}
                          onChange={(e) => saveNote(lab.id, e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            width: "100%", minHeight: 40, padding: 8, fontSize: 11,
                            background: "#0a0e1a", border: "1px solid #1e293b", borderRadius: 6,
                            color: "#cbd5e1", resize: "vertical", fontFamily: "inherit"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Project */}
        {tab === "project" && w.project && (
          <div style={{ background: `${w.color}08`, border: `1px solid ${w.color}30`, borderRadius: 8, padding: 14 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div onClick={() => onToggle(w.project.id)} style={{
                width: 22, height: 22, borderRadius: 6, flexShrink: 0, cursor: "pointer",
                border: progress[w.project.id] ? "none" : "2px solid #334155",
                background: progress[w.project.id] ? "#10b981" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                {progress[w.project.id] && <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>✓</span>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: progress[w.project.id] ? "#10b981" : "#fff", textDecoration: progress[w.project.id] ? "line-through" : "none", marginBottom: 4 }}>
                  {w.project.name || w.project.title}
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5, marginBottom: 10 }}>{w.project.description}</div>
                {w.project.dummyData && (
                  <div style={{ fontSize: 11, padding: "8px 10px", background: "#0f172a", border: "1px solid #1e293b", borderRadius: 6, marginBottom: 10, lineHeight: 1.5 }}>
                    <strong style={{ color: "#059669" }}>Scenario:</strong> <span style={{ color: "#cbd5e1" }}>{w.project.dummyData}</span>
                  </div>
                )}
                {w.project.steps?.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4, fontSize: 11, color: "#cbd5e1" }}>
                    <span style={{ color: w.color, fontWeight: 700 }}>{i + 1}.</span> {s}
                  </div>
                ))}
                {/* Project notes */}
                <div style={{ marginTop: 10 }}>
                  <textarea
                    placeholder="Add project notes..."
                    value={notes[w.project.id] || ""}
                    onChange={(e) => saveNote(w.project.id, e.target.value)}
                    style={{
                      width: "100%", minHeight: 60, padding: 8, fontSize: 11,
                      background: "#0a0e1a", border: "1px solid #1e293b", borderRadius: 6,
                      color: "#cbd5e1", resize: "vertical", fontFamily: "inherit"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources */}
        {tab === "resources" && (
          <div>
            {w.resources?.length > 0 ? w.resources.map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", marginBottom: 6,
                background: "#0f172a", border: "1px solid #1e293b", borderRadius: 8,
                textDecoration: "none", color: "#e2e8f0", fontSize: 12
              }}>
                <span style={{ color: r.type === "video" ? "#ef4444" : "#0078D4", fontSize: 14 }}>
                  {r.type === "video" ? "▶" : "📄"}
                </span>
                <span style={{ fontWeight: 500 }}>{r.name}</span>
                <span style={{ marginLeft: "auto", color: "#64748b", fontSize: 10 }}>↗</span>
              </a>
            )) : <div style={{ color: "#64748b", fontSize: 12 }}>No resources for this week.</div>}
          </div>
        )}
      </div>
    </div>
  );
}
