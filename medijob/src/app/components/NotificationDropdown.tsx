import { useState, useRef, useEffect } from "react";
import { Bell, Lock, User, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const markAllAsRead = () => {
    // This would typically update state to mark notifications as read
    console.log("Mark all as read");
  };

  // Build notifications array inside the component where t() is available
  const notifications = [
    {
      id: 1,
      text: t("notification.passwordChanged"),
      author: null,
      timestamp: "Jul 23, 2021 at 09:15 AM",
      icon: Lock,
      iconBg: "bg-blue-500",
      avatar: null,
      unread: true,
    },
    {
      id: 2,
      text: t("notification.meetingBooked"),
      author: t("notification.author1"),
      timestamp: "Jul 14, 2021 at 5:31 PM",
      icon: null,
      iconBg: null,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      unread: true,
    },
    {
      id: 3,
      text: t("notification.fundLaunch"),
      author: t("notification.author2"),
      timestamp: "Jul 13, 2021 at 1:43 PM",
      icon: TrendingUp,
      iconBg: null,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      unread: true,
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative focus:outline-none group"
      >
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform">
          {notifications.filter(n => n.unread).length}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-[400px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <Card className="bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-gray-900 font-semibold text-base">
                {t("notifications.title")}
              </h3>
              <button 
                onClick={markAllAsRead}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1.5"
              >
                <span className="text-blue-600">✓✓</span>
                {t("notification.markAsRead")}
              </button>
            </div>

            {/* Notifications List */}
            <div className="max-h-[450px] overflow-y-auto">
              {notifications.map((notification, index) => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`px-5 py-4 hover:bg-gray-50 transition-all cursor-pointer ${
                      index !== notifications.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Blue dot indicator */}
                      {notification.unread && (
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                      )}
                      {!notification.unread && (
                        <div className="w-2 h-2 mt-2 shrink-0" />
                      )}
                      
                      {/* Notification content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-800 text-sm leading-relaxed mb-1">
                          {notification.text}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {notification.author && (
                            <>
                              <span className="font-medium">{notification.author}</span>
                              {" • "}
                            </>
                          )}
                          {notification.timestamp}
                        </p>
                      </div>

                      {/* Avatar or Icon */}
                      <div className="shrink-0">
                        {notification.avatar ? (
                          <img 
                            src={notification.avatar} 
                            alt={notification.author || "User"}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : Icon ? (
                          <div className={`w-10 h-10 rounded-full ${notification.iconBg} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
              <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium text-sm py-2 hover:bg-blue-50 rounded-lg transition-colors">
                {t("notification.viewAll")}
              </button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}