import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Upload, FileText, Sparkles } from "lucide-react";
import { useState } from "react";

export function UploadResume() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleContinue = () => {
    // In a real app, this would process the file
    navigate('/enhance-with-voice');
  };

  const handleAddVoice = () => {
    navigate('/permission');
  };

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
          Upload your resume
        </h1>
        <p className="text-[16px] text-muted-foreground max-w-[300px] mx-auto leading-relaxed">
          We'll extract your experience and build your profile
        </p>
      </motion.div>

      {/* Upload Area */}
      <motion.div
        className="flex-1 flex flex-col justify-center w-full max-w-[360px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div
          className={`relative rounded-[32px] border-3 border-dashed p-12 transition-all ${
            isDragging
              ? "border-[#FF7F6D] bg-[#FFF0EA]"
              : uploadedFile
              ? "border-[#FF7F6D] bg-gradient-to-br from-[#FFF8F3] to-[#FFEEE8]"
              : "border-gray-200 bg-white"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="resume-upload"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileSelect}
          />

          {!uploadedFile ? (
            <label
              htmlFor="resume-upload"
              className="flex flex-col items-center cursor-pointer"
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center mb-6"
                animate={{
                  scale: isDragging ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Upload className="w-10 h-10 text-white" strokeWidth={2} />
              </motion.div>

              <h3 className="text-[20px] font-semibold text-foreground mb-3">
                Tap to upload
              </h3>

              <p className="text-[15px] text-muted-foreground mb-2">
                or drag and drop here
              </p>

              <p className="text-[13px] text-muted-foreground/70">
                PDF or DOC • Max 10MB
              </p>
            </label>
          ) : (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center mb-6">
                <FileText className="w-10 h-10 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-[18px] font-semibold text-foreground mb-2">
                {uploadedFile.name}
              </h3>

              <p className="text-[14px] text-muted-foreground mb-4">
                {(uploadedFile.size / 1024).toFixed(0)} KB
              </p>

              <button
                onClick={() => setUploadedFile(null)}
                className="text-[14px] text-[#FF7F6D] font-medium"
              >
                Remove
              </button>
            </motion.div>
          )}
        </div>

        {/* Enhancement suggestion */}
        {uploadedFile && (
          <motion.div
            className="mt-6 rounded-[24px] bg-gradient-to-br from-[#FFF8F3] to-[#FFEEE8] p-5 border border-[#FFE4DD]/40"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7F6D] to-[#FFB4A5] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h4 className="text-[15px] font-semibold text-foreground mb-1">
                  Want to stand out more?
                </h4>
                <p className="text-[14px] text-muted-foreground mb-3 leading-relaxed">
                  Add your voice to show employers who you really are
                </p>
                <button
                  onClick={handleAddVoice}
                  className="text-[14px] text-[#FF7F6D] font-semibold"
                >
                  Add voice →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Actions */}
      <motion.div
        className="w-full space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {uploadedFile && (
          <button
            onClick={handleContinue}
            className="w-full py-5 rounded-[24px] bg-gradient-to-r from-[#FF7F6D] to-[#FFB4A5] text-white font-semibold text-[18px] shadow-xl active:scale-95 transition-transform"
          >
            Continue
          </button>
        )}

        <button
          onClick={() => navigate(-1)}
          className="w-full py-3 text-muted-foreground text-[15px] font-medium active:scale-[0.98] transition-transform"
        >
          Go back
        </button>

        <p className="text-center text-[13px] text-muted-foreground/70 px-4 leading-relaxed">
          Your resume is private and secure
        </p>
      </motion.div>
    </div>
  );
}