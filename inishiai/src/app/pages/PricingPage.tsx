import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Check, Sparkles, Crown, Rocket, ArrowRight, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function PricingPage() {
  const { t, language } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter.name'),
      price: language === 'ja' ? '¥14,900' : '$99',
      period: t('pricing.starter.period'),
      description: t('pricing.starter.desc'),
      icon: Sparkles,
      features: [
        t('pricing.starter.feature1'),
        t('pricing.starter.feature2'),
        t('pricing.starter.feature3'),
        t('pricing.starter.feature4'),
        t('pricing.starter.feature5'),
      ],
      popular: false,
      cta: t('common.getStarted'),
    },
    {
      name: t('pricing.professional.name'),
      price: language === 'ja' ? '¥44,900' : '$299',
      period: t('pricing.professional.period'),
      description: t('pricing.professional.desc'),
      icon: Crown,
      features: [
        t('pricing.professional.feature1'),
        t('pricing.professional.feature2'),
        t('pricing.professional.feature3'),
        t('pricing.professional.feature4'),
        t('pricing.professional.feature5'),
        t('pricing.professional.feature6'),
        t('pricing.professional.feature7'),
      ],
      popular: true,
      cta: t('common.getStarted'),
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      period: '',
      description: t('pricing.enterprise.desc'),
      icon: Rocket,
      features: [
        t('pricing.enterprise.feature1'),
        t('pricing.enterprise.feature2'),
        t('pricing.enterprise.feature3'),
        t('pricing.enterprise.feature4'),
        t('pricing.enterprise.feature5'),
        t('pricing.enterprise.feature6'),
        t('pricing.enterprise.feature7'),
        t('pricing.enterprise.feature8'),
      ],
      popular: false,
      cta: t('common.contactSales'),
    },
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Start with a 14-day free trial on any plan. No credit card required. Experience all features and cancel anytime.',
    },
    {
      question: 'What makes Inishi AI different?',
      answer: 'We use voice analysis and AI to reveal candidate potential beyond resumes, reducing bias and improving hiring decisions.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'All plans include email support. Professional plans get priority support, and Enterprise customers get a dedicated account manager.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption and comply with GDPR, SOC 2, and other major security standards.',
    },
    {
      question: 'How does AI candidate matching work?',
      answer: 'Our AI analyzes voice patterns, communication styles, and responses to understand personality traits and skills, matching candidates to your specific needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,155,134,0.08),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDF3F0] rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#D97A63]" />
            <span className="text-sm text-[#D97A63]">Simple, Transparent Pricing</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Choose the perfect plan
            <br />
            <span className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] bg-clip-text text-transparent">
              for your team
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl border p-8 transition-all hover:shadow-xl ${
                    plan.popular
                      ? 'border-[#E89B86] shadow-lg ring-2 ring-[#E89B86]/20 relative scale-105'
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white text-sm rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-br from-[#E89B86] to-[#D97A63]'
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div>
                      <h3 className="text-gray-900">{plan.name}</h3>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl text-gray-900">{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <Link to="/signup">
                    <Button
                      className={`w-full mb-8 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#E89B86] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-[#E89B86] flex-shrink-0 mt-0.5" />
                  <h3 className="text-gray-900">{faq.question}</h3>
                </div>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#E89B86] to-[#D97A63]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you find the perfect plan for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-white text-[#D97A63] hover:bg-gray-100 px-8 py-6 text-lg">
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}