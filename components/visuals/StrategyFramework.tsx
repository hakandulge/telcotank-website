'use client'
export default function StrategyFramework({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Quadrant grid */}
      <line x1="200" y1="40" x2="200" y2="360" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="1" />
      <line x1="40" y1="200" x2="360" y2="200" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="1" />

      {/* Outer frame */}
      <rect x="40" y="40" width="320" height="320" rx="4" stroke="#2563EB" strokeOpacity="0.1" strokeWidth="1" fill="none" />

      {/* Quadrant labels */}
      <text x="120" y="110" textAnchor="middle" fontSize="11" fill="#0A2540" fontWeight="600" fontFamily="Inter, sans-serif">Strategy</text>
      <text x="120" y="128" textAnchor="middle" fontSize="9" fill="#6B7280" fontFamily="Inter, sans-serif">Vision & Direction</text>

      <text x="280" y="110" textAnchor="middle" fontSize="11" fill="#0A2540" fontWeight="600" fontFamily="Inter, sans-serif">Execution</text>
      <text x="280" y="128" textAnchor="middle" fontSize="9" fill="#6B7280" fontFamily="Inter, sans-serif">Delivery & Scale</text>

      <text x="120" y="270" textAnchor="middle" fontSize="11" fill="#0A2540" fontWeight="600" fontFamily="Inter, sans-serif">Intelligence</text>
      <text x="120" y="288" textAnchor="middle" fontSize="9" fill="#6B7280" fontFamily="Inter, sans-serif">Data & Analysis</text>

      <text x="280" y="270" textAnchor="middle" fontSize="11" fill="#0A2540" fontWeight="600" fontFamily="Inter, sans-serif">Governance</text>
      <text x="280" y="288" textAnchor="middle" fontSize="9" fill="#6B7280" fontFamily="Inter, sans-serif">Controls & Risk</text>

      {/* Center circle */}
      <circle cx="200" cy="200" r="35" fill="#2563EB" fillOpacity="0.08" stroke="#2563EB" strokeOpacity="0.2" strokeWidth="1" />
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#2563EB" fontWeight="600" fontFamily="Inter, sans-serif">Transform</text>

      {/* Connection lines from center to quadrants */}
      {[
        { x: 120, y: 130 },
        { x: 280, y: 130 },
        { x: 120, y: 260 },
        { x: 280, y: 260 },
      ].map((target, idx) => (
        <line
          key={idx}
          x1="200"
          y1="200"
          x2={target.x}
          y2={target.y}
          stroke="#2563EB"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      ))}

      {/* Quadrant icons (small circles) */}
      {[
        { cx: 120, cy: 90, r: 12 },
        { cx: 280, cy: 90, r: 12 },
        { cx: 120, cy: 250, r: 12 },
        { cx: 280, cy: 250, r: 12 },
      ].map((c, idx) => (
        <circle key={idx} cx={c.cx} cy={c.cy} r={c.r} fill="#2563EB" fillOpacity="0.06" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="1" />
      ))}

      {/* Axis labels */}
      <text x="200" y="32" textAnchor="middle" fontSize="8" fill="#9CA3AF" fontFamily="Inter, sans-serif" letterSpacing="1">HIGH IMPACT</text>
      <text x="200" y="380" textAnchor="middle" fontSize="8" fill="#9CA3AF" fontFamily="Inter, sans-serif" letterSpacing="1">FOUNDATIONAL</text>
    </svg>
  )
}
