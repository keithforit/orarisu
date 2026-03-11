import { X, Calendar, Clock, User, MapPin, Video, Send, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

interface InterviewCalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InterviewCalendar({ isOpen, onClose }: InterviewCalendarProps) {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState(new Date());

  if (!isOpen) return null;

  const interviews = [
    {
      id: 1,
      candidateName: "Sarah Johnson",
      position: "Product Manager",
      date: "March 11, 2026",
      time: "10:00 AM - 11:00 AM",
      type: "Video Call",
      meetingLink: "https://meet.google.com/abc-defg-hij",
      room: "Google Meet",
      status: "confirmed",
      color: "bg-blue-500",
    },
    {
      id: 2,
      candidateName: "Hiroshi Yamamoto",
      position: "Data Analyst",
      date: "March 11, 2026",
      time: "2:30 PM - 3:30 PM",
      type: "In-Person",
      meetingLink: null,
      room: "Office - Room 3A",
      status: "pending",
      color: "bg-purple-500",
    },
  ];

  // Simple date picker logic
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  const goToPreviousMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const goToNextMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth + 1, 1));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl overflow-hidden pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/20 rounded-xl">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {t("calendar.title")}
                  </h2>
                  <p className="text-purple-100 text-sm">
                    {t("calendar.today")} - {new Date().toLocaleDateString(undefined, { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[700px] overflow-y-auto">
            {/* Date Picker */}
            <div className="mb-6 bg-white p-4 relative rounded-xl">
              <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-900">{t("calendar.selectDate")}</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={goToPreviousMonth}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="text-sm font-medium text-gray-900 min-w-[140px] text-center">
                      {monthNames[currentMonth]} {currentYear}
                    </span>
                    <button
                      onClick={goToNextMonth}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-xs font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => {
                    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
                    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                    const dayNumber = i - firstDay + 1;
                    const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
                    const isToday = isCurrentMonth && dayNumber === new Date().getDate() && 
                                   currentMonth === new Date().getMonth() && 
                                   currentYear === new Date().getFullYear();
                    
                    return (
                      <button
                        key={i}
                        disabled={!isCurrentMonth}
                        className={`py-2 text-sm rounded-lg transition-colors ${
                          isToday 
                            ? 'bg-purple-600 text-white font-bold' 
                            : isCurrentMonth
                            ? 'hover:bg-purple-50 text-gray-900'
                            : 'text-gray-300 cursor-default'
                        }`}
                      >
                        {isCurrentMonth ? dayNumber : ''}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Scheduled Interviews */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {t("calendar.scheduledInterviews")}
              </h3>
              <p className="text-gray-600 text-sm">
                {interviews.length} {t("calendar.interviewsScheduled")}
              </p>
            </div>

            <div className="space-y-4">
              {interviews.map((interview) => (
                <div
                  key={interview.id}
                  className="bg-white p-5 relative rounded-xl"
                >
                  <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                  
                  <div className="relative">
                    {/* Header with Candidate Info */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2.5 rounded-lg ${interview.color} bg-opacity-10 shrink-0`}>
                          <User className={`w-5 h-5 ${interview.color.replace('bg-', 'text-')}`} />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#0f172a] mb-0.5">
                            {interview.candidateName}
                          </h4>
                          <p className="text-[#94a3b8] text-xs mb-1">
                            {interview.position}
                          </p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        interview.status === 'confirmed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {interview.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                    </div>

                    {/* Meeting Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-[#475569]">{interview.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-[#475569]">{interview.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {interview.type === "Video Call" ? (
                          <Video className="w-4 h-4 text-purple-500" />
                        ) : (
                          <MapPin className="w-4 h-4 text-purple-500" />
                        )}
                        <span className="text-sm text-[#475569]">{interview.room}</span>
                      </div>
                      {interview.meetingLink && (
                        <div className="flex items-center gap-2">
                          <a 
                            href={interview.meetingLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-purple-600 hover:text-purple-700 underline truncate"
                          >
                            Join Google Meet
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                      >
                        <Send className="w-3.5 h-3.5 mr-1.5" />
                        {t("calendar.sendInvite")}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-300 text-purple-600 hover:bg-purple-50"
                      >
                        <Share2 className="w-3.5 h-3.5 mr-1.5" />
                        {t("calendar.shareCalendar")}
                      </Button>
                      {interview.meetingLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-green-300 text-green-600 hover:bg-green-50"
                          onClick={() => window.open(interview.meetingLink!, '_blank')}
                        >
                          <Video className="w-3.5 h-3.5 mr-1.5" />
                          Google Meet
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              {t("calendar.close")}
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
              {t("calendar.scheduleNew")}
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}