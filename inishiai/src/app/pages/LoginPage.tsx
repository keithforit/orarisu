import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Sparkles, ArrowLeft, Mail, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('keith@for-it.co.jp');
  const [password, setPassword] = useState('keith');
  const { t } = useLanguage();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate the user
    // For now, accept the specific credentials or navigate to dashboard
    if (email === 'keith@for-it.co.jp' && password === 'keith') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please use keith@for-it.co.jp / keith');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-24">
        <div className="max-w-md w-full mx-auto">
          <div className="flex items-center justify-between mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t('nav.home')}
            </Link>
            <LanguageToggle />
          </div>

          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl text-gray-900">InishiAI</span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl text-gray-900 mb-2">{t('login.title')}</h1>
            <p className="text-gray-600">{t('login.subtitle')}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="email">{t('login.email')}</Label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <Label htmlFor="password">{t('login.password')}</Label>
                <a href="#" className="text-sm text-[#D97A63] hover:underline">
                  {t('login.forgotPassword')}
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90 py-6"
            >
              {t('login.submit')}
            </Button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            {t('login.noAccount')}{' '}
            <Link to="/signup" className="text-[#D97A63] hover:underline">
              {t('login.signupLink')}
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#E89B86] to-[#D97A63] p-12 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_50%)]" />
        
        <div className="relative max-w-md text-white">
          <Sparkles className="w-16 h-16 mb-6" />
          <h2 className="text-4xl mb-4">
            {t('home.hero.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('home.hero.subtitle')}
          </p>
        </div>
      </div>
    </div>
  );
}