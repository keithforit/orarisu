import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Sparkles, ArrowLeft, Mail, Lock, User, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';

export function SignupPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would create the account
    navigate('/dashboard');
  };

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            <h1 className="text-3xl text-gray-900 mb-2">{t('signup.title')}</h1>
            <p className="text-gray-600">{t('signup.subtitle')}</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <Label htmlFor="name">{t('signup.name')}</Label>
              <div className="relative mt-1.5">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">{t('signup.email')}</Label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company">{t('signup.company')}</Label>
              <div className="relative mt-1.5">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="company"
                  type="text"
                  placeholder="Acme Inc"
                  value={formData.company}
                  onChange={(e) => updateForm('company', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">{t('signup.password')}</Label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => updateForm('password', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90 py-6"
            >
              {t('signup.submit')}
            </Button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            {t('signup.hasAccount')}{' '}
            <Link to="/login" className="text-[#D97A63] hover:underline">
              {t('signup.loginLink')}
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