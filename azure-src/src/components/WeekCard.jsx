import { CERT_COLORS } from "../data/weeks";

export default function WeekCard({
  week: w,
  isOpen,
  isDone,
  expandedSection,
  onToggleWeek,
  onToggleComplete,
  onToggleSection,
}) {
  const hasInfused = w.infused && w.infused.length > 0;
  const isCmd = (step) => /^(az |kubectl|terraform|docker|npm|curl |Run:|Deploy:)/.test(step);

  return (
    <div
      style={{
        border: `1px solid ${isOpen ? w.color + "40" : hasInfused ? "#00857530" : "var(--border-subtle)"}`,
        borderRadius: "10px",
        overflow: "hidden",
        background: isOpen ? `${w.color}04` : "var(--card-bg)",
        position: "relative",
      }}
    >
      {hasInfused && (
        <div
          style={{
            position: "absolute", top: "6px", right: "6px",
            background: "#008575", color: "#fff",
            fontSize: "8px", fontWeight: 700,
            padding: "1px 6px", borderRadius: "8px", zIndex: 1,
          }}
        >
          INFUSED
        </div>
      )}

      {/* Header */}
      <div
        onClick={() => onToggleWeek(w.week)}
        style={{
          padding: "10px 12px", cursor: "pointer",
          display: "flex", alignItems: "center", gap: "8px",
          userSelect: "none",
        }}
      >
        <button
          onClick={(e) => onToggleComplete(w.week, e)}
          style={{
            width: "20px", height: "20px", borderRadius: "50%",
            border: isDone ? "none" : "2px solid #cbd5e1",
            background: isDone ? "#10b981" : "transparent",
            color: "#fff", fontSize: "11px",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {isDone ? "✓" : ""}
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "9px", fontWeight: 700, color: w.color }}>WEEK {w.week}</span>
            <span style={{ fontSize: "9px", fontWeight: 600, color: "var(--text-secondary)", background: "var(--tag-bg)", padding: "1px 5px", borderRadius: "3px" }}>
              {w.phase}
            </span>
            <span
              style={{
                fontSize: "8px", padding: "1px 5px", borderRadius: "8px",
                background: (CERT_COLORS[w.cert.split(" / ")[0]] || w.color) + "12",
                color: CERT_COLORS[w.cert.split(" / ")[0]] || w.color,
                fontWeight: 600,
              }}
            >
              {w.cert}
            </span>
          </div>
          <div
            style={{
              fontSize: "12.5px", fontWeight: 600, marginTop: "1px",
              color: isDone ? "var(--text-muted)" : "var(--text-color)",
              textDecoration: isDone ? "line-through" : "none",
            }}
          >
            {w.title}
          </div>
        </div>

        <span style={{ fontSize: "9px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
          {w.labs.length} labs{w.project ? " · project" : ""}
        </span>
        <span
          style={{
            fontSize: "14px", color: "var(--text-muted)",
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          ▾
        </span>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div style={{ padding: "0 12px 12px" }}>
          {/* Infused banner */}
          {hasInfused && (
            <div
              style={{
                marginBottom: "10px", padding: "8px 10px",
                borderRadius: "6px", background: "#00857508",
                border: "1px solid #00857520",
                fontSize: "11px", lineHeight: 1.5,
              }}
            >
              <strong style={{ color: "#008575" }}>✦ Infused into this week:</strong>{" "}
              {w.infused.join(" • ")}
            </div>
          )}

          {/* Topics */}
          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: w.color, marginBottom: "5px" }}>
              Topics
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
              {w.topics.map((t, i) => (
                <span key={i} style={{ fontSize: "10.5px", padding: "2px 7px", borderRadius: "4px", background: "var(--tag-bg)", border: "1px solid var(--border-subtle)", color: "var(--text-color)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Labs */}
          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: w.color, marginBottom: "5px" }}>
              🧪 Labs ({w.labs.length})
            </div>
            {w.labs.map((lab, li) => {
              const lk = `${w.week}-${li}`;
              const lo = expandedSection === lk;
              return (
                <div key={li} style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", borderRadius: "6px", marginBottom: "3px", overflow: "hidden" }}>
                  <div
                    onClick={() => onToggleSection(lk)}
                    style={{ padding: "7px 10px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11.5px", fontWeight: 600 }}
                  >
                    {lab.name}
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", transform: lo ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                  </div>
                  {lo && (
                    <div style={{ padding: "0 10px 8px" }}>
                      {lab.steps.map((step, si) => (
                        <div key={si} style={{ display: "flex", gap: "6px", marginBottom: "3px", fontSize: "11px", lineHeight: 1.5, color: "var(--text-color)" }}>
                          <span
                            style={{
                              flexShrink: 0, width: "16px", height: "16px",
                              borderRadius: "50%", background: w.color + "10",
                              color: w.color, fontSize: "8px", fontWeight: 700,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              marginTop: "2px",
                            }}
                          >
                            {si + 1}
                          </span>
                          <span
                            className={isCmd(step) ? "mono" : ""}
                            style={{ fontSize: isCmd(step) ? "10.5px" : "11px" }}
                          >
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Project */}
          {w.project && (
            <div style={{ marginBottom: "12px", background: `${w.color}05`, border: `1px solid ${w.color}20`, borderRadius: "8px", padding: "10px" }}>
              <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: w.color, marginBottom: "3px" }}>
                🚀 Project
              </div>
              <div style={{ fontSize: "12.5px", fontWeight: 700, marginBottom: "2px" }}>{w.project.name}</div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "6px", lineHeight: 1.4 }}>
                {w.project.description}
              </div>
              <div style={{ fontSize: "10.5px", marginBottom: "6px", fontStyle: "italic", background: "var(--card-bg)", padding: "5px 8px", borderRadius: "4px", lineHeight: 1.5 }}>
                <strong style={{ color: "#059669", fontStyle: "normal" }}>Scenario:</strong> {w.project.dummyData}
              </div>
              {w.project.steps.map((s, si) => (
                <div key={si} style={{ display: "flex", gap: "5px", marginBottom: "2px", fontSize: "10.5px", lineHeight: 1.4 }}>
                  <span style={{ color: w.color, fontWeight: 700, flexShrink: 0 }}>{si + 1}.</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          )}

          {/* Ask Claude */}
          <div style={{ marginBottom: "8px" }}>
            <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: w.color, marginBottom: "4px" }}>
              💬 Ask Claude
            </div>
            {w.askClaude.map((q, qi) => (
              <div
                key={qi}
                onClick={() => navigator.clipboard?.writeText(q)}
                title="Click to copy"
                style={{
                  fontSize: "11px", padding: "5px 8px", marginBottom: "2px",
                  borderRadius: "5px", background: "var(--card-bg-alt)",
                  border: "1px solid var(--border-subtle)",
                  cursor: "pointer", lineHeight: 1.3,
                }}
              >
                <span style={{ color: w.color, marginRight: "3px" }}>→</span> {q}
              </div>
            ))}
          </div>

          {/* Resources */}
          {w.resources.length > 0 && (
            <div>
              <div style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: w.color, marginBottom: "3px" }}>
                📚 Resources
              </div>
              {w.resources.map((r, ri) => (
                <div key={ri} style={{ fontSize: "10.5px", marginBottom: "2px" }}>
                  <span style={{ color: r.type === "video" ? "#DC2626" : "#0078D4", marginRight: "3px" }}>
                    {r.type === "video" ? "▶" : "📄"}
                  </span>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
