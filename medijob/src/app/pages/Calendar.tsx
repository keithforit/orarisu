import { Link } from "react-router";
import { Calendar as CalendarIcon, Clock, User, MapPin, Video, Send, Share2, ChevronLeft, ChevronRight, ArrowLeft, Bell, LogOut } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import mediverseLogo from "../../assets/033be242c2b57d0c297161f9934e633207a10d29.png";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NotificationDropdown from "../components/NotificationDropdown";

export default function Calendar() {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState(new Date());

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <img src={mediverseLogo} alt="Mediverse" className="h-8 w-auto cursor-pointer" />
              </Link>
              <span className="text-xl font-semibold text-gray-800">{t("calendar.title")}</span>
            </div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />

              <NotificationDropdown />

              <Link to="/">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <LogOut className="w-4 h-4" />
                  {t("header.logout")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/dashboard">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-2xl shadow-xl mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <CalendarIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">
                {t("calendar.title")}
              </h1>
              <p className="text-purple-100">
                {t("calendar.today")} - {new Date().toLocaleDateString(undefined, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Date Picker */}
        <div className="mb-8 bg-white p-6 relative rounded-2xl shadow-lg">
          <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{t("calendar.selectDate")}</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <span className="text-base font-medium text-gray-900 min-w-[160px] text-center">
                  {monthNames[currentMonth]} {currentYear}
                </span>
                <button
                  onClick={goToNextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-sm font-medium text-gray-500 py-2">
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
                    className={`py-3 text-sm rounded-lg transition-colors ${isToday
                      ? 'bg-purple-600 text-white font-bold shadow-lg'
                      : isCurrentMonth
                        ? 'hover:bg-purple-50 text-gray-900 hover:shadow-md'
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
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {t("calendar.scheduledInterviews")}
          </h2>
          <p className="text-gray-600">
            {interviews.length} {t("calendar.interviewsScheduled")}
          </p>
        </div>

        <div className="space-y-6">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="bg-white p-6 relative rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />

              <div className="relative">
                {/* Header with Candidate Info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-lg ${interview.color} bg-opacity-10 shrink-0`}>
                      <User className={`w-6 h-6 ${interview.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0f172a] mb-1">
                        {interview.candidateName}
                      </h4>
                      <p className="text-[#94a3b8] text-sm">
                        {interview.position}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1.5 text-sm font-medium rounded-full ${interview.status === 'confirmed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {interview.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                  </span>
                </div>

                {/* Meeting Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-5 h-5 text-purple-500" />
                    <span className="text-sm text-[#475569] font-medium">{interview.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="text-sm text-[#475569] font-medium">{interview.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {interview.type === "Video Call" ? (
                      <Video className="w-5 h-5 text-purple-500" />
                    ) : (
                      <MapPin className="w-5 h-5 text-purple-500" />
                    )}
                    <span className="text-sm text-[#475569] font-medium">{interview.room}</span>
                  </div>
                  {interview.meetingLink && (
                    <div className="flex items-center gap-3">
                      <a
                        href={interview.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700 font-medium underline truncate"
                      >
                        Join Google Meet
                      </a>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {t("calendar.sendInvite")}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    {t("calendar.shareCalendar")}
                  </Button>
                  {interview.meetingLink && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-300 text-green-600 hover:bg-green-50"
                      onClick={() => window.open(interview.meetingLink!, '_blank')}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Google Meet
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule New Interview Button */}
        <div className="mt-8">
          <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 px-8 text-base shadow-lg hover:shadow-xl transition-all">
            <CalendarIcon className="w-5 h-5 mr-2" />
            {t("calendar.scheduleNew")}
          </Button>
        </div>
      </main>
    </div>
  );
}
