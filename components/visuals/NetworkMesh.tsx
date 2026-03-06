'use client'
/** Subtle background mesh pattern for section backgrounds */
export default function NetworkMesh({ className = '', opacity = 0.04 }: { className?: string; opacity?: number }) {
  const points = Array.from({ length: 30 }, (_, i) => ({
    cx: (i % 6) * 160 + 80 + (Math.sin(i * 2.1) * 40),
    cy: Math.floor(i / 6) * 100 + 50 + (Math.cos(i * 1.7) * 30),
  }))

  const lines: [number, number][] = []
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].cx - points[j].cx
      const dy = points[i].cy - points[j].cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 200) {
        lines.push([i, j])
      }
    }
  }

  return (
    <svg
      viewBox="0 0 960 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {lines.map(([i, j], idx) => (
        <line
          key={idx}
          x1={points[i].cx}
          y1={points[i].cy}
          x2={points[j].cx}
          y2={points[j].cy}
          stroke="#2563EB"
          strokeOpacity={opacity}
          strokeWidth="0.5"
        />
      ))}
      {points.map((p, idx) => (
        <circle
          key={idx}
          cx={p.cx}
          cy={p.cy}
          r="2"
          fill="#2563EB"
          fillOpacity={opacity * 2}
        />
      ))}
    </svg>
  )
}
