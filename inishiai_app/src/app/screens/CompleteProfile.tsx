import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Mic, User, Briefcase, Sparkles } from "lucide-react";
import { useState } from "react";

export function CompleteProfile() {
  const navigate = useNavigate();
  const [activeField, setActiveField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    skills: "",
  });

  const handleVoiceInput = (fieldName: string) => {
    setActiveField(fieldName);
    // In a real app, this would activate voice input
    setTimeout(() => setActiveField(null), 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleContinue = () => {
    navigate('/profile-complete');
  };

  const fields = [
    {
      id: "name",
      label: "Full name",
      placeholder: "Your name",
      icon: User,
      type: "text",
    },
    {
      id: "experience",
      label: "Years of experience",
      placeholder: "e.g., 5 years in customer support",
      icon: Briefcase,
      type: "text",
    },
    {
      id: "skills",
      label: "Key skills",
      placeholder: "e.g., Communication, problem-solving",
      icon: Sparkles,
      type: "text",
      multiline: true,
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
        <h1 className="text-[36px] font-semibold text-foreground mb-3 leading-tight">
          Complete your profile
        </h1>
        <p className="text-[16px] text-muted-foreground max-w-[300px] mx-auto mb-4">
          Type or just speak to fill this faster
        </p>
        
        {/* Voice tip */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFF8F3] to-[#FFEEE8] rounded-full px-4 py-2">
          <Mic className="w-4 h-4 text-[#FF7F6D]" strokeWidth={2} />
          <span className="text-[13px] text-muted-foreground font-medium">
            Tap the mic to speak
          </span>
        </div>
      </motion.div>

      {/* Form Fields */}
      <motion.div
        className="flex-1 space-y-5 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {fields.map((field, index) => {
          const IconComponent = field.icon;
          const isActive = activeField === field.id;
          
          return (
            <motion.div
              key={field.id}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              {/* Label */}
              <label
                htmlFor={field.id}
                className="flex items-center gap-2 text-[15px] font-semibold text-foreground ml-1"
              >
                <IconComponent className="w-4 h-4 text-[#FF7F6D]" strokeWidth={2} />
                {field.label}
              </label>

              {/* Input Container */}
              <div
                className={`relative bg-white rounded-[20px] border-2 transition-all ${
                  isActive
                    ? "border-[#FF7F6D] shadow-lg"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {field.multiline ? (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="w-full px-5 py-4 pr-16 rounded-[20px] text-[16px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none resize-none"
                    rows={3}
                  />
                ) : (
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="w-full px-5 py-4 pr-16 rounded-[20px] text-[16px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                  />
                )}

                {/* Voice Button */}
                <motion.button
                  onClick={() => handleVoiceInput(field.id)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-[#FF7F6D] shadow-lg"
                      : "bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] hover:shadow-md"
                  }`}
                  whileTap={{ scale: 0.9 }}
                  animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                  transition={
                    isActive
                      ? { duration: 0.5, repeat: Infinity }
                      : { duration: 0.2 }
                  }
                >
                  <Mic
                    className="w-5 h-5 text-white"
                    strokeWidth={2.5}
                  />
                </motion.button>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="text-[11px] font-semibold text-[#FF7F6D] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F6D] animate-pulse" />
                      Listening...
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Optional fields note */}
        <motion.p
          className="text-[13px] text-muted-foreground/70 text-center pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          All fields are optional — add what feels right
        </motion.p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        className="space-y-4 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <button
          onClick={handleContinue}
          className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform"
        >
          Continue
        </button>

        <button
          onClick={() => navigate(-1)}
          className="w-full py-3 text-muted-foreground text-[15px] font-medium active:scale-[0.98] transition-transform"
        >
          Skip for now
        </button>
      </motion.div>
    </div>
  );
}