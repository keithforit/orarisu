export function Statistics() {
  const stats = [
    { value: '900,000+', label: 'Partners in our Global Network' },
    { value: '10,000+', label: 'Brands Scaling Globally' },
    { value: '50M+', label: 'AI Mentions Tracked' },
    { value: '120+', label: 'Countries Reached' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#6F42C1] via-[#007BFF] to-[#00CCCC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-2 text-white">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
