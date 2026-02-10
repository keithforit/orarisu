import { TrendingUp, Users, DollarSign } from 'lucide-react';

export function Strategy() {
  const strategies = [
    {
      icon: TrendingUp,
      title: 'Beyond the Last Click',
      description: 'We track the full funnel, showing how AI mentions drive awareness long before the purchase.',
      color: '#6F42C1',
    },
    {
      icon: Users,
      title: 'Human-Centric AI',
      description: 'AI handles the automation, but our platform provides the strategic guidance you need to make the final call.',
      color: '#007BFF',
    },
    {
      icon: DollarSign,
      title: 'Frictionless Payouts',
      description: 'Seamlessly manage contracts and payments across JPY, USD, and global currencies.',
      color: '#00CCCC',
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#F8F9FC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
            The Orarisu Strategy
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0D1117', opacity: 0.6 }}>
            Your strategic partner in the AI-driven marketing landscape
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <div 
                key={index}
                className="relative p-8 rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${strategy.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: strategy.color }} />
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3" style={{ color: '#0D1117' }}>
                  {strategy.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed" style={{ color: '#0D1117', opacity: 0.7 }}>
                  {strategy.description}
                </p>

                {/* Decorative accent */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10"
                  style={{ backgroundColor: strategy.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
