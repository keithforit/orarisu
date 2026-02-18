import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    "I noticed SaaS campaigns are trending up 23% this week! 📈",
    "Your FinanceFlow campaign has 3x higher EPC than usual",
    "Cookie duration matters: 90-day offers converting better today",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl p-1 max-w-sm">
            <div className="bg-white rounded-2xl p-4 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </motion.div>

                <div className="flex-1 pr-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    Flowly Insights
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tips[currentTip]}
                  </p>

                  <div className="flex gap-1.5 mt-3">
                    {tips.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTip(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentTip
                            ? "w-6 bg-purple-500"
                            : "w-1.5 bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
