import { X, Mail, Phone, MapPin, Briefcase, GraduationCap, MessageCircle, Brain, Heart, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from './ui/button';

interface CandidateDetailPanelProps {
  candidate: {
    id: string;
    name: string;
    matchScore: number;
    strengths: string[];
    communicationStyle: string;
    matchReason: string;
    email?: string;
    phone?: string;
    location?: string;
    experience?: string;
    education?: string;
    voiceTraits?: {
      trait: string;
      description: string;
      icon: string;
    }[];
    personality?: {
      label: string;
      value: number;
    }[];
  };
  onClose: () => void;
}

export function CandidateDetailPanel({ candidate, onClose }: CandidateDetailPanelProps) {
  const traitIcons: Record<string, any> = {
    brain: Brain,
    heart: Heart,
    users: Users,
    message: MessageCircle,
  };

  return (
    <div className="bg-white border-l border-gray-200 w-[480px] h-screen overflow-y-auto flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-2xl flex items-center justify-center text-white text-xl">
            {candidate.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h2 className="text-gray-900 mb-1">{candidate.name}</h2>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FDF3F0] rounded-full">
                <TrendingUp className="w-4 h-4 text-[#E89B86]" />
                <span className="text-sm text-[#D97A63]">{candidate.matchScore}% Match</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-amber-700">Top Candidate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-gray-900 text-sm uppercase tracking-wide">Contact Information</h3>
          <div className="space-y-2">
            {candidate.email && (
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{candidate.email}</span>
              </div>
            )}
            {candidate.phone && (
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{candidate.phone}</span>
              </div>
            )}
            {candidate.location && (
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{candidate.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Background */}
        <div className="space-y-3">
          <h3 className="text-gray-900 text-sm uppercase tracking-wide">Background</h3>
          <div className="space-y-3">
            {candidate.experience && (
              <div className="flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Experience</p>
                  <p className="text-sm text-gray-900">{candidate.experience}</p>
                </div>
              </div>
            )}
            {candidate.education && (
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Education</p>
                  <p className="text-sm text-gray-900">{candidate.education}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Voice-Based Traits */}
        <div className="space-y-3">
          <h3 className="text-gray-900 text-sm uppercase tracking-wide">Voice-Based Insights</h3>
          <div className="grid gap-3">
            {candidate.voiceTraits?.map((trait, idx) => {
              const Icon = traitIcons[trait.icon] || Brain;
              return (
                <div key={idx} className="p-4 bg-gradient-to-br from-[#FDF3F0] to-[#FFF9F7] rounded-xl border border-[#F5D5CA]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#D97A63]" />
                    </div>
                    <h4 className="text-gray-900">{trait.trait}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{trait.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personality Traits */}
        {candidate.personality && (
          <div className="space-y-3">
            <h3 className="text-gray-900 text-sm uppercase tracking-wide">Personality Profile</h3>
            <div className="space-y-3">
              {candidate.personality.map((trait, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-700">{trait.label}</span>
                    <span className="text-sm text-gray-500">{trait.value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] h-2 rounded-full transition-all"
                      style={{ width: `${trait.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Match Reason */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <h4 className="text-amber-900 mb-2 flex items-center gap-2">
            <Award className="w-4 h-4" />
            Why This Match?
          </h4>
          <p className="text-sm text-amber-800">{candidate.matchReason}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 space-y-3">
        <Button className="w-full bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90">
          Schedule Interview
        </Button>
        <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
          Save for Later
        </Button>
      </div>
    </div>
  );
}
