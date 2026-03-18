import { useState, useEffect } from "react";
import { Mic, Pause } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function VoiceInteraction() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRecording || isPaused) return;
    
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const toggleRecording = () => {
    if (!isRecording) {
      // Start recording
      setIsRecording(true);
      setIsPaused(false);
    } else if (!isPaused) {
      // Pause recording
      setIsPaused(true);
    } else {
      // Resume recording
      setIsPaused(false);
    }
  };

  const handleNextQuestion = () => {
    // Reset and go to next question or insights
    setIsRecording(false);
    setIsPaused(false);
    setSeconds(0);
    navigate('/insights');
  };

  return (
    <div className="h-full flex flex-col items-center justify-between px-8 py-12 bg-gradient-to-b from-[#FFF8F3] via-[#FFFFFF] to-[#FFF8F3]">
      {/* Top spacing */}
      <div></div>

      {/* AI Question - Conversational */}
      <motion.div 
        className="flex flex-col items-center text-center max-w-[340px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Friendly AI Avatar */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        >
          <motion.div 
            className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center shadow-xl"
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-[42px]">😊</span>
          </motion.div>
        </motion.div>

        {/* Conversational Question */}
        <motion.h1 
          className="text-[26px] font-medium text-foreground leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          What's something you're really proud of?
        </motion.h1>

        {/* Reassuring microcopy */}
        <motion.p 
          className="text-[16px] text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Take your time. No pressure at all — just chat like we're friends grabbing coffee ☕
        </motion.p>
      </motion.div>

      {/* Center spacing with waveform when recording */}
      <div className="flex items-center justify-center h-32">
        <AnimatePresence>
          {isRecording && (
            <motion.div 
              className="flex items-center justify-center gap-1.5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-[#FF7F6D] to-[#FFB4A5] rounded-full"
                  animate={{
                    height: [
                      `${20 + Math.random() * 50}%`,
                      `${20 + Math.random() * 70}%`,
                      `${20 + Math.random() * 50}%`,
                    ],
                  }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Large Record Button */}
      <motion.div 
        className="flex flex-col items-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
      >
        <motion.button
          onClick={toggleRecording}
          className="relative mb-5"
          whileTap={{ scale: 0.93 }}
        >
          {/* Pulse rings when recording */}
          <AnimatePresence>
            {isRecording && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#FF7F6D]/20"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#FF7F6D]/20"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.7
                  }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Main button - large and inviting */}
          <motion.div 
            className={`w-40 h-40 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-500 ${ 
              isRecording && !isPaused
                ? 'bg-gradient-to-br from-[#FF4444] to-[#FF6B6B]' 
                : 'bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5]'
            }`}
            animate={isRecording && !isPaused ? {
              boxShadow: [
                "0 25px 70px rgba(255, 68, 68, 0.4)",
                "0 25px 90px rgba(255, 68, 68, 0.6)",
                "0 25px 70px rgba(255, 68, 68, 0.4)",
              ]
            } : {
              boxShadow: [
                "0 25px 70px rgba(255, 127, 109, 0.35)",
                "0 25px 80px rgba(255, 127, 109, 0.45)",
                "0 25px 70px rgba(255, 127, 109, 0.35)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <AnimatePresence mode="wait">
              {isRecording && !isPaused ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Pause className="w-20 h-20 text-white" strokeWidth={2} fill="white" />
                </motion.div>
              ) : (
                <motion.div
                  key="mic"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mic className="w-20 h-20 text-white" strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.button>

        {/* Button state & timer */}
        <AnimatePresence mode="wait">
          {!isRecording ? (
            <motion.div
              key="ready"
              className="text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[18px] text-foreground font-medium mb-1">
                Tap when ready
              </p>
              <p className="text-[14px] text-muted-foreground">
                Speak for as long as you'd like
              </p>
            </motion.div>
          ) : isPaused ? (
            <motion.div
              key="paused"
              className="text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[32px] font-medium text-foreground tabular-nums mb-2">
                {formatTime(seconds)}
              </p>
              <p className="text-[16px] text-muted-foreground font-medium">
                Paused
              </p>
              <p className="text-[14px] text-muted-foreground mt-1">
                Tap to continue
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="recording"
              className="text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2.5 mb-2">
                <motion.div 
                  className="w-2.5 h-2.5 rounded-full bg-[#FF4444]"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <p className="text-[32px] font-medium text-foreground tabular-nums">
                  {formatTime(seconds)}
                </p>
              </div>
              <p className="text-[14px] text-muted-foreground">
                Tap to pause
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Next Question Button - Shows when recording has started */}
      <AnimatePresence>
        {isRecording && (
          <motion.button
            onClick={handleNextQuestion}
            className="w-full py-5 rounded-[28px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-[0.98] transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            Next Question
          </motion.button>
        )}
      </AnimatePresence>

      {/* Gentle encouragement at bottom - only when not recording */}
      <AnimatePresence>
        {!isRecording && (
          <motion.div 
            className="text-center max-w-[280px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              💭 Think out loud. Pauses are totally fine.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}