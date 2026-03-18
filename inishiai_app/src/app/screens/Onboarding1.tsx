import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Onboarding1() {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
        className="flex-1 flex flex-col items-center justify-center text-center"
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
            {/* Resume paper - crossed out */}
            <motion.div 
              className="w-40 h-48 bg-white rounded-[24px] shadow-lg p-4 border border-primary/10"
              initial={{ rotate: 0 }}
              animate={{ rotate: -5 }}
              transition={{ delay: 0.4 }}
            >
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded-full w-3/4"></div>
                <div className="h-2 bg-muted rounded-full w-full"></div>
                <div className="h-2 bg-muted rounded-full w-2/3"></div>
                <div className="h-1 bg-muted/50 rounded-full w-full mt-3"></div>
                <div className="h-1 bg-muted/50 rounded-full w-5/6"></div>
                <div className="h-1 bg-muted/50 rounded-full w-full"></div>
              </div>
            </motion.div>
            
            {/* X mark */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring", duration: 0.6 }}
            >
              <div className="text-[80px] opacity-60">❌</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h1 className="text-[32px] font-semibold text-foreground mb-4 leading-tight whitespace-pre-line">
            {t('onboarding1.title')}
          </h1>
          
          <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[300px]">
            {t('onboarding1.desc')}
          </p>
        </motion.div>
      </motion.div>

      {/* Progress dots & Next */}
      <div className="w-full">
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-8 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
        </div>

        <motion.button
          onClick={() => navigate('/onboarding-2')}
          className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('onboarding.next')}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}