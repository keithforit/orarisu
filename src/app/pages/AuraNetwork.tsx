import { Users, Award, Zap, TrendingUp, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function AuraNetwork() {
  const [auraScore] = useState(87);

  return (
    <div className="bg-[#0D1117]">
      {/* Hero Section with Constellation Network */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Constellation Network Background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {/* Connection Lines */}
            <g stroke="#6F42C1" strokeWidth="1" opacity="0.3" fill="none">
              <motion.line
                x1="600" y1="400" x2="300" y2="200"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.line
                x1="600" y1="400" x2="900" y2="200"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.line
                x1="600" y1="400" x2="200" y2="500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
              />
              <motion.line
                x1="600" y1="400" x2="1000" y2="500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
              />
              <motion.line
                x1="600" y1="400" x2="400" y2="650"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
              />
              <motion.line
                x1="600" y1="400" x2="800" y2="650"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />
            </g>

            {/* Nodes */}
            {/* Center Brand Node */}
            <motion.circle
              cx="600" cy="400" r="20"
              fill="url(#brandGradient)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            
            {/* Creator Nodes */}
            {[
              { cx: 300, cy: 200 },
              { cx: 900, cy: 200 },
              { cx: 200, cy: 500 },
              { cx: 1000, cy: 500 },
              { cx: 400, cy: 650 },
              { cx: 800, cy: 650 },
            ].map((pos, i) => (
              <motion.circle
                key={i}
                cx={pos.cx}
                cy={pos.cy}
                r="12"
                fill="#6F42C1"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            ))}

            {/* Gradients */}
            <defs>
              <radialGradient id="brandGradient">
                <stop offset="0%" stopColor="#FC0061" />
                <stop offset="100%" stopColor="#6F42C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ borderColor: '#FC006140', backgroundColor: '#FC006110' }}>
              <Sparkles className="w-4 h-4" style={{ color: '#FC0061' }} />
              <span className="text-sm tracking-wide text-white">
                INVITATION ONLY
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl mb-6 text-white font-serif">
              Join the High-Tier Ecosystem
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12">
              Where elite creators, trusted publishers, and visionary brands converge. 
              Build your Aura. Earn from your influence. Shape the future of AI-native attribution.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 flex items-center justify-center gap-3 bg-gradient-to-r from-[#FC0061] to-[#6F42C1] text-white shadow-lg hover:shadow-2xl hover:shadow-[#FC0061]/50">
                Request Invitation
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="px-10 py-5 rounded-xl border-2 text-white text-lg transition-all hover:bg-white/10" style={{ borderColor: '#FFFFFF40' }}>
                Explore the Network
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aura Score Dashboard */}
      <section className="py-20 bg-gradient-to-b from-[#0D1117] to-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl text-white mb-4 font-serif">
                Your Influence, Quantified
              </h2>
              <p className="text-xl text-white/60">
                Track your reputation across the AI ecosystem with real-time metrics
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0D1117] rounded-3xl p-8 border shadow-2xl" style={{ borderColor: '#6F42C130' }}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Creator Profile */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6F42C1] to-[#FC0061] flex items-center justify-center text-3xl">
                      👤
                    </div>
                    <div>
                      <div className="text-2xl text-white">Sarah Chen</div>
                      <div className="text-white/60">Tech Content Creator</div>
                    </div>
                  </div>

                  {/* AI Cite Badges */}
                  <div className="space-y-3">
                    <div className="text-sm text-white/60 mb-3 tracking-wide">RECENT AI CITATIONS</div>
                    {[
                      { ai: 'ChatGPT', topic: 'Web Development', count: 24 },
                      { ai: 'Perplexity', topic: 'React Best Practices', count: 18 },
                      { ai: 'Gemini', topic: 'UI/UX Design', count: 15 },
                    ].map((citation, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-[#0D1117]/50 border"
                        style={{ borderColor: '#00CCCC20' }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#00CCCC]/10 flex items-center justify-center">
                            <Award className="w-5 h-5" style={{ color: '#00CCCC' }} />
                          </div>
                          <div>
                            <div className="text-white text-sm">{citation.ai}</div>
                            <div className="text-white/50 text-xs">{citation.topic}</div>
                          </div>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-[#00CCCC]/20 text-[#00CCCC] text-sm">
                          {citation.count} cites
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Aura Score Gauge */}
                <div className="flex flex-col items-center">
                  <div className="relative w-64 h-64">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="128"
                        cy="128"
                        r="110"
                        stroke="#6F42C120"
                        strokeWidth="20"
                        fill="none"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="128"
                        cy="128"
                        r="110"
                        stroke="url(#auraGradient)"
                        strokeWidth="20"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={691.15}
                        initial={{ strokeDashoffset: 691.15 }}
                        animate={{ strokeDashoffset: 691.15 - (691.15 * auraScore) / 100 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <defs>
                        <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FC0061" />
                          <stop offset="100%" stopColor="#6F42C1" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-6xl text-white font-bold">{auraScore}</div>
                      <div className="text-white/60 text-lg">Aura Score</div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FC0061] to-[#6F42C1] rounded-full blur-3xl opacity-20" />
                  </div>

                  <div className="mt-8 text-center">
                    <div className="text-white/40 text-sm mb-2">TIER STATUS</div>
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FC0061] to-[#6F42C1]">
                      <Award className="w-5 h-5 text-white" />
                      <span className="text-white font-bold">Elite Creator</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Commission Flow */}
      <section className="py-20 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-white mb-4 font-serif">
              Every Citation Earns
            </h2>
            <p className="text-xl text-white/60">
              Get paid when AI models cite your content
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#0D1117] to-[#1a1f2e] rounded-3xl p-12 border shadow-2xl" style={{ borderColor: '#00CCCC30' }}>
              {/* Flow Steps */}
              <div className="grid md:grid-cols-5 gap-6 items-center">
                {/* Step 1: User Query */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#007BFF]/20 to-[#00CCCC]/20 flex items-center justify-center mb-4 border" style={{ borderColor: '#00CCCC30' }}>
                    <Users className="w-12 h-12" style={{ color: '#00CCCC' }} />
                  </div>
                  <div className="text-white text-sm">User asks AI</div>
                  <div className="text-white/50 text-xs mt-1">"Best React hooks?"</div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <ArrowRight className="w-8 h-8 text-[#00CCCC]" />
                  </motion.div>
                </div>

                {/* Step 2: AI Processing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#6F42C1]/20 to-[#FC0061]/20 flex items-center justify-center mb-4 border" style={{ borderColor: '#6F42C130' }}>
                    <Sparkles className="w-12 h-12" style={{ color: '#6F42C1' }} />
                  </div>
                  <div className="text-white text-sm">AI cites you</div>
                  <div className="text-white/50 text-xs mt-1">Reference detected</div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <ArrowRight className="w-8 h-8 text-[#00CCCC]" />
                  </motion.div>
                </div>

                {/* Step 3: Commission */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#00CCCC]/20 to-[#007BFF]/20 flex items-center justify-center mb-4 border" style={{ borderColor: '#00CCCC30' }}>
                    <Zap className="w-12 h-12" style={{ color: '#00CCCC' }} />
                  </div>
                  <div className="text-white text-sm">You earn</div>
                  <div className="text-[#00CCCC] text-lg font-bold mt-1">$0.25</div>
                </motion.div>
              </div>

              {/* Stats Bar */}
              <div className="mt-12 pt-8 border-t" style={{ borderColor: '#FFFFFF10' }}>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl text-white font-bold">12.4K</div>
                    <div className="text-white/50 text-sm mt-1">Total Citations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: '#00CCCC' }}>$3,248</div>
                    <div className="text-white/50 text-sm mt-1">Earned This Month</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white font-bold flex items-center justify-center gap-2">
                      +24%
                      <TrendingUp className="w-6 h-6" style={{ color: '#00CCCC' }} />
                    </div>
                    <div className="text-white/50 text-sm mt-1">Growth Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matchmaking Interface */}
      <section className="py-20 bg-gradient-to-b from-[#1a1f2e] to-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-white mb-4 font-serif">
              AI-Powered Partnerships
            </h2>
            <p className="text-xl text-white/60">
              Find your perfect brand collaborations with intelligent matching
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#0D1117] to-[#1a1f2e] rounded-3xl p-8 border shadow-2xl" style={{ borderColor: '#FC006130' }}>
              <div className="grid md:grid-cols-7 gap-6 items-center">
                {/* Brand Profile */}
                <div className="md:col-span-3">
                  <div className="bg-[#1a1f2e] rounded-2xl p-6 border" style={{ borderColor: '#6F42C120' }}>
                    <div className="text-xs tracking-wide text-white/40 mb-4">BRAND</div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#00CCCC] flex items-center justify-center text-2xl">
                        🚀
                      </div>
                      <div>
                        <div className="text-xl text-white font-bold">TechFlow</div>
                        <div className="text-white/60 text-sm">SaaS Platform</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {['AI & ML', 'Developer Tools', 'Cloud Tech'].map((tag, i) => (
                        <div key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007BFF]/10 mr-2" style={{ borderColor: '#007BFF30' }}>
                          <span className="text-xs text-white/70">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vibe Match Indicator */}
                <div className="md:col-span-1 flex justify-center">
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
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FC0061] to-[#6F42C1] flex flex-col items-center justify-center border-4 border-[#0D1117]">
                      <div className="text-2xl text-white font-bold">98%</div>
                      <div className="text-white/80 text-xs">Match</div>
                    </div>
                    {/* Pulse Rings */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FC0061] to-[#6F42C1] animate-ping opacity-20" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FC0061] to-[#6F42C1] blur-xl opacity-40" />
                  </motion.div>
                </div>

                {/* Creator Profile */}
                <div className="md:col-span-3">
                  <div className="bg-[#1a1f2e] rounded-2xl p-6 border" style={{ borderColor: '#FC006120' }}>
                    <div className="text-xs tracking-wide text-white/40 mb-4">CREATOR</div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6F42C1] to-[#FC0061] flex items-center justify-center text-2xl">
                        👨‍💻
                      </div>
                      <div>
                        <div className="text-xl text-white font-bold">Alex Rivera</div>
                        <div className="text-white/60 text-sm">Tech Educator</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {['AI Content', 'Dev Tutorials', 'Tech Reviews'].map((tag, i) => (
                        <div key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC0061]/10 mr-2">
                          <span className="text-xs text-white/70">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Details */}
              <div className="mt-8 pt-8 border-t" style={{ borderColor: '#FFFFFF10' }}>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <CheckCircle className="w-5 h-5 mx-auto mb-2" style={{ color: '#00CCCC' }} />
                    <div className="text-white/60">Audience Overlap</div>
                  </div>
                  <div>
                    <CheckCircle className="w-5 h-5 mx-auto mb-2" style={{ color: '#00CCCC' }} />
                    <div className="text-white/60">Content Alignment</div>
                  </div>
                  <div>
                    <CheckCircle className="w-5 h-5 mx-auto mb-2" style={{ color: '#00CCCC' }} />
                    <div className="text-white/60">Value Synergy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-12 text-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0D1117 0%, #1a1f2e 100%)',
                border: '2px solid transparent',
                backgroundClip: 'padding-box',
              }}
            >
              {/* Gradient Border Effect */}
              <div 
                className="absolute inset-0 rounded-3xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, #FC0061 0%, #6F42C1 50%, #007BFF 100%)',
                  margin: '-2px',
                }}
              />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                  <Award className="w-4 h-4 text-white" />
                  <span className="text-sm text-white tracking-wide">EXCLUSIVE ACCESS</span>
                </div>

                <h2 className="text-5xl md:text-6xl text-white mb-6 font-serif">
                  Elevate Your Influence
                </h2>
                
                <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                  Join the elite network of creators, publishers, and brands shaping the AI economy. 
                  Your Aura awaits.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-2xl bg-gradient-to-r from-[#FC0061] to-[#6F42C1] text-white">
                    Join the Aura Network
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <div className="mt-10 flex items-center justify-center gap-8 text-white/40 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FC0061' }} />
                    By invitation only
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6F42C1' }} />
                    Vetted community
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
                    Premium benefits
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#FC0061]/20 to-[#6F42C1]/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
