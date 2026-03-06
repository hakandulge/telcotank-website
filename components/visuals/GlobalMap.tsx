'use client'
export default function GlobalMap({ className = '' }: { className?: string }) {
  // Simplified continent outlines as dots + connection lines
  const cities = [
    { cx: 180, cy: 100, label: 'London' },
    { cx: 200, cy: 130, label: 'Istanbul' },
    { cx: 250, cy: 120, label: 'Dubai' },
    { cx: 160, cy: 80, label: 'Stockholm' },
    { cx: 300, cy: 140, label: 'Riyadh' },
    { cx: 340, cy: 110, label: 'Almaty' },
    { cx: 380, cy: 130, label: 'Delhi' },
    { cx: 440, cy: 150, label: 'Singapore' },
    { cx: 120, cy: 170, label: 'Lagos' },
    { cx: 160, cy: 200, label: 'Nairobi' },
    { cx: 80, cy: 110, label: 'NYC' },
    { cx: 50, cy: 130, label: 'São Paulo' },
    { cx: 500, cy: 100, label: 'Tokyo' },
  ]

  const routes = [
    [0, 1], [1, 2], [2, 4], [0, 3], [4, 5], [5, 6], [6, 7],
    [0, 10], [1, 8], [2, 9], [7, 12], [10, 11], [3, 5],
    [0, 8], [8, 9], [4, 6], [6, 12],
  ]

  return (
    <svg
      viewBox="0 0 560 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <ellipse cx="280" cy="140" rx="260" ry="130" fill="url(#map-glow)" />

      {/* Route lines */}
      {routes.map(([i, j], idx) => (
        <line
          key={idx}
          x1={cities[i].cx}
          y1={cities[i].cy}
          x2={cities[j].cx}
          y2={cities[j].cy}
          stroke="#2563EB"
          strokeOpacity="0.2"
          strokeWidth="0.8"
          strokeDasharray="4 3"
        />
      ))}

      {/* City nodes */}
      {cities.map((city, idx) => (
        <g key={idx}>
          <circle cx={city.cx} cy={city.cy} r="8" fill="#2563EB" fillOpacity="0.08" />
          <circle cx={city.cx} cy={city.cy} r="3" fill="#2563EB" fillOpacity="0.5" />
          <circle cx={city.cx} cy={city.cy} r="1.5" fill="#2563EB" fillOpacity="0.9" />
        </g>
      ))}
    </svg>
  )
}
