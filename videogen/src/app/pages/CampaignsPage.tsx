import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Video } from "lucide-react";

// Mock campaign data
const campaigns = [
  {
    id: "1",
    pid: "1",
    status: "Not Joined",
    brand: "BINKI",
    brandSubtitle: "BIZKI.STORE",
    title: "[TW] Herbal Rabbit Natural Cream/ ハーバルラビットナチュラルゲルクリーム",
    category: "Other",
    commission: "$8.00",
    conversionPoint: "New Purchase",
    clientName: "株式会社ビズキ",
    promotionPeriod: "2020-03-12 00:00:00〜",
    serviceableCountry: "Taiwan",
    termsOfCooperation: ["PPC", "Cashback/Reward/Loyalty", "Auto partnership"],
    explanation: {
      listingSubmission: "Partial Approval",
      prohibited: "Trademarks, Company Names, Product Names, Brand Names, etc. (Including variations and misspellings)",
      excludedCategories: "Sites Contrary to Public Order and Morality, Adult Content, Gambling",
      specialRewards: "Available",
      rejectionCriteria: "False Information, Duplicates, Incomplete Applications, Returns, Cancellations, Unpaid Orders, Refusal of Delivery, Non-Receipt of Order Confirmation Emails, Resale on Auctions, Purchases Using False Names, Purchases by Existing Customers, Purchases of Non-Eligible Products, Absence of Product Introduction on the Website, Non-Final Order Times in Cases of Overlapping Results with Other Affiliate Service Providers"
    }
  }
];

export default function CampaignsPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search campaigns..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="mb-4 overflow-hidden">
            <div className="bg-white border-b border-gray-200">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4 flex-1">
                  <input type="checkbox" className="w-4 h-4" />
                  
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="font-bold text-2xl">{campaign.brand}</div>
                      <div className="text-xs text-gray-500">{campaign.brandSubtitle}</div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="bg-gray-600 text-white">
                          {campaign.status}
                        </Badge>
                        <span className="text-sm font-semibold">PID: {campaign.pid}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{campaign.title}</h3>
                      <p className="text-sm text-gray-500">Category: {campaign.category}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm text-gray-600">Commission:</div>
                    <div className="text-lg font-semibold text-green-600">{campaign.commission}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Conversion Point:</div>
                    <div className="text-sm font-medium">{campaign.conversionPoint}</div>
                  </div>

                  <Button className="bg-green-600 hover:bg-green-700">
                    Apply to Program
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex gap-2 mb-6 border-b border-gray-200">
                <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-400">
                  Program Overview
                </button>
                <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-600">
                  Commission details
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Client Name:</div>
                    <div className="text-sm">{campaign.clientName}</div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      Website <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      View Advertising Manuscript
                    </Button>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Promotion Period:</div>
                    <div className="text-sm">{campaign.promotionPeriod}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Serviceable Country(s):</div>
                    <div className="text-sm bg-gray-50 p-3 rounded border border-gray-200">
                      {campaign.serviceableCountry}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">Terms of Cooperation:</div>
                    <div className="space-y-1">
                      {campaign.termsOfCooperation.map((term, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-4 h-4 rounded-full border-2 border-gray-400"></span>
                          {term}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Explanation:</div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <strong>[Listing Submission]</strong> {campaign.explanation.listingSubmission}
                      <br />
                      Prohibited: {campaign.explanation.prohibited}
                    </div>

                    <div>
                      <strong>[Excluded Categories]</strong> {campaign.explanation.excludedCategories}
                    </div>

                    <div>
                      <strong>Special Rewards for Excellent Partners:</strong> {campaign.explanation.specialRewards}
                    </div>

                    <div>
                      <strong>[Rejection Criteria]</strong>
                      <br />
                      {campaign.explanation.rejectionCriteria}
                    </div>
                  </div>
                </div>
              </div>

              {/* TikTok Video Generation Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button 
                  onClick={() => navigate(`/generate-video/${campaign.id}`)}
                  className="bg-black hover:bg-gray-800 text-white gap-2"
                >
                  <Video className="w-5 h-5" />
                  Generate TikTok Video
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
