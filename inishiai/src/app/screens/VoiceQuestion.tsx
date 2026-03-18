import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function VoiceQuestion() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col px-8 py-12">
      {/* Progress Bar */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex gap-2 mb-2">
          <div className="flex-1 h-1.5 rounded-full bg-primary"></div>
          <div className="flex-1 h-1.5 rounded-full bg-muted"></div>
          <div className="flex-1 h-1.5 rounded-full bg-muted"></div>
          <div className="flex-1 h-1.5 rounded-full bg-muted"></div>
        </div>
        <p className="text-[13px] text-muted-foreground text-right">
          {t('question.progress').replace('{current}', '1').replace('{total}', '4')}
        </p>
      </motion.div>

      {/* AI Avatar */}
      <motion.div 
        className="flex flex-col items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div 
          className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center mb-4 shadow-lg"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-4xl">👋</span>
        </motion.div>
        
        <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 mb-2">
          <p className="text-[13px] text-primary font-medium">{t('question.listening')}</p>
        </div>
      </motion.div>

      {/* Question Card */}
      <motion.div 
        className="flex-1 flex items-center justify-center mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="bg-white rounded-[32px] p-8 shadow-xl border border-primary/10">
          <p className="text-[22px] text-foreground leading-relaxed text-center">
            {t('question.text')}
          </p>
        </div>
      </motion.div>

      {/* Tip */}
      <motion.div 
        className="bg-secondary/50 rounded-2xl p-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p className="text-[14px] text-foreground text-center">
          💡 <span className="font-medium">{t('question.tip')}</span> {t('question.tipText')}
        </p>
      </motion.div>

      {/* Action Button */}
      <motion.button
        onClick={() => navigate('/recording')}
        className="w-full py-4 rounded-[20px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[17px] shadow-lg active:scale-95 transition-transform"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileTap={{ scale: 0.95 }}
      >
        {t('question.cta')}
      </motion.button>
    </div>
  );
}