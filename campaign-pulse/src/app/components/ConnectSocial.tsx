import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { ConnectionModal } from "./ConnectionModal";
import exampleImage from "figma:asset/6d15e24a098ca56773887777c4083e8d8ab0a009.png";

export function ConnectSocial() {
  const navigate = useNavigate();
  const [connected, setConnected] = useState({
    tiktok: true,
    instagram: false,
    facebook: false,
  });
  const [connectingPlatform, setConnectingPlatform] = useState<"instagram" | "facebook" | null>(null);

  const handleConnect = (platform: "instagram" | "facebook") => {
    setConnectingPlatform(platform);
  };

  const handleConnectionComplete = () => {
    if (connectingPlatform) {
      setConnected((prev) => ({ ...prev, [connectingPlatform]: true }));
      setConnectingPlatform(null);
    }
  };

  const handleDisconnect = (platform: "tiktok" | "instagram" | "facebook") => {
    setConnected((prev) => ({ ...prev, [platform]: false }));
  };

  const canContinue = connected.tiktok || connected.instagram || connected.facebook;

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-3">Campaign Pulse</h1>
        <p className="text-gray-600">
          Create engaging content from your advertiser campaigns
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold mb-2">Connect Your Social Accounts</h2>
        <p className="text-gray-600 mb-8">
          Connect at least one platform to start creating and scheduling content for your campaigns
        </p>

        <div className="space-y-4 mb-8">
          {/* TikTok */}
          <div className={`flex items-center justify-between p-4 border-2 rounded-xl transition-colors ${
            connected.tiktok 
              ? "border-green-500 hover:border-green-600 bg-green-50/30" 
              : "border-gray-200 hover:border-gray-300"
          }`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">TikTok</div>
                <div className="text-sm text-gray-400">
                  {connected.tiktok ? "Connected" : "Not connected"}
                </div>
              </div>
            </div>
            {connected.tiktok ? (
              <button 
                onClick={() => handleDisconnect("tiktok")}
                className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors mr-[22px]"
              >
                <X className="w-3.5 h-3.5" />
                <span className="text-sm hover:underline">Unlink</span>
              </button>
            ) : (
              <Button onClick={() => handleConnect("tiktok" as any)} variant="default">
                Connect
              </Button>
            )}
          </div>

          {/* Instagram */}
          <div className={`flex items-center justify-between p-4 border-2 rounded-xl transition-colors ${
            connected.instagram 
              ? "border-green-500 hover:border-green-600 bg-green-50/30" 
              : "border-gray-200 hover:border-gray-300"
          }`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Instagram</div>
                <div className="text-sm text-gray-400">
                  {connected.instagram ? "Connected" : "Not connected"}
                </div>
              </div>
            </div>
            {connected.instagram ? (
              <button 
                onClick={() => handleDisconnect("instagram")}
                className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors mr-[22px]"
              >
                <X className="w-3.5 h-3.5" />
                <span className="text-sm hover:underline">Unlink</span>
              </button>
            ) : (
              <Button onClick={() => handleConnect("instagram")} variant="default">
                Connect
              </Button>
            )}
          </div>

          {/* Facebook */}
          <div className={`flex items-center justify-between p-4 border-2 rounded-xl transition-colors ${
            connected.facebook 
              ? "border-green-500 hover:border-green-600 bg-green-50/30" 
              : "border-gray-200 hover:border-gray-300"
          }`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1877f2] rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Facebook</div>
                <div className="text-sm text-gray-400">
                  {connected.facebook ? "Connected" : "Not connected"}
                </div>
              </div>
            </div>
            {connected.facebook ? (
              <button 
                onClick={() => handleDisconnect("facebook")}
                className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors mr-[22px]"
              >
                <X className="w-3.5 h-3.5" />
                <span className="text-sm hover:underline">Unlink</span>
              </button>
            ) : (
              <Button onClick={() => handleConnect("facebook")} variant="default">
                Connect
              </Button>
            )}
          </div>
        </div>

        <Button
          onClick={() => navigate("/campaign")}
          disabled={!canContinue}
          className="w-full"
          size="lg"
        >
          Continue to Campaign Selection
        </Button>
      </div>

      <ConnectionModal
        open={connectingPlatform !== null}
        platform={connectingPlatform}
        onComplete={handleConnectionComplete}
      />
    </div>
  );
}