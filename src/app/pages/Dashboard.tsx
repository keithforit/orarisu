import { 
  LayoutDashboard, 
  Video, 
  Target, 
  DollarSign, 
  Globe, 
  TrendingUp,
  Sparkles,
  Search,
  Bell,
  User,
  LogOut
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for charts
const chatGPTData = [
  { time: '00:00', mentions: 12 },
  { time: '04:00', mentions: 8 },
  { time: '08:00', mentions: 24 },
  { time: '12:00', mentions: 31 },
  { time: '16:00', mentions: 28 },
  { time: '20:00', mentions: 19 },
];

const geminiData = [
  { time: '00:00', mentions: 9 },
  { time: '04:00', mentions: 6 },
  { time: '08:00', mentions: 18 },
  { time: '12:00', mentions: 24 },
  { time: '16:00', mentions: 21 },
  { time: '20:00', mentions: 15 },
];

const perplexityData = [
  { time: '00:00', mentions: 15 },
  { time: '04:00', mentions: 11 },
  { time: '08:00', mentions: 29 },
  { time: '12:00', mentions: 37 },
  { time: '16:00', mentions: 32 },
  { time: '20:00', mentions: 22 },
];

// Sentiment heatmap regions
const sentimentRegions = [
  { name: 'North America', value: 85, x: 20, y: 25 },
  { name: 'Europe', value: 78, x: 50, y: 22 },
  { name: 'Asia', value: 92, x: 75, y: 35 },
  { name: 'South America', value: 68, x: 28, y: 65 },
  { name: 'Africa', value: 71, x: 52, y: 58 },
  { name: 'Oceania', value: 81, x: 82, y: 72 },
];

export function Dashboard() {
  const [activeNav, setActiveNav] = useState('Aura Insights');
  const [productUrl, setProductUrl] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleGenerateVideo = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock video generation
    alert('Video generation started! You will be notified when ready.');
    setProductUrl('');
  };

  const navItems = [
    { name: 'Aura Insights', icon: LayoutDashboard },
    { name: 'Content Studio', icon: Video },
    { name: 'Campaigns', icon: Target },
    { name: 'ROI', icon: DollarSign },
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Sidebar */}
      <aside 
        className="w-20 flex flex-col items-center py-8 gap-8 fixed left-0 top-0 bottom-0 z-50"
        style={{ backgroundColor: '#0D1117' }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6F42C1] to-[#007BFF] flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </Link>

        {/* Navigation Icons */}
        <nav className="flex-1 flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className="group relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ 
                  backgroundColor: isActive ? '#6F42C1' : 'transparent',
                }}
              >
                <Icon 
                  className="w-6 h-6 transition-colors" 
                  style={{ color: isActive ? '#FFFFFF' : '#FFFFFF80' }}
                />
                
                {/* Tooltip */}
                <div 
                  className="absolute left-full ml-4 px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ backgroundColor: '#0D1117EE', color: '#FFFFFF' }}
                >
                  {item.name}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-all hover:bg-[#FC0061]"
        >
          <LogOut className="w-6 h-6" style={{ color: '#FFFFFF80' }} />
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-20">
        {/* Top Header */}
        <header 
          className="h-24 border-b flex items-center justify-between px-8 sticky top-0 z-40"
          style={{ backgroundColor: '#FFFFFF', borderColor: '#F8F9FC' }}
        >
          {/* Search */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#0D111760' }} />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-all"
                style={{ 
                  borderColor: '#F8F9FC',
                  backgroundColor: '#F8F9FC',
                }}
              />
            </div>
          </div>

          {/* Header Right: Aura Score, AI Mentions, Notifications, Profile */}
          <div className="flex items-center gap-6">
            {/* Global Aura Score */}
            <div className="flex items-center gap-4 px-6 py-3 rounded-xl border-2" style={{ borderColor: '#6F42C120', backgroundColor: '#6F42C110' }}>
              <div className="relative w-12 h-12">
                <svg className="w-12 h-12 -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#6F42C120"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#6F42C1"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 20 * 0.87} ${2 * Math.PI * 20}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs" style={{ color: '#6F42C1' }}>
                  87
                </div>
              </div>
              <div>
                <div className="text-sm font-medium" style={{ color: '#0D1117' }}>Aura Score</div>
                <div className="text-xs" style={{ color: '#0D117160' }}>+3.2% today</div>
              </div>
            </div>

            {/* AI Mentions */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl border-2" style={{ borderColor: '#007BFF20', backgroundColor: '#007BFF10' }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: '#007BFF' }}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-semibold" style={{ color: '#0D1117' }}>1,247</div>
                <div className="text-xs" style={{ color: '#0D117160' }}>AI Mentions</div>
              </div>
            </div>

            {/* Notifications */}
            <button className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:bg-[#F8F9FC]">
              <Bell className="w-5 h-5" style={{ color: '#0D1117' }} />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ backgroundColor: '#FC0061' }} />
            </button>

            {/* Profile */}
            <button className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all hover:bg-[#F8F9FC]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6F42C1] to-[#007BFF] flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium" style={{ color: '#0D1117' }}>Brand Manager</div>
                <div className="text-xs" style={{ color: '#0D117160' }}>Orarisu Inc.</div>
              </div>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 space-y-8">
          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl mb-2" style={{ color: '#0D1117' }}>
              Good morning, Brand Manager
            </h1>
            <p className="text-lg" style={{ color: '#0D117160' }}>
              Here's what's happening with your brand today
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column: Sentiment Heatmap (2 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-2 bg-white rounded-3xl border-2 p-8"
              style={{ borderColor: '#F8F9FC' }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl mb-1" style={{ color: '#0D1117' }}>
                    Global Sentiment Heatmap
                  </h2>
                  <p className="text-sm" style={{ color: '#0D117160' }}>
                    Real-time brand perception across regions
                  </p>
                </div>
                <Globe className="w-6 h-6" style={{ color: '#00CCCC' }} />
              </div>

              {/* Heatmap Visualization */}
              <div className="relative h-96 rounded-2xl border-2 overflow-hidden" style={{ borderColor: '#F8F9FC', backgroundColor: '#F8F9FC' }}>
                {/* World map placeholder with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FC0061]/5 via-[#6F42C1]/5 to-[#00CCCC]/5" />
                
                {/* Sentiment bubbles */}
                {sentimentRegions.map((region, index) => {
                  const sentiment = region.value;
                  const color = sentiment >= 80 
                    ? '#00CCCC' 
                    : sentiment >= 70 
                    ? '#007BFF' 
                    : '#FC0061';
                  
                  return (
                    <motion.div
                      key={region.name}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="absolute"
                      style={{
                        left: `${region.x}%`,
                        top: `${region.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div 
                        className="relative group cursor-pointer"
                        style={{
                          width: `${sentiment}px`,
                          height: `${sentiment}px`,
                        }}
                      >
                        {/* Pulse effect */}
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 0, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        
                        {/* Main bubble */}
                        <div 
                          className="absolute inset-0 rounded-full backdrop-blur-sm border-2 flex items-center justify-center"
                          style={{ 
                            backgroundColor: `${color}40`,
                            borderColor: color,
                          }}
                        >
                          <span className="text-xs font-semibold text-white">
                            {sentiment}
                          </span>
                        </div>

                        {/* Tooltip */}
                        <div 
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                          style={{ backgroundColor: '#0D1117EE', color: '#FFFFFF' }}
                        >
                          {region.name}: {sentiment}% positive
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 px-4 py-2 rounded-xl backdrop-blur-xl" style={{ backgroundColor: '#FFFFFFCC' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FC0061' }} />
                    <span className="text-xs" style={{ color: '#0D1117' }}>Low</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#007BFF' }} />
                    <span className="text-xs" style={{ color: '#0D1117' }}>Medium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00CCCC' }} />
                    <span className="text-xs" style={{ color: '#0D1117' }}>High</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Quick-Create */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl border-2 p-8"
              style={{ borderColor: '#F8F9FC' }}
            >
              <div className="mb-6">
                <h2 className="text-2xl mb-1" style={{ color: '#0D1117' }}>
                  Quick Create
                </h2>
                <p className="text-sm" style={{ color: '#0D117160' }}>
                  Generate AI-optimized content instantly
                </p>
              </div>

              <form onSubmit={handleGenerateVideo} className="space-y-6">
                {/* Product URL Input */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#0D1117' }}>
                    Product URL
                  </label>
                  <input
                    type="url"
                    value={productUrl}
                    onChange={(e) => setProductUrl(e.target.value)}
                    placeholder="https://yourproduct.com/product"
                    className="w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-all text-sm"
                    style={{ 
                      borderColor: productUrl ? '#007BFF' : '#F8F9FC',
                      backgroundColor: '#F8F9FC',
                    }}
                    required
                  />
                </div>

                {/* Generate Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  style={{ backgroundColor: '#007BFF' }}
                >
                  <Video className="w-5 h-5" />
                  Generate Video
                </button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t" style={{ borderColor: '#F8F9FC' }} />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white" style={{ color: '#0D117160' }}>
                      OR
                    </span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <button
                    type="button"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm transition-all hover:bg-[#F8F9FC]"
                    style={{ borderColor: '#F8F9FC', color: '#0D1117' }}
                  >
                    📝 Create Blog Post
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm transition-all hover:bg-[#F8F9FC]"
                    style={{ borderColor: '#F8F9FC', color: '#0D1117' }}
                  >
                    🎯 Launch Campaign
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm transition-all hover:bg-[#F8F9FC]"
                    style={{ borderColor: '#F8F9FC', color: '#0D1117' }}
                  >
                    📊 Generate Report
                  </button>
                </div>
              </form>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: '#F8F9FC' }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#0D1117' }}>
                      24
                    </div>
                    <div className="text-xs" style={{ color: '#0D117160' }}>
                      Videos created
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#0D1117' }}>
                      89%
                    </div>
                    <div className="text-xs" style={{ color: '#0D117160' }}>
                      Success rate
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Real-time Frequency Charts */}
          <div className="grid grid-cols-3 gap-8">
            {/* ChatGPT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl border-2 p-6"
              style={{ borderColor: '#F8F9FC' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg mb-1" style={{ color: '#0D1117' }}>
                    ChatGPT
                  </h3>
                  <p className="text-2xl font-semibold" style={{ color: '#6F42C1' }}>
                    142
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg" style={{ backgroundColor: '#6F42C110' }}>
                  <TrendingUp className="w-4 h-4" style={{ color: '#6F42C1' }} />
                  <span className="text-sm font-medium" style={{ color: '#6F42C1' }}>
                    +12%
                  </span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={chatGPTData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F8F9FC" />
                  <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#0D117160' }} />
                  <YAxis tick={{ fontSize: 10, fill: '#0D117160' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      border: '2px solid #F8F9FC', 
                      borderRadius: '12px' 
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mentions" 
                    stroke="#6F42C1" 
                    strokeWidth={2}
                    dot={{ fill: '#6F42C1', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Gemini */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl border-2 p-6"
              style={{ borderColor: '#F8F9FC' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg mb-1" style={{ color: '#0D1117' }}>
                    Gemini
                  </h3>
                  <p className="text-2xl font-semibold" style={{ color: '#007BFF' }}>
                    93
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg" style={{ backgroundColor: '#007BFF10' }}>
                  <TrendingUp className="w-4 h-4" style={{ color: '#007BFF' }} />
                  <span className="text-sm font-medium" style={{ color: '#007BFF' }}>
                    +8%
                  </span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={geminiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F8F9FC" />
                  <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#0D117160' }} />
                  <YAxis tick={{ fontSize: 10, fill: '#0D117160' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      border: '2px solid #F8F9FC', 
                      borderRadius: '12px' 
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mentions" 
                    stroke="#007BFF" 
                    strokeWidth={2}
                    dot={{ fill: '#007BFF', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Perplexity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-3xl border-2 p-6"
              style={{ borderColor: '#F8F9FC' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg mb-1" style={{ color: '#0D1117' }}>
                    Perplexity
                  </h3>
                  <p className="text-2xl font-semibold" style={{ color: '#00CCCC' }}>
                    165
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg" style={{ backgroundColor: '#00CCCC10' }}>
                  <TrendingUp className="w-4 h-4" style={{ color: '#00CCCC' }} />
                  <span className="text-sm font-medium" style={{ color: '#00CCCC' }}>
                    +15%
                  </span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={perplexityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F8F9FC" />
                  <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#0D117160' }} />
                  <YAxis tick={{ fontSize: 10, fill: '#0D117160' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      border: '2px solid #F8F9FC', 
                      borderRadius: '12px' 
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mentions" 
                    stroke="#00CCCC" 
                    strokeWidth={2}
                    dot={{ fill: '#00CCCC', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
