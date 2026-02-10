export function GlobalRoles() {
  const roles = [
    {
      role: 'Brands',
      benefit: 'Global Visibility & ROI',
      feature: 'Real-time sentiment heatmaps and automated cross-border localization.',
    },
    {
      role: 'Agencies',
      benefit: 'Campaign Command Center',
      feature: 'AI-powered creator matchmaking based on audience "vibe" and sentiment alignment.',
    },
    {
      role: 'Publishers',
      benefit: 'Content & Attribution',
      feature: 'Multi-touch attribution that tracks "Share of Voice" and AI-driven citations.',
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#F8F9FC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
            Built for Every Player
          </h2>
          <p className="text-xl" style={{ color: '#0D1117', opacity: 0.6 }}>
            Global roles, unified platform
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#6F42C1]/10 to-[#007BFF]/10">
                  <th className="text-left px-8 py-6 text-lg" style={{ color: '#0D1117' }}>
                    Role
                  </th>
                  <th className="text-left px-8 py-6 text-lg" style={{ color: '#0D1117' }}>
                    Core Benefit
                  </th>
                  <th className="text-left px-8 py-6 text-lg" style={{ color: '#0D1117' }}>
                    Key Feature
                  </th>
                </tr>
              </thead>
              <tbody>
                {roles.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-b last:border-b-0 transition-colors hover:bg-[#F8F9FC]"
                    style={{ borderColor: '#6F42C120' }}
                  >
                    <td className="px-8 py-6">
                      <span className="inline-block px-4 py-2 rounded-lg" style={{ 
                        backgroundColor: '#6F42C115',
                        color: '#6F42C1'
                      }}>
                        {item.role}
                      </span>
                    </td>
                    <td className="px-8 py-6" style={{ color: '#0D1117' }}>
                      {item.benefit}
                    </td>
                    <td className="px-8 py-6" style={{ color: '#0D1117', opacity: 0.7 }}>
                      {item.feature}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            {roles.map((item, index) => (
              <div 
                key={index}
                className="p-6 border-b last:border-b-0"
                style={{ borderColor: '#6F42C120' }}
              >
                <div className="mb-3">
                  <span className="inline-block px-4 py-2 rounded-lg" style={{ 
                    backgroundColor: '#6F42C115',
                    color: '#6F42C1'
                  }}>
                    {item.role}
                  </span>
                </div>
                <div className="mb-2" style={{ color: '#0D1117' }}>
                  <strong>Core Benefit:</strong> {item.benefit}
                </div>
                <div style={{ color: '#0D1117', opacity: 0.7 }}>
                  <strong>Key Feature:</strong> {item.feature}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
