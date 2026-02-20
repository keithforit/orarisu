import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Plus, Clock, LayoutGrid, List, Loader2, Check, Instagram, Facebook, Pencil } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ContentBuilder } from "./ContentBuilder";

interface Post {
  id: number;
  title: string;
  description: string;
  time: string;
  platform: "instagram" | "facebook" | "tiktok";
  status: "scheduled" | "uploading" | "draft";
  image?: string;
  type: "photo" | "placeholder";
  hasCheckmark?: boolean;
}

const weekDays = [
  { day: 3, name: "Monday", date: "2025 nov 3" },
  { day: 4, name: "Tuesday", date: "2025 nov 4" },
  { day: 5, name: "Wednesday", date: "2025 nov 5" },
  { day: 6, name: "Thursday", date: "2025 nov 6" },
  { day: 7, name: "Friday", date: "2025 nov 7" },
  { day: 8, name: "Saturday", date: "2025 nov 8" },
  { day: 9, name: "Sunday", date: "2025 nov 9" },
];

const postsData: { [key: number]: Post[] } = {
  3: [
    {
      id: 1,
      title: "Unlock your workout potential",
      description: "Unlock your workout potential",
      time: "12:00",
      platform: "instagram",
      status: "scheduled",
      type: "placeholder",
    },
  ],
  4: [
    {
      id: 2,
      title: "Get to know your favorite snack",
      description: "Get to know your favorite snack is packed with ancient...",
      time: "16:00",
      platform: "instagram",
      status: "scheduled",
      image: "https://images.unsplash.com/photo-1666819691822-29a09f0992e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGJvd2x8ZW58MXx8fHwxNzcxNDY1OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "photo",
    },
    {
      id: 3,
      title: "Create post",
      description: "",
      time: "18:15",
      platform: "instagram",
      status: "draft",
      type: "placeholder",
    },
  ],
  5: [
    {
      id: 4,
      title: "This healthy snacking is boring?",
      description: "This healthy snacking is boring? Think again! 😋 We're...",
      time: "16:00",
      platform: "instagram",
      status: "scheduled",
      image: "https://images.unsplash.com/photo-1609618299278-cc53dc850f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2hvY29sYXRlfGVufDF8fHx8MTc3MTQ5MzA4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      type: "photo",
      hasCheckmark: true,
    },
    {
      id: 5,
      title: "Ever wonder what makes a Ruba bar...",
      description: "Ever wonder what makes a Ruba bar so incredibly...",
      time: "18:15",
      platform: "instagram",
      status: "scheduled",
      image: "https://images.unsplash.com/photo-1677653805080-59c57727c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzE0OTMwODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "photo",
    },
    {
      id: 6,
      title: "Create post",
      description: "",
      time: "",
      platform: "instagram",
      status: "draft",
      type: "placeholder",
    },
  ],
  6: [
    {
      id: 7,
      title: "For all the peanut butter lovers out there...",
      description: "For all the peanut butter lovers out there, this one's for you! 🥜...",
      time: "16:00",
      platform: "instagram",
      status: "scheduled",
      image: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzcxNDkzMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "photo",
      hasCheckmark: true,
    },
    {
      id: 8,
      title: "Create post",
      description: "",
      time: "",
      platform: "instagram",
      status: "draft",
      type: "placeholder",
    },
  ],
  7: [
    {
      id: 9,
      title: "Generate content",
      description: "",
      time: "16:00",
      platform: "instagram",
      status: "scheduled",
      type: "placeholder",
    },
    {
      id: 10,
      title: "Dreaming of a tropical escape?",
      description: "Dreaming of a tropical escape? We've packed it into a bar...",
      time: "18:15",
      platform: "instagram",
      status: "uploading",
      type: "placeholder",
    },
    {
      id: 11,
      title: "Create post",
      description: "",
      time: "",
      platform: "instagram",
      status: "draft",
      type: "placeholder",
    },
  ],
  8: [
    {
      id: 12,
      title: "Looking for the perfect thoughtful gift for...",
      description: "Looking for the perfect thoughtful gift for line...",
      time: "16:00",
      platform: "instagram",
      status: "scheduled",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzcxNDU1MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "photo",
      hasCheckmark: true,
    },
    {
      id: 13,
      title: "Create post",
      description: "",
      time: "",
      platform: "instagram",
      status: "draft",
      type: "placeholder",
    },
  ],
  9: [
    {
      id: 14,
      title: "Generate content",
      description: "",
      time: "10:00",
      platform: "instagram",
      status: "scheduled",
      type: "placeholder",
    },
    {
      id: 15,
      title: "Create post",
      description: "",
      time: "",
      platform: "instagram",
      status: "draft",
      type: "placeholder",
    },
  ],
};

export function CalendarView() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="w-3.5 h-3.5" />;
      case "facebook":
        return <Facebook className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1600px]">
      <ContentBuilder isOpen={isBuilderOpen} onClose={() => setIsBuilderOpen(false)} />
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-3">Campaign Pulse</h1>
        <p className="text-gray-600">
          View and manage your scheduled posts across all platforms
        </p>
      </div>

      {/* Header Controls */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        {/* Left: Week Navigation */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-lg">
            <Button variant="ghost" size="sm" className="px-2 h-9">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="px-2 h-9">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <span className="text-sm font-medium">2025 nov 3-9, (Week 45)</span>
          <Button variant="outline" size="sm" className="text-sm h-9">
            This week
          </Button>
        </div>

        {/* Right: Filters and View Toggle */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-40 h-9"
            />
            <svg className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Status Filter */}
          <select className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white h-9">
            <option>All status</option>
            <option>Scheduled</option>
            <option>Draft</option>
            <option>Uploading</option>
          </select>

          {/* Platform Filter */}
          <select className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white h-9">
            <option>All platform</option>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>TikTok</option>
          </select>

          {/* View Toggle */}
          <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-lg p-1">
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-2 py-1.5 text-sm rounded flex items-center gap-1.5 transition-colors ${
                viewMode === "calendar"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              Calendar
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-2 py-1.5 text-sm rounded flex items-center gap-1.5 transition-colors ${
                viewMode === "list"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <List className="w-4 h-4" />
              List
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 mb-6">
        {weekDays.map((dayInfo) => {
          const posts = postsData[dayInfo.day] || [];
          
          return (
            <div key={dayInfo.day} className="flex flex-col">
              {/* Day Header */}
              <div className="mb-3">
                <div className="text-2xl font-semibold">{dayInfo.day}</div>
                <div className="text-sm text-gray-600">{dayInfo.name}</div>
              </div>

              {/* Posts for this day */}
              <div className="space-y-2.5">
                {posts.map((post) => {
                  // Create Post Button
                  if (post.status === "draft" && post.type === "placeholder") {
                    return (
                      <button
                        key={post.id}
                        className="w-full px-3 py-3 sm:px-2 sm:py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm sm:text-xs font-medium flex items-center justify-center gap-2 sm:gap-1.5 transition-colors"
                      >
                        <Plus className="w-4 h-4 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        <span>Create post</span>
                      </button>
                    );
                  }

                  // Generate Content Button
                  if (post.title === "Generate content" && post.type === "placeholder") {
                    return (
                      <div
                        key={post.id}
                        className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors group"
                      >
                        <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-500 relative">
                          <button className="absolute top-2 right-2 w-7 h-7 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-gray-50">
                            <Pencil className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-gray-600" />
                          </button>
                        </div>
                        <div className="p-3 sm:p-2.5">
                          <div className="flex items-center gap-2 sm:gap-1.5 text-gray-600 mb-2">
                            <Clock className="w-4 h-4 sm:w-3 sm:h-3 flex-shrink-0" />
                            <span className="text-sm sm:text-xs">{post.time}</span>
                            <span className="ml-auto px-2 py-1 sm:px-1.5 sm:py-0.5 bg-gray-100 text-gray-600 rounded text-sm sm:text-xs flex-shrink-0">
                              Draft
                            </span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-1.5 text-gray-500 mb-2">
                            {getPlatformIcon(post.platform)}
                            <span className="text-sm sm:text-xs">Photo</span>
                          </div>
                          <button className="w-full px-3 py-2 sm:px-2 sm:py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm sm:text-xs font-medium transition-colors" onClick={() => setIsBuilderOpen(true)}>
                            Generate content
                          </button>
                        </div>
                      </div>
                    );
                  }

                  // Uploading State
                  if (post.status === "uploading") {
                    return (
                      <div
                        key={post.id}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden group"
                      >
                        <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-500 relative">
                          <button className="absolute top-2 right-2 w-7 h-7 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-gray-50">
                            <Pencil className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-gray-600" />
                          </button>
                        </div>
                        <div className="p-3 sm:p-2.5">
                          <div className="flex items-center gap-2 sm:gap-1.5 text-gray-600 mb-2">
                            <Clock className="w-4 h-4 sm:w-3 sm:h-3 flex-shrink-0" />
                            <span className="text-sm sm:text-xs">{post.time}</span>
                            <span className="ml-auto px-2 py-1 sm:px-1.5 sm:py-0.5 bg-gray-100 text-gray-600 rounded text-sm sm:text-xs flex items-center gap-1.5 sm:gap-1 flex-shrink-0">
                              <Loader2 className="w-4 h-4 sm:w-3 sm:h-3 animate-spin" />
                              <span className="hidden sm:inline">Uploading</span>
                            </span>
                          </div>
                          <p className="text-sm sm:text-xs text-gray-700 mb-2 line-clamp-2 break-words">
                            {post.description || post.title}
                          </p>
                          <div className="flex items-center gap-2 sm:gap-1.5 text-gray-500">
                            {getPlatformIcon(post.platform)}
                            <span className="text-sm sm:text-xs">Photo</span>
                            <Loader2 className="w-4 h-4 sm:w-3 sm:h-3 ml-auto animate-spin text-gray-400 flex-shrink-0" />
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Regular Post
                  return (
                    <div
                      key={post.id}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors cursor-pointer group"
                    >
                      {post.type === "photo" && post.image ? (
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <button className="absolute top-2 right-2 w-7 h-7 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-gray-50">
                            <Pencil className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-gray-600" />
                          </button>
                          {post.hasCheckmark && (
                            <div className="absolute top-2 left-2 w-6 h-6 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-white" />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-500 relative">
                          <button className="absolute top-2 right-2 w-7 h-7 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-gray-50">
                            <Pencil className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-gray-600" />
                          </button>
                        </div>
                      )}
                      <div className="p-3 sm:p-2.5">
                        <div className="flex items-center gap-2 sm:gap-1.5 text-gray-600 mb-2">
                          <Clock className="w-4 h-4 sm:w-3 sm:h-3 flex-shrink-0" />
                          <span className="text-sm sm:text-xs">{post.time}</span>
                          <span className="ml-auto px-2 py-1 sm:px-1.5 sm:py-0.5 bg-blue-100 text-blue-600 rounded text-sm sm:text-xs flex-shrink-0">
                            Scheduled
                          </span>
                        </div>
                        {post.description ? (
                          <p className="text-sm sm:text-xs text-gray-700 mb-2 line-clamp-2 break-words">
                            {post.description}
                          </p>
                        ) : null}
                        <div className="flex items-center gap-2 sm:gap-1.5 text-gray-500 mb-2">
                          {getPlatformIcon(post.platform)}
                          <span className="text-sm sm:text-xs">Photo</span>
                        </div>
                        {!post.description && (
                          <button className="w-full px-3 py-2 sm:px-2 sm:py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm sm:text-xs font-medium transition-colors">
                            Generate content
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <Button onClick={() => navigate("/campaign")} variant="outline" size="lg">
          Back to Campaign Selection
        </Button>
      </div>
    </div>
  );
}