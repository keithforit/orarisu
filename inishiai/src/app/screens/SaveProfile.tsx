import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Sparkles, Mail } from "lucide-react";

export function SaveProfile() {
  const navigate = useNavigate();

  const handleMaybeLater = () => {
    navigate('/');
  };

  const handleContinue = () => {
    // In a real app, this would handle authentication
    navigate('/');
  };

  return (
    <div className="h-full flex flex-col items-center justify-between px-8 py-12 bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF0EA] overflow-y-auto">
      {/* Header */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-[#FF7F6D]" />
            <p className="text-[14px] text-muted-foreground font-medium">Your profile is ready</p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="flex-1 flex flex-col items-center justify-start pt-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Results Preview Card */}
        <motion.div
          className="w-full max-w-[340px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-white rounded-[28px] p-6 shadow-xl border border-[#FFE4DD]/40">
            {/* Mini profile preview */}
            <div className="text-center mb-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] mx-auto mb-3 flex items-center justify-center">
                <span className="text-[32px]">✨</span>
              </div>
              <h3 className="text-[18px] font-semibold text-foreground mb-1">Your Voice Profile</h3>
              <p className="text-[14px] text-muted-foreground">Created just now</p>
            </div>

            {/* Preview of strengths */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#FFF8F3] to-[#FFEEE8] rounded-[16px] px-3 py-2">
                <span className="text-[16px]">💪</span>
                <span className="text-[14px] text-foreground font-medium">Creative thinker</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#FFF8F3] to-[#FFEEE8] rounded-[16px] px-3 py-2">
                <span className="text-[16px]">🎯</span>
                <span className="text-[14px] text-foreground font-medium">Problem solver</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#FFF8F3] to-[#FFEEE8] rounded-[16px] px-3 py-2">
                <span className="text-[16px]">🌟</span>
                <span className="text-[14px] text-foreground font-medium">Natural leader</span>
              </div>
            </div>

            {/* Blur effect at bottom */}
            <div className="relative h-8 -mx-6 -mb-6 rounded-b-[28px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/95 backdrop-blur-sm flex items-center justify-center">
                <p className="text-[12px] text-muted-foreground font-medium">+ more insights</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Headline & Benefits */}
        <motion.div
          className="text-center max-w-[320px] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-[32px] font-semibold text-foreground mb-4 leading-tight">
            Save your profile
          </h1>
          <p className="text-[17px] text-foreground/90 mb-3">
            Keep your results and use them for job applications
          </p>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Share with employers or come back anytime to update your profile
          </p>
        </motion.div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        className="w-full space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {/* Social Login Options */}
        <div className="space-y-3">
          <button
            onClick={handleContinue}
            className="w-full py-4 rounded-[24px] bg-white border-2 border-gray-200 text-foreground font-medium text-[16px] shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <button
            onClick={handleContinue}
            className="w-full py-4 rounded-[24px] bg-black text-white font-medium text-[16px] shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Continue with Apple
          </button>

          <button
            onClick={handleContinue}
            className="w-full py-4 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[16px] shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-3"
          >
            <Mail className="w-5 h-5" />
            Continue with Email
          </button>
        </div>

        {/* Maybe Later */}
        <motion.button
          onClick={handleMaybeLater}
          className="w-full py-3 text-muted-foreground text-[15px] font-medium active:scale-[0.98] transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Maybe later
        </motion.button>

        <motion.p
          className="text-center text-[13px] text-muted-foreground/70 px-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Your data is secure and never shared without your permission
        </motion.p>
      </motion.div>
    </div>
  );
}
