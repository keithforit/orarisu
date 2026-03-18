import { useNavigate } from "react-router";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function CandidateInsights() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const strengths = [
    { label: "Adaptable", icon: "🌊", color: "from-[#FFB4A5] to-[#FFD4C8]" },
    { label: "Clear communicator", icon: "💬", color: "from-[#FF9F8E] to-[#FFB4A5]" },
    { label: "Problem solver", icon: "🧩", color: "from-[#FF8A76] to-[#FF9F8E]" },
    { label: "Team player", icon: "🤝", color: "from-[#FFD4C8] to-[#FFF0EA]" },
  ];

  const personality = [
    { trait: "Analytical thinker", icon: "🎯", description: "You approach challenges methodically" },
    { trait: "Empathetic leader", icon: "💫", description: "You connect with others naturally" },
    { trait: "Detail-oriented", icon: "🔍", description: "You care about getting things right" },
  ];

  const workStyle = [
    { label: "Collaborative", icon: "👥" },
    { label: "Self-motivated", icon: "⚡" },
    { label: "Growth-minded", icon: "🌱" },
    { label: "Organized", icon: "📋" },
  ];

  const suggestedRoles = [
    { title: "Product Manager", match: "95%", reason: "Leadership + Communication" },
    { title: "Team Lead", match: "92%", reason: "Empathy + Organization" },
    { title: "Project Coordinator", match: "88%", reason: "Detail-oriented + Collaborative" },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF8F3]">
      <div className="px-6 py-10 pb-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center mx-auto mb-6 shadow-xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              duration: 0.8,
              delay: 0.2
            }}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-[32px] font-semibold text-foreground mb-3 leading-tight">
            Your Unique<br />Strengths
          </h1>
          
          <p className="text-[16px] text-muted-foreground max-w-[280px] mx-auto">
            Here's what makes you stand out
          </p>
        </motion.div>

        {/* Key Strengths - Bubble Grid */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-[14px] font-semibold text-muted-foreground uppercase tracking-wide mb-4 px-1">
            ✨ Top Strengths
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.label}
                className={`bg-gradient-to-br ${strength.color} rounded-[24px] p-5 shadow-lg`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  duration: 0.6
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{strength.icon}</div>
                <p className="text-[15px] font-semibold text-foreground leading-snug">
                  {strength.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personality Traits - Story Cards */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-[14px] font-semibold text-muted-foreground uppercase tracking-wide mb-4 px-1">
            🎭 Personality
          </h2>
          <div className="space-y-3">
            {personality.map((item, index) => (
              <motion.div
                key={item.trait}
                className="bg-white rounded-[24px] p-5 shadow-md border border-primary/5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFF0EA] to-[#FFE5DC] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[16px] font-semibold text-foreground mb-1">
                      {item.trait}
                    </h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Style - Pills */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h2 className="text-[14px] font-semibold text-muted-foreground uppercase tracking-wide mb-4 px-1">
            💼 Work Style
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {workStyle.map((style, index) => (
              <motion.div
                key={style.label}
                className="bg-white rounded-full px-5 py-3 shadow-sm border border-primary/10 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.05, type: "spring" }}
              >
                <span className="text-xl">{style.icon}</span>
                <span className="text-[15px] font-medium text-foreground">
                  {style.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Suggested Roles - Featured Cards */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <h2 className="text-[14px] font-semibold text-muted-foreground uppercase tracking-wide mb-4 px-1">
            🎯 Roles for You
          </h2>
          <div className="space-y-3">
            {suggestedRoles.map((role, index) => (
              <motion.div
                key={role.title}
                className="bg-gradient-to-r from-white to-[#FFF8F3] rounded-[24px] p-5 shadow-md border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[17px] font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#4CAF50]"></div>
                    <span className="text-[15px] font-semibold text-[#4CAF50]">
                      {role.match}
                    </span>
                  </div>
                </div>
                <p className="text-[13px] text-muted-foreground">
                  Perfect for your {role.reason}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <button 
            onClick={() => navigate('/save-profile')}
            className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform"
          >
            Continue
          </button>
        </motion.div>
      </div>
    </div>
  );
}