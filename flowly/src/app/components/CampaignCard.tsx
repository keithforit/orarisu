import { motion } from "motion/react";
import { TrendingUp, TrendingDown, ExternalLink, Star } from "lucide-react";
import { Badge } from "./ui/badge";

interface CampaignCardProps {
  name: string;
  network: string;
  epc: number;
  conversionRate: number;
  cookieDuration: number;
  category: string;
  trend: "up" | "down" | "neutral";
  trendValue: number;
  isRecommended?: boolean;
  index: number;
}

export default function CampaignCard({
  name,
  network,
  epc,
  conversionRate,
  cookieDuration,
  category,
  trend,
  trendValue,
  isRecommended = false,
  index,
}: CampaignCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-2xl bg-white border p-5 shadow-sm hover:shadow-lg transition-all duration-300 ${
        isRecommended
          ? "border-purple-200 shadow-purple-100"
          : "border-gray-200"
      }`}
    >
      {/* Recommended badge */}
      {isRecommended && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-4 right-4"
        >
          <div className="flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            <Star className="w-3 h-3" />
            Top Pick
          </div>
        </motion.div>
      )}

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="font-semibold text-gray-900 text-base mb-1 truncate">
              {name}
            </h3>
            <p className="text-sm text-gray-500">{network}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="rounded-lg">
            {category}
          </Badge>
          <div
            className={`flex items-center gap-1 text-xs font-medium ${
              trend === "up"
                ? "text-green-600"
                : trend === "down"
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {trend === "up" ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : trend === "down" ? (
              <TrendingDown className="w-3.5 h-3.5" />
            ) : null}
            {trend !== "neutral" && `${trendValue}%`}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3">
          <p className="text-xs text-gray-600 mb-1">EPC</p>
          <p className="text-lg font-bold text-gray-900">£{epc.toFixed(2)}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3">
          <p className="text-xs text-gray-600 mb-1">Conv. Rate</p>
          <p className="text-lg font-bold text-gray-900">
            {conversionRate.toFixed(1)}%
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3">
          <p className="text-xs text-gray-600 mb-1">Cookie</p>
          <p className="text-lg font-bold text-gray-900">{cookieDuration}d</p>
        </div>
      </div>

      {/* Action */}
      <button className="w-full flex items-center justify-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors py-2 px-4 rounded-xl hover:bg-purple-50">
        View Details
        <ExternalLink className="w-4 h-4" />
      </button>

      {/* Subtle animated gradient on recommended cards */}
      {isRecommended && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}
