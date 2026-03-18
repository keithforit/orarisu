import { Check, Sparkles, Crown, Rocket } from 'lucide-react';
import { Button } from './ui/button';

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams getting started',
      icon: Sparkles,
      features: [
        'Up to 5 active job postings',
        '50 AI candidate matches per month',
        'Basic voice insights',
        'Email support',
        'Standard analytics',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'For growing teams hiring at scale',
      icon: Crown,
      features: [
        'Up to 20 active job postings',
        '200 AI candidate matches per month',
        'Advanced voice insights & personality analysis',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom interview templates',
        'Team collaboration tools',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with unique needs',
      icon: Rocket,
      features: [
        'Unlimited job postings',
        'Unlimited AI candidate matches',
        'Full voice & behavioral insights suite',
        'Dedicated account manager',
        'Custom integrations',
        'API access',
        'Advanced security & compliance',
        'Custom training & onboarding',
      ],
      popular: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Choose Your Plan</h2>
        <p className="text-gray-600">
          Find the right plan for your hiring needs. All plans include our AI-powered voice insights.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl border p-6 transition-all hover:shadow-lg ${
                plan.popular
                  ? 'border-[#E89B86] shadow-md ring-2 ring-[#E89B86]/20 relative'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white text-sm rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  plan.popular
                    ? 'bg-gradient-to-br from-[#E89B86] to-[#D97A63]'
                    : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div>
                  <h3 className="text-gray-900">{plan.name}</h3>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E89B86] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-[#FDF3F0] to-[#FFF9F7] border border-[#F5D5CA] rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">Not sure which plan is right for you?</h3>
            <p className="text-gray-600 mb-4">
              Schedule a demo with our team to see how Inishi AI can transform your hiring process with voice-based insights.
            </p>
            <Button variant="outline" className="border-[#E89B86] text-[#D97A63] hover:bg-[#FDF3F0]">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
