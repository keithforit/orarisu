import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowLeft, Download, Share2, Sparkles, Edit, Hash, Smile, Clock, ChevronDown, Send, X } from "lucide-react";
import { Progress } from "../components/ui/progress";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Calendar } from "../components/ui/calendar";

export default function VideoGeneratorPage() {
  const { campaignId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [videoGenerated, setVideoGenerated] = useState(false);
  const [description, setDescription] = useState("");
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [publishMode, setPublishMode] = useState<"schedule" | "now">("schedule");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  useEffect(() => {
    // Simulate video generation with progress
    const duration = 4000; // 4 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsLoading(false);
        setVideoGenerated(true);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-full bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => setShowExitDialog(true)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Campaigns
        </Button>

        <Card className="p-8 relative">
          {/* Close Button - Top Right */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowExitDialog(true);
            }}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Close"
            type="button"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          <div className="mb-6 flex items-center gap-3">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-7.62v13.882a2.745 2.745 0 0 1-5.49 0 2.745 2.745 0 0 1 5.49 0V7.463a8.773 8.773 0 0 0-2.745-.44 8.773 8.773 0 0 0 0 17.546 8.773 8.773 0 0 0 8.774-8.773V9.463a8.745 8.745 0 0 0 5.361 1.845v-4.62z"/>
            </svg>
            <div>
              <h1 className="text-2xl font-bold">TikTok Video Generator</h1>
              <p className="text-gray-600">
                Campaign ID: {campaignId} - BINKI Herbal Rabbit Natural Cream
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            {/* Left Side - Video and Action Buttons */}
            <div className="flex flex-col items-center">
              {/* TikTok-sized Video Container (9:16 aspect ratio) */}
              <div className="relative w-full max-w-[360px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
                {isLoading ? (
                  // Loading State
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                    <div className="mb-8">
                      <div className="relative">
                        <Sparkles className="w-16 h-16 text-pink-500 animate-pulse" />
                        <div className="absolute inset-0 animate-ping">
                          <Sparkles className="w-16 h-16 text-pink-500 opacity-50" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-white text-center px-8">
                      <h2 className="text-xl font-bold mb-2">Generating Your Video</h2>
                      <p className="text-sm text-gray-300 mb-6">
                        AI is creating your TikTok video...
                      </p>
                      
                      <div className="w-full max-w-[280px]">
                        <Progress value={progress} className="h-2 mb-2" />
                        <p className="text-xs text-gray-400">{Math.round(progress)}% complete</p>
                      </div>
                    </div>

                    <div className="absolute bottom-8 text-center text-xs text-gray-500 px-8">
                      <p>Analyzing campaign data</p>
                      <p>Selecting visuals</p>
                      <p>Optimizing for TikTok</p>
                    </div>
                  </div>
                ) : (
                  // Video Generated State
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <div className="mb-6">
                        <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">BINKI</h3>
                      <p className="text-sm mb-4">Herbal Rabbit Natural Cream</p>
                      
                      <div className="space-y-2 text-xs">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <p className="font-semibold">✨ Natural Beauty Solution</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-xs text-white/80">
                        Video Duration: 15s
                      </div>
                    </div>

                    {/* TikTok-style UI elements */}
                    <div className="absolute bottom-20 right-4 space-y-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mb-1">
                          ❤️
                        </div>
                        <span className="text-xs text-white">234K</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mb-1">
                          💬
                        </div>
                        <span className="text-xs text-white">1,234</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mb-1">
                          🔗
                        </div>
                        <span className="text-xs text-white">567</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons - Only show when video is generated */}
              {videoGenerated && (
                <div className="mt-8 w-full max-w-[360px] space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full gap-2"
                    onClick={() => {
                      setVideoGenerated(false);
                      setIsLoading(true);
                      setProgress(0);
                      // Restart generation
                      setTimeout(() => {
                        const duration = 4000;
                        const interval = 50;
                        const steps = duration / interval;
                        let currentStep = 0;

                        const timer = setInterval(() => {
                          currentStep++;
                          setProgress((currentStep / steps) * 100);

                          if (currentStep >= steps) {
                            clearInterval(timer);
                            setIsLoading(false);
                            setVideoGenerated(true);
                          }
                        }, interval);
                      }, 100);
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Generate New Version
                  </Button>

                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white gap-2">
                    <Download className="w-4 h-4" />
                    Download Video
                  </Button>
                  
                  <Button className="w-full bg-black hover:bg-gray-800 text-white gap-2">
                    <Share2 className="w-4 h-4" />
                    Share to TikTok
                  </Button>
                  
                  <Button variant="outline" className="w-full gap-2">
                    <Edit className="w-4 h-4" />
                    Edit Video
                  </Button>
                </div>
              )}
            </div>

            {/* Right Side - Video Description and Settings */}
            <div className="flex-1 space-y-6">
              {/* Description Field */}
              <div>
                <Label htmlFor="description" className="text-sm font-medium mb-2 block">
                  Description
                </Label>
                <div className="relative">
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter your video description..."
                    className="min-h-[120px] pr-32"
                  />
                  <div className="absolute bottom-3 right-3 flex gap-2 items-center">
                    <button className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded transition-colors flex items-center gap-1 text-xs">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700">AI Generator</span>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 p-1">
                      <Hash className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 p-1">
                      <Smile className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Who Can View This Video */}
              <div>
                <Label htmlFor="visibility" className="text-sm font-medium mb-2 block">
                  Who can view this video
                </Label>
                <Select defaultValue="everyone">
                  <SelectTrigger id="visibility">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="everyone">Everyone</SelectItem>
                    <SelectItem value="friends">Friends</SelectItem>
                    <SelectItem value="private">Only me</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Target */}
              <div>
                <Label htmlFor="target" className="text-sm font-medium mb-2 block">
                  Target
                </Label>
                <Select defaultValue="taiwan">
                  <SelectTrigger id="target">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="taiwan">Taiwan Market</SelectItem>
                    <SelectItem value="japan">Japan Market</SelectItem>
                    <SelectItem value="korea">Korea Market</SelectItem>
                    <SelectItem value="usa">USA Market</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Schedule Post Button with Dropdown and Date Picker */}
              <div>
                <div className="flex gap-1">
                  {/* Main Button - Schedule or Publish */}
                  {publishMode === "schedule" ? (
                    <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                      <PopoverTrigger asChild>
                        <Button className="flex-1 gap-2 bg-black hover:bg-gray-800">
                          <Clock className="w-4 h-4" />
                          {selectedDate 
                            ? `Schedule: ${selectedDate.toLocaleDateString()}`
                            : "Schedule post"
                          }
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date);
                            setDatePickerOpen(false);
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Button 
                      className="flex-1 gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      onClick={() => {
                        // Handle publish now action
                        console.log("Publishing now...");
                      }}
                    >
                      <Send className="w-4 h-4" />
                      Publish now
                    </Button>
                  )}
                  
                  {/* Dropdown Arrow */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        className={publishMode === "schedule" 
                          ? "bg-black hover:bg-gray-800 px-3" 
                          : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-3"
                        }
                      >
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuItem 
                        className="gap-2"
                        onClick={() => setPublishMode("schedule")}
                      >
                        <Clock className="w-4 h-4" />
                        Schedule post
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="gap-2"
                        onClick={() => setPublishMode("now")}
                      >
                        <Send className="w-4 h-4" />
                        Publish now
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Exit Dialog */}
      <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <AlertDialogContent className="relative">
          {/* Close Icon */}
          <button
            onClick={() => setShowExitDialog(false)}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
          
          <AlertDialogHeader>
            <AlertDialogTitle className="sr-only">Confirm Exit</AlertDialogTitle>
            <AlertDialogDescription className="text-base text-gray-600">
              Your changes will be lost, are you sure?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setShowExitDialog(false);
                navigate("/");
              }}
            >
              Accept
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}