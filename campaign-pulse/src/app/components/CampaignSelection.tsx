import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Target, TrendingUp, Users, Calendar, Building2, ArrowLeft } from "lucide-react";

const advertisers = [
  {
    id: 1,
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
    category: "Athletic Wear",
    campaigns: 3,
    color: "bg-gray-800",
  },
  {
    id: 2,
    name: "Samsung",
    logo: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&h=200&fit=crop",
    category: "Electronics",
    campaigns: 2,
    color: "bg-blue-600",
  },
  {
    id: 3,
    name: "Coca-Cola",
    logo: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&h=200&fit=crop",
    category: "Beverages",
    campaigns: 2,
    color: "bg-red-500",
  },
  {
    id: 4,
    name: "Apple",
    logo: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=200&h=200&fit=crop",
    category: "Technology",
    campaigns: 4,
    color: "bg-gray-900",
  },
];

const campaigns = [
  {
    id: 5,
    name: "Nike Athletic Wear Spring",
    description: "Promote Nike's latest athletic collection",
    status: "Active",
    posts: 10,
    reach: "67.8K",
    engagement: "15.2%",
    color: "bg-gray-800",
    type: "advertiser",
    advertiserId: 1,
  },
  {
    id: 6,
    name: "Nike Training Series",
    description: "New training gear and equipment line",
    status: "Active",
    posts: 8,
    reach: "54.3K",
    engagement: "13.8%",
    color: "bg-gray-800",
    type: "advertiser",
    advertiserId: 1,
  },
  {
    id: 7,
    name: "Nike Air Max Launch",
    description: "Latest Air Max sneaker release campaign",
    status: "Scheduled",
    posts: 12,
    reach: "89.2K",
    engagement: "19.4%",
    color: "bg-gray-800",
    type: "advertiser",
    advertiserId: 1,
  },
  {
    id: 8,
    name: "Samsung Galaxy Launch",
    description: "New Galaxy smartphone series promotion",
    status: "Active",
    posts: 14,
    reach: "92.3K",
    engagement: "18.5%",
    color: "bg-blue-600",
    type: "advertiser",
    advertiserId: 2,
  },
  {
    id: 9,
    name: "Samsung Smart Home",
    description: "Connected home devices campaign",
    status: "Scheduled",
    posts: 9,
    reach: "71.5K",
    engagement: "14.2%",
    color: "bg-blue-600",
    type: "advertiser",
    advertiserId: 2,
  },
  {
    id: 10,
    name: "Coca-Cola Summer Refresh",
    description: "Summer beverage campaign",
    status: "Active",
    posts: 8,
    reach: "125K",
    engagement: "22.1%",
    color: "bg-red-500",
    type: "advertiser",
    advertiserId: 3,
  },
  {
    id: 11,
    name: "Coca-Cola Zero Sugar",
    description: "New zero sugar variant promotion",
    status: "Active",
    posts: 10,
    reach: "98.7K",
    engagement: "17.9%",
    color: "bg-red-500",
    type: "advertiser",
    advertiserId: 3,
  },
  {
    id: 12,
    name: "iPhone 15 Pro Launch",
    description: "Latest iPhone model campaign",
    status: "Active",
    posts: 16,
    reach: "215K",
    engagement: "25.3%",
    color: "bg-gray-900",
    type: "advertiser",
    advertiserId: 4,
  },
  {
    id: 13,
    name: "Apple Watch Fitness",
    description: "Health and fitness tracking features",
    status: "Active",
    posts: 11,
    reach: "143K",
    engagement: "20.1%",
    color: "bg-gray-900",
    type: "advertiser",
    advertiserId: 4,
  },
  {
    id: 14,
    name: "Apple Vision Pro",
    description: "Spatial computing device introduction",
    status: "Scheduled",
    posts: 14,
    reach: "187K",
    engagement: "28.7%",
    color: "bg-gray-900",
    type: "advertiser",
    advertiserId: 4,
  },
  {
    id: 15,
    name: "MacBook Air M3",
    description: "New MacBook Air with M3 chip",
    status: "Active",
    posts: 12,
    reach: "165K",
    engagement: "23.5%",
    color: "bg-gray-900",
    type: "advertiser",
    advertiserId: 4,
  },
];

export function CampaignSelection() {
  const navigate = useNavigate();
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);
  const [selectedAdvertiser, setSelectedAdvertiser] = useState<number | null>(null);

  const filteredCampaigns = selectedAdvertiser
    ? campaigns.filter((c) => c.advertiserId === selectedAdvertiser)
    : [];

  const currentAdvertiser = advertisers.find((a) => a.id === selectedAdvertiser);

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-3">Campaign Pulse</h1>
        <h2 className="text-2xl font-medium mb-2">Select a Advertiser & Campaign</h2>
        <p className="text-gray-600">
          Choose an advertiser and campaign to create content for
        </p>
      </div>

      {/* Show Advertisers when no advertiser chosen */}
      {!selectedAdvertiser && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {advertisers.map((advertiser) => (
            <div
              key={advertiser.id}
              onClick={() => setSelectedAdvertiser(advertiser.id)}
              className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 p-6 cursor-pointer transition-all hover:shadow-md hover:border-gray-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 ${advertiser.color} rounded-xl flex items-center justify-center overflow-hidden`}>
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-1">{advertiser.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{advertiser.category}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                      {advertiser.campaigns} {advertiser.campaigns === 1 ? 'Campaign' : 'Campaigns'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show Campaigns */}
      {selectedAdvertiser && (
        <>
          {/* Current Advertiser Info */}
          <div className="mb-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4 inline-flex items-center gap-3">
              <div className={`w-10 h-10 ${currentAdvertiser?.color} rounded-lg flex items-center justify-center`}>
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">{currentAdvertiser?.name}</div>
                <div className="text-sm text-gray-500">{currentAdvertiser?.category}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {filteredCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                onClick={() => setSelectedCampaign(campaign.id)}
                className={`bg-white rounded-2xl shadow-sm border-2 p-6 cursor-pointer transition-all hover:shadow-md ${
                  selectedCampaign === campaign.id
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${campaign.color} rounded-xl flex items-center justify-center`}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{campaign.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{campaign.description}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          campaign.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : campaign.status === "Scheduled"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs">Posts</span>
                    </div>
                    <div className="font-semibold">{campaign.posts}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">Reach</span>
                    </div>
                    <div className="font-semibold">{campaign.reach}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs">Engagement</span>
                    </div>
                    <div className="font-semibold">{campaign.engagement}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          {selectedAdvertiser && (
            <div className="flex gap-4 items-center justify-between mt-8">
              <Button
                onClick={() => {
                  if (selectedCampaign) {
                    setSelectedCampaign(null);
                  } else {
                    setSelectedAdvertiser(null);
                  }
                }}
                variant="outline"
                size="lg"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Advertiser Campaigns
              </Button>
              {selectedCampaign && (
                <Button
                  onClick={() => navigate("/loading")}
                  size="lg"
                >
                  Next
                </Button>
              )}
            </div>
          )}
        </>
      )}

      {!selectedAdvertiser && (
        <div className="flex gap-4 mt-8">
          <Button onClick={() => navigate("/")} variant="outline" size="lg">
            Back to Social Connections
          </Button>
        </div>
      )}
    </div>
  );
}