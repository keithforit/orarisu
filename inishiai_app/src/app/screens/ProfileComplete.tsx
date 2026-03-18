import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { CheckCircle2, Mail, Search, Heart } from "lucide-react";

export function ProfileComplete() {
  const navigate = useNavigate();

  const nextSteps = [
    {
      icon: Search,
      text: "We'll look for roles that match your profile",
    },
    {
      icon: Mail,
      text: "Our team may reach out with relevant opportunities",
    },
    {
      icon: Heart,
      text: "You can update your profile anytime",
    },
  ];

  return (
    <div className="h-full flex flex-col px-8 py-12 bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF0EA] overflow-y-auto">
      {/* Success Icon */}
      <motion.div
        className="flex justify-center pt-16 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.2,
        }}
      >
        <div className="relative">
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] rounded-full blur-2xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Icon container */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center shadow-xl">
            <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </motion.div>

      {/* Main Message */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1 className="text-[32px] font-semibold text-foreground mb-4 leading-tight px-4">
          You're ready to be matched with opportunities
        </h1>
        <p className="text-[16px] text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
          Your profile is complete and looking great
        </p>
      </motion.div>

      {/* What Happens Next */}
      <motion.div
        className="flex-1 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-[18px] font-semibold text-foreground mb-4 text-center">
          What happens next
        </h2>

        <div className="space-y-4">
          {nextSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-white rounded-[20px] p-5 shadow-sm border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  duration: 0.5,
                }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF8F3] to-[#FFEEE8] flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-[#FF7F6D]" strokeWidth={2} />
                </div>
                <p className="text-[15px] text-foreground/90 leading-relaxed pt-1.5">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Note */}
        <motion.div
          className="mt-6 bg-gradient-to-r from-[#FFF8F3] to-[#FFEEE8] rounded-[20px] p-5 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            This usually takes <span className="font-semibold text-foreground">1-2 business days</span>
          </p>
        </motion.div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        className="space-y-4 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <button
          onClick={() => navigate('/job-match')}
          className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform"
        >
          Explore opportunities
        </button>

        <button
          onClick={() => navigate('/')}
          className="w-full py-4 text-muted-foreground text-[15px] font-medium active:scale-[0.98] transition-transform"
        >
          Return to home
        </button>
      </motion.div>
    </div>
  );
}
