'use client'
export default function AIModel({ className = '' }: { className?: string }) {
  const pillars = [
    { x: 60, label: 'Governance', sub: 'Policy & Ethics' },
    { x: 200, label: 'Operating Model', sub: 'Structure & Roles' },
    { x: 340, label: 'AI Control Tower', sub: 'Orchestration' },
    { x: 480, label: 'Adoption', sub: 'Scale & Change' },
  ]

  return (
    <svg
      viewBox="0 0 600 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Light background */}
      <rect x="0" y="0" width="600" height="320" rx="12" fill="#EBF5FF" />

      {/* Outer frame */}
      <rect x="20" y="10" width="560" height="290" rx="10" fill="white" stroke="#2563EB" strokeOpacity="0.2" strokeWidth="1" />

      {/* Top bar */}
      <rect x="40" y="38" width="520" height="1.5" rx="1" fill="#2563EB" fillOpacity="0.2" />
      <text x="300" y="30" textAnchor="middle" fontSize="13" fill="#1E3A5F" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.5">
        AI Transformation Model
      </text>

      {/* Base platform */}
      <rect x="40" y="255" width="520" height="1.5" rx="1" fill="#2563EB" fillOpacity="0.2" />
      <text x="300" y="280" textAnchor="middle" fontSize="11" fill="#2563EB" fontFamily="Inter, sans-serif" letterSpacing="0.5">
        Enterprise AI Foundation
      </text>

      {/* Pillars */}
      {pillars.map((p, idx) => (
        <g key={idx}>
          {/* Pillar box */}
          <rect
            x={p.x}
            y="55"
            width="120"
            height="185"
            rx="8"
            fill="#F0F7FF"
            stroke="#2563EB"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          {/* Pillar number */}
          <text
            x={p.x + 60}
            y="95"
            textAnchor="middle"
            fontSize="26"
            fill="#2563EB"
            fillOpacity="0.25"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            0{idx + 1}
          </text>
          {/* Pillar title */}
          <text
            x={p.x + 60}
            y="130"
            textAnchor="middle"
            fontSize="12"
            fill="#0A2540"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            {p.label}
          </text>
          {/* Pillar subtitle */}
          <text
            x={p.x + 60}
            y="150"
            textAnchor="middle"
            fontSize="10"
            fill="#4B5563"
            fontFamily="Inter, sans-serif"
          >
            {p.sub}
          </text>
          {/* Connection dots */}
          <circle cx={p.x + 60} cy="190" r="4" fill="#2563EB" fillOpacity="0.35" />
          <circle cx={p.x + 60} cy="205" r="3" fill="#2563EB" fillOpacity="0.25" />
          <circle cx={p.x + 60} cy="217" r="2" fill="#2563EB" fillOpacity="0.15" />
        </g>
      ))}

      {/* Connecting arrows between pillars */}
      {[0, 1, 2].map((idx) => (
        <line
          key={`arrow-${idx}`}
          x1={pillars[idx].x + 120}
          y1="140"
          x2={pillars[idx + 1].x}
          y2="140"
          stroke="#2563EB"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeDasharray="4 3"
          markerEnd="url(#arrowhead)"
        />
      ))}

      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#2563EB" fillOpacity="0.5" />
        </marker>
      </defs>
    </svg>
  )
}
