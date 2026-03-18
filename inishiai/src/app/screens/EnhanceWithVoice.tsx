import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Mic, Sparkles, Target, Heart, TrendingUp } from "lucide-react";

export function EnhanceWithVoice() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Sparkles,
      title: "More accurate profile",
      description: "Show skills that aren't on paper",
    },
    {
      icon: Heart,
      title: "More personal",
      description: "Let employers hear who you are",
    },
    {
      icon: Target,
      title: "Better job matches",
      description: "Get roles that truly fit you",
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-between px-8 py-12 bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF0EA]">
      {/* Header Icon */}
      <motion.div
        className="pt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center shadow-xl mx-auto">
          <Mic className="w-12 h-12 text-white" strokeWidth={2} />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex-1 flex flex-col justify-center w-full max-w-[340px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Headline */}
        <div className="text-center mb-10">
          <h1 className="text-[36px] font-semibold text-foreground mb-4 leading-tight">
            Add your voice to<br />improve your profile
          </h1>
          <p className="text-[16px] text-muted-foreground leading-relaxed">
            Your resume is great — your voice makes it even better
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-4 mb-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-white rounded-[24px] p-5 shadow-sm border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.4 + index * 0.15,
                  duration: 0.5,
                  type: "spring",
                }}
              >
                <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-[17px] font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Time estimate */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p className="text-[14px] text-muted-foreground">
            Takes about <span className="font-semibold text-foreground">3-5 minutes</span>
          </p>
        </motion.div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        className="w-full space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <button
          onClick={() => navigate('/permission')}
          className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform"
        >
          Add voice answers
        </button>

        <button
          onClick={() => navigate('/results')}
          className="w-full py-3 text-muted-foreground text-[15px] font-medium active:scale-[0.98] transition-transform"
        >
          Continue without voice
        </button>

        <p className="text-center text-[13px] text-muted-foreground/70 px-4 leading-relaxed">
          You can always add voice answers later
        </p>
      </motion.div>
    </div>
  );
}
