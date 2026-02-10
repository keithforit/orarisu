import { Search, BarChart3, DollarSign, Trophy, ChevronLeft, ChevronRight, Calendar, ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';

export function Pricing() {
  const [selectedPillars, setSelectedPillars] = useState<string[]>([]);
  const [shareOfModel, setShareOfModel] = useState(15);
  const [currentSlide, setCurrentSlide] = useState(0);

  const pillars = [
    {
      id: 'discovery',
      name: 'Discovery',
      description: 'AI Content Studio with script-to-video pipeline',
      icon: Search,
      color: '#007BFF',
      basePrice: 299,
      features: [
        'Script-to-Video AI Pipeline',
        'Multi-format content generation',
        'Brand voice customization',
        'Unlimited exports',
      ],
    },
    {
      id: 'tracking',
      name: 'Tracking',
      description: 'GEO Analytics for AI visibility monitoring',
      icon: BarChart3,
      color: '#6F42C1',
      basePrice: 499,
      features: [
        'Real-time AI mention tracking',
        'Cross-model analytics (ChatGPT, Perplexity, Gemini)',
        'Competitive benchmarking',
        'Custom reporting',
      ],
    },
    {
      id: 'payments',
      name: 'Payments',
      description: 'Smart Attribution & publisher rewards',
      icon: DollarSign,
      color: '#00CCCC',
      basePrice: 399,
      features: [
        'Automated attribution tracking',
        'Publisher payment processing',
        'Performance-based rewards',
        'Transparent analytics',
      ],
    },
    {
      id: 'gamification',
      name: 'Gamification',
      description: 'Aura Network for creator engagement',
      icon: Trophy,
      color: '#FC0061',
      basePrice: 199,
      features: [
        'Creator leaderboards',
        'Achievement system',
        'Reputation scoring',
        'Community rewards',
      ],
    },
  ];

  const academyResources = [
    {
      title: 'GEO Fundamentals',
      level: 'Tactical',
      duration: '45 min',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      description: 'Learn the basics of Generative Engine Optimization',
    },
    {
      title: 'AI Citation Strategy',
      level: 'Strategic',
      duration: '1.5 hours',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      description: 'Advanced tactics for maximizing AI visibility',
    },
    {
      title: 'Content-to-Video Mastery',
      level: 'Tactical',
      duration: '1 hour',
      thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800',
      description: 'Create compelling video content at scale',
    },
    {
      title: 'Publisher Attribution ROI',
      level: 'Executive',
      duration: '2 hours',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      description: 'Measure and optimize attribution performance',
    },
    {
      title: 'Multi-Model Analytics',
      level: 'Strategic',
      duration: '1.5 hours',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      description: 'Track brand presence across AI platforms',
    },
    {
      title: 'Enterprise GEO Implementation',
      level: 'Executive',
      duration: '3 hours',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      description: 'Full-scale GEO strategy for large organizations',
    },
  ];

  const togglePillar = (pillarId: string) => {
    setSelectedPillars(prev =>
      prev.includes(pillarId)
        ? prev.filter(id => id !== pillarId)
        : [...prev, pillarId]
    );
  };

  const calculateTotal = () => {
    return pillars
      .filter(p => selectedPillars.includes(p.id))
      .reduce((sum, p) => sum + p.basePrice, 0);
  };

  const calculateShareGrowth = () => {
    const multiplier = selectedPillars.length * 0.3;
    return Math.min(shareOfModel + (shareOfModel * multiplier), 85);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3) % academyResources.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 + academyResources.length) % academyResources.length);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Tactical':
        return '#007BFF';
      case 'Strategic':
        return '#6F42C1';
      case 'Executive':
        return '#FC0061';
      default:
        return '#00CCCC';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ borderColor: '#6F42C1', backgroundColor: '#6F42C110' }}>
              <span className="text-sm tracking-wide" style={{ color: '#6F42C1' }}>
                FLEXIBLE PRICING
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ color: '#6F42C1' }}>
              Build Your Perfect Plan
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#0D1117', opacity: 0.7 }}>
              Select the pillars you need. Pay only for what you use. Scale as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Pillars Section */}
      <section className="py-16 px-6 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Choose Your Pillars
            </h2>
            <p className="text-lg" style={{ color: '#0D1117', opacity: 0.7 }}>
              Mix and match to create your ideal platform experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isSelected = selectedPillars.includes(pillar.id);

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`h-full bg-white rounded-3xl p-8 border-2 transition-all duration-300 cursor-pointer ${
                      isSelected ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'
                    }`}
                    style={{
                      borderColor: isSelected ? pillar.color : '#6F42C120',
                      boxShadow: isSelected ? `0 0 40px ${pillar.color}40` : undefined,
                    }}
                    onClick={() => togglePillar(pillar.id)}
                  >
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${pillar.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: pillar.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl mb-2" style={{ color: '#0D1117' }}>
                      {pillar.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm mb-6" style={{ color: '#0D1117', opacity: 0.7 }}>
                      {pillar.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl" style={{ color: pillar.color }}>
                        ${pillar.basePrice}
                      </span>
                      <span className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                        /month
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: pillar.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Toggle Switch */}
                    <button
                      className={`w-full py-3 rounded-xl transition-all ${
                        isSelected
                          ? 'text-white'
                          : 'border-2'
                      }`}
                      style={{
                        backgroundColor: isSelected ? pillar.color : 'transparent',
                        borderColor: isSelected ? pillar.color : '#0D111720',
                        color: isSelected ? 'white' : '#0D1117',
                      }}
                    >
                      {isSelected ? 'Added to Plan ✓' : 'Add to Plan'}
                    </button>

                    {/* Glow Effect */}
                    {isSelected && (
                      <div
                        className="absolute inset-0 rounded-3xl opacity-20 blur-xl -z-10"
                        style={{ backgroundColor: pillar.color }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Total */}
          {selectedPillars.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2"
              style={{ borderColor: '#6F42C120' }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-sm mb-2" style={{ color: '#0D1117', opacity: 0.7 }}>
                    Your Custom Plan
                  </div>
                  <div className="text-5xl bg-gradient-to-r from-[#6F42C1] to-[#007BFF] bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
                    ${calculateTotal()}
                    <span className="text-2xl">/month</span>
                  </div>
                  <div className="text-sm mt-2" style={{ color: '#00CCCC' }}>
                    Save 20% with annual billing
                  </div>
                </div>

                <Link
                  to="/signup"
                  className="px-10 py-4 rounded-xl text-lg bg-gradient-to-r from-[#6F42C1] to-[#007BFF] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Aura Calculator Widget */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#6F42C1]/5 to-[#007BFF]/5 rounded-3xl p-12 border-2"
            style={{ borderColor: '#6F42C120' }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#6F42C1' }}>
                Aura Calculator
              </h2>
              <p className="text-lg" style={{ color: '#0D1117', opacity: 0.7 }}>
                Estimate your potential Share of Model growth
              </p>
            </div>

            <div className="space-y-8">
              {/* Current Share */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg" style={{ color: '#0D1117' }}>
                    Current Share of Model
                  </span>
                  <span className="text-3xl" style={{ color: '#007BFF' }}>
                    {shareOfModel}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={shareOfModel}
                  onChange={(e) => setShareOfModel(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #007BFF 0%, #007BFF ${shareOfModel}%, #0D111720 ${shareOfModel}%, #0D111720 100%)`,
                  }}
                />
              </div>

              {/* Projected Growth */}
              {selectedPillars.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 border-2"
                  style={{ borderColor: '#00CCCC40' }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg" style={{ color: '#0D1117' }}>
                      Projected Share with {selectedPillars.length} Pillar{selectedPillars.length > 1 ? 's' : ''}
                    </span>
                    <span className="text-4xl" style={{ color: '#00CCCC' }}>
                      {calculateShareGrowth().toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#0D111710] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${calculateShareGrowth()}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#00CCCC] to-[#007BFF]"
                    />
                  </div>
                  <div className="mt-4 text-sm text-center" style={{ color: '#00CCCC' }}>
                    +{(calculateShareGrowth() - shareOfModel).toFixed(1)}% potential growth
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-24 px-6 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Orarisu Academy
            </h2>
            <p className="text-lg" style={{ color: '#0D1117', opacity: 0.7 }}>
              Master the art of AI visibility with expert-led courses
            </p>
          </motion.div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center transition-all hover:shadow-lg"
                style={{ borderColor: '#6F42C120' }}
              >
                <ChevronLeft className="w-5 h-5" style={{ color: '#0D1117' }} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center transition-all hover:shadow-lg"
                style={{ borderColor: '#6F42C120' }}
              >
                <ChevronRight className="w-5 h-5" style={{ color: '#0D1117' }} />
              </button>
            </div>

            <div className="flex gap-2">
              {['All', 'Tactical', 'Strategic', 'Executive'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 rounded-lg text-sm transition-all"
                  style={{
                    backgroundColor: filter === 'All' ? '#007BFF' : 'white',
                    color: filter === 'All' ? 'white' : '#0D1117',
                    border: filter === 'All' ? 'none' : '1px solid #0D111720',
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Resource Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {academyResources.slice(currentSlide, currentSlide + 3).map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-6 h-6 ml-1" style={{ color: '#6F42C1' }} />
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs text-white backdrop-blur-sm"
                    style={{ backgroundColor: `${getLevelColor(resource.level)}90` }}
                  >
                    {resource.level}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2" style={{ color: '#0D1117' }}>
                    {resource.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#0D1117', opacity: 0.7 }}>
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    <Calendar className="w-4 h-4" />
                    {resource.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Footer / CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#6F42C1] to-[#007BFF] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Growth, Learning, and Long-Term Value
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join leading brands that are shaping the future of AI visibility. Get personalized guidance from our strategy team.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="px-10 py-4 rounded-xl text-lg bg-white text-[#6F42C1] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Start Free Trial
              </Link>
              <button
                className="px-10 py-4 rounded-xl text-lg border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                Book 1-on-1 Strategy Session
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00CCCC]" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00CCCC]" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00CCCC]" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00CCCC]" />
                Dedicated support
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
