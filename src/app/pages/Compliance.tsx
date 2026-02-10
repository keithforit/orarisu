import { Shield, CheckCircle, Lock, Globe, TrendingUp, DollarSign, FileCheck, Zap, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Compliance() {
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
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Pillars */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Built on Trust
            </h2>
            <p className="text-xl" style={{ color: '#0D1117', opacity: 0.7 }}>
              Enterprise compliance and security at every layer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Security & Privacy',
                items: [
                  'SOC 2 Type II Certified',
                  'GDPR & CCPA Compliant',
                  '256-bit AES encryption',
                  'Regular security audits',
                  'ISO 27001 standards',
                ],
                color: '#6F42C1',
              },
              {
                icon: FileCheck,
                title: 'Payment Compliance',
                items: [
                  'PCI DSS Level 1',
                  'Automated tax reporting',
                  'Multi-currency support',
                  'Transparent fee structure',
                  'Real-time reconciliation',
                ],
                color: '#007BFF',
              },
              {
                icon: Globe,
                title: 'Global Standards',
                items: [
                  'USGBC LEED certified offices',
                  'FTC disclosure compliant',
                  'Accessibility standards (WCAG)',
                  'Anti-fraud monitoring',
                  'Cross-border compliance',
                ],
                color: '#00CCCC',
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F8F9FC] rounded-2xl p-8"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${pillar.color}15` }}
                >
                  <pillar.icon className="w-6 h-6" style={{ color: pillar.color }} />
                </div>
                <h3 className="text-2xl mb-6" style={{ color: '#0D1117' }}>
                  {pillar.title}
                </h3>
                <ul className="space-y-3">
                  {pillar.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: pillar.color }} />
                      <span style={{ color: '#0D1117', opacity: 0.8 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-16 md:py-24 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl mb-12" style={{ color: '#0D1117' }}>
              Enterprise Risk Management
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: AlertCircle,
                  title: 'Brand Safety Controls',
                  description: 'Advanced content moderation, keyword filters, and real-time monitoring to protect your brand reputation.',
                  color: '#FC0061',
                },
                {
                  icon: Lock,
                  title: 'Data Sovereignty',
                  description: 'Your data stays in your region. Granular access controls and audit logs for complete transparency.',
                  color: '#6F42C1',
                },
                {
                  icon: TrendingUp,
                  title: 'Financial Controls',
                  description: 'Multi-level approval workflows, spending limits, and automated fraud detection powered by Webridge infrastructure.',
                  color: '#007BFF',
                },
                {
                  icon: Zap,
                  title: 'SLA Guarantees',
                  description: '99.9% uptime SLA with dedicated enterprise support and custom integration assistance.',
                  color: '#00CCCC',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 flex items-start gap-6 border-2 hover:shadow-lg transition-shadow"
                  style={{ borderColor: `${feature.color}20` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: '#0D1117' }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: '#0D1117', opacity: 0.7 }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Industry Certifications
            </h2>
            <p className="text-xl" style={{ color: '#0D1117', opacity: 0.7 }}>
              Recognized by leading standards organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['SOC 2 Type II', 'ISO 27001', 'PCI DSS Level 1', 'GDPR Ready', 'CCPA Compliant', 'WCAG 2.1 AA', 'FTC Compliant', 'LEED Certified'].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#F8F9FC] rounded-xl p-6 text-center border-2 hover:border-[#6F42C1] transition-colors"
                style={{ borderColor: '#6F42C120' }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6F42C1] to-[#007BFF] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div style={{ color: '#0D1117' }}>{cert}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#6F42C1] to-[#007BFF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Ready for Enterprise?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Schedule a security review with our compliance team
          </p>
          <button className="px-8 py-4 bg-white rounded-xl text-lg transition-all hover:shadow-2xl hover:scale-105" style={{ color: '#6F42C1' }}>
            Contact Enterprise Sales
          </button>
        </div>
      </section>
    </div>
  );
}
