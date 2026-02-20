import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Check, Loader2 } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface ConnectionModalProps {
  open: boolean;
  platform: "instagram" | "facebook" | null;
  onComplete: () => void;
}

export function ConnectionModal({ open, platform, onComplete }: ConnectionModalProps) {
  const [stage, setStage] = useState<"connecting" | "success">("connecting");

  useEffect(() => {
    if (open) {
      setStage("connecting");
      
      // Simulate connection process
      const timer = setTimeout(() => {
        setStage("success");
        
        // Close modal after showing success
        setTimeout(() => {
          onComplete();
        }, 800);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [open, onComplete]);

  const platformInfo = {
    instagram: {
      name: "Instagram",
      color: "from-purple-500 via-pink-500 to-orange-500",
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    facebook: {
      name: "Facebook",
      color: "from-[#1877f2] to-[#1877f2]",
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  };

  const currentPlatform = platform ? platformInfo[platform] : null;

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" hideClose>
        <VisuallyHidden.Root>
          <DialogTitle>Connecting to {currentPlatform?.name}</DialogTitle>
          <DialogDescription>
            {stage === "connecting" 
              ? `Establishing a secure connection to ${currentPlatform?.name}`
              : `Successfully connected to ${currentPlatform?.name}`
            }
          </DialogDescription>
        </VisuallyHidden.Root>
        <div className="flex flex-col items-center justify-center py-8">
          {/* Platform Icon with Animation */}
          <div className="relative mb-6">
            <div
              className={`w-20 h-20 bg-gradient-to-br ${currentPlatform?.color} rounded-2xl flex items-center justify-center`}
            >
              {currentPlatform?.icon}
            </div>
            
            {/* Loading Ring */}
            {stage === "connecting" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-28 h-28 text-blue-500 animate-spin" />
              </div>
            )}

            {/* Success Checkmark */}
            {stage === "success" && (
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white animate-in zoom-in duration-300">
                <Check className="w-6 h-6 text-white" />
              </div>
            )}
          </div>

          {/* Status Text */}
          <div className="text-center">
            {stage === "connecting" && (
              <>
                <h3 className="text-xl font-semibold mb-2">
                  Connecting to {currentPlatform?.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  Please wait while we establish a secure connection...
                </p>
              </>
            )}
            {stage === "success" && (
              <>
                <h3 className="text-xl font-semibold mb-2 text-green-600">
                  Successfully Connected!
                </h3>
                <p className="text-gray-500 text-sm">
                  Your {currentPlatform?.name} account is now linked
                </p>
              </>
            )}
          </div>

          {/* Progress Dots */}
          {stage === "connecting" && (
            <div className="flex gap-2 mt-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}