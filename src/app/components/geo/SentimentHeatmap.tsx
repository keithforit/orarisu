import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface DataPoint {
  region: string;
  sentiment: number;
  change: number;
  x: number;
  y: number;
}

export function SentimentHeatmap() {
  const dataPoints: DataPoint[] = [
    { region: 'North America', sentiment: 92, change: 8, x: 20, y: 35 },
    { region: 'Europe', sentiment: 78, change: -3, x: 50, y: 30 },
    { region: 'East Asia', sentiment: 85, change: 12, x: 75, y: 40 },
    { region: 'Southeast Asia', sentiment: 71, change: 5, x: 75, y: 55 },
    { region: 'South America', sentiment: 64, change: 0, x: 30, y: 70 },
    { region: 'Middle East', sentiment: 68, change: 4, x: 58, y: 45 },
    { region: 'Oceania', sentiment: 88, change: 6, x: 85, y: 75 },
  ];

  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 80) return '#00CCCC';
    if (sentiment >= 70) return '#007BFF';
    if (sentiment >= 60) return '#6F42C1';
    return '#FC0061';
  };

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-3 h-3" />;
    if (change < 0) return <TrendingDown className="w-3 h-3" />;
    return <Minus className="w-3 h-3" />;
  };

  return (
    <section className="py-12" style={{ backgroundColor: '#F8F9FC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl mb-2" style={{ color: '#0D1117' }}>
            Global Sentiment Heatmap
          </h2>
          <p className="text-lg" style={{ color: '#0D1117', opacity: 0.6 }}>
            Brand perception across AI models by region
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border" style={{ borderColor: '#6F42C120' }}>
          {/* Map Visualization */}
          <div className="relative w-full h-[500px] bg-gradient-to-br from-[#F8F9FC] to-white rounded-xl overflow-hidden mb-6">
            {/* World map background using SVG with detailed paths */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 1000 500"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* North America */}
              <path 
                d="M150,100 L180,90 L220,95 L250,85 L270,100 L280,130 L290,150 L280,180 L260,200 L240,210 L220,220 L200,230 L180,240 L160,250 L140,240 L120,220 L110,200 L100,180 L90,160 L95,140 L110,120 L130,105 Z"
                fill="#0D1117"
                stroke="#0D1117"
                strokeWidth="0.5"
              />
              {/* South America */}
              <path 
                d="M240,280 L260,270 L280,280 L290,300 L295,330 L290,360 L280,390 L265,410 L250,420 L235,415 L225,400 L220,380 L218,360 L220,340 L225,320 L230,300 Z"
                fill="#0D1117"
                stroke="#0D1117"
                strokeWidth="0.5"
              />
              {/* Europe */}
              <path 
                d="M480,110 L510,105 L540,110 L560,120 L570,135 L565,150 L550,160 L530,165 L510,162 L490,155 L475,140 L470,125 Z"
                fill="#0D1117"
                stroke="#0D1117"
                strokeWidth="0.5"
              />
              {/* Africa */}
              <path 
                d="M480,180 L510,175 L540,180 L560,195 L570,220 L575,250 L570,280 L560,310 L545,335 L525,350 L505,355 L485,350 L470,335 L460,310 L455,280 L458,250 L465,220 L475,200 Z"
                fill="#0D1117"
                stroke="#0D1117"
                strokeWidth="0.5"
              />
              {/* Asia */}
              <path 
                d="M580,90 L620,85 L660,90 L700,95 L740,105 L770,120 L785,140 L790,165 L785,190 L770,210 L750,225 L725,235 L700,240 L675,238 L650,230 L625,215 L605,195 L590,170 L583,145 L580,120 Z"
                fill="#0D1117"
                stroke="#0D1117"
                strokeWidth="0.5"
              />
              {/* Southeast Asia */}
              <path 
                d="M700,250 L720,245 L740,250 L755,265 L765,285 L760,305 L745,315 L725,318 L710,310 L700,295 L695,275 Z"
                fill="#0D1117"
                stroke="#0D1117"
                strokeWidth="0.5"
              />
              {/* Australia */}
              <path 
                d="M750,340 L780,335 L810,340 L835,355 L845,375 L840,395 L820,410 L790,415 L765,410 L745,395 L738,375 L740,355 Z"
                fill="#0D1117"
                stroke="#0D1117"
                strokeWidth="0.5"
              />
              {/* Greenland */}
              <path 
                d="M280,40 L310,35 L335,45 L345,65 L340,85 L320,95 L300,90 L285,75 L278,55 Z"
                fill="#0D1117"
                stroke="#0D1117"
                strokeWidth="0.5"
              />
              {/* Antarctica (bottom) */}
              <path 
                d="M50,460 L950,460 L940,480 L900,490 L850,495 L800,498 L700,500 L600,500 L500,500 L400,498 L300,495 L200,490 L100,480 L60,470 Z"
                fill="#0D1117"
                stroke="#0D1117"
                strokeWidth="0.5"
              />
              
              {/* Grid lines for latitude/longitude effect */}
              <g opacity="0.15" stroke="#0D1117" strokeWidth="0.5" fill="none">
                {/* Horizontal lines (latitude) */}
                <line x1="0" y1="125" x2="1000" y2="125" />
                <line x1="0" y1="250" x2="1000" y2="250" />
                <line x1="0" y1="375" x2="1000" y2="375" />
                {/* Vertical lines (longitude) */}
                <line x1="250" y1="0" x2="250" y2="500" />
                <line x1="500" y1="0" x2="500" y2="500" />
                <line x1="750" y1="0" x2="750" y2="500" />
              </g>
            </svg>

            {/* Data Points */}
            {dataPoints.map((point, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Pulse Ring */}
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-75"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: getSentimentColor(point.sentiment),
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%',
                  }}
                />

                {/* Main Node */}
                <div
                  className="relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-125"
                  style={{
                    backgroundColor: getSentimentColor(point.sentiment),
                    boxShadow: `0 0 20px ${getSentimentColor(point.sentiment)}80`,
                  }}
                >
                  <span className="text-xs text-white">
                    {point.sentiment}
                  </span>
                </div>

                {/* Tooltip */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -top-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                  style={{ width: '200px' }}
                >
                  <div 
                    className="bg-white rounded-lg shadow-xl p-4 border"
                    style={{ borderColor: getSentimentColor(point.sentiment) }}
                  >
                    <div className="text-sm mb-2" style={{ color: '#0D1117' }}>
                      {point.region}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl" style={{ color: getSentimentColor(point.sentiment) }}>
                        {point.sentiment}
                      </div>
                      <div 
                        className="flex items-center gap-1 text-sm"
                        style={{ color: point.change > 0 ? '#00CCCC' : point.change < 0 ? '#FC0061' : '#0D1117' }}
                      >
                        {getTrendIcon(point.change)}
                        <span>{Math.abs(point.change)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
              <span className="text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
                Excellent (80+)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#007BFF' }} />
              <span className="text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
                Good (70-79)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#6F42C1' }} />
              <span className="text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
                Fair (60-69)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#FC0061' }} />
              <span className="text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
                Needs Attention (&lt;60)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}