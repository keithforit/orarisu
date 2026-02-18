import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Search,
  Settings,
  Bell,
  LayoutGrid,
  List,
  LogOut,
  Star,
  TrendingUp,
  TrendingDown,
  ExternalLink,
  X,
  Zap,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import CampaignCard from "../components/CampaignCard";
import OpportunityAlert from "../components/OpportunityAlert";
import AIAssistant from "../components/AIAssistant";
import ChatInput from "../components/ChatInput";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("recommended");
  const [activeQuery, setActiveQuery] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [filteredCampaigns, setFilteredCampaigns] = useState<any[]>([]);
  const [processingSteps, setProcessingSteps] = useState<string[]>([]);
  const [contextualSuggestion, setContextualSuggestion] = useState<{
    title: string;
    description: string;
    campaigns: any[];
  } | null>(null);

  // Mock campaign data
  const campaigns = [
    {
      name: "FinanceFlow Premium",
      network: "ShareASale",
      epc: 4.85,
      conversionRate: 8.2,
      cookieDuration: 90,
      category: "FinTech",
      trend: "up" as const,
      trendValue: 23,
      isRecommended: true,
      commissionRate: 25,
      approvalTime: 24,
      geoSupport: ["UK", "US", "EU"],
    },
    {
      name: "CloudSync Enterprise",
      network: "CJ Affiliate",
      epc: 3.92,
      conversionRate: 6.5,
      cookieDuration: 60,
      category: "SaaS",
      trend: "up" as const,
      trendValue: 15,
      isRecommended: true,
      commissionRate: 30,
      approvalTime: 12,
      geoSupport: ["UK", "US", "EU", "AU"],
    },
    {
      name: "ProjectMaster Pro",
      network: "Impact",
      epc: 3.45,
      conversionRate: 5.8,
      cookieDuration: 45,
      category: "SaaS",
      trend: "neutral" as const,
      trendValue: 0,
      isRecommended: false,
      commissionRate: 20,
      approvalTime: 48,
      geoSupport: ["UK", "EU"],
    },
    {
      name: "SecureVPN Plus",
      network: "Awin",
      epc: 2.98,
      conversionRate: 4.2,
      cookieDuration: 30,
      category: "Security",
      trend: "down" as const,
      trendValue: 8,
      isRecommended: false,
      commissionRate: 35,
      approvalTime: 72,
      geoSupport: ["US"],
      hasTrackingIssues: true,
      trackingReliability: 75,
      userPausedSimilar: 2,
    },
    {
      name: "AnalyticsHub",
      network: "Rakuten",
      epc: 2.67,
      conversionRate: 3.9,
      cookieDuration: 30,
      category: "SaaS",
      trend: "up" as const,
      trendValue: 5,
      isRecommended: false,
      commissionRate: 28,
      approvalTime: 36,
      geoSupport: ["UK", "US", "EU"],
    },
    {
      name: "DesignTools Suite",
      network: "PartnerStack",
      epc: 2.34,
      conversionRate: 3.2,
      cookieDuration: 30,
      category: "Design",
      trend: "neutral" as const,
      trendValue: 0,
      isRecommended: false,
      commissionRate: 22,
      approvalTime: 96,
      geoSupport: ["US", "EU"],
    },
    {
      name: "TaxMate Accounting",
      network: "Impact",
      epc: 3.67,
      conversionRate: 7.1,
      cookieDuration: 60,
      category: "Accounting",
      trend: "up" as const,
      trendValue: 31,
      isRecommended: false,
      commissionRate: 28,
      approvalTime: 24,
      geoSupport: ["UK", "EU"],
      seasonal: true,
    },
    {
      name: "BookKeeper Pro",
      network: "ShareASale",
      epc: 3.21,
      conversionRate: 6.3,
      cookieDuration: 45,
      category: "Accounting",
      trend: "up" as const,
      trendValue: 29,
      isRecommended: false,
      commissionRate: 25,
      approvalTime: 18,
      geoSupport: ["UK", "US"],
      seasonal: true,
    },
    {
      name: "QuickTax Business",
      network: "CJ Affiliate",
      epc: 2.89,
      conversionRate: 5.9,
      cookieDuration: 30,
      category: "Accounting",
      trend: "up" as const,
      trendValue: 27,
      isRecommended: false,
      commissionRate: 22,
      approvalTime: 36,
      geoSupport: ["UK"],
      seasonal: true,
    },
  ];

  const opportunities = [
    {
      type: "trending" as const,
      title: "SaaS Spike Detected",
      description:
        "SaaS offers are converting 23% better this week. Consider promoting CloudSync and ProjectMaster.",
    },
    {
      type: "opportunity" as const,
      title: "High EPC Alert",
      description:
        "FinanceFlow's EPC jumped to £4.85 — 3x your average. Strong opportunity for immediate promotion.",
    },
    {
      type: "warning" as const,
      title: "Tracking Issue",
      description:
        "SecureVPN showing delayed conversions. 12% of clicks not tracked properly in the last 48h.",
    },
  ];

  const handleChatQuery = (query: string) => {
    setIsProcessing(true);
    setActiveQuery(query);
    setProcessingSteps([]);
    setContextualSuggestion(null);

    // Simulate AI processing with steps
    const steps = [
      "Analyzing Google Trends in fintech...",
      "Checking UK tax deadlines...",
      "Reviewing historical seasonal spikes...",
      "Monitoring paid search CPC increases...",
    ];

    // Animate through processing steps
    steps.forEach((step, index) => {
      setTimeout(() => {
        setProcessingSteps((prev) => [...prev, step]);
      }, index * 500);
    });

    // Wait for all steps to complete before showing results
    setTimeout(() => {
      // Detect query intent and filter campaigns
      const lowerQuery = query.toLowerCase();
      
      let filtered = [...campaigns];
      
      // Check for UK traffic requirement
      if (lowerQuery.includes("uk")) {
        filtered = filtered.filter(c => c.geoSupport.includes("UK"));
      }
      
      // Check for SaaS category
      if (lowerQuery.includes("saas")) {
        filtered = filtered.filter(c => c.category === "SaaS");
      }
      
      // Check for approval time requirement
      if (lowerQuery.includes("approval") || lowerQuery.includes("low approval")) {
        filtered = filtered.filter(c => c.approvalTime <= 48);
      }
      
      // Sort by EPC if mentioned
      if (lowerQuery.includes("high epc") || lowerQuery.includes("epc")) {
        filtered.sort((a, b) => b.epc - a.epc);
      }
      
      setFilteredCampaigns(filtered);
      setIsProcessing(false);

      // Generate contextual suggestion based on timing
      // Check if it's relevant to show accounting software suggestion
      if (lowerQuery.includes("saas") || lowerQuery.includes("fintech") || lowerQuery.includes("uk")) {
        setTimeout(() => {
          const accountingCampaigns = campaigns.filter(c => c.category === "Accounting");
          setContextualSuggestion({
            title: "UK self-assessment deadline approaching",
            description: "Accounting SaaS conversions typically rise 27% in the next 30 days.",
            campaigns: accountingCampaigns,
          });
        }, 800);
      }
    }, 2500); // Wait for all 4 steps (4 * 500ms = 2000ms + 500ms buffer)
  };

  const clearFilter = () => {
    setActiveQuery(null);
    setFilteredCampaigns([]);
    setContextualSuggestion(null);
    setProcessingSteps([]);
  };

  // Smart ranking: James prefers reliability over short-term payout
  const smartRankCampaigns = (campaignList: any[]) => {
    return [...campaignList].sort((a, b) => {
      // If one has tracking issues and the other doesn't, prioritize reliable one
      if (a.hasTrackingIssues && !b.hasTrackingIssues) return 1;
      if (!a.hasTrackingIssues && b.hasTrackingIssues) return -1;
      
      // Otherwise sort by EPC
      return b.epc - a.epc;
    });
  };

  const displayCampaigns = smartRankCampaigns(activeQuery ? filteredCampaigns : campaigns);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-300/50">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Flowly
                </h1>
                <p className="text-xs text-gray-500">Adaptive Intelligence</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
              <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-semibold text-sm">
                JM
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, James 👋
          </h2>
          <p className="text-gray-600">
            Here's what's performing well for you today
          </p>
        </motion.div>

        {/* Chat Input */}
        <div className="mb-8">
          <ChatInput onSubmit={handleChatQuery} />
        </div>

        {/* Active query banner */}
        <AnimatePresence>
          {activeQuery && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    {isProcessing ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <Zap className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-900 text-sm">
                        {isProcessing ? "Processing..." : "AI Filter Active"}
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"{activeQuery}"</p>
                    
                    {isProcessing ? (
                      <div className="space-y-1.5">
                        {processingSteps.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-xs text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                            {step}
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2 text-xs">
                        <div className="bg-white px-3 py-1.5 rounded-lg border border-purple-200">
                          <span className="text-purple-600 font-medium">
                            ✓ UK Traffic (82%)
                          </span>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-lg border border-purple-200">
                          <span className="text-purple-600 font-medium">
                            ✓ US-only removed
                          </span>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-lg border border-purple-200">
                          <span className="text-purple-600 font-medium">
                            ✓ Approval &lt;48hrs
                          </span>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-lg border border-purple-200">
                          <span className="text-purple-600 font-medium">
                            ✓ Ranked by EPC
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={clearFilter}
                    className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contextual Suggestion */}
        <AnimatePresence>
          {contextualSuggestion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-5 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                  >
                    📈
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {contextualSuggestion.title}
                    </h3>
                    <p className="text-gray-700">
                      {contextualSuggestion.description}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-green-200">
                      <Sparkles className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">
                        Timing + Your Niche = High Probability
                      </span>
                    </div>
                  </div>
                </div>

                {/* Suggested campaigns */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Recommended for you right now:
                  </h4>
                  {contextualSuggestion.campaigns.map((campaign, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-white rounded-xl border border-green-200 p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between gap-6">
                        {/* Campaign info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-semibold text-gray-900 text-base">
                              {campaign.name}
                            </h3>
                            <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                              <TrendingUp className="w-3 h-3" />
                              +{campaign.trendValue}%
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{campaign.network}</span>
                            <span>•</span>
                            <span>{campaign.approvalTime}h approval</span>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="text-xs text-gray-500 mb-0.5">EPC</p>
                            <p className="text-2xl font-bold text-gray-900">
                              £{campaign.epc.toFixed(2)}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500 mb-0.5">Conv</p>
                            <p className="text-2xl font-bold text-gray-900">
                              {campaign.conversionRate.toFixed(1)}%
                            </p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl"
                          >
                            Activate
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Opportunity alerts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Smart Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {opportunities.map((opportunity, index) => (
              <OpportunityAlert key={index} {...opportunity} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Filters and controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex-1 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search campaigns..."
                    className="pl-11 h-11 rounded-xl border-gray-200"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-[180px] h-11 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="epc">Highest EPC</SelectItem>
                    <SelectItem value="conversion">Best Conversion</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                  </SelectContent>
                </Select>

                <Tabs
                  value={viewMode}
                  onValueChange={(v) => setViewMode(v as "grid" | "list")}
                  className="hidden md:block"
                >
                  <TabsList className="rounded-xl">
                    <TabsTrigger value="grid" className="rounded-lg">
                      <LayoutGrid className="w-4 h-4" />
                    </TabsTrigger>
                    <TabsTrigger value="list" className="rounded-lg">
                      <List className="w-4 h-4" />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Campaigns grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Your Campaigns
            </h3>
            <p className="text-sm text-gray-600">
              {displayCampaigns.length} {activeQuery ? "matching" : "active"} campaigns
            </p>
          </div>

          {/* Performance metrics view */}
          <div className="space-y-3">
            {displayCampaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className={`bg-white rounded-xl border ${
                  campaign.hasTrackingIssues 
                    ? 'border-amber-300 bg-amber-50/30' 
                    : 'border-gray-200'
                } p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}
              >
                {/* Reliability boost indicator */}
                {!campaign.hasTrackingIssues && index === 0 && campaigns[0].hasTrackingIssues && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
                  />
                )}
                
                {/* Tracking warning banner */}
                {campaign.hasTrackingIssues && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mb-4 bg-amber-100 border border-amber-300 rounded-lg p-3"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-amber-900 mb-1">
                          Tracking Reliability: {campaign.trackingReliability}%
                        </p>
                        <p className="text-xs text-amber-800">
                          You previously paused {campaign.userPausedSimilar} campaigns with similar tracking issues. 
                          <span className="font-medium"> A more reliable campaign has been prioritized above.</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Reliability boost badge */}
                {!campaign.hasTrackingIssues && index === 0 && campaigns[0].hasTrackingIssues && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-3 inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 px-3 py-1.5 rounded-lg"
                  >
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-700">
                      Prioritized for reliability ({campaign.trackingReliability}% tracking score)
                    </span>
                  </motion.div>
                )}

                <div className="flex items-start justify-between gap-6">
                  {/* Campaign info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-gray-900 text-base">
                        {campaign.name}
                      </h3>
                      {campaign.isRecommended && (
                        <div className="flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          <Star className="w-3 h-3" />
                          Top
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{campaign.network}</span>
                      <span>•</span>
                      <span>{campaign.category}</span>
                    </div>
                  </div>

                  {/* Key metrics - Large and bold */}
                  <div className="flex items-center gap-8">
                    {/* EPC */}
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                        EPC
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        £{campaign.epc.toFixed(2)}
                      </p>
                      {campaign.trend !== "neutral" && (
                        <div
                          className={`flex items-center justify-center gap-1 text-xs font-medium mt-1 ${
                            campaign.trend === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {campaign.trend === "up" ? (
                            <TrendingUp className="w-3.5 h-3.5" />
                          ) : (
                            <TrendingDown className="w-3.5 h-3.5" />
                          )}
                          {campaign.trendValue}%
                        </div>
                      )}
                    </div>

                    {/* 30-day conversion rate */}
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                        30d Conv Rate
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {campaign.conversionRate.toFixed(1)}%
                      </p>
                    </div>

                    {/* Commission & Cookie Duration */}
                    <div className="text-center min-w-[140px]">
                      <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                        Commission
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {campaign.commissionRate}%
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {campaign.cookieDuration}d cookie
                      </p>
                    </div>

                    {/* Approval Time - shown when filtered */}
                    {activeQuery && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-center min-w-[100px]"
                      >
                        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                          Approval
                        </p>
                        <p className="text-2xl font-bold text-green-600">
                          {campaign.approvalTime}h
                        </p>
                      </motion.div>
                    )}

                    {/* Quick action */}
                    <Button
                      variant="outline"
                      className="rounded-xl hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}