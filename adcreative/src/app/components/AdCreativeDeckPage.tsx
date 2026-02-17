import { useState } from "react";
import { useParams } from "react-router";
import { Plus, Share, Pencil, ChevronDown, ArrowLeft, Copy, Check, X } from "lucide-react";
import { campaigns } from "../data/campaigns";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface Banner {
  id: string;
  size: string;
  dimensions: string;
  imageUrl: string;
}

const mockBanners: Banner[] = [
  {
    id: "1",
    size: "Leaderboard",
    dimensions: "728x90",
    imageUrl: "",
  },
  {
    id: "2",
    size: "Medium Rectangle",
    dimensions: "300x250",
    imageUrl: "",
  },
  {
    id: "3",
    size: "Wide Skyscraper",
    dimensions: "160x600",
    imageUrl: "",
  },
  {
    id: "4",
    size: "Large Rectangle",
    dimensions: "336x280",
    imageUrl: "",
  },
  {
    id: "5",
    size: "Mobile Banner",
    dimensions: "320x50",
    imageUrl: "",
  },
  {
    id: "6",
    size: "Half Page",
    dimensions: "300x600",
    imageUrl: "",
  },
];

export function AdCreativeDeckPage() {
  const { id } = useParams();
  const [selectedAdvertiser, setSelectedAdvertiser] = useState<string>("");
  const [selectedCampaign, setSelectedCampaign] = useState<string>("");
  const [showCreateNew, setShowCreateNew] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [sharingBanner, setSharingBanner] = useState<Banner | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"link" | "html">("link");

  // Get unique advertisers
  const advertisers = Array.from(new Set(campaigns.map(c => c.storeName)));

  // Get campaigns for selected advertiser
  const availableCampaigns = selectedAdvertiser 
    ? campaigns.filter(c => c.storeName === selectedAdvertiser)
    : [];

  const campaign = selectedCampaign
    ? campaigns.find(c => c.id === selectedCampaign)
    : null;

  // Generate conversion link
  const conversionLink = campaign && sharingBanner
    ? `https://webridge.afo/track/${campaign.pid}/${sharingBanner.id}`
    : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(conversionLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate HTML embed code
  const htmlCode = campaign && sharingBanner
    ? `<a href="${conversionLink}" target="_blank">\n  <img src="https://webridge.afo/banners/${sharingBanner.id}.png" alt="Ad Banner" />\n</a>`
    : "";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTab === "link" ? conversionLink : htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">Ad Creative Deck</h1>
      
      {/* Description */}
      <p className="text-gray-600 mb-8">
        Design and manage your campaign creatives to boost your promotions and performance.
      </p>

      {/* Step 1 & 2: Choose Advertiser and Campaign */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="font-semibold mb-3">Choose an Advertiser</h3>
        <div className="relative mb-6">
          <select
            value={selectedAdvertiser}
            onChange={(e) => {
              setSelectedAdvertiser(e.target.value);
              setSelectedCampaign("");
              setShowCreateNew(false);
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select an advertiser...</option>
            {advertisers.map((advertiser) => (
              <option key={advertiser} value={advertiser}>
                {advertiser}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        </div>

        {selectedAdvertiser && (
          <>
            <h3 className="font-semibold mb-3">Choose a Campaign</h3>
            <div className="relative">
              <select
                value={selectedCampaign}
                onChange={(e) => {
                  setSelectedCampaign(e.target.value);
                  setShowCreateNew(false);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a campaign...</option>
                {availableCampaigns.map((camp) => (
                  <option key={camp.id} value={camp.id}>
                    {camp.productName}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </>
        )}
      </div>

      {/* Campaign Details and Banners */}
      {selectedCampaign && campaign && !showCreateNew && !editingBanner && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Campaign Details */}
          <div className="flex items-start gap-6">
            {/* Store Logo */}
            <div className="w-16 h-16 bg-black rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">{campaign.storeName.substring(0, 1)}</span>
            </div>

            {/* Campaign Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{campaign.storeName}</h2>
              
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">
                  {campaign.status}
                </span>
                <span className="text-gray-600 text-sm">PID: {campaign.pid}</span>
              </div>

              <h3 className="text-lg mb-2">{campaign.productName}</h3>

              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-gray-600">Commission: </span>
                  <span className="text-green-600 font-semibold text-lg">
                    ${campaign.commission.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6"></div>

          {/* Available Banners */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Available Banners</h3>
              <Button className="gap-2 transition-all duration-200 hover:shadow-[inset_0_0_0_1000px_rgba(255,255,255,0.1)]" onClick={() => setShowCreateNew(true)}>
                <Plus size={20} />
                Create New Banner
              </Button>
            </div>

            {/* Banner Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBanners.map((banner) => (
                <div key={banner.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900">{banner.size}</h4>
                    <p className="text-sm text-gray-600">{banner.dimensions}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded flex items-center justify-center mb-4 overflow-hidden min-h-[120px]">
                    <div className="text-gray-500 text-sm">{banner.dimensions}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 gap-2"
                      onClick={() => setSharingBanner(banner)}
                    >
                      <Share size={16} />
                      Share
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-1"
                      onClick={() => setEditingBanner(banner)}
                    >
                      <Pencil size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Create New Content Section */}
      {showCreateNew && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <Button variant="outline" size="sm" onClick={() => setShowCreateNew(false)}>
              <ArrowLeft size={16} />
            </Button>
            <h3 className="text-xl font-semibold">Create New Banner</h3>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Select a preset size or enter custom dimensions to create new advertising content for this campaign.
            </p>

            {/* Banner Size Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6">
              {mockBanners.map((banner) => (
                <button
                  key={banner.id}
                  className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">{banner.size}</h4>
                  <p className="text-sm text-gray-600">{banner.dimensions}</p>
                </button>
              ))}
            </div>

            {/* Custom Size Input */}
            <div className="border-t border-gray-200 pt-6">
              <h5 className="font-semibold text-gray-900 mb-4">Custom Size</h5>
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-2">Width (px)</label>
                  <input
                    type="number"
                    placeholder="e.g. 728"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-2">Height (px)</label>
                  <input
                    type="number"
                    placeholder="e.g. 90"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end pt-4">
              <Button variant="outline" onClick={() => setShowCreateNew(false)}>
                Cancel
              </Button>
              <Button>
                Create Banner
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Banner Section */}
      {editingBanner && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <Button variant="outline" size="sm" onClick={() => setEditingBanner(null)}>
              <ArrowLeft size={16} />
            </Button>
            <h3 className="text-xl font-semibold">Edit Banner</h3>
          </div>
          
          <div className="space-y-6">
            {/* Current Banner Preview */}
            <div>
              <div className="mb-3">
                <h4 className="font-semibold text-gray-900">{editingBanner.size}</h4>
                <p className="text-sm text-gray-600">{editingBanner.dimensions}</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded flex items-center justify-center overflow-hidden min-h-[200px]">
                <div className="text-gray-500 text-sm">{editingBanner.dimensions}</div>
              </div>
            </div>

            {/* Resize Option */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resize Banner</h4>
              <p className="text-gray-600 mb-4">
                Select a preset size or enter custom dimensions to resize this banner.
              </p>

              {/* Banner Size Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {mockBanners.map((banner) => (
                  <button
                    key={banner.id}
                    className={`border-2 rounded-lg p-6 hover:border-blue-500 hover:bg-blue-50 transition-all text-left ${
                      banner.id === editingBanner.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">{banner.size}</h4>
                    <p className="text-sm text-gray-600">{banner.dimensions}</p>
                    {banner.id === editingBanner.id && (
                      <span className="text-xs text-blue-600 font-medium mt-2 inline-block">
                        Current Size
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Custom Size Input */}
              <div className="border-t border-gray-200 pt-6">
                <h5 className="font-semibold text-gray-900 mb-4">Custom Size</h5>
                <div className="flex gap-4 items-end">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-2">Width (px)</label>
                    <input
                      type="number"
                      placeholder="e.g. 728"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-2">Height (px)</label>
                    <input
                      type="number"
                      placeholder="e.g. 90"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end pt-4">
              <Button variant="outline" onClick={() => setEditingBanner(null)}>
                Cancel
              </Button>
              <Button>
                Apply Changes
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Share Banner Section */}
      {sharingBanner && (
        <div className="fixed inset-0 z-50 p-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Share Banner</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setSharingBanner(null);
                    setActiveTab("link");
                    setCopied(false);
                  }}
                  className="gap-2"
                >
                  <X size={16} />
                </Button>
              </div>
              
              <div className="space-y-6">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => {
                      setActiveTab("link");
                      setCopied(false);
                    }}
                    className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                      activeTab === "link"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Conversion Link
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("html");
                      setCopied(false);
                    }}
                    className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                      activeTab === "html"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    HTML
                  </button>
                </div>

                {/* Tab Content */}
                <div>
                  {activeTab === "link" ? (
                    <div className="flex gap-2 items-center p-4 bg-gray-50 rounded-lg">
                      <input
                        type="text"
                        readOnly
                        value={conversionLink}
                        className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-700"
                      />
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2"
                        onClick={handleCopyCode}
                      >
                        {copied ? (
                          <>
                            <Check size={16} />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-2 items-start p-4 bg-gray-50 rounded-lg">
                      <pre className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-700 font-mono whitespace-pre-wrap break-all">
                        {htmlCode}
                      </pre>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 flex-shrink-0"
                        onClick={handleCopyCode}
                      >
                        {copied ? (
                          <>
                            <Check size={16} />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>

                {/* Social Share Options */}
                <div className="border-t border-gray-200 pt-6">
                  <h5 className="font-semibold text-gray-900 mb-4">Share to</h5>
                  <div className="flex gap-4">
                    {/* TikTok */}
                    <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
                      </svg>
                    </button>

                    {/* Instagram */}
                    <button className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>

                    {/* Facebook */}
                    <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>

                    {/* Email */}
                    <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}