import { useState } from 'react';
import { CandidateCard } from './CandidateCard';
import { CandidateDetailPanel } from './CandidateDetailPanel';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const mockCandidates = [
  {
    id: '1',
    name: 'Sarah Chen',
    matchScore: 94,
    strengths: ['Strategic thinking', 'Analytical', 'Leadership'],
    communicationStyle: 'Direct and structured. Excellent at breaking down complex ideas into clear action items.',
    matchReason: 'Strong analytical voice patterns indicate exceptional problem-solving abilities. Communication style aligns perfectly with team collaboration needs.',
    email: 'sarah.chen@email.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    experience: '8 years in Product Management at tech companies including Google and Airbnb',
    education: 'MBA from Stanford, BS in Computer Science from MIT',
    voiceTraits: [
      {
        trait: 'Analytical Thinker',
        description: 'Voice analysis reveals strong logical reasoning patterns and structured thought processes.',
        icon: 'brain',
      },
      {
        trait: 'Empathetic Communicator',
        description: 'Demonstrates high emotional intelligence through vocal tone and pacing variations.',
        icon: 'heart',
      },
      {
        trait: 'Natural Leader',
        description: 'Confident speech patterns and collaborative language suggest strong leadership potential.',
        icon: 'users',
      },
    ],
    personality: [
      { label: 'Openness to Experience', value: 88 },
      { label: 'Conscientiousness', value: 92 },
      { label: 'Extraversion', value: 75 },
      { label: 'Agreeableness', value: 84 },
      { label: 'Emotional Stability', value: 90 },
    ],
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    matchScore: 89,
    strengths: ['Creative problem-solving', 'Adaptability', 'Team collaboration'],
    communicationStyle: 'Warm and engaging. Great at building rapport and fostering inclusive discussions.',
    matchReason: 'Voice profile indicates strong adaptability and creative thinking. Excellent cultural fit based on communication patterns.',
    email: 'marcus.j@email.com',
    phone: '(555) 234-5678',
    location: 'Austin, TX',
    experience: '6 years as Product Manager at startups and mid-size companies',
    education: 'BA in Business Administration from UC Berkeley',
    voiceTraits: [
      {
        trait: 'Creative Thinker',
        description: 'Varied vocal patterns and innovative language choices indicate strong creative abilities.',
        icon: 'brain',
      },
      {
        trait: 'Team Player',
        description: 'Collaborative language and inclusive communication style suggest excellent teamwork skills.',
        icon: 'users',
      },
    ],
    personality: [
      { label: 'Openness to Experience', value: 95 },
      { label: 'Conscientiousness', value: 82 },
      { label: 'Extraversion', value: 88 },
      { label: 'Agreeableness', value: 90 },
      { label: 'Emotional Stability', value: 85 },
    ],
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    matchScore: 87,
    strengths: ['User empathy', 'Data-driven', 'Communication'],
    communicationStyle: 'Clear and concise. Excels at translating user needs into actionable insights.',
    matchReason: 'Voice insights reveal exceptional user empathy and attention to detail. Communication clarity matches team requirements.',
    email: 'emily.r@email.com',
    phone: '(555) 345-6789',
    location: 'Remote',
    experience: '7 years in Product roles with focus on UX and customer experience',
    education: 'MS in Human-Computer Interaction from Carnegie Mellon',
    voiceTraits: [
      {
        trait: 'User-Centric',
        description: 'Empathetic vocal qualities and customer-focused language patterns.',
        icon: 'heart',
      },
      {
        trait: 'Detail-Oriented',
        description: 'Precise articulation and methodical communication style indicate strong attention to detail.',
        icon: 'brain',
      },
    ],
    personality: [
      { label: 'Openness to Experience', value: 85 },
      { label: 'Conscientiousness', value: 94 },
      { label: 'Extraversion', value: 70 },
      { label: 'Agreeableness', value: 92 },
      { label: 'Emotional Stability', value: 88 },
    ],
  },
];

export function CandidateList() {
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedCandidate = mockCandidates.find(c => c.id === selectedCandidateId);

  return (
    <div className="flex h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2">Top Matches for Senior Product Manager</h2>
            <p className="text-gray-600">
              Based on voice insights and AI analysis, here are your best candidates
            </p>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search candidates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="border-gray-300">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="space-y-4">
            {mockCandidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                isSelected={selectedCandidateId === candidate.id}
                onClick={() => setSelectedCandidateId(candidate.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedCandidate && (
        <CandidateDetailPanel
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidateId(null)}
        />
      )}
    </div>
  );
}
