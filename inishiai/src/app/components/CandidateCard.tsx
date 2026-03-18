import { MessageCircle, Target, Sparkles, TrendingUp } from 'lucide-react';

interface CandidateCardProps {
  candidate: {
    id: string;
    name: string;
    matchScore: number;
    strengths: string[];
    communicationStyle: string;
    matchReason: string;
    avatar?: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

export function CandidateCard({ candidate, isSelected, onClick }: CandidateCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border p-5 cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'border-[#E89B86] shadow-md ring-2 ring-[#E89B86]/20' : 'border-gray-200'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-full flex items-center justify-center text-white">
            {candidate.avatar || candidate.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="text-gray-900">{candidate.name}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <TrendingUp className="w-4 h-4 text-[#E89B86]" />
              <span className="text-sm text-[#D97A63]">{candidate.matchScore}% Match</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FDF3F0] rounded-full">
          <Sparkles className="w-4 h-4 text-[#E89B86]" />
          <span className="text-sm text-[#D97A63]">AI Match</span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-500 uppercase tracking-wide">Key Strengths</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {candidate.strengths.map((strength, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-500 uppercase tracking-wide">Communication Style</span>
          </div>
          <p className="text-sm text-gray-700">{candidate.communicationStyle}</p>
        </div>

        <div className="pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600 italic">"{candidate.matchReason}"</p>
        </div>
      </div>
    </div>
  );
}
