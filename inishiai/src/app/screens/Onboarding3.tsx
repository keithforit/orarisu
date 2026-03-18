import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Onboarding3() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const reassurances = [
    {
      icon: "🕐",
      text: t('onboarding3.reassure1')
    },
    {
      icon: "🌍",
      text: t('onboarding3.reassure2')
    },
    {
      icon: "🔒",
      text: t('onboarding3.reassure3')
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
        {/* Illustration */}
        <motion.div
          className="mb-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        >
          <div className="relative">
            {/* Protective shield/hands */}
            <motion.div 
              className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center shadow-2xl"
              animate={{ 
                boxShadow: [
                  "0 25px 70px rgba(255, 127, 109, 0.35)",
                  "0 25px 90px rgba(255, 127, 109, 0.55)",
                  "0 25px 70px rgba(255, 127, 109, 0.35)",
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-[64px]">🤝</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-[32px] font-semibold text-foreground mb-4 leading-tight whitespace-pre-line">
            {t('onboarding3.title')}
          </h1>
          
          <p className="text-[16px] text-muted-foreground max-w-[280px] mx-auto">
            {t('onboarding3.desc')}
          </p>
        </motion.div>

        {/* Reassurance list */}
        <div className="w-full space-y-3">
          {reassurances.map((item, index) => (
            <motion.div
              key={item.text}
              className="bg-white/70 backdrop-blur-sm rounded-[24px] p-4 border border-white flex items-start gap-3 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <p className="text-[15px] text-foreground leading-relaxed pt-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Progress dots & Next */}
      <div className="w-full">
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
          <div className="w-8 h-1.5 rounded-full bg-primary"></div>
        </div>

        <motion.button
          onClick={() => navigate('/permission')}
          className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('onboarding.ready')}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}