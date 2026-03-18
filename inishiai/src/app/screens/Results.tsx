import { useNavigate } from "react-router";
import { Share2, Download } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Results() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const insights = [
    {
      icon: "💪",
      title: t('results.strength.title'),
      items: [
        t('results.strength.1'),
        t('results.strength.2'),
        t('results.strength.3')
      ]
    },
    {
      icon: "🎭",
      title: t('results.personality.title'),
      items: [
        t('results.personality.1'),
        t('results.personality.2'),
        t('results.personality.3')
      ]
    },
    {
      icon: "💬",
      title: t('results.communication.title'),
      items: [
        t('results.communication.1'),
        t('results.communication.2'),
        t('results.communication.3')
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col px-8 py-12 overflow-y-auto">
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div 
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center mx-auto mb-4 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <span className="text-3xl">✨</span>
        </motion.div>
        
        <h1 className="text-[28px] font-semibold text-foreground mb-2">
          {t('results.title')}
        </h1>
        
        <p className="text-[15px] text-muted-foreground">
          {t('results.subtitle')}
        </p>
      </motion.div>

      {/* Score Card */}
      <motion.div 
        className="bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] rounded-[28px] p-6 mb-6 shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="text-center">
          <p className="text-white/80 text-[14px] mb-2">{t('results.score')}</p>
          <motion.p 
            className="text-white text-[56px] font-bold leading-none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", duration: 0.8 }}
          >
            92%
          </motion.p>
          <p className="text-white/90 text-[15px] mt-2">{t('results.scoreDesc')}</p>
        </div>
      </motion.div>

      {/* Insights */}
      <div className="space-y-4 mb-6">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            className="bg-white rounded-[24px] p-5 shadow-md border border-primary/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{insight.icon}</span>
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-foreground mb-2">
                  {insight.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {insight.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-secondary/50 rounded-full text-[13px] text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mt-auto pt-4">
        <motion.button
          className="w-full py-4 rounded-[20px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[17px] shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share2 className="w-5 h-5" />
          {t('results.share')}
        </motion.button>

        <motion.button
          className="w-full py-4 rounded-[20px] bg-white border-2 border-primary/20 text-foreground font-semibold text-[17px] shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5" />
          {t('results.download')}
        </motion.button>

        <motion.button
          onClick={() => navigate('/')}
          className="w-full py-3 text-muted-foreground text-[15px] active:scale-95 transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {t('results.startOver')}
        </motion.button>
      </div>
    </div>
  );
}