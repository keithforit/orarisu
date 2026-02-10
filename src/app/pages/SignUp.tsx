import { Building2, Phone, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function SignUp() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const roles = [
    {
      id: 'brand',
      title: 'Brands',
      icon: Building2,
      color: '#6F42C1',
      description: 'Optimize your AI visibility and track ROI across generative models',
      features: [
        'GEO Analytics Dashboard',
        'Brand Mention Tracking',
        'Citation Optimization',
      ],
    },
    {
      id: 'agency',
      title: 'Agencies',
      icon: Phone,
      color: '#007BFF',
      description: 'Manage multiple clients with white-label AI visibility solutions',
      features: [
        'Multi-Client Management',
        'Campaign Command Center',
        'Partner Program Access',
      ],
    },
    {
      id: 'publisher',
      title: 'Publishers',
      icon: FileText,
      color: '#00CCCC',
      description: 'Monetize your content when AI models cite your work',
      features: [
        'Attribution Tracking',
        'Citation Revenue',
        'Aura Score Analytics',
      ],
    },
  ];

  const handleContinue = () => {
    if (selectedRole) {
      navigate('/onboarding', { state: { role: selectedRole } });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#6F42C1]/20 to-[#007BFF]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#007BFF]/20 to-[#00CCCC]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border mb-6" style={{ borderColor: '#6F42C1', backgroundColor: '#6F42C110' }}>
            <Sparkles className="w-4 h-4" style={{ color: '#6F42C1' }} />
            <span className="text-sm tracking-wide" style={{ color: '#0D1117' }}>
              STEP 1 OF 2
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-4 tracking-tight" style={{ color: '#0D1117' }}>
            Choose Your Role
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#0D1117', opacity: 0.7 }}>
            Tell us who you are, and we'll tailor your Orarisu experience
          </p>
        </motion.div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {roles.map((role, index) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;

            return (
              <motion.button
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                onClick={() => setSelectedRole(role.id)}
                className="relative group text-left"
              >
                <div
                  className={`bg-white/60 backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isSelected ? 'shadow-2xl' : ''
                  }`}
                  style={{
                    borderColor: isSelected ? role.color : `${role.color}20`,
                  }}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: role.color }}
                    >
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                          <motion.path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Background Gradient on Hover/Select */}
                  <div
                    className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                      isSelected ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'
                    }`}
                    style={{ backgroundColor: role.color }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${role.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: role.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl mb-3" style={{ color: '#0D1117' }}>
                      {role.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed" style={{ color: '#0D1117', opacity: 0.7 }}>
                      {role.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {role.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: role.color }} />
                          <span className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg transition-all ${
              selectedRole
                ? 'bg-gradient-to-r from-[#6F42C1] to-[#007BFF] text-white shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-[#F8F9FC] cursor-not-allowed'
            }`}
            style={!selectedRole ? { color: '#0D1117', opacity: 0.3 } : {}}
          >
            Continue Registration
            <ArrowRight className="w-5 h-5" />
          </button>

          {!selectedRole && (
            <p className="mt-4 text-sm" style={{ color: '#0D1117', opacity: 0.5 }}>
              Please select a role to continue
            </p>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-8 border-t"
          style={{ borderColor: '#6F42C120' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold" style={{ color: '#0D1117' }}>
                500+
              </div>
              <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                Enterprise Clients
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#0D1117]/10" />
            <div>
              <div className="text-2xl font-bold" style={{ color: '#0D1117' }}>
                10M+
              </div>
              <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                AI Citations Tracked
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#0D1117]/10" />
            <div>
              <div className="text-2xl font-bold" style={{ color: '#0D1117' }}>
                99.9%
              </div>
              <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                Platform Uptime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}