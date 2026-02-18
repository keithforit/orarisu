import { Link2, FileText, Target, Sparkles, Image, Copy, Share2, BarChart3, Trash2, Plus, Save } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { RichTextEditor } from './RichTextEditor';
import { Progress } from './ui/progress';

// Mock data
const advertisers = [
  { id: '1', name: 'TechStore', logo: 'T' },
  { id: '2', name: 'Fashion Hub', logo: 'F' },
  { id: '3', name: 'Home & Garden Co', logo: 'H' },
  { id: '4', name: 'Sports Unlimited', logo: 'S' },
];

const campaigns = {
  '1': [
    { id: '1-1', name: 'Premium Wireless Headphones', commission: '$12.50' },
    { id: '1-2', name: 'Smart Watch Series 5', commission: '$18.00' },
    { id: '1-3', name: 'Laptop Backpack Pro', commission: '$8.50' },
  ],
  '2': [
    { id: '2-1', name: 'Summer Collection 2026', commission: '$15.00' },
    { id: '2-2', name: 'Designer Handbags', commission: '$25.00' },
  ],
  '3': [
    { id: '3-1', name: 'Garden Tools Set', commission: '$10.00' },
    { id: '3-2', name: 'Modern Furniture Line', commission: '$35.00' },
  ],
  '4': [
    { id: '4-1', name: 'Running Shoes Collection', commission: '$12.00' },
    { id: '4-2', name: 'Fitness Equipment Bundle', commission: '$22.00' },
  ],
};

export function SmartArticleCreator() {
  const [activeTab, setActiveTab] = useState('url');
  const [url, setUrl] = useState('');
  const [articleText, setArticleText] = useState('');
  const [selectedAdvertiser, setSelectedAdvertiser] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [toneOfVoice, setToneOfVoice] = useState('professional');
  const [showVersions, setShowVersions] = useState(false);
  const [versions, setVersions] = useState<string[]>([]);
  const [currentVersion, setCurrentVersion] = useState(0);

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate content generation
    setTimeout(() => {
      if (activeTab === 'url' && url) {
        setGeneratedContent(`# Article Generated from URL

Your content has been successfully generated from: ${url}

## Introduction
This compelling article captures the essence of the source material while optimizing it for your blog audience. The content has been enhanced with SEO-friendly keywords and engaging storytelling elements.

## Key Points
- Professionally crafted content that resonates with readers
- SEO-optimized for maximum visibility
- Ready to publish with minimal editing required

## Conclusion
This article is ready to be published on your blog platform. You can further customize the content to match your brand voice and editorial guidelines.`);
      } else if (activeTab === 'text' && articleText) {
        setGeneratedContent(`# Enhanced Article Content

Your original content has been refined and optimized for blog publication.

${articleText}

---

## Additional Enhancements
- Improved readability and structure
- SEO optimization applied
- Engaging headlines and subheadings added`);
      } else if (activeTab === 'campaign' && selectedAdvertiser && selectedCampaign) {
        const advertiser = advertisers.find(a => a.id === selectedAdvertiser);
        const campaignList = campaigns[selectedAdvertiser as keyof typeof campaigns] || [];
        const campaign = campaignList.find(c => c.id === selectedCampaign);
        
        setGeneratedContent(`# ${campaign?.name} - Product Review & Guide

## Exclusive Partnership with ${advertiser?.name}

Discover the amazing features and benefits of ${campaign?.name}. This comprehensive guide will help your readers make informed decisions.

### Why We Recommend This Product
Our partnership with ${advertiser?.name} allows us to offer exclusive insights into ${campaign?.name}. With a commission of ${campaign?.commission} per conversion, this campaign represents excellent value for publishers.

### Key Features
- Premium quality and reliability
- Competitive pricing and special offers
- Excellent customer satisfaction ratings
- Fast shipping and responsive customer service

### Who Should Buy This?
This product is perfect for readers looking for quality, performance, and value. Whether you're a first-time buyer or upgrading from a previous model, ${campaign?.name} delivers exceptional results.

### Final Verdict
We highly recommend ${campaign?.name} from ${advertiser?.name}. Click the link below to learn more and take advantage of exclusive offers.

*Disclosure: This article contains affiliate links. We may earn a commission when you make a purchase through our links, at no additional cost to you.*`);
      }
      
      setIsGenerating(false);
    }, 2000);
  };

  const availableCampaigns = selectedAdvertiser 
    ? campaigns[selectedAdvertiser as keyof typeof campaigns] || []
    : [];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Smart Article Creator</h1>
        <p className="text-gray-600">
          Create engaging content from URLs, your own text, or advertiser campaigns
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Section - Only show when no content is generated */}
        {!generatedContent && (
          <div>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Create Content</CardTitle>
                <CardDescription>
                  Choose your preferred method to generate article content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="url" className="flex items-center gap-2">
                      <Link2 size={16} />
                      <span className="hidden sm:inline">URL</span>
                    </TabsTrigger>
                    <TabsTrigger value="text" className="flex items-center gap-2">
                      <FileText size={16} />
                      <span className="hidden sm:inline">Text</span>
                    </TabsTrigger>
                    <TabsTrigger value="campaign" className="flex items-center gap-2">
                      <Target size={16} />
                      <span className="hidden sm:inline">Campaign</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="url" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="url">Article URL</Label>
                      <Input
                        id="url"
                        type="url"
                        placeholder="https://example.com/article"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="bg-[#f3f3f5] border-gray-300"
                      />
                      <p className="text-sm text-gray-500">
                        Paste a URL to generate content from an existing article
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="text" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="article-text">Article Content</Label>
                      <Textarea
                        id="article-text"
                        placeholder="Paste or write your article content here... 

You can include:
• Headlines and subheadings
• Body paragraphs
• Lists and key points
• Any formatting you'd like to preserve"
                        value={articleText}
                        onChange={(e) => setArticleText(e.target.value)}
                        className="min-h-[300px] bg-[#f3f3f5] border-gray-300 font-normal"
                      />
                      <p className="text-sm text-gray-500">
                        Paste your text content or write directly in the editor
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="campaign" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="advertiser">Choose an Advertiser</Label>
                        <Select 
                          value={selectedAdvertiser} 
                          onValueChange={(value) => {
                            setSelectedAdvertiser(value);
                            setSelectedCampaign('');
                          }}
                        >
                          <SelectTrigger 
                            id="advertiser"
                            className="bg-[#f3f3f5] border-gray-300"
                          >
                            <SelectValue placeholder="Select an advertiser..." />
                          </SelectTrigger>
                          <SelectContent>
                            {advertisers.map((advertiser) => (
                              <SelectItem key={advertiser.id} value={advertiser.id}>
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded bg-black text-white flex items-center justify-center text-xs">
                                    {advertiser.logo}
                                  </div>
                                  {advertiser.name}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedAdvertiser && (
                        <div className="space-y-2">
                          <Label htmlFor="campaign">Choose a Campaign</Label>
                          <Select 
                            value={selectedCampaign} 
                            onValueChange={setSelectedCampaign}
                          >
                            <SelectTrigger 
                              id="campaign"
                              className="bg-[#f3f3f5] border-gray-300"
                            >
                              <SelectValue placeholder="Select a campaign..." />
                            </SelectTrigger>
                            <SelectContent>
                              {availableCampaigns.map((campaign) => (
                                <SelectItem key={campaign.id} value={campaign.id}>
                                  <div className="flex flex-col">
                                    <span>{campaign.name}</span>
                                    <span className="text-xs text-green-600">
                                      Commission: {campaign.commission}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {selectedAdvertiser && selectedCampaign && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-blue-900">
                            <strong>Campaign Selected:</strong> Content will be generated for{' '}
                            {availableCampaigns.find(c => c.id === selectedCampaign)?.name}
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  {/* Tone of Voice Selection */}
                  <div className="mt-6 space-y-2">
                    <Label htmlFor="tone">Tone of Voice</Label>
                    <Select value={toneOfVoice} onValueChange={setToneOfVoice}>
                      <SelectTrigger id="tone" className="bg-[#f3f3f5] border-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </Tabs>

                <Button
                  onClick={handleGenerate}
                  disabled={
                    isGenerating ||
                    (activeTab === 'url' && !url) ||
                    (activeTab === 'text' && !articleText) ||
                    (activeTab === 'campaign' && (!selectedAdvertiser || !selectedCampaign))
                  }
                  className="w-full mt-6 bg-black hover:bg-gray-800"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} className="mr-2" />
                      Generate Article
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Preview Section - Only show when content is generated */}
        {generatedContent && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Content Editor */}
            <div className="lg:col-span-2 space-y-4">
              {/* Title Input */}
              <div className="space-y-2">
                <Label htmlFor="article-title">Article Title</Label>
                <Input
                  id="article-title"
                  type="text"
                  placeholder="Enter your article title..."
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  className="bg-white border-gray-300 text-xl"
                />
              </div>

              {/* WYSIWYG Content Editor */}
              <Card className="border-gray-200">
                <CardContent className="space-y-4 pt-6 pb-4">
                  {/* Tone of Voice Selection with Regenerate Button */}
                  <div className="flex gap-4 items-end">
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="tone-generated">Article tone of voice</Label>
                      <Select value={toneOfVoice} onValueChange={setToneOfVoice}>
                        <SelectTrigger id="tone-generated" className="bg-white border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* AI Regeneration Button */}
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsGenerating(true);
                        // Simulate AI regeneration
                        setTimeout(() => {
                          const newVersion = generatedContent + `\n\n### Additional AI-Generated Section\n\nThis content has been enhanced with AI to provide more depth and engagement for your readers.`;
                          setGeneratedContent(newVersion);
                          setIsGenerating(false);
                        }, 1500);
                      }}
                      disabled={isGenerating}
                      className="mb-0.5"
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-3 h-3 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mr-2" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles size={16} className="mr-2" />
                          Regenerate with AI
                        </>
                      )}
                    </Button>
                  </div>

                  {/* WYSIWYG Editor with grey background */}
                  <div className="bg-[#f3f3f5] p-4 rounded-lg">
                    <RichTextEditor
                      value={generatedContent}
                      onChange={setGeneratedContent}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Options and Share */}
            <div className="space-y-4">
              {/* Action Buttons */}
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 shrink-0"
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this article?')) {
                      setGeneratedContent('');
                      setArticleTitle('');
                      setUrl('');
                      setArticleText('');
                      setSelectedAdvertiser('');
                      setSelectedCampaign('');
                    }
                  }}
                >
                  <Trash2 size={18} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 shrink-0"
                  onClick={() => {
                    alert('Article saved successfully!');
                  }}
                >
                  <Save size={18} />
                </Button>
                <Button
                  size="icon"
                  className="h-11 w-11 shrink-0 bg-[#1e293b] hover:bg-[#334155]"
                  onClick={() => {
                    alert('Article published!');
                  }}
                >
                  <Plus size={18} />
                </Button>
              </div>
              
              {/* SEO Score Section */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 size={20} />
                    SEO Score
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Overall Score</span>
                      <span className="text-lg font-bold text-green-600">78/100</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Title Tag</span>
                      <span className="text-green-600">✓ Good</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Meta Description</span>
                      <span className="text-yellow-600">⚠ Needs Work</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Keywords</span>
                      <span className="text-green-600">✓ Good</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Readability</span>
                      <span className="text-green-600">✓ Good</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full text-sm">
                    View Detailed Report
                  </Button>
                </CardContent>
              </Card>

              {/* Share Content Section */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 size={20} />
                    Share Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Label className="text-sm mb-3 block">Share to</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="h-16 flex flex-col items-center justify-center gap-1"
                      onClick={() => {
                        // Share to WordPress logic
                      }}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
                      </svg>
                      <span className="text-xs">WordPress</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-16 flex flex-col items-center justify-center gap-1"
                      onClick={() => {
                        // Share to Medium logic
                      }}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                      </svg>
                      <span className="text-xs">Medium</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-16 flex flex-col items-center justify-center gap-1"
                      onClick={() => {
                        // Share to LinkedIn logic
                      }}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="text-xs">LinkedIn</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-16 flex flex-col items-center justify-center gap-1"
                      onClick={() => {
                        // Share to Twitter/X logic
                      }}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <span className="text-xs">X / Twitter</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-16 flex flex-col items-center justify-center gap-1"
                      onClick={() => {
                        // Share to Blogger logic
                      }}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.975 0-2.776-2.25-5.026-5.024-5.026zm3 10.05H9c-.525 0-.975-.45-.975-.975s.45-.975.975-.975h6c.525 0 .975.45.975.975s-.45.975-.975.975zM9 7.95h1.5c.525 0 .975.45.975.975s-.45.975-.975.975H9c-.525 0-.975-.45-.975-.975S8.475 7.95 9 7.95z"/>
                      </svg>
                      <span className="text-xs">Blogger</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-16 flex flex-col items-center justify-center gap-1"
                      onClick={() => {
                        // Share to Substack logic
                      }}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                      </svg>
                      <span className="text-xs">Substack</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}