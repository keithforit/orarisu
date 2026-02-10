import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface ModelData {
  name: string;
  icon: string;
  mentions: number;
  change: number;
  shareOfVoice: number;
  trend: number[];
  color: string;
}

export function ShareOfModelTable() {
  const modelData: ModelData[] = [
    {
      name: 'ChatGPT',
      icon: '🤖',
      mentions: 24567,
      change: 12.5,
      shareOfVoice: 42,
      trend: [30, 35, 32, 38, 42, 40, 45, 48, 44, 50, 48, 52],
      color: '#00CCCC',
    },
    {
      name: 'Perplexity',
      icon: '🔮',
      mentions: 18934,
      change: 8.3,
      shareOfVoice: 34,
      trend: [25, 28, 30, 29, 32, 35, 33, 36, 38, 37, 40, 42],
      color: '#007BFF',
    },
    {
      name: 'Gemini',
      icon: '✨',
      mentions: 15782,
      change: -2.1,
      shareOfVoice: 24,
      trend: [35, 38, 36, 34, 32, 30, 28, 29, 27, 26, 25, 24],
      color: '#6F42C1',
    },
  ];

  const generateSparklineData = (trend: number[]) => {
    return trend.map((value, index) => ({ value, index }));
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl mb-2" style={{ color: '#0D1117' }}>
            Share of Model
          </h2>
          <p className="text-lg" style={{ color: '#0D1117', opacity: 0.6 }}>
            Your brand's visibility across major AI models
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-lg border overflow-hidden" style={{ borderColor: '#6F42C120' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#6F42C1]/5 to-[#007BFF]/5 border-b" style={{ borderColor: '#6F42C120' }}>
                  <th className="text-left px-6 py-4" style={{ color: '#0D1117' }}>
                    Model
                  </th>
                  <th className="text-left px-6 py-4" style={{ color: '#0D1117' }}>
                    Mentions (24h)
                  </th>
                  <th className="text-left px-6 py-4" style={{ color: '#0D1117' }}>
                    Change
                  </th>
                  <th className="text-left px-6 py-4" style={{ color: '#0D1117' }}>
                    Share of Voice
                  </th>
                  <th className="text-left px-6 py-4" style={{ color: '#0D1117' }}>
                    24h Trend
                  </th>
                </tr>
              </thead>
              <tbody>
                {modelData.map((model, index) => (
                  <tr 
                    key={index}
                    className="border-b last:border-b-0 transition-colors hover:bg-[#F8F9FC]"
                    style={{ borderColor: '#6F42C120' }}
                  >
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                          style={{ backgroundColor: `${model.color}15` }}
                        >
                          {model.icon}
                        </div>
                        <span style={{ color: '#0D1117' }}>
                          {model.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-xl" style={{ color: '#0D1117' }}>
                        {model.mentions.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div 
                        className="flex items-center gap-2"
                        style={{ color: model.change > 0 ? '#00CCCC' : '#FC0061' }}
                      >
                        {model.change > 0 ? (
                          <TrendingUp className="w-5 h-5" />
                        ) : (
                          <TrendingDown className="w-5 h-5" />
                        )}
                        <span className="text-lg">
                          {Math.abs(model.change)}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="h-2 bg-[#F8F9FC] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${model.shareOfVoice}%`,
                                backgroundColor: model.color,
                              }}
                            />
                          </div>
                        </div>
                        <div className="text-lg" style={{ color: model.color }}>
                          {model.shareOfVoice}%
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <LineChart width={128} height={48} data={generateSparklineData(model.trend)}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke={model.color}
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {modelData.map((model, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border p-6"
              style={{ borderColor: '#6F42C120' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${model.color}15` }}
                  >
                    {model.icon}
                  </div>
                  <span className="text-xl" style={{ color: '#0D1117' }}>
                    {model.name}
                  </span>
                </div>
                <div 
                  className="flex items-center gap-2"
                  style={{ color: model.change > 0 ? '#00CCCC' : '#FC0061' }}
                >
                  {model.change > 0 ? (
                    <TrendingUp className="w-5 h-5" />
                  ) : (
                    <TrendingDown className="w-5 h-5" />
                  )}
                  <span>{Math.abs(model.change)}%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-sm mb-1" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Mentions (24h)
                  </div>
                  <div className="text-2xl" style={{ color: '#0D1117' }}>
                    {model.mentions.toLocaleString()}
                  </div>
                </div>

                <div>
                  <div className="text-sm mb-2" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Share of Voice: {model.shareOfVoice}%
                  </div>
                  <div className="h-2 bg-[#F8F9FC] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${model.shareOfVoice}%`,
                        backgroundColor: model.color,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="text-sm mb-2" style={{ color: '#0D1117', opacity: 0.6 }}>
                    24h Trend
                  </div>
                  <div style={{ width: '100%', height: '64px' }}>
                    <ResponsiveContainer width="100%" height={64}>
                      <LineChart data={generateSparklineData(model.trend)}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke={model.color}
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-xl border" style={{ backgroundColor: '#F8F9FC', borderColor: '#6F42C120' }}>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5" style={{ color: '#00CCCC' }} />
              <span className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                Total Mentions
              </span>
            </div>
            <div className="text-3xl" style={{ color: '#0D1117' }}>
              59,283
            </div>
          </div>

          <div className="p-6 rounded-xl border" style={{ backgroundColor: '#F8F9FC', borderColor: '#6F42C120' }}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" style={{ color: '#00CCCC' }} />
              <span className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                Avg. Growth
              </span>
            </div>
            <div className="text-3xl" style={{ color: '#00CCCC' }}>
              +6.2%
            </div>
          </div>

          <div className="p-6 rounded-xl border" style={{ backgroundColor: '#F8F9FC', borderColor: '#6F42C120' }}>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5" style={{ color: '#007BFF' }} />
              <span className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                Models Tracked
              </span>
            </div>
            <div className="text-3xl" style={{ color: '#0D1117' }}>
              3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}