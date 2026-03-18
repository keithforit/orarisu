import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSelector } from "../components/LanguageSelector";

export function Welcome() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col items-center justify-between px-8 py-12 bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF0EA] relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-[#FFB4A5]/20 to-[#FF7F6D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-gradient-to-tr from-[#FFF0EA]/40 to-[#FFD4C8]/20 rounded-full blur-3xl" />
      
      {/* Language Selector */}
      <div className="w-full flex justify-end relative z-10">
        <LanguageSelector />
      </div>

      {/* Main Content */}
      <motion.div 
        className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Modern visual element - Abstract gradient blob */}
        <motion.div
          className="mb-16 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="relative">
            {/* Main gradient circle */}
            <motion.div 
              className="w-40 h-40 rounded-full bg-gradient-to-br from-[#FF7F6D] via-[#FFB4A5] to-[#FFD4C8]"
              style={{
                filter: "blur(1px)",
              }}
              animate={{ 
                scale: [1, 1.08, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Inner highlight */}
            <motion.div
              className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/40"
              style={{
                filter: "blur(8px)",
              }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Outer ring */}
            <motion.div
              className="absolute -inset-3 rounded-full border-2 border-[#FF7F6D]/20"
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>

        {/* Headline - Outcome focused */}
        <motion.h1 
          className="text-[44px] font-semibold text-foreground mb-6 leading-[1.1] max-w-[340px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Find a job that{" "}
          <span className="bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] bg-clip-text text-transparent">
            fits you
          </span>{" "}
          — faster
        </motion.h1>

        {/* Supporting text */}
        <motion.div
          className="space-y-3 max-w-[300px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-[19px] text-foreground/90 leading-relaxed">
            No resume or long forms needed.
          </p>
          
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            Just speak for a few minutes and we'll help you shine
          </p>
        </motion.div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <button
          onClick={() => navigate('/onboarding-1')}
          className="w-full py-5 rounded-[28px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[19px] shadow-xl active:scale-[0.98] transition-transform"
        >
          Get started
        </button>
        
        <motion.p 
          className="text-center text-[14px] text-muted-foreground/70 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Takes less than 5 minutes
        </motion.p>
      </motion.div>
    </div>
  );
}