export default function ProgressBar({ current, total }) {
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i < current ? "16px" : "12px",
            height: "5px",
            borderRadius: "3px",
            backgroundColor: i < current ? "#10b981" : "var(--border-subtle)",
            transition: "all 0.3s",
          }}
        />
      ))}
      <span
        style={{
          marginLeft: "6px",
          fontSize: "11px",
          color: "var(--text-muted)",
          fontWeight: 600,
        }}
      >
        {current}/{total}
      </span>
    </div>
  );
}
