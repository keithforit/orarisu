import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Mic, FileText, Plus } from "lucide-react";

export function ChooseMethod() {
  const navigate = useNavigate();

  const methods = [
    {
      id: "voice",
      title: "Answer with voice",
      description: "Share your story in your own words",
      icon: Mic,
      recommended: true,
      gradient: "from-[#FF7F6D] to-[#FFB4A5]",
      route: "/permission",
    },
    {
      id: "resume",
      title: "Upload a resume",
      description: "Quick setup with your existing resume",
      icon: FileText,
      recommended: false,
      gradient: "from-[#FFB4A5] to-[#FFD4C8]",
      route: "/upload-resume",
    },
    {
      id: "both",
      title: "Resume + voice",
      description: "Combine both for a complete profile",
      icon: Plus,
      recommended: false,
      gradient: "from-[#FFD4C8] to-[#FFEEE8]",
      route: "/upload-resume",
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-between px-8 py-12 bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF0EA]">
      {/* Header */}
      <motion.div
        className="text-center pt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[36px] font-semibold text-foreground mb-4 leading-tight">
          How would you like<br />to start?
        </h1>
        <p className="text-[16px] text-muted-foreground max-w-[300px] mx-auto">
          Choose the best way to build your profile
        </p>
      </motion.div>

      {/* Method Cards */}
      <motion.div
        className="flex-1 flex flex-col justify-center w-full max-w-[360px] space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {methods.map((method, index) => {
          const IconComponent = method.icon;
          
          return (
            <motion.button
              key={method.id}
              onClick={() => navigate(method.route)}
              className={`relative w-full rounded-[28px] p-6 shadow-lg active:scale-[0.98] transition-all ${
                method.recommended
                  ? "bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] text-white"
                  : "bg-white border-2 border-gray-100"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.15,
                duration: 0.5,
                type: "spring",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Recommended Badge */}
              {method.recommended && (
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1.5 shadow-md"
                  initial={{ opacity: 0, scale: 0.8, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
                >
                  <span className="text-[12px] font-semibold text-[#FF7F6D] flex items-center gap-1">
                    <span>✨</span> Recommended
                  </span>
                </motion.div>
              )}

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-[20px] flex items-center justify-center flex-shrink-0 ${
                    method.recommended
                      ? "bg-white/20"
                      : `bg-gradient-to-br ${method.gradient}`
                  }`}
                >
                  <IconComponent
                    className={`w-8 h-8 ${
                      method.recommended ? "text-white" : "text-white"
                    }`}
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-left pt-1">
                  <h3
                    className={`text-[19px] font-semibold mb-2 ${
                      method.recommended ? "text-white" : "text-foreground"
                    }`}
                  >
                    {method.title}
                  </h3>
                  <p
                    className={`text-[15px] leading-relaxed ${
                      method.recommended
                        ? "text-white/90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {method.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className={`mt-2 ${
                    method.recommended ? "text-white/70" : "text-muted-foreground/50"
                  }`}
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Bottom reassurance */}
      <motion.p
        className="text-center text-[14px] text-muted-foreground/70 max-w-[280px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        You can always add more details later
      </motion.p>
    </div>
  );
}