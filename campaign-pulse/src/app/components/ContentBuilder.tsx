import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface ContentBuilderProps {
  isOpen: boolean;
  onClose: () => void;
}

const templates = [
  { id: 1, color: "bg-blue-500" },
  { id: 2, color: "bg-blue-500" },
  { id: 3, color: "bg-blue-500" },
  { id: 4, color: "bg-blue-400" },
  { id: 5, color: "bg-blue-500" },
  { id: 6, color: "bg-blue-500" },
  { id: 7, color: "bg-blue-500" },
  { id: 8, color: "bg-blue-500" },
];

const tabs = ["Templates", "Crop", "Colors", "Captions", "Logo"];
const versions = ["Version 1", "Version 2", "Version 3", "Version 4", "Upload"];

export function ContentBuilder({ isOpen, onClose }: ContentBuilderProps) {
  const [activeTab, setActiveTab] = useState("Templates");
  const [activeVersion, setActiveVersion] = useState("Version 2");
  const [publishDate, setPublishDate] = useState("2025-10-24");
  const [publishTime, setPublishTime] = useState("21:00");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-7xl h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Content Builder</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-80 border-r border-gray-200 flex flex-col overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Designer</h3>
              <p className="text-sm text-gray-600">
                Choose what colors, font, and design we should use for your post.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-6 pt-4 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    activeTab === tab
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                  )}
                </button>
              ))}
            </div>

            {/* Templates Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-2 gap-3">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className={`${template.color} rounded-lg aspect-[3/4] cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center`}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-white rotate-45" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 overflow-y-auto p-8">
            {/* Publish At */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Publish at
              </label>
              <div className="flex gap-3">
                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="time"
                  value={publishTime}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Version Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200">
              {versions.map((version) => (
                <button
                  key={version}
                  onClick={() => setActiveVersion(version)}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                    activeVersion === version
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {version}
                  {activeVersion === version && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                  )}
                </button>
              ))}
            </div>

            {/* Photo Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold">Photo</h3>
                <button className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                  Download
                </button>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg aspect-square max-w-lg mx-auto flex items-center justify-center">
                <div className="text-white text-lg font-medium">Photo Placeholder</div>
              </div>
            </div>

            {/* Text Section */}
            <div className="mb-6">
              <h3 className="text-base font-semibold mb-3">Text</h3>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={4}
                placeholder="Enter your post caption..."
                defaultValue="Shareable, healthy snacks for great company."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button onClick={onClose} variant="outline" size="lg">
                Cancel
              </Button>
              <Button size="lg" className="flex-1">
                Save & Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}