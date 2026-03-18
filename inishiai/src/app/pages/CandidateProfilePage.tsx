import { useState, useRef } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  Brain,
  MessageCircle,
  TrendingUp,
  Target,
  Sparkles,
  Users,
  Heart,
  Calendar,
  Mail,
  Lightbulb,
  Zap,
  Shield,
  Award,
  CheckCircle2,
  BarChart3,
  Circle,
} from 'lucide-react';

export function CandidateProfilePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const duration = 45; // seconds

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const personalityTraits = [
    { trait: 'Collaborative', score: 92, color: '#E89B86' },
    { trait: 'Adaptable', score: 88, color: '#D97A63' },
    { trait: 'Strategic', score: 85, color: '#E89B86' },
    { trait: 'Detail-oriented', score: 78, color: '#D97A63' },
    { trait: 'Empathetic', score: 90, color: '#E89B86' },
  ];

  const voiceInsights = [
    {
      icon: MessageCircle,
      title: 'Clear Communicator',
      description: 'Speaks with confidence and clarity. Adjusts tone effectively based on context and audience.',
    },
    {
      icon: Users,
      title: 'Active Listener',
      description: 'Demonstrates strong listening skills with thoughtful pauses and relevant follow-up questions.',
    },
    {
      icon: Lightbulb,
      title: 'Articulate Thinker',
      description: 'Expresses complex ideas in simple terms. Uses examples and analogies to illustrate points.',
    },
    {
      icon: Zap,
      title: 'Positive Energy',
      description: 'Maintains an enthusiastic and engaging tone that motivates and inspires collaboration.',
    },
  ];

  const strengths = [
    {
      icon: Target,
      title: 'Problem-Solving',
      description: 'Approaches challenges methodically, breaking down complex problems into actionable steps.',
      examples: ['Led design system overhaul', 'Resolved cross-team workflow conflicts'],
    },
    {
      icon: Brain,
      title: 'Strategic Thinking',
      description: 'Connects short-term decisions to long-term goals. Considers multiple stakeholder perspectives.',
      examples: ['Developed 3-year product roadmap', 'Aligned design with business objectives'],
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Reads team dynamics well and adapts communication style to build strong relationships.',
      examples: ['Mentored 5 junior designers', 'Mediated team disagreements effectively'],
    },
  ];

  const roleFit = {
    overall: 94,
    breakdown: [
      { category: 'Technical Skills', score: 92, description: 'Strong proficiency in required tools and methodologies' },
      { category: 'Leadership Potential', score: 95, description: 'Natural ability to guide and inspire team members' },
      { category: 'Cultural Alignment', score: 96, description: 'Values and work style align perfectly with team culture' },
      { category: 'Communication Fit', score: 93, description: 'Communication style matches team dynamics' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/job-matches/1">
                <Button variant="ghost" className="text-gray-600">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Matches
                </Button>
              </Link>
              <div className="w-px h-6 bg-gray-200" />
              <span className="text-gray-600">Senior Product Designer</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-gray-300">
                <Heart className="w-5 h-5 mr-2" />
                Save
              </Button>
              <Button className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Interview
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Candidate Header */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-start gap-6 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzY3NzI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sarah Chen"
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-3xl text-gray-900 mb-2">Sarah Chen</h1>
                  <p className="text-lg text-gray-600 mb-4">
                    Product Design Leader with 8+ years building user-centered solutions
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">sarah.chen@email.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Score Banner */}
              <div className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/90 text-sm">AI Match Score</p>
                      <p className="text-white text-2xl">94% Excellent Fit</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/90 text-sm mb-1">Top qualities</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Leadership</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Strategic</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Collaborative</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Voice Insights */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl text-gray-900">Voice Analysis</h2>
                  <p className="text-sm text-gray-600">AI-powered insights from voice interview</p>
                </div>
              </div>

              {/* Audio Player */}
              <div className="bg-gradient-to-br from-[#FDF3F0] to-white rounded-xl p-6 mb-6 border border-[#E89B86]/20">
                <div className="flex items-center gap-4 mb-3">
                  <button
                    onClick={togglePlayPause}
                    className="w-12 h-12 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <p className="text-gray-900 mb-2">Sample Interview Response</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#E89B86] to-[#D97A63] transition-all"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 min-w-[80px] text-right">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  "Tell us about a time you led a challenging product initiative..."
                </p>
              </div>

              {/* Voice Insights Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {voiceInsights.map((insight, idx) => {
                  const Icon = insight.icon;
                  return (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-[#D97A63]" />
                        <h3 className="text-gray-900">{insight.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Communication Style */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl text-gray-900">Communication Style</h2>
                  <p className="text-sm text-gray-600">How Sarah communicates and collaborates</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-gray-900">Collaborative Facilitator</h3>
                    <span className="px-3 py-1 bg-[#FDF3F0] text-[#D97A63] rounded-full text-sm">Primary Style</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Sarah brings teams together through active listening and clear articulation of ideas. 
                    She creates inclusive environments where everyone feels heard and valued.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#E89B86] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-900">Asks clarifying questions</p>
                        <p className="text-xs text-gray-600">Ensures full understanding before moving forward</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#E89B86] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-900">Synthesizes feedback well</p>
                        <p className="text-xs text-gray-600">Combines diverse perspectives into clear direction</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#E89B86] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-900">Adapts to audience</p>
                        <p className="text-xs text-gray-600">Adjusts technical depth based on who she's talking to</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#E89B86] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-900">Provides constructive feedback</p>
                        <p className="text-xs text-gray-600">Delivers critiques with empathy and actionable suggestions</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700 mb-3">Communication preferences:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">In-person brainstorming</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">Regular check-ins</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">Written documentation</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">Visual presentations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl text-gray-900">Key Strengths</h2>
                  <p className="text-sm text-gray-600">What Sarah excels at</p>
                </div>
              </div>

              <div className="space-y-6">
                {strengths.map((strength, idx) => {
                  const Icon = strength.icon;
                  return (
                    <div key={idx} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#FDF3F0] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#D97A63]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-900 mb-2">{strength.title}</h3>
                          <p className="text-gray-600 mb-3">{strength.description}</p>
                          <div className="space-y-1.5">
                            <p className="text-xs text-gray-500">Recent examples:</p>
                            {strength.examples.map((example, exIdx) => (
                              <div key={exIdx} className="flex items-center gap-2">
                                <Circle className="w-1.5 h-1.5 fill-[#D97A63] text-[#D97A63]" />
                                <span className="text-sm text-gray-700">{example}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Role Fit Score */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg text-gray-900">Role Fit Analysis</h2>
                </div>
              </div>

              {/* Overall Score */}
              <div className="text-center mb-6 p-6 bg-gradient-to-br from-[#FDF3F0] to-white rounded-xl border border-[#E89B86]/20">
                <div className="text-5xl text-gray-900 mb-2">{roleFit.overall}%</div>
                <p className="text-gray-600">Overall Match</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Award className="w-4 h-4 text-[#D97A63]" />
                  <span className="text-sm text-[#D97A63]">Excellent Fit</span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                {roleFit.breakdown.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-900">{item.category}</span>
                      <span className="text-sm text-gray-900">{item.score}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-[#E89B86] to-[#D97A63]"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personality Traits */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg text-gray-900">Personality Traits</h2>
                </div>
              </div>

              <div className="space-y-4">
                {personalityTraits.map((trait, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-900">{trait.trait}</span>
                      <span className="text-sm text-gray-600">{trait.score}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all"
                        style={{
                          width: `${trait.score}%`,
                          background: `linear-gradient(to right, ${trait.color}, ${trait.color}dd)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#D97A63] mt-0.5" />
                  <p className="text-xs text-gray-600">
                    Personality insights derived from voice patterns, word choice, and response patterns during interviews
                  </p>
                </div>
              </div>
            </div>

            {/* Why Perfect Fit */}
            <div className="bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5" />
                <h3 className="text-lg">Why Sarah is Perfect for This Role</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Leadership style matches your team's collaborative culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Communication approach aligns with remote-first environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Strategic mindset fits the senior-level responsibilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Mentorship experience addresses team growth needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden audio element for demo purposes */}
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      >
        {/* In a real app, this would be the actual audio file */}
      </audio>
    </div>
  );
}
