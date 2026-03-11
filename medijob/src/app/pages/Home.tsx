import { Link } from "react-router";
import { motion } from "motion/react";
import { TrendingUp, FileText, Users, DollarSign, Calendar, Gift, Wallet, Briefcase, Award, Target, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const benefits = [
    { label: t("home.benefits.salary"), icon: DollarSign },
    { label: t("home.benefits.weekends"), icon: Calendar },
    { label: t("home.benefits.bonus"), icon: Gift },
    { label: t("home.benefits.monthly"), icon: Wallet },
  ];

  const features = [
    {
      title: t("home.feature1.title"),
      subtitle: t("home.feature1.subtitle"),
      icon: TrendingUp,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: t("home.feature2.title"),
      subtitle: t("home.feature2.subtitle"),
      icon: FileText,
      color: "bg-gradient-to-br from-indigo-600 to-indigo-700",
    },
    {
      title: t("home.feature3.title"),
      subtitle: t("home.feature3.subtitle"),
      icon: Users,
      color: "bg-gradient-to-br from-purple-600 to-purple-700",
    },
  ];

  const stats = [
    { value: "95%", label: t("home.stats.success") },
    { value: "500+", label: t("home.stats.companies") },
    { value: "4.9/5", label: t("home.stats.rating") },
  ];

  const services = [
    {
      icon: Briefcase,
      title: t("home.service1.title"),
      description: t("home.service1.description"),
    },
    {
      icon: FileText,
      title: t("home.service2.title"),
      description: t("home.service2.description"),
    },
    {
      icon: Target,
      title: t("home.service3.title"),
      description: t("home.service3.description"),
    },
    {
      icon: TrendingUp,
      title: t("home.service4.title"),
      description: t("home.service4.description"),
    },
    {
      icon: Award,
      title: t("home.service5.title"),
      description: t("home.service5.description"),
    },
    {
      icon: Users,
      title: t("home.service6.title"),
      description: t("home.service6.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm font-medium">{t("home.hero.badge")}</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                {t("home.hero.title")}
                <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {t("home.hero.titleGradient")}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {t("home.hero.subtitle")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start mb-[25px]">
                <Link to="/apply" className="flex-1 sm:flex-initial">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white px-8 py-7 rounded-xl text-lg font-semibold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all relative group overflow-visible hover:animate-pulse hover:border-2 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(34,211,238,0.6),0_0_60px_rgba(34,211,238,0.4)]"
                  >
                    {t("home.hero.cta")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Right Content - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzA3MTUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional Career Success"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
                </div>
                
                {/* Floating Card - Benefits */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -left-8 top-20 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-5 max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">$120K</div>
                      <div className="text-xs text-gray-600">{t("home.features.avgSalary")}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{t("home.features.increase")}</div>
                </motion.div>
                
                {/* Floating Card - Team */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -right-8 bottom-32 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-5 max-w-[220px]"
                >
                  <div className="flex -space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                      +50
                    </div>
                  </div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{t("home.features.experts")}</div>
                  <div className="text-xs text-gray-500">{t("home.features.ready")}</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">{t("home.whyChoose")}</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              {t("home.whyChoose.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("home.whyChoose.subtitle")}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.subtitle}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("home.benefits.title")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-gray-900 text-lg">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <p className="text-indigo-400 italic text-lg">{t("home.about.label")}</p>
            <h2 className="text-4xl font-bold text-orange-500">{t("home.about.title")}</h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
            
            <p className="text-gray-700 text-lg leading-relaxed mt-8">
              {t("home.about.description")}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("home.services.title")}</h2>
            <p className="text-gray-600 text-lg">{t("home.services.subtitle")}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">{t("home.cta.title")}</h2>
            <p className="text-xl text-indigo-100">
              {t("home.cta.subtitle")}
            </p>
            <Link to="/apply">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full text-lg"
              >
                {t("home.cta.button")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}