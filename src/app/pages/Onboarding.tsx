import { Link2, Zap, Target, Sparkles, Video, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useLocation } from 'react-router';

export function Onboarding() {
  const location = useLocation();
  const role = location.state?.role || 'brand';
  const [currentStep, setCurrentStep] = useState(0);
  const [productUrl, setProductUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    {
      id: 'connect',
      title: 'Connect',
      icon: Link2,
      color: '#6F42C1',
      description: 'Link your data sources',
    },
    {
      id: 'create',
      title: 'Create',
      icon: Zap,
      color: '#007BFF',
      description: 'Generate your first Aura video',
    },
    {
      id: 'dominate',
      title: 'Dominate',
      icon: Target,
      color: '#00CCCC',
      description: 'Launch your AI visibility',
    },
  ];

  const handleGenerate = () => {
    if (productUrl) {
      setIsGenerating(true);
      // Simulate API call
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(2);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      {/* Animated Background */}
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
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#6F42C1]/20 to-[#007BFF]/20 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#007BFF]/20 to-[#00CCCC]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
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
              WELCOME TO ORARISU
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-4 tracking-tight" style={{ color: '#0D1117' }}>
            Getting Started
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#0D1117', opacity: 0.7 }}>
            Let's set up your AI visibility workspace in three simple steps
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl border-2 p-8 mb-8 shadow-lg"
          style={{ borderColor: '#6F42C120' }}
        >
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === index;
              const isCompleted = currentStep > index;

              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    {/* Step Circle */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                        isActive ? 'shadow-lg' : ''
                      }`}
                      style={{
                        backgroundColor: isCompleted || isActive ? step.color : `${step.color}15`,
                      }}
                    >
                      {isCompleted ? (
                        <Check className="w-8 h-8 text-white" />
                      ) : (
                        <Icon 
                          className="w-8 h-8" 
                          style={{ color: isActive ? 'white' : step.color }} 
                        />
                      )}

                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{ backgroundColor: step.color, opacity: 0.3 }}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>

                    {/* Step Label */}
                    <div className="text-center">
                      <div 
                        className={`font-bold mb-1 ${isActive ? 'text-lg' : ''}`}
                        style={{ color: isActive || isCompleted ? step.color : '#0D1117', opacity: isActive || isCompleted ? 1 : 0.5 }}
                      >
                        {step.title}
                      </div>
                      <div className="text-xs" style={{ color: '#0D1117', opacity: 0.5 }}>
                        {step.description}
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 mx-4 rounded-full bg-[#F8F9FC] overflow-hidden" style={{ maxWidth: '120px' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: step.color }}
                        initial={{ width: '0%' }}
                        animate={{ width: currentStep > index ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl border-2 p-12 shadow-lg"
          style={{ borderColor: '#6F42C120' }}
        >
          {/* Connect Step */}
          {currentStep === 0 && (
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#6F42C115' }}>
                <Link2 className="w-10 h-10" style={{ color: '#6F42C1' }} />
              </div>
              
              <h2 className="text-3xl mb-4" style={{ color: '#0D1117' }}>
                Connect Your Data Sources
              </h2>
              
              <p className="text-lg mb-8" style={{ color: '#0D1117', opacity: 0.7 }}>
                Link your website, analytics, and social channels to power your AI visibility tracking
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { name: 'Google Analytics', connected: true },
                  { name: 'Website URL', connected: true },
                  { name: 'Social Media', connected: false },
                ].map((source, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl border"
                    style={{ backgroundColor: source.connected ? '#00CCCC10' : '#F8F9FC', borderColor: source.connected ? '#00CCCC' : '#0D111720' }}
                  >
                    <span style={{ color: '#0D1117' }}>{source.name}</span>
                    {source.connected ? (
                      <div className="flex items-center gap-2" style={{ color: '#00CCCC' }}>
                        <Check className="w-5 h-5" />
                        <span className="text-sm">Connected</span>
                      </div>
                    ) : (
                      <button className="text-sm px-4 py-2 rounded-lg" style={{ color: '#007BFF', backgroundColor: '#007BFF15' }}>
                        Connect
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg bg-gradient-to-r from-[#6F42C1] to-[#007BFF] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Create Step */}
          {currentStep === 1 && (
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#007BFF15' }}>
                <Video className="w-10 h-10" style={{ color: '#007BFF' }} />
              </div>
              
              <h2 className="text-3xl mb-4" style={{ color: '#0D1117' }}>
                Generate Your First Aura Video
              </h2>
              
              <p className="text-lg mb-8" style={{ color: '#0D1117', opacity: 0.7 }}>
                Transform any product URL into an AI-optimized video that maximizes your visibility
              </p>

              {/* URL Input */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="url"
                    value={productUrl}
                    onChange={(e) => setProductUrl(e.target.value)}
                    placeholder="Paste a product URL to generate your first Aura video"
                    className="w-full px-6 py-5 rounded-2xl border-2 text-lg focus:outline-none transition-all"
                    style={{ 
                      borderColor: productUrl ? '#007BFF' : '#0D111720',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                  {productUrl && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#00CCCC' }}
                    >
                      <Check className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </div>

                <p className="mt-3 text-sm text-left" style={{ color: '#0D1117', opacity: 0.5 }}>
                  Example: https://yourproduct.com/item-123
                </p>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={!productUrl || isGenerating}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg transition-all ${
                  productUrl && !isGenerating
                    ? 'shadow-lg hover:shadow-xl hover:scale-105'
                    : 'opacity-50 cursor-not-allowed'
                }`}
                style={{ 
                  backgroundColor: '#00CCCC',
                  color: 'white',
                }}
              >
                {isGenerating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Start AI Generation
                  </>
                )}
              </button>

              {/* Feature Preview */}
              <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm">
                {[
                  { icon: '🎬', label: 'Auto Scene Detection' },
                  { icon: '🎙️', label: 'AI Voice-Over' },
                  { icon: '🎨', label: 'Brand Styling' },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-xl border"
                    style={{ backgroundColor: '#F8F9FC', borderColor: '#0D111720' }}
                  >
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <div style={{ color: '#0D1117', opacity: 0.7 }}>{feature.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Dominate Step */}
          {currentStep === 2 && (
            <div className="text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" 
                style={{ backgroundColor: '#00CCCC' }}
              >
                <Target className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-3xl mb-4" style={{ color: '#0D1117' }}>
                You're All Set!
              </h2>
              
              <p className="text-lg mb-8" style={{ color: '#0D1117', opacity: 0.7 }}>
                Your Orarisu workspace is ready. Start dominating AI visibility across all major models.
              </p>

              {/* Success Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { value: '1', label: 'Video Generated', color: '#00CCCC' },
                  { value: '3', label: 'Sources Connected', color: '#007BFF' },
                  { value: '100%', label: 'Setup Complete', color: '#6F42C1' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-xl border"
                    style={{ backgroundColor: `${stat.color}10`, borderColor: stat.color }}
                  >
                    <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg bg-gradient-to-r from-[#6F42C1] to-[#007BFF] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-sm" style={{ color: '#0D1117', opacity: 0.5 }}>
            Need help? Check our{' '}
            <a href="#" className="underline hover:opacity-100" style={{ color: '#007BFF' }}>
              documentation
            </a>{' '}
            or{' '}
            <a href="#" className="underline hover:opacity-100" style={{ color: '#007BFF' }}>
              contact support
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
