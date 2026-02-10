import { Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo credentials
    if (email === 'demo@orarisu.com' && password === 'demo123') {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try: demo@orarisu.com / demo123');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
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

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border mb-6" style={{ borderColor: '#6F42C1', backgroundColor: '#6F42C110' }}>
            <Sparkles className="w-4 h-4" style={{ color: '#6F42C1' }} />
            <span className="text-sm tracking-wide" style={{ color: '#0D1117' }}>
              WELCOME BACK
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-4 tracking-tight" style={{ color: '#0D1117' }}>
            Sign In
          </h1>
          
          <p className="text-xl" style={{ color: '#0D1117', opacity: 0.7 }}>
            Access your Orarisu workspace
          </p>

          {/* Demo Credentials Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs"
            style={{ backgroundColor: '#007BFF10', color: '#007BFF' }}
          >
            💡 Demo: demo@orarisu.com / demo123
          </motion.div>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl border-2 p-8 shadow-lg"
          style={{ borderColor: '#6F42C120' }}
        >
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-3 rounded-xl border-2 text-sm"
                style={{ 
                  borderColor: '#FC006120',
                  backgroundColor: '#FC006110',
                  color: '#FC0061'
                }}
              >
                {error}
              </motion.div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2" style={{ color: '#0D1117', opacity: 0.8 }}>
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#007BFF', opacity: 0.5 }} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 text-lg focus:outline-none transition-all"
                  style={{ 
                    borderColor: email ? '#007BFF' : '#0D111720',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm mb-2" style={{ color: '#0D1117', opacity: 0.8 }}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#007BFF', opacity: 0.5 }} />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 text-lg focus:outline-none transition-all"
                  style={{ 
                    borderColor: password ? '#007BFF' : '#0D111720',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-2 accent-[#007BFF]"
                  style={{ borderColor: '#0D111720' }}
                />
                <span className="text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
                  Remember me
                </span>
              </label>
              
              <a href="#" className="text-sm hover:underline" style={{ color: '#007BFF' }}>
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg bg-gradient-to-r from-[#6F42C1] to-[#007BFF] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Sign In
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" style={{ borderColor: '#0D111720' }} />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white" style={{ color: '#0D1117', opacity: 0.5 }}>
                OR
              </span>
            </div>
          </div>

          {/* SSO Options */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl border-2 transition-all hover:bg-[#F8F9FC]"
              style={{ borderColor: '#0D111720', color: '#0D1117' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl border-2 transition-all hover:bg-[#F8F9FC]"
              style={{ borderColor: '#0D111720', color: '#0D1117' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button>
          </div>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
            Don't have an account?{' '}
            <Link to="/signup" className="hover:underline" style={{ color: '#007BFF' }}>
              Sign up for free
            </Link>
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6 text-xs"
          style={{ color: '#0D1117', opacity: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
            256-bit encryption
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
            SOC 2 compliant
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
            GDPR ready
          </div>
        </motion.div>
      </div>
    </div>
  );
}