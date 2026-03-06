'use client'
export default function HeroNetwork({ className = '' }: { className?: string }) {
  // Nodes positioned in a network constellation
  const nodes = [
    { cx: 150, cy: 80, r: 4 },
    { cx: 280, cy: 45, r: 3 },
    { cx: 400, cy: 90, r: 5 },
    { cx: 520, cy: 50, r: 3.5 },
    { cx: 640, cy: 100, r: 4 },
    { cx: 100, cy: 180, r: 3 },
    { cx: 240, cy: 160, r: 5 },
    { cx: 360, cy: 200, r: 6 },
    { cx: 480, cy: 170, r: 4 },
    { cx: 600, cy: 210, r: 3.5 },
    { cx: 720, cy: 160, r: 4 },
    { cx: 180, cy: 280, r: 4.5 },
    { cx: 320, cy: 310, r: 3 },
    { cx: 440, cy: 270, r: 5 },
    { cx: 560, cy: 300, r: 4 },
    { cx: 680, cy: 260, r: 3.5 },
    { cx: 80, cy: 340, r: 3 },
    { cx: 250, cy: 380, r: 4 },
    { cx: 500, cy: 360, r: 4.5 },
    { cx: 650, cy: 350, r: 3 },
  ]

  // Connections between nodes (index pairs)
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [0, 6], [1, 6], [2, 7], [3, 8], [4, 9], [4, 10],
    [5, 6], [6, 7], [7, 8], [8, 9], [9, 10],
    [5, 11], [6, 11], [7, 12], [7, 13], [8, 13], [9, 14], [10, 15],
    [11, 12], [12, 13], [13, 14], [14, 15],
    [11, 16], [11, 17], [12, 17], [13, 18], [14, 18], [15, 19],
    [16, 17], [17, 18], [18, 19],
  ]

  return (
    <svg
      viewBox="0 0 800 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0A2540" stopOpacity="0" />
        </radialGradient>
        <filter id="node-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <ellipse cx="400" cy="210" rx="350" ry="200" fill="url(#hero-glow)" />

      {/* Connection lines */}
      {connections.map(([i, j], idx) => (
        <line
          key={`conn-${idx}`}
          x1={nodes[i].cx}
          y1={nodes[i].cy}
          x2={nodes[j].cx}
          y2={nodes[j].cy}
          stroke="#2563EB"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <g key={`node-${idx}`}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r * 3}
            fill="#2563EB"
            fillOpacity="0.06"
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#2563EB"
            fillOpacity="0.6"
            filter="url(#node-glow)"
          />
        </g>
      ))}
    </svg>
  )
}
