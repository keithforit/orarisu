import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Pause, Square } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Recording() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isRecording, setIsRecording] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRecording) return;
    
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const handleStop = () => {
    setIsRecording(false);
    setTimeout(() => {
      navigate('/results');
    }, 500);
  };

  return (
    <div className="h-full flex flex-col items-center justify-between px-8 py-12">
      {/* Header */}
      <div className="w-full">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex gap-2 mb-2">
            <div className="flex-1 h-1.5 rounded-full bg-primary"></div>
            <div className="flex-1 h-1.5 rounded-full bg-muted"></div>
            <div className="flex-1 h-1.5 rounded-full bg-muted"></div>
            <div className="flex-1 h-1.5 rounded-full bg-muted"></div>
          </div>
          <p className="text-[13px] text-muted-foreground text-right">
            {t('question.progress').replace('{current}', '1').replace('{total}', '4')}
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {isRecording && (
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#FF4444]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <p className="text-[15px] text-foreground font-medium">{t('recording.status')}</p>
            </div>
          )}
          <p className="text-[32px] font-semibold text-foreground tabular-nums">
            {formatTime(seconds)}
          </p>
        </motion.div>
      </div>

      {/* Waveform Visualization */}
      <motion.div 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-1.5 h-32">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 bg-gradient-to-t from-[#FF7F6D] to-[#FFB4A5] rounded-full"
              animate={isRecording ? {
                height: [
                  `${20 + Math.random() * 80}%`,
                  `${20 + Math.random() * 80}%`,
                  `${20 + Math.random() * 80}%`,
                ],
              } : { height: "20%" }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: isRecording ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Transcript Preview */}
      <motion.div 
        className="w-full bg-white/60 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-white min-h-[120px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-[13px] text-muted-foreground mb-2">{t('recording.transcript')}</p>
        <p className="text-[15px] text-foreground leading-relaxed">
          {t('recording.transcriptText')}
        </p>
      </motion.div>

      {/* Control Buttons */}
      <div className="w-full flex gap-3">
        <motion.button
          onClick={() => setIsRecording(!isRecording)}
          className="flex-1 py-4 rounded-[20px] bg-white border-2 border-primary/20 text-foreground font-semibold text-[17px] shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2"
          whileTap={{ scale: 0.95 }}
        >
          <Pause className="w-5 h-5" />
          {isRecording ? t('recording.pause') : t('recording.resume')}
        </motion.button>

        <motion.button
          onClick={handleStop}
          className="flex-1 py-4 rounded-[20px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[17px] shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
          whileTap={{ scale: 0.95 }}
        >
          <Square className="w-5 h-5 fill-current" />
          {t('recording.finish')}
        </motion.button>
      </div>
    </div>
  );
}