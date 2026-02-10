import { Building2, Phone, FileText, ArrowRight, TrendingUp, Award, DollarSign, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';

export function AdaptiveLanding() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Animated Aura Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#6F42C1]/30 to-[#007BFF]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#007BFF]/30 to-[#00CCCC]/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h1 className="text-6xl md:text-8xl mb-6 tracking-tight" style={{ color: '#0D1117' }}>
                Built for Your Role
              </h1>
              
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12" style={{ color: '#0D1117', opacity: 0.7 }}>
                Select your identity and the workspace adapts to your global visibility needs
              </p>

              {/* Global Bridge 3D Graphic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative max-w-4xl mx-auto h-64"
              >
                <svg className="w-full h-full" viewBox="0 0 800 300">
                  {/* Bridge Structure */}
                  <defs>
                    <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6F42C1" />
                      <stop offset="50%" stopColor="#007BFF" />
                      <stop offset="100%" stopColor="#00CCCC" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Bridge Arc */}
                  <motion.path
                    d="M 100 250 Q 400 50 700 250"
                    fill="none"
                    stroke="url(#bridgeGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  {/* Support Cables */}
                  {[0, 0.2, 0.4, 0.6, 0.8, 1].map((t, i) => {
                    const x = 100 + (600 * t);
                    const y = 250 - 200 * Math.sin(Math.PI * t);
                    return (
                      <motion.line
                        key={i}
                        x1={x}
                        y1={y}
                        x2={x}
                        y2="260"
                        stroke="url(#bridgeGradient)"
                        strokeWidth="2"
                        opacity="0.3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                      />
                    );
                  })}

                  {/* Connection Nodes */}
                  {[
                    { x: 100, y: 250, label: 'Local' },
                    { x: 400, y: 50, label: 'Platform' },
                    { x: 700, y: 250, label: 'Global' },
                  ].map((node, i) => (
                    <g key={i}>
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="12"
                        fill="url(#bridgeGradient)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.8 + i * 0.2 }}
                      >
                        <animate
                          attributeName="opacity"
                          values="0.8;1;0.8"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </motion.circle>
                      <text
                        x={node.x}
                        y={node.y + 35}
                        textAnchor="middle"
                        className="text-sm"
                        fill="#0D1117"
                        opacity="0.6"
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}

                  {/* Data Flow Particles */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.circle
                      key={i}
                      r="4"
                      fill="#00CCCC"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.75,
                      }}
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${i * 0.75}s`}
                      >
                        <mpath href="#bridgePath" />
                      </animateMotion>
                    </motion.circle>
                  ))}
                  
                  <path id="bridgePath" d="M 100 250 Q 400 50 700 250" fill="none" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Adaptive Grid - Three Large Interactive Cards */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Brands Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onMouseEnter={() => setHoveredCard('brands')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <Link to="/geo-analytics">
                  <div 
                    className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{ 
                      borderColor: hoveredCard === 'brands' ? '#6F42C1' : '#6F42C120',
                    }}
                  >
                    {/* Background Gradient */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(135deg, #6F42C1 0%, #007BFF 100%)' }}
                    />

                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#6F42C110' }}>
                          <Building2 className="w-8 h-8" style={{ color: '#6F42C1' }} />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold" style={{ color: '#0D1117' }}>
                            Brands
                          </h2>
                          <p className="text-sm" style={{ color: '#6F42C1' }}>
                            Global Visibility & ROI
                          </p>
                        </div>
                      </div>

                      {/* Dashboard Snippet - Sentiment Heatmap */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border mb-6" style={{ borderColor: '#6F42C120' }}>
                        <div className="text-xs tracking-wide mb-3" style={{ color: '#0D1117', opacity: 0.5 }}>
                          SENTIMENT HEATMAP
                        </div>
                        <div className="space-y-3">
                          {[
                            { model: 'ChatGPT', score: 94, color: '#00CCCC' },
                            { model: 'Perplexity', score: 87, color: '#007BFF' },
                            { model: 'Gemini', score: 91, color: '#6F42C1' },
                            { model: 'Claude', score: 88, color: '#00CCCC' },
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className="text-xs w-20" style={{ color: '#0D1117', opacity: 0.7 }}>
                                {item.model}
                              </div>
                              <div className="flex-1 bg-[#F8F9FC] rounded-full h-3 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.score}%` }}
                                  transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: item.color }}
                                />
                              </div>
                              <div className="text-xs w-8 text-right font-bold" style={{ color: '#0D1117' }}>
                                {item.score}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                          Track brand perception
                        </span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: '#6F42C1' }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Agencies Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onMouseEnter={() => setHoveredCard('agencies')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <Link to="/aura-network">
                  <div 
                    className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{ 
                      borderColor: hoveredCard === 'agencies' ? '#007BFF' : '#007BFF20',
                    }}
                  >
                    {/* Background Gradient */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(135deg, #007BFF 0%, #00CCCC 100%)' }}
                    />

                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#007BFF10' }}>
                          <Phone className="w-8 h-8" style={{ color: '#007BFF' }} />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold" style={{ color: '#0D1117' }}>
                            Agencies
                          </h2>
                          <p className="text-sm" style={{ color: '#007BFF' }}>
                            Campaign Command Center
                          </p>
                        </div>
                      </div>

                      {/* Dashboard Snippet - AI Matchmaking */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border mb-6" style={{ borderColor: '#007BFF20' }}>
                        <div className="text-xs tracking-wide mb-4" style={{ color: '#0D1117', opacity: 0.5 }}>
                          AI MATCHMAKING ENGINE
                        </div>
                        
                        {/* Match Visualization */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex-1 text-center">
                            <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#007BFF20' }}>
                              <div className="w-full h-full rounded-full flex items-center justify-center text-xl">
                                🏢
                              </div>
                            </div>
                            <div className="text-xs" style={{ color: '#0D1117', opacity: 0.6 }}>
                              Brand
                            </div>
                          </div>

                          <div className="flex-shrink-0 px-4">
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="relative"
                            >
                              <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center text-white font-bold" style={{ backgroundColor: '#007BFF' }}>
                                <div className="text-xl">98%</div>
                              </div>
                              <div className="absolute inset-0 rounded-full" style={{ backgroundColor: '#007BFF', opacity: 0.3, filter: 'blur(8px)' }} />
                            </motion.div>
                          </div>

                          <div className="flex-1 text-center">
                            <div className="w-12 h-12 rounded-full mx-auto mb-2" style={{ backgroundColor: '#00CCCC20' }}>
                              <div className="w-full h-full rounded-full flex items-center justify-center text-xl">
                                👤
                              </div>
                            </div>
                            <div className="text-xs" style={{ color: '#0D1117', opacity: 0.6 }}>
                              Creator
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#007BFF10' }}>
                            <TrendingUp className="w-4 h-4" style={{ color: '#007BFF' }} />
                            <span className="text-sm font-bold" style={{ color: '#007BFF' }}>
                              Vibe Alignment: Excellent
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                          Optimize partnerships
                        </span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: '#007BFF' }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Publishers Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onMouseEnter={() => setHoveredCard('publishers')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <Link to="/aura-network">
                  <div 
                    className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{ 
                      borderColor: hoveredCard === 'publishers' ? '#00CCCC' : '#00CCCC20',
                    }}
                  >
                    {/* Background Gradient */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(135deg, #00CCCC 0%, #007BFF 100%)' }}
                    />

                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#00CCCC10' }}>
                          <FileText className="w-8 h-8" style={{ color: '#00CCCC' }} />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold" style={{ color: '#0D1117' }}>
                            Publishers
                          </h2>
                          <p className="text-sm" style={{ color: '#00CCCC' }}>
                            Content & Attribution
                          </p>
                        </div>
                      </div>

                      {/* Dashboard Snippet - Aura Score & Commission */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border mb-6" style={{ borderColor: '#00CCCC20' }}>
                        {/* Aura Score */}
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <div className="text-xs tracking-wide mb-1" style={{ color: '#0D1117', opacity: 0.5 }}>
                              YOUR AURA SCORE
                            </div>
                            <div className="text-4xl font-bold" style={{ color: '#0D1117' }}>
                              87
                              <span className="text-lg" style={{ opacity: 0.5 }}>/100</span>
                            </div>
                          </div>
                          <div className="relative w-16 h-16">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="#00CCCC20"
                                strokeWidth="6"
                                fill="none"
                              />
                              <motion.circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="#00CCCC"
                                strokeWidth="6"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray={176}
                                initial={{ strokeDashoffset: 176 }}
                                animate={{ strokeDashoffset: 176 - (176 * 0.87) }}
                                transition={{ duration: 1.5, delay: 0.8 }}
                              />
                            </svg>
                            <Award className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6" style={{ color: '#00CCCC' }} />
                          </div>
                        </div>

                        {/* Commission Notification */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1 }}
                          className="rounded-xl p-4 border-2"
                          style={{ backgroundColor: '#00CCCC10', borderColor: '#00CCCC' }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00CCCC' }}>
                              <DollarSign className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs mb-1" style={{ color: '#0D1117', opacity: 0.6 }}>
                                New Reference Commission
                              </div>
                              <div className="text-xl font-bold" style={{ color: '#00CCCC' }}>
                                +$24.50
                              </div>
                            </div>
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            >
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                          Monetize your content
                        </span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: '#00CCCC' }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar Footer */}
        <section className="py-12" style={{ backgroundColor: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Webridge Legacy Stamp */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#6F42C1' }}>
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/60">
                    Powered by
                  </div>
                  <div className="text-lg font-bold text-white">
                    Webridge Legacy
                  </div>
                </div>
              </div>

              {/* Trust Stats */}
              <div className="flex items-center gap-8 text-center md:text-left">
                <div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-xs text-white/60">Years Operating</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <div className="text-2xl font-bold text-white">$2.4B+</div>
                  <div className="text-xs text-white/60">Processed</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <div className="text-2xl font-bold text-white">99.99%</div>
                  <div className="text-xs text-white/60">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}