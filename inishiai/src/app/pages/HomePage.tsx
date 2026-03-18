import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  Brain, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Award,
  Target,
  TrendingUp
} from 'lucide-react';

export function HomePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t('home.feature1.title'),
      description: t('home.feature1.desc'),
    },
    {
      icon: Shield,
      title: t('home.feature2.title'),
      description: t('home.feature2.desc'),
    },
    {
      icon: Zap,
      title: t('home.feature3.title'),
      description: t('home.feature3.desc'),
    },
  ];

  const stats = [
    { value: '70%', label: 'Faster Hiring' },
    { value: '85%', label: 'Better Matches' },
    { value: '50%', label: 'Reduced Bias' },
    { value: '10k+', label: 'Candidates Hired' },
  ];

  const benefits = [
    'Voice analysis reveals hidden strengths',
    'Personality insights beyond the resume',
    'Cultural fit predictions',
    'Communication style matching',
    'Objective candidate scoring',
    'Reduced time-to-hire',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,155,134,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(217,122,99,0.06),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDF3F0] rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#D97A63]" />
                <span className="text-sm text-[#D97A63]">AI-Powered Hiring Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
                Hire for potential,
                <br />
                <span className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] bg-clip-text text-transparent">
                  not just resumes
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Discover exceptional talent through voice insights and AI-powered analysis. 
                Make better hiring decisions with reduced bias and deeper candidate understanding.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90 px-8 py-6 text-lg">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-6 text-lg border-gray-300">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 mt-12">
                {stats.slice(0, 3).map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-3xl text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E89B86]/20 to-[#D97A63]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzM2NzUwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional team collaboration"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl text-white mb-2">{stat.value}</p>
                <p className="text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDF3F0] rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#D97A63]" />
              <span className="text-sm text-[#D97A63]">Features</span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">
              Everything you need to hire better
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed to help you discover and hire exceptional talent through AI-powered insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#E89B86] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">
              How Inishi AI works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your hiring process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Post Your Job',
                description: 'Upload a job description or create one with our guided form. Our AI understands what you\'re looking for.',
                icon: Target,
              },
              {
                step: '02',
                title: 'AI Matches Candidates',
                description: 'Our voice AI analyzes candidates and matches them based on skills, personality, and cultural fit.',
                icon: Brain,
              },
              {
                step: '03',
                title: 'Make Better Decisions',
                description: 'Review detailed insights and hire confidently with data-driven recommendations.',
                icon: Award,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#E89B86] to-transparent" />
                  )}
                  <div className="relative bg-white p-8 rounded-2xl border border-gray-200">
                    <div className="text-6xl text-[#E89B86]/20 mb-4">{item.step}</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E89B86]/20 to-[#D97A63]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873271321-4d6b3526ef42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwb2ZmaWNlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzM2NDMzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Diverse team collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDF3F0] rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-[#D97A63]" />
                <span className="text-sm text-[#D97A63]">Better Outcomes</span>
              </div>
              
              <h2 className="text-4xl text-gray-900 mb-6">
                Go beyond the resume
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Traditional hiring focuses on what candidates have done. Inishi AI reveals who they are and what they can become.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E89B86] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/signup">
                <Button className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90 px-8 py-6">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#E89B86] to-[#D97A63] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Ready to transform your hiring?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of companies using Inishi AI to discover exceptional talent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-white text-[#D97A63] hover:bg-gray-100 px-8 py-6 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}