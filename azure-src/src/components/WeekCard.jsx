import { CERT_COLORS } from "../data/weeks";

export default function WeekCard({ week: w, progress = {}, onSelect }) {
  const hasInfused = w.infused && w.infused.length > 0;

  // Calculate completion based on lab/project IDs
  const labsDone = w.labs.filter(l => progress[l.id]).length;
  const projectDone = w.project && progress[w.project?.id] ? 1 : 0;
  const totalItems = w.labs.length + (w.project ? 1 : 0);
  const doneItems = labsDone + projectDone;
  const weekComplete = totalItems > 0 && doneItems === totalItems;
  const weekPct = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  // Estimate time
  const totalMins = w.labs.reduce((sum, l) => {
    const m = l.duration?.match(/(\d+)/);
    return sum + (m ? parseInt(m[1]) : 30);
  }, 0) + (w.project ? 60 : 0);

  return (
    <div
      onClick={() => onSelect(w.week - 1)}
      className="cd"
      style={{
        padding: "12px 14px",
        cursor: "pointer",
        borderLeft: `3px solid ${weekComplete ? "#10b981" : w.color}`,
        position: "relative",
        transition: "all .15s"
      }}
    >
      {hasInfused && (
        <div style={{
          position: "absolute", top: 8, right: 8,
          background: "#008575", color: "#fff",
          fontSize: 8, fontWeight: 700,
          padding: "1px 6px", borderRadius: 8
        }}>
          ✦ INFUSED
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Progress ring */}
        <div style={{ position: "relative", width: 36, height: 36, flexShrink: 0 }}>
          <svg width="36" height="36" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="18" cy="18" r="15" fill="none" stroke="var(--border)" strokeWidth="3"/>
            <circle
              cx="18" cy="18" r="15"
              fill="none"
              stroke={weekComplete ? "#10b981" : w.color}
              strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 15}`}
              strokeDashoffset={`${2 * Math.PI * 15 * (1 - weekPct / 100)}`}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset .3s" }}
            />
          </svg>
          <span style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700,
            color: weekComplete ? "#10b981" : "var(--text-muted)"
          }}>
            {weekComplete ? "✓" : `${weekPct}%`}
          </span>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Tags */}
          <div style={{ display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap", marginBottom: 3 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: w.color }}>WEEK {w.week}</span>
            <span style={{
              fontSize: 9, padding: "1px 6px", borderRadius: 6,
              background: "var(--card-bg-alt)", color: "var(--text-secondary)", fontWeight: 600
            }}>
              {w.phase}
            </span>
            <span style={{
              fontSize: 8, padding: "1px 5px", borderRadius: 8,
              background: (CERT_COLORS[w.cert?.split(" / ")[0]] || w.color) + "15",
              color: CERT_COLORS[w.cert?.split(" / ")[0]] || w.color,
              fontWeight: 600
            }}>
              {w.cert}
            </span>
          </div>

          {/* Title */}
          <div style={{
            fontSize: 13, fontWeight: 600,
            color: weekComplete ? "var(--text-muted)" : "var(--text)",
            textDecoration: weekComplete ? "line-through" : "none"
          }}>
            {w.title}
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 10, marginTop: 4, fontSize: 10, color: "var(--text-muted)" }}>
            <span>🧪 {labsDone}/{w.labs.length} labs</span>
            {w.project && <span>🚀 {projectDone}/1 project</span>}
            <span>⏱️ ~{Math.round(totalMins / 60)}h</span>
          </div>
        </div>

        <span style={{ color: "var(--text-muted)", fontSize: 16 }}>›</span>
      </div>
    </div>
  );
}
