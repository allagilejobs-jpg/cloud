import { PHASES, CERT_COLORS } from "../data/weeks";

export default function WeekCard({ week, progress, onSelect }) {
  const phase = PHASES.find(p => p.num === week.phase);
  
  // Calculate completion
  const labsDone = week.labs.filter(l => progress[l.id]).length;
  const projectDone = week.project && progress[week.project.id] ? 1 : 0;
  const total = week.labs.length + (week.project ? 1 : 0);
  const done = labsDone + projectDone;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  
  const hasInfused = week.infused && week.infused.length > 0;
  
  return (
    <div 
      className="cd" 
      onClick={() => onSelect(week.week - 1)}
      style={{ 
        padding: 14, 
        cursor: "pointer", 
        borderLeft: `3px solid ${phase?.color || week.color}`,
        position: "relative"
      }}
    >
      {hasInfused && (
        <div style={{
          position: "absolute", top: 8, right: 8,
          background: "#008575", color: "#fff",
          fontSize: "7px", fontWeight: 700,
          padding: "2px 6px", borderRadius: "8px"
        }}>
          INFUSED
        </div>
      )}
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
            <span style={{ 
              fontSize: 10, 
              fontWeight: 700, 
              color: phase?.color || week.color, 
              fontFamily: "'JetBrains Mono', monospace" 
            }}>
              WK {week.week}
            </span>
            {week.cert && (
              <span style={{
                fontSize: 8, padding: "1px 6px", borderRadius: "8px",
                background: (CERT_COLORS[week.cert] || week.color) + "15",
                color: CERT_COLORS[week.cert] || week.color,
                fontWeight: 600
              }}>
                {week.cert}
              </span>
            )}
            {(week.gapBadges || []).map(g => (
              <span 
                key={g} 
                className={`gb ${
                  ["LINUX", "BASH", "PYTHON", "TERRAFORM", "AI/ML", "BEDROCK", "SAGEMAKER"].includes(g) ? "gc" :
                  ["STEP FUNCTIONS", "EVENTBRIDGE", "SECRETS MANAGER", "SSM", "X-RAY", "MULTI-ACCOUNT", "ORGANIZATIONS"].includes(g) ? "gi" : "ge"
                }`}
              >
                {g}
              </span>
            ))}
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 3, lineHeight: 1.3 }}>
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
              stroke={pct === 100 ? "#22c55e" : phase?.color || week.color} 
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
        <span className="tg" style={{ background: "#1e293b", color: "#94a3b8" }}>
          💬 {week.prompts.length}
        </span>
      </div>
    </div>
  );
}
