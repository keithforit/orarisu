import { Building2, Phone, FileText, Mail, User, MessageSquare, Globe, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
  const [selectedRole, setSelectedRole] = useState('brand');

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#6F42C1]/20 to-[#007BFF]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#007BFF]/20 to-[#00CCCC]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border mb-6" style={{ borderColor: '#6F42C1', backgroundColor: '#6F42C110' }}>
                  <MessageSquare className="w-4 h-4" style={{ color: '#6F42C1' }} />
                  <span className="text-sm tracking-wide" style={{ color: '#0D1117' }}>
                    GET IN TOUCH
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl mb-6" style={{ color: '#0D1117' }}>
                  Let's Define Your Brand's Aura
                </h1>
                
                <p className="text-xl md:text-2xl" style={{ color: '#0D1117', opacity: 0.7 }}>
                  Whether you're a brand looking to amplify your AI presence, an agency seeking solutions, 
                  or a publisher ready to monetize—we're here to help.
                </p>
              </motion.div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Information Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Brands Card */}
                <div className="border-2 rounded-2xl p-8 transition-all hover:shadow-lg" style={{ borderColor: '#6F42C120' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6F42C110' }}>
                      <Building2 className="w-7 h-7" style={{ color: '#6F42C1' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3" style={{ color: '#0D1117' }}>
                        Brands
                      </h3>
                      <p className="mb-4" style={{ color: '#0D1117', opacity: 0.7 }}>
                        Optimize your presence across AI models. Get cited more often, track your 
                        brand mentions, and measure real ROI from generative AI.
                      </p>
                      <div className="space-y-2 text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                        <div>• GEO Strategy & Implementation</div>
                        <div>• Brand Mention Analytics</div>
                        <div>• Attribution Tracking</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Agencies Card */}
                <div className="border-2 rounded-2xl p-8 transition-all hover:shadow-lg" style={{ borderColor: '#007BFF20' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#007BFF10' }}>
                      <Phone className="w-7 h-7" style={{ color: '#007BFF' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3" style={{ color: '#0D1117' }}>
                        Agencies
                      </h3>
                      <p className="mb-4" style={{ color: '#0D1117', opacity: 0.7 }}>
                        White-label solutions for your clients. Add AI visibility optimization to 
                        your service offerings with enterprise-grade tools.
                      </p>
                      <div className="space-y-2 text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                        <div>• Partner Program Access</div>
                        <div>• Multi-Client Management</div>
                        <div>• Co-Marketing Opportunities</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Publishers Card */}
                <div className="border-2 rounded-2xl p-8 transition-all hover:shadow-lg" style={{ borderColor: '#00CCCC20' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#00CCCC10' }}>
                      <FileText className="w-7 h-7" style={{ color: '#00CCCC' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3" style={{ color: '#0D1117' }}>
                        Publishers
                      </h3>
                      <p className="mb-4" style={{ color: '#0D1117', opacity: 0.7 }}>
                        Monetize your content when AI models cite your work. Join the Aura Network 
                        and earn from every attribution.
                      </p>
                      <div className="space-y-2 text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                        <div>• Citation-Based Revenue</div>
                        <div>• Real-Time Tracking</div>
                        <div>• Global Payment Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" style={{ color: '#6F42C1' }} />
                    <a href="mailto:hello@orarisu.com" className="transition-colors hover:opacity-100" style={{ color: '#0D1117', opacity: 0.7 }}>
                      hello@orarisu.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" style={{ color: '#6F42C1' }} />
                    <span style={{ color: '#0D1117', opacity: 0.7 }}>
                      +1 (555) 123-4567
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div 
                  className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border shadow-xl sticky top-24"
                  style={{ borderColor: '#6F42C120' }}
                >
                  <h2 className="text-3xl mb-8" style={{ color: '#0D1117' }}>
                    Send Us a Message
                  </h2>

                  <form className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#0D1117', opacity: 0.7 }}>
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#6F42C1', opacity: 0.5 }} />
                        <input
                          type="text"
                          placeholder="John Smith"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white/50 focus:outline-none focus:border-[#6F42C1] transition-colors"
                          style={{ borderColor: '#0D111720' }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#0D1117', opacity: 0.7 }}>
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#6F42C1', opacity: 0.5 }} />
                        <input
                          type="email"
                          placeholder="john@company.com"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white/50 focus:outline-none focus:border-[#6F42C1] transition-colors"
                          style={{ borderColor: '#0D111720' }}
                        />
                      </div>
                    </div>

                    {/* Role Dropdown */}
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#0D1117', opacity: 0.7 }}>
                        I am a...
                      </label>
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full px-4 py-4 rounded-xl border-2 bg-white/50 focus:outline-none focus:border-[#6F42C1] transition-colors appearance-none cursor-pointer"
                        style={{ borderColor: '#0D111720', color: '#0D1117' }}
                      >
                        <option value="brand">Brand / Enterprise</option>
                        <option value="agency">Agency / Partner</option>
                        <option value="publisher">Publisher / Creator</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Dynamic Field Based on Role */}
                    {selectedRole === 'brand' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <label className="block text-sm mb-2" style={{ color: '#0D1117', opacity: 0.7 }}>
                          Company Name
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#6F42C1', opacity: 0.5 }} />
                          <input
                            type="text"
                            placeholder="Your Company"
                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white/50 focus:outline-none focus:border-[#6F42C1] transition-colors"
                            style={{ borderColor: '#0D111720' }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {selectedRole === 'agency' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <label className="block text-sm mb-2" style={{ color: '#0D1117', opacity: 0.7 }}>
                          Agency Name
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#007BFF', opacity: 0.5 }} />
                          <input
                            type="text"
                            placeholder="Your Agency"
                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white/50 focus:outline-none focus:border-[#007BFF] transition-colors"
                            style={{ borderColor: '#0D111720' }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {selectedRole === 'publisher' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <label className="block text-sm mb-2" style={{ color: '#0D1117', opacity: 0.7 }}>
                          Website / Platform URL
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#00CCCC', opacity: 0.5 }} />
                          <input
                            type="url"
                            placeholder="https://yoursite.com"
                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white/50 focus:outline-none focus:border-[#00CCCC] transition-colors"
                            style={{ borderColor: '#0D111720' }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Message */}
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#0D1117', opacity: 0.7 }}>
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your needs..."
                        className="w-full px-4 py-4 rounded-xl border-2 bg-white/50 focus:outline-none focus:border-[#6F42C1] transition-colors resize-none"
                        style={{ borderColor: '#0D111720' }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-white text-lg transition-all hover:shadow-lg hover:shadow-[#00CCCC]/30 flex items-center justify-center gap-3"
                      style={{ backgroundColor: '#00CCCC' }}
                    >
                      Send Message
                      <Mail className="w-5 h-5" />
                    </button>
                  </form>

                  {/* Privacy Note */}
                  <p className="mt-6 text-xs text-center" style={{ color: '#0D1117', opacity: 0.5 }}>
                    We respect your privacy. Your information will never be shared.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Presence Footer */}
        <section className="py-16 border-t" style={{ borderColor: '#0D111710' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Global Presence */}
              <div>
                <h3 className="text-3xl mb-6" style={{ color: '#0D1117' }}>
                  Global Presence
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <Globe className="w-8 h-8 mb-3" style={{ color: '#6F42C1' }} />
                    <div className="font-bold mb-1" style={{ color: '#0D1117' }}>
                      Asia
                    </div>
                    <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                      Tokyo • Seoul
                      <br />Singapore
                    </p>
                  </div>
                  <div>
                    <Globe className="w-8 h-8 mb-3" style={{ color: '#007BFF' }} />
                    <div className="font-bold mb-1" style={{ color: '#0D1117' }}>
                      North America
                    </div>
                    <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                      San Francisco
                      <br />New York
                    </p>
                  </div>
                  <div>
                    <Globe className="w-8 h-8 mb-3" style={{ color: '#00CCCC' }} />
                    <div className="font-bold mb-1" style={{ color: '#0D1117' }}>
                      Europe
                    </div>
                    <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                      London • Berlin
                      <br />Amsterdam
                    </p>
                  </div>
                </div>
              </div>

              {/* Webridge Legacy Trust Mark */}
              <div className="bg-[#F8F9FC] rounded-2xl p-8 border" style={{ borderColor: '#0D111710' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#6F42C1' }}>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                      Powered by
                    </div>
                    <div className="text-2xl font-bold" style={{ color: '#0D1117' }}>
                      Webridge Legacy
                    </div>
                  </div>
                </div>
                <p className="text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
                  Built on a decade of payment infrastructure expertise. Trusted by Fortune 500 
                  companies for secure, compliant operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
