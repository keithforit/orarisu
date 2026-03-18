import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import {
  ArrowLeft,
  Check,
  Sparkles,
  Crown,
  Rocket,
  CreditCard,
  Calendar,
  Download,
  ChevronRight,
  Receipt,
  TrendingUp,
} from 'lucide-react';

type BillingCycle = 'monthly' | 'annual';

export function BillingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const { t } = useLanguage();

  const currentPlan = {
    name: 'Starter',
    price: 99,
    jobsUsed: 2,
    jobsLimit: 5,
    matchesUsed: 23,
    matchesLimit: 50,
    nextBillingDate: 'April 17, 2026',
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Sparkles,
      monthlyPrice: 99,
      annualPrice: 990,
      description: 'Perfect for small teams',
      features: [
        '5 active job postings',
        '50 AI matches/month',
        'Basic voice insights',
        'Email support',
      ],
      isCurrent: true,
    },
    {
      id: 'professional',
      name: 'Professional',
      icon: Crown,
      monthlyPrice: 299,
      annualPrice: 2990,
      description: 'For growing teams',
      features: [
        '20 active job postings',
        '200 AI matches/month',
        'Advanced voice & personality insights',
        'Priority support',
        'Team collaboration',
      ],
      isPopular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Rocket,
      monthlyPrice: null,
      annualPrice: null,
      description: 'For large organizations',
      features: [
        'Unlimited job postings',
        'Unlimited AI matches',
        'Full insights suite',
        'Dedicated account manager',
        'Custom integrations',
      ],
    },
  ];

  const recentInvoices = [
    { id: '1', date: 'March 17, 2026', amount: 99, status: 'Paid' },
    { id: '2', date: 'February 17, 2026', amount: 99, status: 'Paid' },
    { id: '3', date: 'January 17, 2026', amount: 99, status: 'Paid' },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return 'Custom';
    return billingCycle === 'monthly'
      ? `$${plan.monthlyPrice}`
      : `$${Math.floor(plan.annualPrice / 12)}`;
  };

  const getPeriod = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return '';
    return '/month';
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null || billingCycle === 'monthly') return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.annualPrice;
    return `Save $${savings}/year`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" className="text-gray-600">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  {t('nav.backToDashboard')}
                </Button>
              </Link>
              <div className="w-px h-6 bg-gray-200" />
              <div>
                <h1 className="text-2xl text-gray-900">{t('billing.title')}</h1>
                <p className="text-gray-600">{t('billing.subtitle')}</p>
              </div>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-8 space-y-8">
        {/* Current Plan Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl text-gray-900">Current Plan</h2>
                <span className="px-3 py-1 bg-[#FDF3F0] text-[#D97A63] rounded-full text-sm">
                  {currentPlan.name}
                </span>
              </div>
              <p className="text-gray-600">Next billing date: {currentPlan.nextBillingDate}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl text-gray-900 mb-1">${currentPlan.price}</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>
          </div>

          {/* Usage Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-700">Job Postings</span>
                <span className="text-sm text-gray-900">
                  {currentPlan.jobsUsed} / {currentPlan.jobsLimit}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#E89B86] to-[#D97A63]"
                  style={{ width: `${(currentPlan.jobsUsed / currentPlan.jobsLimit) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-700">AI Matches This Month</span>
                <span className="text-sm text-gray-900">
                  {currentPlan.matchesUsed} / {currentPlan.matchesLimit}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#E89B86] to-[#D97A63]"
                  style={{ width: `${(currentPlan.matchesUsed / currentPlan.matchesLimit) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Usage Warning */}
          {currentPlan.matchesUsed / currentPlan.matchesLimit > 0.7 && (
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-900 mb-1">
                    You're using {Math.round((currentPlan.matchesUsed / currentPlan.matchesLimit) * 100)}% of your monthly AI matches
                  </p>
                  <p className="text-sm text-amber-700">
                    Consider upgrading to the Professional plan for more matches and advanced features.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-lg text-sm transition-all ${
              billingCycle === 'monthly'
                ? 'bg-[#E89B86] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-2 rounded-lg text-sm transition-all ${
              billingCycle === 'annual'
                ? 'bg-[#E89B86] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Annual
            <span className="ml-2 px-2 py-0.5 bg-white/20 rounded text-xs">Save 17%</span>
          </button>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = getPrice(plan);
            const period = getPeriod(plan);
            const savings = getSavings(plan);

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl border p-6 transition-all ${
                  plan.isPopular
                    ? 'border-[#E89B86] shadow-md ring-2 ring-[#E89B86]/20 relative'
                    : plan.isCurrent
                    ? 'border-gray-300'
                    : 'border-gray-200 hover:shadow-lg'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white text-sm rounded-full">
                    Recommended
                  </div>
                )}

                {plan.isCurrent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-700 text-white text-sm rounded-full">
                    Current Plan
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.isPopular
                        ? 'bg-gradient-to-br from-[#E89B86] to-[#D97A63]'
                        : 'bg-gray-100'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${plan.isPopular ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-lg text-gray-900">{plan.name}</h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl text-gray-900">{price}</span>
                    <span className="text-gray-500">{period}</span>
                  </div>
                  {savings && (
                    <div className="text-sm text-[#D97A63] mb-2">{savings}</div>
                  )}
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <Button
                  className={`w-full mb-6 ${
                    plan.isCurrent
                      ? 'bg-gray-100 text-gray-500 cursor-default'
                      : plan.isPopular
                      ? 'bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  disabled={plan.isCurrent}
                >
                  {plan.isCurrent
                    ? 'Current Plan'
                    : price === 'Custom'
                    ? 'Contact Sales'
                    : 'Upgrade'}
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

        {/* Payment Method & Invoices */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Payment Method */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-lg text-gray-900">Payment Method</h3>
              </div>
              <Button variant="ghost" className="text-[#D97A63] hover:bg-[#FDF3F0]">
                Update
              </Button>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs">
                VISA
              </div>
              <div>
                <p className="text-gray-900 mb-1">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-600">Expires 12/2027</p>
              </div>
            </div>
          </div>

          {/* Next Billing */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg text-gray-900">Next Billing</h3>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Amount</span>
                <span className="text-xl text-gray-900">${currentPlan.price}.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Date</span>
                <span className="text-gray-900">{currentPlan.nextBillingDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Receipt className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg text-gray-900">Recent Invoices</h3>
            </div>
          </div>

          <div className="space-y-3">
            {recentInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-900">{invoice.date}</p>
                    <p className="text-sm text-gray-600">${invoice.amount}.00 • {invoice.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    Paid
                  </span>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                    <Download className="w-4 h-4" />
                  </Button>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-br from-[#FDF3F0] to-white rounded-2xl border border-[#E89B86]/20 p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">Need help choosing a plan?</h3>
              <p className="text-gray-600 mb-4">
                Our team can help you find the perfect plan for your hiring needs and walk you through our AI-powered features.
              </p>
              <div className="flex gap-3">
                <Button className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90">
                  Schedule a Call
                </Button>
                <Button variant="outline" className="border-gray-300">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}