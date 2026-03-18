import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  Upload, 
  FileText, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  Brain,
  Target,
  Users
} from 'lucide-react';

export function CreateJobPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'choose' | 'upload' | 'manual'>('choose');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    responsibilities: '',
    requirements: '',
    niceToHave: '',
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    navigate('/job-matches/1');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" className="text-gray-600">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="w-px h-6 bg-gray-200" />
            <h1 className="text-xl text-gray-900">Create Job Listing</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Choose Mode */}
        {mode === 'choose' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDF3F0] rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-[#D97A63]" />
                <span className="text-sm text-[#D97A63]">AI-Powered Job Matching</span>
              </div>
              <h2 className="text-3xl text-gray-900 mb-3">
                How would you like to create your job listing?
              </h2>
              <p className="text-lg text-gray-600">
                Choose the method that works best for you. We'll analyze it to find the perfect candidates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Upload Option */}
              <button
                onClick={() => setMode('upload')}
                className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#E89B86] hover:shadow-lg transition-all text-left"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#E89B86]/10 to-[#D97A63]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-7 h-7 text-[#D97A63]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Upload Job Description</h3>
                <p className="text-gray-600 mb-4">
                  Have an existing job description? Upload a PDF or text file and we'll extract the details.
                </p>
                <div className="flex items-center gap-2 text-[#D97A63]">
                  <span className="text-sm">Get started</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              {/* Manual Entry Option */}
              <button
                onClick={() => setMode('manual')}
                className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#E89B86] hover:shadow-lg transition-all text-left"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#E89B86]/10 to-[#D97A63]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7 text-[#D97A63]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Fill in Details Manually</h3>
                <p className="text-gray-600 mb-4">
                  Enter job information step by step using our guided form. Simple and straightforward.
                </p>
                <div className="flex items-center gap-2 text-[#D97A63]">
                  <span className="text-sm">Get started</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            {/* AI Analysis Info */}
            <div className="bg-gradient-to-br from-[#FDF3F0] to-white rounded-2xl border border-[#E89B86]/20 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">What happens next?</h4>
                  <p className="text-gray-600 mb-4">
                    Our AI will analyze your job listing to understand the role requirements, desired skills, 
                    and cultural fit. Then we'll match you with candidates based on:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#E89B86]" />
                      <span className="text-sm text-gray-700">Skills & experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#E89B86]" />
                      <span className="text-sm text-gray-700">Personality traits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#E89B86]" />
                      <span className="text-sm text-gray-700">Communication style</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload Mode */}
        {mode === 'upload' && (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setMode('choose')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to options
            </button>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
              <h2 className="text-2xl text-gray-900 mb-2">Upload Job Description</h2>
              <p className="text-gray-600 mb-8">
                Upload a PDF or text file with your job description. We'll extract the key details automatically.
              </p>

              {/* Upload Area */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                  dragActive
                    ? 'border-[#E89B86] bg-[#FDF3F0]'
                    : 'border-gray-300 bg-gray-50'
                }`}
              >
                <input
                  type="file"
                  id="file-upload"
                  accept=".pdf,.txt,.doc,.docx"
                  onChange={handleFileInput}
                  className="hidden"
                />

                {!uploadedFile ? (
                  <>
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg text-gray-900 mb-2">
                      Drag and drop your file here
                    </h3>
                    <p className="text-gray-500 mb-4">or</p>
                    <label htmlFor="file-upload">
                      <Button
                        type="button"
                        className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90"
                        onClick={() => document.getElementById('file-upload')?.click()}
                      >
                        Browse Files
                      </Button>
                    </label>
                    <p className="text-sm text-gray-500 mt-4">
                      Supported formats: PDF, TXT, DOC, DOCX (Max 10MB)
                    </p>
                  </>
                ) : (
                  <div className="flex items-center justify-center gap-4">
                    <FileText className="w-10 h-10 text-[#D97A63]" />
                    <div className="text-left">
                      <p className="text-gray-900">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-500">
                        {(uploadedFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setUploadedFile(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* AI Processing Info */}
            <div className="bg-gradient-to-br from-[#FDF3F0] to-white rounded-2xl border border-[#E89B86]/20 p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">We'll analyze this to find candidates that truly fit</h4>
                  <p className="text-gray-600">
                    Our AI will read your job description and extract key requirements, responsibilities, 
                    and desired traits. Then we'll match you with candidates whose skills, personality, 
                    and communication style align perfectly with what you're looking for.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleSubmit}
                disabled={!uploadedFile}
                className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed px-8"
              >
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setMode('choose')}
                className="border-gray-300"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Manual Entry Mode */}
        {mode === 'manual' && (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setMode('choose')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to options
            </button>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900">Basic Information</h3>
                    <p className="text-sm text-gray-600">Tell us about the role</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <Label htmlFor="title">Job Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g. Senior Product Designer"
                      value={formData.title}
                      onChange={(e) => updateFormData('title', e.target.value)}
                      className="mt-1.5"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Input
                        id="department"
                        placeholder="e.g. Design"
                        value={formData.department}
                        onChange={(e) => updateFormData('department', e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="e.g. San Francisco, Remote"
                        value={formData.location}
                        onChange={(e) => updateFormData('location', e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="type">Employment Type</Label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => updateFormData('type', e.target.value)}
                      className="mt-1.5 w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E89B86] focus:border-transparent"
                    >
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Role Details */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900">Role Details</h3>
                    <p className="text-sm text-gray-600">What will they be doing?</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <Label htmlFor="responsibilities">Responsibilities *</Label>
                    <p className="text-sm text-gray-500 mt-1 mb-2">
                      What are the key responsibilities for this role?
                    </p>
                    <Textarea
                      id="responsibilities"
                      placeholder="• Lead product design initiatives&#10;• Collaborate with engineering and product teams&#10;• Conduct user research and testing"
                      value={formData.responsibilities}
                      onChange={(e) => updateFormData('responsibilities', e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Required Skills & Qualifications *</Label>
                    <p className="text-sm text-gray-500 mt-1 mb-2">
                      What skills and experience are essential?
                    </p>
                    <Textarea
                      id="requirements"
                      placeholder="• 5+ years of product design experience&#10;• Expert in Figma and design systems&#10;• Strong portfolio demonstrating UX/UI work"
                      value={formData.requirements}
                      onChange={(e) => updateFormData('requirements', e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="niceToHave">Nice to Have</Label>
                    <p className="text-sm text-gray-500 mt-1 mb-2">
                      What would make a candidate stand out? (Optional)
                    </p>
                    <Textarea
                      id="niceToHave"
                      placeholder="• Experience with motion design&#10;• Understanding of front-end development&#10;• Leadership or mentoring experience"
                      value={formData.niceToHave}
                      onChange={(e) => updateFormData('niceToHave', e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              {/* AI Analysis Info */}
              <div className="bg-gradient-to-br from-[#FDF3F0] to-white rounded-2xl border border-[#E89B86]/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">We'll analyze this to find candidates that truly fit</h4>
                    <p className="text-gray-600 mb-4">
                      Our AI will understand your role requirements and find candidates who match not just 
                      on skills, but on personality, communication style, and cultural fit.
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#E89B86]/10 rounded-full flex items-center justify-center">
                          <Target className="w-3 h-3 text-[#D97A63]" />
                        </div>
                        <span className="text-sm text-gray-700">Skill matching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#E89B86]/10 rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 text-[#D97A63]" />
                        </div>
                        <span className="text-sm text-gray-700">Cultural fit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#E89B86]/10 rounded-full flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-[#D97A63]" />
                        </div>
                        <span className="text-sm text-gray-700">Voice insights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white hover:opacity-90 px-8"
                >
                  Create Job Listing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setMode('choose')}
                  className="border-gray-300"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}