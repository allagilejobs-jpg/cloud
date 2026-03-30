export default function ProgressBar({ current, total, color = "#FF9900" }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ 
        flex: 1, 
        height: "6px", 
        background: "#1e293b", 
        borderRadius: "3px",
        overflow: "hidden"
      }}>
        <div style={{ 
          height: "100%", 
          width: `${pct}%`, 
          background: `linear-gradient(90deg, ${color}, ${color}cc)`,
          borderRadius: "3px",
          transition: "width 0.3s ease"
        }} />
      </div>
      <span style={{ 
        fontSize: "12px", 
        fontWeight: 600, 
        color: pct === 100 ? "#22c55e" : color,
        fontFamily: "'JetBrains Mono', monospace",
        minWidth: "40px"
      }}>
        {pct}%
      </span>
    </div>
  );
}
