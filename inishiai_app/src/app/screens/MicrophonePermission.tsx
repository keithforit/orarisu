import { useNavigate } from "react-router";
import { Mic } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSelector } from "../components/LanguageSelector";

export function MicrophonePermission() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleAllow = () => {
    // In a real app, this would request microphone permission
    navigate('/voice');
  };

  return (
    <div className="h-full flex flex-col items-center justify-between px-8 py-12 bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF0EA]">
      {/* Language Selector */}
      <div className="w-full flex justify-end mb-4">
        <LanguageSelector />
      </div>

      {/* Microphone Icon */}
      <motion.div 
        className="flex-1 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-32 h-32 rounded-[40px] bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center mb-10 shadow-2xl"
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
          <Mic className="w-16 h-16 text-white" strokeWidth={2} />
        </motion.div>

        <h1 className="text-[30px] font-semibold text-foreground mb-4 text-center leading-tight">
          {t('permission.title')}
        </h1>
        
        <p className="text-[17px] text-muted-foreground text-center max-w-[300px] leading-relaxed">
          {t('permission.desc')}
        </p>
      </motion.div>

      {/* Info Cards */}
      <motion.div 
        className="w-full space-y-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-[24px] p-5 border border-white shadow-sm">
          <p className="text-[15px] text-foreground text-center leading-relaxed">
            🔒 {t('permission.privacy')}
          </p>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-[24px] p-5 border border-white shadow-sm">
          <p className="text-[15px] text-foreground text-center leading-relaxed">
            ⏱️ {t('permission.time')}
          </p>
        </div>
      </motion.div>

      {/* Buttons */}
      <div className="w-full space-y-3">
        <motion.button
          onClick={handleAllow}
          className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('permission.allow')}
        </motion.button>

        <motion.button
          onClick={() => navigate('/')}
          className="w-full py-3 text-muted-foreground text-[16px] active:scale-95 transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t('permission.notNow')}
        </motion.button>
      </div>
    </div>
  );
}