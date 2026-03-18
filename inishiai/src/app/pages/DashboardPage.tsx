import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { JobSetup } from '../components/JobSetup';
import { CandidateList } from '../components/CandidateList';
import { PricingSection } from '../components/PricingSection';

export function DashboardPage() {
  const [activeSection, setActiveSection] = useState('jobs');
  const navigate = useNavigate();

  const handleSectionChange = (section: string) => {
    if (section === 'billing') {
      navigate('/billing');
    } else {
      setActiveSection(section);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'jobs':
        return (
          <div className="p-8 max-w-4xl">
            <JobSetup />
          </div>
        );
      case 'candidates':
        return <CandidateList />;
      case 'settings':
        return (
          <div className="p-8 max-w-4xl">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-gray-900 mb-2">Settings</h2>
              <p className="text-gray-600">Manage your account and preferences</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}