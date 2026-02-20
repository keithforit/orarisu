import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Check, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const steps = [
  { id: 1, text: "Analyzing campaign content" },
  { id: 2, text: "Generating post ideas" },
  { id: 3, text: "Scheduling content calendar" },
];

export function LoadingProgress() {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Step 1 completes after 1.5s
    const timer1 = setTimeout(() => {
      setCompletedSteps([1]);
      setCurrentStep(2);
    }, 1500);

    // Step 2 completes after 3s
    const timer2 = setTimeout(() => {
      setCompletedSteps([1, 2]);
      setCurrentStep(3);
    }, 3000);

    // Step 3 completes after 4.5s
    const timer3 = setTimeout(() => {
      setCompletedSteps([1, 2, 3]);
      setIsComplete(true);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto min-h-[70vh] py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-semibold mb-3">
          Campaign Pulse
        </h1>
        <p className="text-gray-600 text-sm">
          Building your campaign calendar and preparing content...
        </p>
      </motion.div>

      {/* Animated placeholder image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12 relative flex justify-center"
      >
        <div className="w-48 h-48 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-lg">
          {/* Pulsing circles */}
          <motion.div
            className="absolute w-24 h-24 bg-blue-300/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Central icon - changes to checkmark when complete */}
          <motion.div
            className="relative z-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
            animate={{
              y: isComplete ? 0 : [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: isComplete ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            {isComplete ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Check className="w-6 h-6 text-blue-500" />
              </motion.div>
            ) : (
              <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Progress steps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-md space-y-4 mb-8 mx-auto"
      >
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);
          const isActive = currentStep === step.id;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? "bg-green-500"
                    : isActive
                    ? "bg-blue-500"
                    : "bg-gray-200"
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 text-white" />
                ) : isActive ? (
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                )}
              </div>
              <span
                className={`text-sm transition-colors duration-300 ${
                  isCompleted
                    ? "text-green-600 font-medium"
                    : isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-400"
                }`}
              >
                {step.text}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Button appears when complete */}
      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <Button
            onClick={() => navigate("/calendar")}
            size="lg"
            className="px-8"
          >
            Check my calendar contents
          </Button>
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            size="lg"
            className="px-8"
          >
            Back to Advertiser & Campaigns
          </Button>
        </motion.div>
      )}
    </div>
  );
}