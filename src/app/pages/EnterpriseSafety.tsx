import { Shield, CheckCircle, Lock, Globe, TrendingUp, DollarSign, FileCheck, Zap, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function EnterpriseSafety() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b" style={{ borderColor: '#0D111710' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border mb-6" style={{ borderColor: '#00CCCC', backgroundColor: '#00CCCC10' }}>
                  <Shield className="w-4 h-4" style={{ color: '#00CCCC' }} />
                  <span className="text-sm tracking-wide" style={{ color: '#0D1117' }}>
                    ENTERPRISE GRADE
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl mb-6" style={{ color: '#0D1117' }}>
                  Enterprise-Grade Trust
                </h1>
                
                <p className="text-xl md:text-2xl mb-8" style={{ color: '#0D1117', opacity: 0.7 }}>
                  Built on Webridge's decade of payment infrastructure expertise. 
                  Trusted by Fortune 500 brands for compliant, transparent AI operations.
                </p>

                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-4xl mb-2" style={{ color: '#0D1117' }}>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="w-px h-12 bg-[#0D1117] opacity-20" />
                  <div>
                    <div className="text-4xl mb-2" style={{ color: '#0D1117' }}>
                      <span className="font-bold">SOC 2</span>
                    </div>
                    <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                      Type II Certified
                    </div>
                  </div>
                  <div className="w-px h-12 bg-[#0D1117] opacity-20" />
                  <div>
                    <div className="text-4xl mb-2" style={{ color: '#0D1117' }}>
                      <span className="font-bold">$2.4B</span>
                    </div>
                    <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                      Processed Annually
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="w-32 h-32 rounded-2xl flex items-center justify-center border-2" style={{ borderColor: '#00CCCC', backgroundColor: '#00CCCC05' }}>
                  <Shield className="w-16 h-16" style={{ color: '#00CCCC' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Guardrails Graphic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Multi-Layer Compliance Guardrails
            </h2>
            <p className="text-xl" style={{ color: '#0D1117', opacity: 0.6 }}>
              Every piece of content passes through rigorous security checkpoints
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Flowchart */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                {/* Content Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-1"
                >
                  <div className="bg-white border-2 rounded-xl p-6 text-center" style={{ borderColor: '#0D1117' }}>
                    <FileCheck className="w-10 h-10 mx-auto mb-3" style={{ color: '#0D1117' }} />
                    <div className="font-bold mb-1" style={{ color: '#0D1117' }}>
                      Content Piece
                    </div>
                    <div className="text-xs" style={{ color: '#0D1117', opacity: 0.5 }}>
                      Input
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="w-full h-0.5" style={{ backgroundColor: '#0D1117', opacity: 0.2 }} />
                </div>

                {/* Checkpoint 1: API Check */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="md:col-span-1"
                >
                  <div className="bg-white border-2 rounded-xl p-6 relative" style={{ borderColor: '#00CCCC' }}>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00CCCC' }}>
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <Lock className="w-10 h-10 mx-auto mb-3" style={{ color: '#00CCCC' }} />
                    <div className="font-bold mb-1 text-center" style={{ color: '#0D1117' }}>
                      API Check
                    </div>
                    <div className="text-xs text-center" style={{ color: '#0D1117', opacity: 0.6 }}>
                      Authentication & Rate Limiting
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="w-full h-0.5" style={{ backgroundColor: '#0D1117', opacity: 0.2 }} />
                </div>

                {/* Checkpoint 2: Content Labeling */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="md:col-span-1"
                >
                  <div className="bg-white border-2 rounded-xl p-6 relative" style={{ borderColor: '#00CCCC' }}>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00CCCC' }}>
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <AlertCircle className="w-10 h-10 mx-auto mb-3" style={{ color: '#00CCCC' }} />
                    <div className="font-bold mb-1 text-center" style={{ color: '#0D1117' }}>
                      Content Labeling
                    </div>
                    <div className="text-xs text-center" style={{ color: '#0D1117', opacity: 0.6 }}>
                      AI-Generated Disclosure
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="w-full h-0.5" style={{ backgroundColor: '#0D1117', opacity: 0.2 }} />
                </div>

                {/* Checkpoint 3: Brand Safety */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="md:col-span-1"
                >
                  <div className="bg-white border-2 rounded-xl p-6 relative" style={{ borderColor: '#00CCCC' }}>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00CCCC' }}>
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <Shield className="w-10 h-10 mx-auto mb-3" style={{ color: '#00CCCC' }} />
                    <div className="font-bold mb-1 text-center" style={{ color: '#0D1117' }}>
                      Brand Safety
                    </div>
                    <div className="text-xs text-center" style={{ color: '#0D1117', opacity: 0.6 }}>
                      Content Moderation
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Arrow to Published */}
              <div className="flex justify-center my-6">
                <div className="h-12 w-0.5" style={{ backgroundColor: '#0D1117', opacity: 0.2 }} />
              </div>

              {/* Published Output */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="max-w-xs mx-auto"
              >
                <div className="border-2 rounded-xl p-6 text-center" style={{ borderColor: '#00CCCC', backgroundColor: '#00CCCC05' }}>
                  <CheckCircle className="w-12 h-12 mx-auto mb-3" style={{ color: '#00CCCC' }} />
                  <div className="text-xl font-bold mb-1" style={{ color: '#0D1117' }}>
                    Published
                  </div>
                  <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Fully Compliant & Verified
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Security Features Grid */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ borderColor: '#0D111720' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#00CCCC10' }}>
                  <Lock className="w-6 h-6" style={{ color: '#00CCCC' }} />
                </div>
                <div className="font-bold mb-2" style={{ color: '#0D1117' }}>
                  End-to-End Encryption
                </div>
                <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                  All data encrypted in transit and at rest using AES-256 encryption
                </p>
              </div>

              <div className="border rounded-xl p-6" style={{ borderColor: '#0D111720' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#00CCCC10' }}>
                  <FileCheck className="w-6 h-6" style={{ color: '#00CCCC' }} />
                </div>
                <div className="font-bold mb-2" style={{ color: '#0D1117' }}>
                  Audit Logging
                </div>
                <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                  Complete audit trail of all content modifications and access
                </p>
              </div>

              <div className="border rounded-xl p-6" style={{ borderColor: '#0D111720' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#00CCCC10' }}>
                  <Shield className="w-6 h-6" style={{ color: '#00CCCC' }} />
                </div>
                <div className="font-bold mb-2" style={{ color: '#0D1117' }}>
                  GDPR Compliant
                </div>
                <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                  Full compliance with global data privacy regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution Transparency Widget */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Full Attribution Transparency
            </h2>
            <p className="text-xl" style={{ color: '#0D1117', opacity: 0.6 }}>
              Track every touchpoint from AI mention to conversion with verified data
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white border-2 rounded-2xl p-8 md:p-12" style={{ borderColor: '#0D111710' }}>
            <div className="mb-8">
              <div className="text-sm tracking-wide mb-2" style={{ color: '#0D1117', opacity: 0.5 }}>
                CONVERSION TIMELINE
              </div>
              <div className="text-2xl font-bold" style={{ color: '#0D1117' }}>
                Customer Journey: User #47291
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {/* Touchpoint 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00CCCC' }}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold" style={{ color: '#0D1117' }}>
                      AI Mention
                    </div>
                    <div className="text-sm" style={{ color: '#0D1117', opacity: 0.5 }}>
                      Day 0 • 9:24 AM
                    </div>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#0D1117', opacity: 0.7 }}>
                    ChatGPT cited TechFlow in response to query about developer tools
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs border" style={{ borderColor: '#00CCCC', color: '#00CCCC', backgroundColor: '#00CCCC10' }}>
                      Verified Citation
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: '#0D111710', color: '#0D1117' }}>
                      ChatGPT-4
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Connection Line */}
              <div className="ml-6 h-8 w-0.5" style={{ backgroundColor: '#00CCCC', opacity: 0.3 }} />

              {/* Touchpoint 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00CCCC' }}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold" style={{ color: '#0D1117' }}>
                      Creator Video View
                    </div>
                    <div className="text-sm" style={{ color: '#0D1117', opacity: 0.5 }}>
                      Day 2 • 3:15 PM
                    </div>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#0D1117', opacity: 0.7 }}>
                    User watched Alex Rivera's review video about TechFlow features
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs border" style={{ borderColor: '#00CCCC', color: '#00CCCC', backgroundColor: '#00CCCC10' }}>
                      Tracked View
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: '#0D111710', color: '#0D1117' }}>
                      93% Watch Time
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Connection Line */}
              <div className="ml-6 h-8 w-0.5" style={{ backgroundColor: '#00CCCC', opacity: 0.3 }} />

              {/* Touchpoint 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00CCCC' }}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold" style={{ color: '#0D1117' }}>
                      Conversion
                    </div>
                    <div className="text-sm" style={{ color: '#0D1117', opacity: 0.5 }}>
                      Day 7 • 11:42 AM
                    </div>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#0D1117', opacity: 0.7 }}>
                    User subscribed to TechFlow Pro plan via referral link
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs border" style={{ borderColor: '#00CCCC', color: '#00CCCC', backgroundColor: '#00CCCC10' }}>
                      Attribution Verified
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#00CCCC', color: 'white' }}>
                      $199 MRR
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Summary Bar */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: '#0D111720' }}>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#0D1117' }}>
                    3
                  </div>
                  <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Touchpoints
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#0D1117' }}>
                    7 days
                  </div>
                  <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Time to Convert
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#00CCCC' }}>
                    100%
                  </div>
                  <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Data Accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Payouts Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Global Payouts, Instant Settlement
            </h2>
            <p className="text-xl" style={{ color: '#0D1117', opacity: 0.6 }}>
              Smart-tracking rails enable creators to receive payments in their local currency
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* World Map Visualization */}
            <div className="relative bg-[#F8F9FC] rounded-2xl p-12 border" style={{ borderColor: '#0D111710' }}>
              <svg className="w-full h-80" viewBox="0 0 1000 400">
                {/* Simplified World Map Shapes */}
                <g fill="#0D1117" opacity="0.08">
                  {/* North America */}
                  <path d="M 150 80 L 120 120 L 140 180 L 180 190 L 220 160 L 240 100 L 200 70 Z" />
                  {/* Europe */}
                  <path d="M 450 100 L 480 120 L 520 110 L 530 130 L 500 150 L 460 140 Z" />
                  {/* Asia */}
                  <path d="M 650 120 L 750 130 L 800 160 L 780 200 L 720 190 L 670 170 Z" />
                  {/* South America */}
                  <path d="M 250 240 L 270 280 L 260 340 L 240 350 L 220 300 L 230 250 Z" />
                  {/* Africa */}
                  <path d="M 480 200 L 520 220 L 530 280 L 500 300 L 470 270 L 465 220 Z" />
                  {/* Australia */}
                  <path d="M 780 280 L 830 290 L 840 310 L 810 320 L 770 310 Z" />
                </g>

                {/* Connection Lines */}
                <g stroke="#00CCCC" strokeWidth="2" fill="none" opacity="0.4">
                  <motion.line
                    x1="180" y1="140" x2="490" y2="120"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                  <motion.line
                    x1="490" y1="120" x2="710" y2="155"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.3 }}
                  />
                  <motion.line
                    x1="710" y1="155" x2="800" y2="295"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.6 }}
                  />
                </g>

                {/* Currency Nodes */}
                {/* USD - North America */}
                <motion.g
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <circle cx="180" cy="140" r="30" fill="#00CCCC" />
                  <text x="180" y="148" textAnchor="middle" fill="white" className="text-xl font-bold">
                    $
                  </text>
                  <text x="180" y="190" textAnchor="middle" fill="#0D1117" className="text-sm">
                    USD
                  </text>
                </motion.g>

                {/* EUR - Europe */}
                <motion.g
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <circle cx="490" cy="120" r="30" fill="#00CCCC" />
                  <text x="490" y="148" textAnchor="middle" fill="white" className="text-xl font-bold">
                    €
                  </text>
                  <text x="490" y="170" textAnchor="middle" fill="#0D1117" className="text-sm">
                    EUR
                  </text>
                </motion.g>

                {/* JPY - Asia */}
                <motion.g
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  <circle cx="710" cy="155" r="30" fill="#00CCCC" />
                  <text x="710" y="148" textAnchor="middle" fill="white" className="text-xl font-bold">
                    ¥
                  </text>
                  <text x="710" y="195" textAnchor="middle" fill="#0D1117" className="text-sm">
                    JPY
                  </text>
                </motion.g>

                {/* AUD - Australia */}
                <motion.g
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 }}
                >
                  <circle cx="800" cy="295" r="30" fill="#00CCCC" />
                  <text x="800" y="303" textAnchor="middle" fill="white" className="text-xl font-bold">
                    A$
                  </text>
                  <text x="800" y="335" textAnchor="middle" fill="#0D1117" className="text-sm">
                    AUD
                  </text>
                </motion.g>
              </svg>

              {/* Speed Indicator */}
              <div className="absolute top-6 right-6 bg-white border-2 rounded-xl p-4" style={{ borderColor: '#00CCCC' }}>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6" style={{ color: '#00CCCC' }} />
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#0D1117' }}>
                      &lt;48h
                    </div>
                    <div className="text-xs" style={{ color: '#0D1117', opacity: 0.6 }}>
                      Average Settlement
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payout Features */}
            <div className="mt-12 grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3" style={{ color: '#00CCCC' }} />
                <div className="font-bold mb-2" style={{ color: '#0D1117' }}>
                  150+ Currencies
                </div>
                <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                  Local currency support
                </p>
              </div>

              <div className="text-center">
                <Zap className="w-8 h-8 mx-auto mb-3" style={{ color: '#00CCCC' }} />
                <div className="font-bold mb-2" style={{ color: '#0D1117' }}>
                  Real-Time Tracking
                </div>
                <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                  Live payment status
                </p>
              </div>

              <div className="text-center">
                <Globe className="w-8 h-8 mx-auto mb-3" style={{ color: '#00CCCC' }} />
                <div className="font-bold mb-2" style={{ color: '#0D1117' }}>
                  Global Compliance
                </div>
                <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                  Tax & regulatory ready
                </p>
              </div>

              <div className="text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-3" style={{ color: '#00CCCC' }} />
                <div className="font-bold mb-2" style={{ color: '#0D1117' }}>
                  Smart Routing
                </div>
                <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                  Optimized fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges & Compliance */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Certified & Trusted
            </h2>
            <p className="text-xl" style={{ color: '#0D1117', opacity: 0.6 }}>
              Meeting the highest standards in security and compliance
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Compliance Badges Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { name: 'SOC 2 Type II', icon: <Shield className="w-8 h-8" /> },
                { name: 'GDPR Compliant', icon: <Lock className="w-8 h-8" /> },
                { name: 'ISO 27001', icon: <FileCheck className="w-8 h-8" /> },
                { name: 'PCI DSS', icon: <CheckCircle className="w-8 h-8" /> },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border-2 rounded-xl p-6 text-center"
                  style={{ borderColor: '#0D111720' }}
                >
                  <div className="flex justify-center mb-3" style={{ color: '#00CCCC' }}>
                    {badge.icon}
                  </div>
                  <div className="font-bold text-sm" style={{ color: '#0D1117' }}>
                    {badge.name}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Powered by Webridge */}
            <div className="bg-white border-2 rounded-2xl p-8 text-center" style={{ borderColor: '#00CCCC' }}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00CCCC' }}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Powered by
                  </div>
                  <div className="text-2xl font-bold" style={{ color: '#0D1117' }}>
                    Webridge Legacy
                  </div>
                </div>
              </div>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#0D1117', opacity: 0.7 }}>
                Built on a decade of payment infrastructure expertise. Trusted by Fortune 500 
                companies to process billions in secure transactions annually.
              </p>
              <div className="mt-6 pt-6 border-t flex justify-center gap-12" style={{ borderColor: '#0D111720' }}>
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#0D1117' }}>
                    10+
                  </div>
                  <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Years Operating
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#0D1117' }}>
                    $2.4B+
                  </div>
                  <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Processed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#0D1117' }}>
                    99.99%
                  </div>
                  <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Uptime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t" style={{ borderColor: '#0D111720' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#0D1117' }}>
            Ready for Enterprise-Grade Security?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#0D1117', opacity: 0.6 }}>
            Join leading brands who trust Orarisu for compliant, transparent AI operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 rounded-xl text-lg transition-all flex items-center justify-center gap-3" style={{ backgroundColor: '#00CCCC', color: 'white' }}>
              Request Security Audit
              <FileCheck className="w-6 h-6" />
            </button>
            <button className="px-10 py-5 rounded-xl border-2 text-lg transition-all" style={{ borderColor: '#0D1117', color: '#0D1117' }}>
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
