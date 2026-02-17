import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Search, ExternalLink, Wand2 } from "lucide-react";
import { campaigns } from "../data/campaigns";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

export function ProgramPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "commission">("commission");

  // If no ID is provided, show the first campaign or the list
  const selectedCampaign = id 
    ? campaigns.find(c => c.id === id) 
    : campaigns[0];

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    campaign.storeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!selectedCampaign) {
    return (
      <div className="p-8">
        <div className="text-center py-12">
          <p className="text-gray-500">Campaign not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-[550px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 rounded-full border-gray-300"
          />
        </div>
      </div>

      {/* Campaign Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-start gap-6">
          {/* Store Logo */}
          <div className="w-16 h-16 bg-black rounded flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">{selectedCampaign.storeName}</span>
          </div>

          {/* Campaign Details */}
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">
                {selectedCampaign.status}
              </span>
              <span className="text-gray-600 text-sm">PID: {selectedCampaign.pid}</span>
            </div>

            <div className="mb-1">
              <span className="text-sm text-gray-600">{selectedCampaign.storeUrl}</span>
            </div>

            <h2 className="text-xl font-semibold mb-2">{selectedCampaign.productName}</h2>

            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-gray-600">Commission: </span>
                <span className="text-green-600 font-semibold text-lg">
                  ${selectedCampaign.commission.toFixed(2)}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Conversion Point: </span>
                <span className="text-gray-900">{selectedCampaign.conversionPoint}</span>
              </div>
            </div>

            <div className="mt-2 text-sm text-gray-600">
              Category: {selectedCampaign.category}
            </div>
          </div>

          {/* Apply Button */}
          <Button className="bg-green-600 hover:bg-green-700 px-6 h-10">
            Apply to Program
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <div className="flex gap-8 px-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-1 border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Program Overview
            </button>
            <button
              onClick={() => setActiveTab("commission")}
              className={`py-4 px-1 border-b-2 transition-colors ${
                activeTab === "commission"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Commission details
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "commission" && (
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Client Name:</h3>
                  <p className="text-gray-900">{selectedCampaign.clientName}</p>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2">
                    Website <ExternalLink size={16} />
                  </Button>
                  <Button variant="outline">
                    View Advertising Manuscript
                  </Button>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Promotion Period:</h3>
                  <p className="text-gray-900">{selectedCampaign.promotionPeriod}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Serviceable Country(s):</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    {selectedCampaign.serviceableCountries.map((country, index) => (
                      <div key={index} className="text-gray-900">{country}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Terms of Cooperation:</h3>
                  <RadioGroup defaultValue={selectedCampaign.termsOfCooperation[0]}>
                    {selectedCampaign.termsOfCooperation.map((term, index) => (
                      <div key={index} className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value={term} id={`term-${index}`} />
                        <Label htmlFor={`term-${index}`} className="text-gray-900 cursor-pointer">
                          {term}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Explanation:</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-900">
                        <span className="font-semibold">[Listing Submission]</span>{" "}
                        {selectedCampaign.explanation.listingSubmission}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-900">
                        <span className="font-semibold">[Excluded Categories]</span>{" "}
                        {selectedCampaign.explanation.excludedCategories}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-900">
                        <span className="font-semibold">Special Rewards for Excellent Partners:</span>{" "}
                        {selectedCampaign.explanation.specialRewards}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-900">
                        <span className="font-semibold">[Rejection Criteria]</span>
                        <br />
                        {selectedCampaign.explanation.rejectionCriteria}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "overview" && (
            <div className="py-8 text-center text-gray-500">
              <p>Program overview content goes here</p>
            </div>
          )}
        </div>

        {/* Generate TikTok Video Button */}
        <div className="px-6 pb-6">
          <Button className="bg-black hover:bg-gray-800 text-white gap-2 px-6">
            <Wand2 size={20} />
            Create Creatives
          </Button>
        </div>
      </div>
    </div>
  );
}