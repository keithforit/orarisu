import { Upload, FileText, Sparkles, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from './ui/button';

export function JobSetup() {
  return (
    <div className="space-y-6">
      {/* Active Jobs Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-1">Job Listings</h2>
          <p className="text-gray-600">Manage your active job postings</p>
        </div>
        <Link to="/create-job">
          <Button className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90">
            <Plus className="w-5 h-5 mr-2" />
            Create New Job
          </Button>
        </Link>
      </div>

      {/* Empty State or Job List */}
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-[#E89B86]/10 to-[#D97A63]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-[#D97A63]" />
          </div>
          <h3 className="text-xl text-gray-900 mb-2">No active job listings yet</h3>
          <p className="text-gray-600 mb-6">
            Create your first job listing and let our AI find the perfect candidates for you
          </p>
          <Link to="/create-job">
            <Button className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90">
              <Plus className="w-5 h-5 mr-2" />
              Create Your First Job
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}