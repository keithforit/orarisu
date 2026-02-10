import { TrendingUp, Globe2, Sparkles, ArrowRight, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function AboutUs() {
  const stats = [
    { value: '900k+', label: 'Partners' },
    { value: '120+', label: 'Countries' },
    { value: '10M+', label: 'AI Citations' },
    { value: '99.9%', label: 'Uptime' },
  ];

  const philosophy = [
    {
      title: 'From Affiliate to Influence',
      description: 'We evolved performance marketing into AI-driven brand visibility. Where traditional attribution ends, Aura begins.',
      icon: TrendingUp,
      color: '#007BFF',
    },
    {
      title: 'AI-First',
      description: 'Built for the era where ChatGPT, Perplexity, and Gemini shape purchase decisions. We optimize for generative engines, not just search.',
      icon: Sparkles,
      color: '#6F42C1',
    },
    {
      title: 'Global Bridge',
      description: 'Connecting publishers, brands, and agencies across continents. Our platform speaks English, Japanese, and Chinese—because influence is universal.',
      icon: Globe2,
      color: '#00CCCC',
    },
  ];

  const timeline = [
    {
      phase: 'Legacy Performance',
      year: '2010-2020',
      description: 'Traditional affiliate marketing. Link-based attribution. Search engine optimization.',
      color: '#0D1117',
    },
    {
      phase: 'The AI Inflection',
      year: '2021-2023',
      description: 'ChatGPT launches. Generative engines emerge. Traditional SEO metrics become insufficient.',
      color: '#007BFF',
    },
    {
      phase: 'Generative Engine Optimization',
      year: '2024',
      description: 'Orarisu pioneers GEO. Tracking brand mentions across AI models. Attribution for the AI age.',
      color: '#6F42C1',
    },
    {
      phase: 'AI-Driven Aura',
      year: 'Today',
      description: 'Content Studio meets analytics. Publishers earn from AI citations. Brands dominate generative search.',
      color: '#00CCCC',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-[#6F42C1] to-[#007BFF] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-br from-[#00CCCC] to-[#6F42C1] rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 md:py-48">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ borderColor: '#6F42C1', backgroundColor: '#6F42C110' }}>
              <span className="text-sm tracking-wide" style={{ color: '#6F42C1' }}>
                OUR STORY
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl mb-8 tracking-tight leading-tight" style={{ color: '#6F42C1' }}>
              From Bridge<br />to Aura
            </h1>

            <p className="text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#0D1117', opacity: 0.7 }}>
              We started as a bridge between performance marketing and brand building. Today, we're the platform where brands become <span style={{ color: '#6F42C1' }}>visible to AI</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Stats Section */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#6F42C1] to-[#007BFF] rounded-3xl p-12 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-lg text-white/80 tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-8 border-t border-white/20 text-center"
            >
              <div className="text-white/90 text-lg tracking-wide">
                ENTERPRISE-READY • GLOBALLY TRUSTED • AI-NATIVE
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Philosophy Grid */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-6 tracking-tight" style={{ color: '#6F42C1' }}>
              Our Philosophy
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#0D1117', opacity: 0.7 }}>
              Three principles that guide everything we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="h-full bg-white border-2 rounded-3xl p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: `${item.color}40` }}>
                    {/* Decorative Line Art Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden rounded-tr-3xl">
                      <Icon className="w-full h-full" style={{ color: item.color }} />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: item.color }} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl mb-4 leading-tight" style={{ color: '#0D1117' }}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg leading-relaxed" style={{ color: '#0D1117', opacity: 0.7 }}>
                        {item.description}
                      </p>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline/Visual Narrative - The Bridge */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6 tracking-tight" style={{ color: '#6F42C1' }}>
              The Bridge We Built
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#0D1117', opacity: 0.7 }}>
              From legacy performance to AI-driven influence
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0D1117] via-[#007BFF] via-[#6F42C1] to-[#00CCCC]" />

            {timeline.map((phase, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative mb-16 md:mb-20 ${isLeft ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                >
                  <div className={`flex items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-12`}>
                    {/* Node Circle */}
                    <div className="relative flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: phase.color }}
                      >
                        <Circle className="w-8 h-8 text-white fill-current" />
                      </motion.div>
                      
                      {/* Pulsing Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: phase.color }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      />
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div
                        className="inline-block bg-white border-2 rounded-2xl p-8 shadow-lg"
                        style={{ borderColor: `${phase.color}40` }}
                      >
                        <div className="text-sm tracking-wide mb-2" style={{ color: phase.color, opacity: 0.8 }}>
                          {phase.year}
                        </div>
                        <h3 className="text-2xl md:text-3xl mb-3" style={{ color: '#0D1117' }}>
                          {phase.phase}
                        </h3>
                        <p className="text-lg leading-relaxed" style={{ color: '#0D1117', opacity: 0.7 }}>
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl mb-8 tracking-tight leading-tight" style={{ color: '#6F42C1' }}>
              Join the Future<br />of Discovery
            </h2>

            <p className="text-2xl mb-12 max-w-2xl mx-auto" style={{ color: '#0D1117', opacity: 0.7 }}>
              Be part of the platform where brands, publishers, and agencies thrive in the AI era.
            </p>

            <Link
              to="/signup"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
              style={{ backgroundColor: '#00CCCC', color: 'white' }}
            >
              Start Your Journey
              <ArrowRight className="w-6 h-6" />
            </Link>

            {/* Trust Elements */}
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-sm tracking-wide" style={{ color: '#0D1117', opacity: 0.5 }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
                No credit card required
              </div>
              <div className="hidden md:block w-px h-4 bg-[#0D1117]/20" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
                Enterprise support available
              </div>
              <div className="hidden md:block w-px h-4 bg-[#0D1117]/20" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
                Global infrastructure
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
