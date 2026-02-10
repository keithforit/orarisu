import { Search, Sparkles, Play, Globe, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function ContentStudio() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const languages = ['English', 'Japanese', 'Chinese'];

  return (
    <div className="bg-white">
      {/* Pipeline Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#007BFF]/5 to-white" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00CCCC]/10 border border-[#00CCCC]/20 mb-6">
              <Sparkles className="w-4 h-4" style={{ color: '#00CCCC' }} />
              <span className="text-sm tracking-wide" style={{ color: '#00CCCC' }}>
                AI CONTENT STUDIO
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl tracking-tight mb-6" style={{ color: '#0D1117' }}>
              From Link to Viral in{' '}
              <span 
                className="bg-gradient-to-r from-[#007BFF] to-[#00CCCC] bg-clip-text"
                style={{ WebkitTextFillColor: 'transparent' }}
              >
                5 Minutes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12" style={{ color: '#0D1117', opacity: 0.7 }}>
              Transform any URL into scroll-stopping vertical videos. AI-powered content creation at the speed of thought.
            </p>
          </div>

          {/* Pipeline Visualization */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* URL Input Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border"
                style={{ borderColor: '#007BFF20' }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-[#F8F9FC] rounded-xl">
                    <Search className="w-5 h-5" style={{ color: '#007BFF' }} />
                    <input
                      type="text"
                      placeholder="Paste any URL here..."
                      className="flex-1 bg-transparent outline-none text-lg"
                      style={{ color: '#0D1117' }}
                    />
                  </div>
                  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00CCCC] text-white transition-all hover:shadow-lg hover:shadow-[#007BFF]/30 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Generate
                  </button>
                </div>
              </motion.div>

              {/* Transformation Effect */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[180px] z-10">
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-[#6F42C1] to-[#007BFF] blur-3xl"
                />
              </div>

              {/* Video Preview */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mx-auto w-72"
              >
                {/* Phone Frame */}
                <div className="relative bg-[#0D1117] rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-gradient-to-br from-[#007BFF] to-[#00CCCC] rounded-[2.5rem] aspect-[9/16] overflow-hidden relative">
                    {/* Video Content Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/20 to-[#00CCCC]/20 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                    
                    {/* Animated Waves */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-t from-[#00CCCC]/30 to-transparent"
                    />
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0D1117] rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Three Steps to Perfect Content
            </h2>
            <p className="text-xl" style={{ color: '#0D1117', opacity: 0.6 }}>
              AI does the heavy lifting. You stay in creative control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Scan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007BFF]/10 to-[#00CCCC]/10 flex items-center justify-center mb-6">
                <Search className="w-8 h-8" style={{ color: '#007BFF' }} />
              </div>
              <div className="text-sm tracking-widest mb-2" style={{ color: '#00CCCC' }}>
                STEP 01
              </div>
              <h3 className="text-2xl mb-4" style={{ color: '#0D1117' }}>
                Scan
              </h3>
              <p className="text-lg" style={{ color: '#0D1117', opacity: 0.7 }}>
                Our AI instantly analyzes your URL, extracting key insights, quotes, and visual elements.
              </p>
            </motion.div>

            {/* Step 2: Write */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007BFF]/10 to-[#00CCCC]/10 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" style={{ color: '#00CCCC' }} />
              </div>
              <div className="text-sm tracking-widest mb-2" style={{ color: '#00CCCC' }}>
                STEP 02
              </div>
              <h3 className="text-2xl mb-4" style={{ color: '#0D1117' }}>
                Write
              </h3>
              <p className="text-lg" style={{ color: '#0D1117', opacity: 0.7 }}>
                Generative AI crafts engaging scripts optimized for vertical video and social algorithms.
              </p>
            </motion.div>

            {/* Step 3: Render */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007BFF]/10 to-[#00CCCC]/10 flex items-center justify-center mb-6">
                <Play className="w-8 h-8" style={{ color: '#007BFF' }} />
              </div>
              <div className="text-sm tracking-widest mb-2" style={{ color: '#00CCCC' }}>
                STEP 03
              </div>
              <h3 className="text-2xl mb-4" style={{ color: '#0D1117' }}>
                Render
              </h3>
              <p className="text-lg" style={{ color: '#0D1117', opacity: 0.7 }}>
                Watch as your video comes to life with motion graphics, captions, and viral-ready formatting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Localization Toggle */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
                Global Reach, Local Touch
              </h2>
              <p className="text-xl" style={{ color: '#0D1117', opacity: 0.6 }}>
                One video. Multiple languages. Infinite audiences.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {/* Language Toggle */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 bg-[#F8F9FC] rounded-full p-1">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-6 py-3 rounded-full transition-all ${
                        selectedLanguage === lang
                          ? 'bg-gradient-to-r from-[#007BFF] to-[#00CCCC] text-white shadow-lg'
                          : 'text-[#0D1117] opacity-60 hover:opacity-100'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Video Frame with Aura */}
              <div className="relative">
                {/* Aura Waves */}
                <motion.div
                  key={selectedLanguage}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -inset-8 bg-gradient-to-r from-[#007BFF]/10 to-[#00CCCC]/10 rounded-3xl blur-2xl"
                />
                
                {/* Video Frame */}
                <div className="relative bg-gradient-to-br from-[#007BFF] to-[#00CCCC] rounded-2xl aspect-video overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Globe className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-3xl font-bold">{selectedLanguage}</div>
                      <div className="text-lg opacity-80 mt-2">Video Content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Dashboard */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
                Results You Can Measure
              </h2>
              <p className="text-xl" style={{ color: '#0D1117', opacity: 0.6 }}>
                Real-time analytics on every video you create
              </p>
            </div>

            <div className="relative">
              {/* Glassmorphism Card */}
              <div 
                className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border shadow-2xl"
                style={{ borderColor: '#007BFF20' }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Conversion Rate Chart */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm tracking-wide mb-1" style={{ color: '#0D1117', opacity: 0.6 }}>
                          CONVERSION RATE
                        </div>
                        <div className="text-4xl" style={{ color: '#0D1117' }}>
                          23.4%
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00CCCC]/10">
                        <TrendingUp className="w-4 h-4" style={{ color: '#00CCCC' }} />
                        <span className="text-sm" style={{ color: '#00CCCC' }}>+12.5%</span>
                      </div>
                    </div>
                    
                    {/* Bar Chart */}
                    <div className="space-y-3">
                      {[85, 92, 78, 95, 88].map((value, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="text-sm w-12" style={{ color: '#0D1117', opacity: 0.5 }}>
                            Week {index + 1}
                          </div>
                          <div className="flex-1 bg-[#F8F9FC] rounded-full h-3 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-full bg-gradient-to-r from-[#007BFF] to-[#00CCCC] rounded-full"
                            />
                          </div>
                          <div className="text-sm w-12 text-right" style={{ color: '#0D1117' }}>
                            {value}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engagement Score */}
                  <div className="flex flex-col justify-center items-center">
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00CCCC] to-[#007BFF] flex items-center justify-center shadow-2xl"
                      >
                        <div className="text-center text-white">
                          <div className="text-6xl font-bold">A+</div>
                          <div className="text-lg mt-2">Engagement Score</div>
                        </div>
                      </motion.div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00CCCC] to-[#007BFF] rounded-full blur-2xl opacity-30" />
                    </div>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Start Your Production Engine
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Join thousands of creators turning ideas into viral content in minutes, not days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00CCCC] text-white text-lg transition-all hover:shadow-2xl hover:shadow-[#007BFF]/50 hover:scale-105 flex items-center justify-center gap-3">
                Start Creating Free
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="px-10 py-5 rounded-xl border-2 border-white/20 text-white text-lg transition-all hover:bg-white/10 hover:border-white/40">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00CCCC]" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00CCCC]" />
                5 free videos to start
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
