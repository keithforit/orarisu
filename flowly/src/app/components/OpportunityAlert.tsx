import { motion } from "motion/react";
import { TrendingUp, AlertCircle, Zap } from "lucide-react";

interface OpportunityAlertProps {
  type: "trending" | "warning" | "opportunity";
  title: string;
  description: string;
  index: number;
}

export default function OpportunityAlert({
  type,
  title,
  description,
  index,
}: OpportunityAlertProps) {
  const config = {
    trending: {
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    warning: {
      icon: AlertCircle,
      gradient: "from-amber-500 to-orange-500",
      bg: "from-amber-50 to-orange-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    opportunity: {
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      bg: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  };

  const { icon: Icon, gradient, bg, iconBg, iconColor } = config[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${bg} p-4 border border-white/50 shadow-sm`}
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Subtle animated gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0`}
        animate={{
          opacity: [0, 0.05, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
