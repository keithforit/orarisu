import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Onboarding2() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const benefits = [
    {
      icon: "💪",
      title: t('onboarding2.benefit1.title'),
      description: t('onboarding2.benefit1.desc'),
      color: "from-[#FFB4A5] to-[#FFD4C8]"
    },
    {
      icon: "💬",
      title: t('onboarding2.benefit2.title'),
      description: t('onboarding2.benefit2.desc'),
      color: "from-[#FF9F8E] to-[#FFB4A5]"
    },
    {
      icon: "🎯",
      title: t('onboarding2.benefit3.title'),
      description: t('onboarding2.benefit3.desc'),
      color: "from-[#FF8A76] to-[#FF9F8E]"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-between px-8 py-12 bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF0EA]">
      {/* Skip button */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => navigate('/permission')}
          className="text-[15px] text-muted-foreground active:scale-95 transition-transform"
        >
          {t('onboarding.skip')}
        </button>
      </div>

      {/* Main Content */}
      <motion.div 
        className="flex-1 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="text-[56px] mb-4">✨</div>
          <h1 className="text-[32px] font-semibold text-foreground mb-3 leading-tight whitespace-pre-line">
            {t('onboarding2.title')}
          </h1>
          <p className="text-[16px] text-muted-foreground">
            {t('onboarding2.desc')}
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="w-full space-y-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={`bg-gradient-to-r ${benefit.color} rounded-[28px] p-6 shadow-md`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5, type: "spring" }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-[18px] font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-[14px] text-foreground/80">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Progress dots & Next */}
      <div className="w-full">
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
          <div className="w-8 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
        </div>

        <motion.button
          onClick={() => navigate('/onboarding-3')}
          className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('onboarding.next')}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}