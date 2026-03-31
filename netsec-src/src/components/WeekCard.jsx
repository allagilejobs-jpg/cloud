import { PHASES } from "../data/weeks";

export default function WeekCard({ week, progress, onSelect }) {
  const phase = PHASES.find(p => p.num === week.phase);
  
  // Calculate completion
  const labsDone = week.labs.filter(l => progress[l.id]).length;
  const projectDone = week.project && progress[week.project?.id] ? 1 : 0;
  const total = week.labs.length + (week.project ? 1 : 0);
  const done = labsDone + projectDone;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  
  // Gap badge styling
  const getGapClass = (g) => {
    const critical = ["LINUX", "WIRESHARK", "PYTHON", "COMPLIANCE"];
    const important = ["AUTOMATION", "INCIDENT RESPONSE", "FORENSICS", "SIEM", "THREAT INTEL"];
    if (critical.includes(g)) return "gc";
    if (important.includes(g)) return "gi";
    return "ge";
  };
  
  return (
    <div 
      className="cd" 
      onClick={() => onSelect(week.week - 1)}
      style={{ 
        padding: 14, 
        cursor: "pointer", 
        borderLeft: `3px solid ${phase?.color || "#E53935"}`,
        position: "relative",
        animation: `fadeUp .4s ease ${week.week * 0.02}s both`
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <div style={{ flex: 1, minWidth: 0, paddingRight: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap", marginBottom: 4 }}>
            <span style={{ 
              fontSize: 10, 
              fontWeight: 700, 
              color: phase?.color || "#E53935", 
              fontFamily: "'JetBrains Mono', monospace" 
            }}>
              WK {week.week}
            </span>
            {(week.gapBadges || []).map(g => (
              <span key={g} className={`gb ${getGapClass(g)}`}>{g}</span>
            ))}
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
            {week.title}
          </div>
        </div>
        
        {/* Progress ring */}
        <div style={{ position: "relative", width: 36, height: 36, flexShrink: 0 }}>
          <svg width="36" height="36" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="3"/>
            <circle 
              cx="18" cy="18" r="14" 
              fill="none" 
              stroke={pct === 100 ? "#22c55e" : phase?.color || "#E53935"} 
              strokeWidth="3" 
              strokeDasharray={`${2 * Math.PI * 14}`} 
              strokeDashoffset={`${2 * Math.PI * 14 * (1 - pct / 100)}`} 
              strokeLinecap="round" 
              style={{ transition: "stroke-dashoffset .5s" }}
            />
          </svg>
          <span style={{ 
            position: "absolute", inset: 0, 
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, fontWeight: 700, 
            color: pct === 100 ? "#22c55e" : "#94a3b8",
            fontFamily: "'JetBrains Mono', monospace"
          }}>
            {pct}%
          </span>
        </div>
      </div>
      
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {week.labs.length > 0 && (
          <span className="tg" style={{ background: "#1e293b", color: "#94a3b8" }}>
            📝 {week.labs.length}
          </span>
        )}
        {week.project && (
          <span className="tg" style={{ background: "#1e293b", color: "#94a3b8" }}>
            🚀 Proj
          </span>
        )}
        {week.prompts?.length > 0 && (
          <span className="tg" style={{ background: "#1e293b", color: "#94a3b8" }}>
            💬 {week.prompts.length}
          </span>
        )}
      </div>
    </div>
  );
}
