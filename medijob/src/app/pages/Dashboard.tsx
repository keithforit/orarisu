import { Link } from "react-router";
import { Bell, Users, FileText, Calendar, Clock, UserX, AlertCircle, LogOut, User, AlarmClock } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import mediverseLogo from "figma:asset/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NotificationDropdown from "../components/NotificationDropdown";

export default function Dashboard() {
  const { t } = useLanguage();

  const todayNotifications = [
    {
      id: 1,
      icon: Users,
      title: "3 candidates waiting for first call",
      color: "bg-blue-500",
      iconColor: "text-white",
    },
    {
      id: 2,
      icon: Clock,
      title: "2 interview reminders",
      color: "bg-purple-500",
      iconColor: "text-white",
    },
    {
      id: 3,
      icon: FileText,
      title: "1 resume requested",
      color: "bg-green-500",
      iconColor: "text-white",
    },
  ];

  const followUps = [
    {
      id: 1,
      icon: Clock,
      title: "Candidate hasn't responded in 3 days",
      color: "bg-orange-500",
      iconColor: "text-white",
    },
    {
      id: 2,
      icon: AlertCircle,
      title: "Interview tomorrow reminder",
      color: "bg-indigo-500",
      iconColor: "text-white",
    },
    {
      id: 3,
      icon: UserX,
      title: "Candidate withdrew",
      color: "bg-red-500",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={mediverseLogo} alt="Mediverse" className="h-8 w-auto" />
              <span className="text-xl font-semibold text-gray-800">{t("dashboard.title")}</span>
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t("dashboard.welcome")}
          </h1>
          <p className="text-gray-600 text-lg">
            {t("dashboard.subtitle")}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link to="/applicants">
            <div className="bg-white p-6 relative rounded-2xl cursor-pointer hover:shadow-lg transition-all group">
              <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[#94a3b8] text-[10px] uppercase tracking-[1px] font-bold mb-3">
                      {t("dashboard.totalCandidates")}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-4xl font-bold text-[#0f172a]">48</h3>
                      <span className="text-[#10b981] text-sm font-bold">+8.2%</span>
                    </div>
                  </div>
                  <Users className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Progress Bar */}
                <div className="bg-[#f8fafc] h-1 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[75%] rounded-full" />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/calendar">
            <div 
              className="bg-white p-6 relative rounded-2xl cursor-pointer hover:shadow-lg transition-all group"
            >
              <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[#94a3b8] text-[10px] uppercase tracking-[1px] font-bold mb-3">
                      {t("dashboard.interviewsToday")}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-4xl font-bold text-[#0f172a]">2</h3>
                      <span className="text-[#f59e0b] text-sm font-bold">Scheduled</span>
                    </div>
                  </div>
                  <Calendar className="w-12 h-12 text-purple-500 group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Progress Bar */}
                <div className="bg-[#f8fafc] h-1 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[40%] rounded-full" />
                </div>
              </div>
            </div>
          </Link>

          <div className="bg-white p-6 relative rounded-2xl hover:shadow-lg transition-all group">
            <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[#94a3b8] text-[10px] uppercase tracking-[1px] font-bold mb-3">
                    {t("dashboard.pendingActions")}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl font-bold text-[#0f172a]">6</h3>
                    <span className="text-[#ef4444] text-sm font-bold">Urgent</span>
                  </div>
                </div>
                <AlertCircle className="w-12 h-12 text-green-500 group-hover:scale-110 transition-transform" />
              </div>
              
              {/* Progress Bar */}
              <div className="bg-[#f8fafc] h-1 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[60%] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("dashboard.quickActions")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/applicants">
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Users className="w-5 h-5 mr-2" />
                {t("dashboard.viewCandidates")}
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Calendar className="w-5 h-5 mr-2" />
              {t("dashboard.scheduleInterview")}
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <FileText className="w-5 h-5 mr-2" />
              {t("dashboard.reviewResumes")}
            </Button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">{t("dashboard.today")}</h2>
            </div>
            
            <div className="space-y-3">
              {todayNotifications.map((notification, index) => {
                const Icon = notification.icon;
                return (
                  <div 
                    key={notification.id}
                    className="bg-white p-5 relative rounded-xl cursor-pointer hover:shadow-md transition-all group"
                  >
                    <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                    
                    <div className="relative flex gap-4">
                      <div className={`p-2.5 rounded-lg ${notification.color} h-fit shrink-0`}>
                        <Icon className={`w-5 h-5 ${notification.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#94a3b8] text-xs mb-1">
                          Mediverse HR
                        </p>
                        <p className="text-[#475569] font-semibold text-sm mb-1">
                          {t(`dashboard.notification${index + 1}`)}
                        </p>
                        <p className="text-[#94a3b8] text-xs">
                          {index === 0 ? '10 minutes ago' : index === 1 ? '1 hour ago' : '2 hours ago'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Follow-ups Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-orange-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">{t("dashboard.followUps")}</h2>
            </div>
            
            <div className="space-y-3">
              {followUps.map((followUp, index) => {
                const Icon = followUp.icon;
                return (
                  <div 
                    key={followUp.id}
                    className="bg-white p-5 relative rounded-xl cursor-pointer hover:shadow-md transition-all group"
                  >
                    <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                    
                    <div className="relative flex gap-4">
                      <div className={`p-2.5 rounded-lg ${followUp.color} h-fit shrink-0`}>
                        <Icon className={`w-5 h-5 ${followUp.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#94a3b8] text-xs mb-1">
                          System Alert
                        </p>
                        <p className="text-[#475569] font-semibold text-sm mb-1">
                          {t(`dashboard.followup${index + 1}`)}
                        </p>
                        <p className="text-[#94a3b8] text-xs">
                          {index === 0 ? '3 days ago' : index === 1 ? 'Tomorrow' : 'Just now'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}