import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  ArrowLeft,
  Sparkles,
  MessageCircle,
  Brain,
  CheckCircle2,
  Star,
  TrendingUp,
  Users,
  Calendar,
  Filter,
  ChevronRight,
  Lightbulb,
  Heart,
  Zap,
  Target
} from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  image: string;
  matchScore: number;
  keyStrengths: string[];
  communicationStyle: {
    label: string;
    description: string;
    icon: any;
  };
  whyGoodFit: string;
  insights: {
    personality: string;
    workStyle: string;
  };
  status: 'new' | 'reviewed' | 'contacted';
}

export function JobMatchesPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [filter, setFilter] = useState<'all' | 'top' | 'new'>('all');

  const candidates: Candidate[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzY3NzI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      matchScore: 94,
      keyStrengths: ['Strategic thinking', 'Cross-functional leadership', 'Data-driven decisions'],
      communicationStyle: {
        label: 'Collaborative Facilitator',
        description: 'Brings teams together through active listening and clear articulation',
        icon: Users,
      },
      whyGoodFit: 'Sarah\'s experience leading product initiatives at scale aligns perfectly with your need for strategic leadership. Her collaborative approach and data-driven mindset match the team culture you described.',
      insights: {
        personality: 'Natural leader who thrives in ambiguous environments. Demonstrates high emotional intelligence and empathy.',
        workStyle: 'Prefers structured frameworks but adapts quickly. Values regular feedback loops and transparent communication.',
      },
      status: 'new',
    },
    {
      id: '2',
      name: 'Marcus Johnson',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzM3Mjc2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      matchScore: 91,
      keyStrengths: ['User-centric design', 'Stakeholder management', 'Rapid prototyping'],
      communicationStyle: {
        label: 'Direct Problem-Solver',
        description: 'Gets to the heart of issues quickly with clarity and precision',
        icon: Target,
      },
      whyGoodFit: 'Marcus excels at translating complex user needs into actionable product features. His direct communication style and focus on outcomes make him ideal for fast-paced environments.',
      insights: {
        personality: 'Results-oriented with strong analytical skills. Shows patience when explaining technical concepts to non-technical stakeholders.',
        workStyle: 'Thrives with autonomy but values periodic check-ins. Prefers asynchronous communication for deep work.',
      },
      status: 'reviewed',
    },
    {
      id: '3',
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1678542230173-8e2c3eb87c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzY2ODYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      matchScore: 89,
      keyStrengths: ['Technical expertise', 'Process optimization', 'Mentorship'],
      communicationStyle: {
        label: 'Thoughtful Educator',
        description: 'Shares knowledge generously and builds understanding through examples',
        icon: Lightbulb,
      },
      whyGoodFit: 'Priya brings deep technical knowledge combined with exceptional teaching ability. Her passion for mentoring junior team members addresses your need for someone who can help grow the team.',
      insights: {
        personality: 'Methodical and detail-oriented with a growth mindset. Shows strong commitment to continuous learning and teaching.',
        workStyle: 'Values documentation and clear processes. Enjoys pair programming and knowledge-sharing sessions.',
      },
      status: 'new',
    },
    {
      id: '4',
      name: 'Alex Rivera',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzY3NzI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      matchScore: 87,
      keyStrengths: ['Creative innovation', 'Customer empathy', 'Agile methodology'],
      communicationStyle: {
        label: 'Energetic Motivator',
        description: 'Inspires teams with enthusiasm and positive energy',
        icon: Zap,
      },
      whyGoodFit: 'Alex\'s creative approach to problem-solving and ability to energize teams makes them a great cultural fit. Their customer-first mindset aligns with your product philosophy.',
      insights: {
        personality: 'Highly adaptable and optimistic. Demonstrates resilience in challenging situations and maintains team morale.',
        workStyle: 'Prefers collaborative brainstorming and iterative development. Works best with regular team interactions.',
      },
      status: 'new',
    },
  ];

  const filteredCandidates = candidates.filter(c => {
    if (filter === 'top') return c.matchScore >= 90;
    if (filter === 'new') return c.status === 'new';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" className="text-gray-600">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="w-px h-6 bg-gray-200" />
              <div>
                <h1 className="text-2xl text-gray-900">Senior Product Designer</h1>
                <p className="text-gray-600">AI-matched candidates ready for review</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-gray-300">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </Button>
              <Button className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90">
                Export List
              </Button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === 'all'
                  ? 'bg-[#E89B86] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Matches ({candidates.length})
            </button>
            <button
              onClick={() => setFilter('top')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === 'top'
                  ? 'bg-[#E89B86] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Top Matches (2)
            </button>
            <button
              onClick={() => setFilter('new')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === 'new'
                  ? 'bg-[#E89B86] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              New (3)
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredCandidates.map((candidate) => {
            const CommunicationIcon = candidate.communicationStyle.icon;
            
            return (
              <div
                key={candidate.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => setSelectedCandidate(candidate)}
              >
                {/* Match Score Banner */}
                <div className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-white" />
                    <span className="text-white">AI Match Score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl text-white">{candidate.matchScore}%</span>
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>

                <div className="p-6">
                  {/* Candidate Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <ImageWithFallback
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      {candidate.status === 'new' && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#E89B86] rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-gray-900 mb-1">{candidate.name}</h3>
                      <div className="flex items-center gap-2">
                        <CommunicationIcon className="w-4 h-4 text-[#D97A63]" />
                        <span className="text-sm text-gray-700">{candidate.communicationStyle.label}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#D97A63] transition-colors" />
                  </div>

                  {/* Key Strengths */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-[#D97A63]" />
                      <span className="text-sm text-gray-700">Key Strengths</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {candidate.keyStrengths.map((strength, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-[#FDF3F0] text-[#D97A63] rounded-lg text-sm"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Communication Style */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-[#D97A63]" />
                      <span className="text-sm text-gray-900">Communication Style</span>
                    </div>
                    <p className="text-sm text-gray-600">{candidate.communicationStyle.description}</p>
                  </div>

                  {/* Why Good Fit */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="w-4 h-4 text-[#D97A63]" />
                      <span className="text-sm text-gray-900">Why they're a great fit</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{candidate.whyGoodFit}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <Link to={`/candidate/${candidate.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90">
                        View Full Profile
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-gray-300">
                      <Heart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCandidates.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">No candidates match this filter</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
            <Button
              onClick={() => setFilter('all')}
              variant="outline"
              className="border-gray-300"
            >
              View All Candidates
            </Button>
          </div>
        )}

        {/* AI Insights Banner */}
        <div className="mt-8 bg-gradient-to-br from-[#FDF3F0] to-white rounded-2xl border border-[#E89B86]/20 p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-gray-900 mb-2">How we matched these candidates</h4>
              <p className="text-gray-600 mb-4">
                Our AI analyzed voice patterns, communication styles, and personality traits to find candidates 
                who align with your role requirements and team culture. Match scores reflect skills, cultural fit, 
                and potential for success in this position.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E89B86]" />
                  <span className="text-sm text-gray-700">Voice-based insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E89B86]" />
                  <span className="text-sm text-gray-700">Personality analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E89B86]" />
                  <span className="text-sm text-gray-700">Cultural fit scoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}