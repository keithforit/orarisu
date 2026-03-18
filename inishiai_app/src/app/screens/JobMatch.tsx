import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Sparkles, Heart, MessageCircle, TrendingUp, MapPin, Clock, Building2 } from "lucide-react";

export function JobMatch() {
  const navigate = useNavigate();

  const matchReasons = [
    {
      icon: Heart,
      strength: "Empathetic communicator",
      match: "Perfect for building customer relationships",
    },
    {
      icon: MessageCircle,
      strength: "Clear and confident",
      match: "Your speaking style resonates with clients",
    },
    {
      icon: TrendingUp,
      strength: "Problem solver",
      match: "You naturally help people find solutions",
    },
  ];

  return (
    <div className="h-full flex flex-col px-8 py-12 bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF0EA] overflow-y-auto">
      {/* Header */}
      <motion.div
        className="text-center pt-8 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-[#FF7F6D]" />
          <p className="text-[14px] text-muted-foreground font-medium">Based on your voice profile</p>
        </div>
        <h1 className="text-[36px] font-semibold text-foreground mb-3 leading-tight">
          A role that fits you
        </h1>
        <p className="text-[16px] text-muted-foreground max-w-[300px] mx-auto">
          We found a match that aligns with your strengths
        </p>
      </motion.div>

      {/* Job Card */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="bg-white rounded-[32px] p-7 shadow-xl border border-[#FFE4DD]/40">
          {/* Company Logo */}
          <div className="flex items-start justify-between mb-5">
            <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center shadow-md">
              <Building2 className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <div className="bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white text-[13px] font-semibold px-4 py-2 rounded-full">
              96% match
            </div>
          </div>

          {/* Job Title & Company */}
          <h2 className="text-[26px] font-semibold text-foreground mb-2 leading-tight">
            Customer Success Manager
          </h2>
          <p className="text-[17px] text-muted-foreground mb-5">
            TechFlow Solutions
          </p>

          {/* Job Details */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 text-[14px] text-muted-foreground bg-gradient-to-r from-[#FFF8F3] to-[#FFEEE8] rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" strokeWidth={2} />
              Remote
            </div>
            <div className="flex items-center gap-2 text-[14px] text-muted-foreground bg-gradient-to-r from-[#FFF8F3] to-[#FFEEE8] rounded-full px-4 py-2">
              <Clock className="w-4 h-4" strokeWidth={2} />
              Full-time
            </div>
          </div>

          {/* Salary Range */}
          <div className="bg-gradient-to-r from-[#FFF8F3] to-[#FFEEE8] rounded-[20px] p-4 mb-6">
            <p className="text-[14px] text-muted-foreground mb-1">Salary range</p>
            <p className="text-[20px] font-semibold text-foreground">$75,000 - $95,000</p>
          </div>

          {/* Description */}
          <p className="text-[15px] text-foreground/90 leading-relaxed">
            Help customers succeed by understanding their needs, solving problems, and building lasting relationships. Work with a collaborative team in a growing tech company.
          </p>
        </div>
      </motion.div>

      {/* Why This Fits */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="text-[20px] font-semibold text-foreground mb-4">
          Why this fits you
        </h3>

        <div className="space-y-3">
          {matchReasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.5,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[16px] font-semibold text-foreground mb-1">
                      {reason.strength}
                    </h4>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      {reason.match}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        className="space-y-4 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <button
          onClick={() => navigate('/')}
          className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform"
        >
          Apply with your profile
        </button>

        <button
          onClick={() => navigate('/')}
          className="w-full py-4 rounded-[24px] bg-white border-2 border-gray-200 text-foreground font-medium text-[16px] active:scale-[0.98] transition-transform"
        >
          See more roles
        </button>

        <p className="text-center text-[14px] text-muted-foreground pt-2">
          Your profile will be shared with your permission
        </p>
      </motion.div>
    </div>
  );
}
