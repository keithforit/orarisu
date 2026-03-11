import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { ArrowLeft, Bell, LogOut, Upload, FileText, Trash2, Save, X, Plus, Calendar, Sparkles, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import mediverseLogo from "figma:asset/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NotificationDropdown from "../components/NotificationDropdown";

type ApplicantStatus = "Interview Scheduled" | "Screening" | "First Call" | "Offered" | "Rejected";
type Priority = "High" | "Medium" | "Low";

interface TimelineEvent {
  id: string;
  date: string;
  description: string;
}

interface ApplicantProfileData {
  id: number;
  // Basic Information
  nameKanji: string;
  nameKana: string;
  gender: string;
  dateOfBirth: string;
  age: number;
  phone: string;
  email: string;
  leadDate: string;
  
  // Career Background
  university: string;
  currentJob: string;
  currentCompany: string;
  yearsInCurrentJob: number;
  reasonForLeaving: string;
  previousJob: string;
  previousCompany: string;
  yearsInPreviousJob: number;
  reasonForLeavingPrevious: string;
  totalCompanies: number;
  totalWorkExperience: number;
  
  // Recruiter Notes - Japanese format
  jobSearchStatus: string;  // ①転職活動の状況
  currentJobDetails: string;  // ②現職内容／勤続年数
  currentJobReason: string;  // ③現職の転職理由
  previousJobDetails: string;  // ④前職内容／勤続年数
  previousJobReason: string;  // ⑤前職の退職理由
  totalCompaniesWorked: string;  // ⑥これまでの経験社数合計
  desiredJoinDate: string;  // ⑦希望入社時期
  desiredJobType: string;  // ⑧希望職種
  desiredLocation: string;  // ⑨希望勤務地
  salaryInfo: string;  // ⑩現年収／希望年収
  resumeFile: string | null;
  editedResume: string | null;
  
  // For table display
  status: ApplicantStatus;
  nextAction: string;
}

// Helper function to get mock data based on ID
function getMockDataForId(id: string | undefined): ApplicantProfileData {
  const numId = parseInt(id || "1");
  
  // For "Screening" status candidates (ID 2 - Suzuki Mei), return minimal information
  if (numId === 2) {
    return {
      id: 2,
      // Basic Information
      nameKanji: "鈴木 芽衣",
      nameKana: "すずき めい",
      gender: "Female",
      dateOfBirth: "2001-06-12",
      age: 25,
      phone: "+81 90-2345-6789",
      email: "suzuki.mei@example.com",
      leadDate: "2026-03-10",
      
      // Career Background - minimal for screening
      university: "",
      currentJob: "",
      currentCompany: "",
      yearsInCurrentJob: 0,
      reasonForLeaving: "",
      previousJob: "",
      previousCompany: "",
      yearsInPreviousJob: 0,
      reasonForLeavingPrevious: "",
      totalCompanies: 0,
      totalWorkExperience: 0,
      
      // Recruiter Notes - minimal
      jobSearchStatus: "",
      currentJobDetails: "",
      currentJobReason: "",
      previousJobDetails: "",
      previousJobReason: "",
      totalCompaniesWorked: "",
      desiredJoinDate: "",
      desiredJobType: "Marketing",
      desiredLocation: "",
      salaryInfo: "",
      resumeFile: null,
      editedResume: null,
      
      status: "Screening",
      nextAction: "Call again",
    };
  }
  
  // For "First Call" status candidates (ID 3 - Sato Kenji), return minimal information
  if (numId === 3) {
    return {
      id: 3,
      // Basic Information
      nameKanji: "佐藤 健二",
      nameKana: "さとう けんじ",
      gender: "Male",
      dateOfBirth: "1996-08-20",
      age: 30,
      phone: "+81 90-9876-5432",
      email: "sato.kenji@example.com",
      leadDate: "2026-03-10",
      
      // Career Background - minimal
      university: "",
      currentJob: "",
      currentCompany: "",
      yearsInCurrentJob: 0,
      reasonForLeaving: "",
      previousJob: "",
      previousCompany: "",
      yearsInPreviousJob: 0,
      reasonForLeavingPrevious: "",
      totalCompanies: 0,
      totalWorkExperience: 0,
      
      // Recruiter Notes - minimal
      jobSearchStatus: "",
      currentJobDetails: "",
      currentJobReason: "",
      previousJobDetails: "",
      previousJobReason: "",
      totalCompaniesWorked: "",
      desiredJoinDate: "",
      desiredJobType: "Software Engineer",
      desiredLocation: "",
      salaryInfo: "",
      resumeFile: null,
      editedResume: null,
      
      status: "First Call",
      nextAction: "Technical interview",
    };
  }
  
  // Default full data for other candidates
  return {
    id: 1,
    // Basic Information
    nameKanji: "田中 優希",
    nameKana: "たなか ゆうき",
    gender: "Male",
    dateOfBirth: "1999-04-15",
    age: 27,
    phone: "+81 90-1234-5678",
    email: "tanaka.yuki@example.com",
    leadDate: "2026-03-01",
    
    // Career Background
    university: "東京大学",
    currentJob: "Sales Representative",
    currentCompany: "ABC Corporation",
    yearsInCurrentJob: 3,
    reasonForLeaving: "Looking for career advancement and better growth opportunities",
    previousJob: "Junior Sales Associate",
    previousCompany: "XYZ Trading",
    yearsInPreviousJob: 2,
    reasonForLeavingPrevious: "Company restructuring",
    totalCompanies: 2,
    totalWorkExperience: 5,
    
    // Recruiter Notes
    jobSearchStatus: "Active",
    currentJobDetails: "Sales Representative at ABC Corporation for 3 years",
    currentJobReason: "Looking for career advancement and better growth opportunities",
    previousJobDetails: "Junior Sales Associate at XYZ Trading for 2 years",
    previousJobReason: "Company restructuring",
    totalCompaniesWorked: "2 companies",
    desiredJoinDate: "Within 2 months",
    desiredJobType: "Sales Manager",
    desiredLocation: "Tokyo, Yokohama",
    salaryInfo: "4,500,000 yen / 5,500,000 yen",
    resumeFile: "tanaka_yuki_resume.pdf",
    editedResume: "tanaka_yuki_resume_edited.pdf",
    
    status: "Interview Scheduled",
    nextAction: "Interview tomorrow",
  };
}

export default function ApplicantProfile() {
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Initialize with mock data based on ID
  const initialData = getMockDataForId(id);

  const [formData, setFormData] = useState<ApplicantProfileData>(initialData);
  const [hasChanges, setHasChanges] = useState(false);
  
  // Collapsible sections state
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    career: false,  // Collapsed by default for new people
    recruiter: true,
    timeline: true,
  });
  
  // AI Summary Modal state
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [summaryText, setSummaryText] = useState("");
  const [editedSummary, setEditedSummary] = useState("");
  
  // Timeline events - different based on ID
  const getInitialTimeline = (id: string | undefined): TimelineEvent[] => {
    const numId = parseInt(id || "1");
    
    if (numId === 2) {
      // Minimal timeline for Screening candidate
      return [
        { id: "1", date: "2026-03-10", description: "Resume review completed" },
      ];
    }
    
    if (numId === 3) {
      // Minimal timeline for First Call candidate
      return [
        { id: "1", date: "2026-03-10", description: "Lead received" },
      ];
    }
    
    // Full timeline for other candidates
    return [
      { id: "1", date: "2026-03-01", description: "Lead received" },
      { id: "2", date: "2026-03-02", description: "Initial call completed" },
      { id: "3", date: "2026-03-04", description: "Interview scheduled" },
      { id: "4", date: "2026-03-06", description: "3 jobs proposed" },
      { id: "5", date: "2026-03-08", description: "Applied to Mediverse" },
    ];
  };
  
  const [timeline, setTimeline] = useState<TimelineEvent[]>(getInitialTimeline(id));
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (field: keyof ApplicantProfileData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // In a real app, this would send data to a backend
    console.log("Saving data:", formData);
    setHasChanges(false);
    alert(t("profile.changesSaved"));
  };
  
  const handleSummarize = () => {
    // Generate AI summary from the recruiter notes
    const summary = `
転職活動の状況: ${formData.jobSearchStatus}
現職内容／勤続年数: ${formData.currentJobDetails}
現職の転職理由: ${formData.currentJobReason}
前職内容／勤続年数: ${formData.previousJobDetails}
前職の退職理由: ${formData.previousJobReason}
これまでの経験社数合計: ${formData.totalCompaniesWorked}
希望入社時期: ${formData.desiredJoinDate}
希望職種: ${formData.desiredJobType}
希望勤務地: ${formData.desiredLocation}
現年収／希望年収: ${formData.salaryInfo}
    `.trim();
    
    setSummaryText(summary);
    setEditedSummary(summary);
    setShowSummaryModal(true);
  };
  
  const handleSaveSummary = () => {
    // In a real app, save the edited summary
    console.log("Saving summary:", editedSummary);
    alert(t("profile.summarySaved"));
    setShowSummaryModal(false);
  };
  
  const handleProceedWithApplication = () => {
    // Move application from pending to applicants list by updating status
    const newStatus: ApplicantStatus = "First Call"; // Move from Screening to First Call
    
    // Update localStorage with the new status
    const stored = localStorage.getItem("applicantStatusUpdates");
    const existing = stored ? JSON.parse(stored) : {};
    existing[formData.id] = newStatus;
    localStorage.setItem("applicantStatusUpdates", JSON.stringify(existing));
    
    // Store the recent update for animation
    localStorage.setItem("recentStatusUpdate", JSON.stringify({
      id: formData.id,
      oldStatus: "Screening",
      newStatus: newStatus
    }));
    
    alert(t("profile.proceedingWithApplication"));
    navigate("/applicants");
  };
  
  const handleCancelApplication = () => {
    if (confirm(t("profile.cancelConfirm"))) {
      // Save to cancelled applications
      const cancelledApp = {
        id: formData.id,
        name: formData.nameKanji,
        age: formData.age,
        desiredJob: formData.desiredJobType,
        submittedDate: formData.leadDate,
        email: formData.email,
        phone: formData.phone,
      };
      
      // Get existing cancelled applications
      const stored = localStorage.getItem("cancelledApplications");
      const existing = stored ? JSON.parse(stored) : [];
      
      // Add new cancelled application
      const updated = [...existing, cancelledApp];
      localStorage.setItem("cancelledApplications", JSON.stringify(updated));
      
      alert(t("profile.applicationCancelled"));
      navigate("/applications");
    }
  };

  const handleFileUpload = (field: "resumeFile" | "editedResume", event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, you would upload the file to a server
      handleInputChange(field, file.name);
    }
  };

  const handleFileDelete = (field: "resumeFile" | "editedResume") => {
    handleInputChange(field, null);
  };

  const handleAddTimelineEvent = () => {
    if (newEventDate && newEventDescription) {
      const newEvent: TimelineEvent = {
        id: (timeline.length + 1).toString(),
        date: newEventDate,
        description: newEventDescription,
      };
      setTimeline([...timeline, newEvent].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
      setNewEventDate("");
      setNewEventDescription("");
      setHasChanges(true);
    }
  };

  const handleDeleteTimelineEvent = (id: string) => {
    setTimeline(timeline.filter(event => event.id !== id));
    setHasChanges(true);
  };

  const formatTimelineDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
    return { month, day };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <img src={mediverseLogo} alt="Mediverse" className="h-8 w-auto cursor-pointer" />
              </Link>
              <span className="text-xl font-semibold text-gray-800">Applicant Profile</span>
            </div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              
              <NotificationDropdown />

              <Link to="/">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <LogOut className="w-4 h-4" />
                  {t("header.logout")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button and Save Button */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/applicants">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Applicants
            </Button>
          </Link>
          
          {hasChanges && (
            <Button 
              onClick={handleSave}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          )}
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{formData.nameKanji}</h1>
              <p className="text-gray-600 text-lg">{formData.nameKana}</p>
            </div>
            
            {/* Match Button - Only show for First Call status */}
            {formData.status === "First Call" && (
              <Link to={`/applicants/${id}/match`}>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {t("profile.match")}
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Section 1: Basic Information */}
        <Card className="p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Section 1 — Basic Information
            </h2>
            <button
              onClick={() => toggleSection("basic")}
              className="text-gray-500 hover:text-gray-700"
            >
              {expandedSections.basic ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          {expandedSections.basic && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name (Kanji)</label>
                <Input 
                  value={formData.nameKanji} 
                  onChange={(e) => handleInputChange("nameKanji", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name (Kana)</label>
                <Input 
                  value={formData.nameKana} 
                  onChange={(e) => handleInputChange("nameKana", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                <Input 
                  type="date"
                  value={formData.dateOfBirth} 
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                <Input 
                  type="number"
                  value={formData.age} 
                  onChange={(e) => handleInputChange("age", parseInt(e.target.value))}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <Input 
                  value={formData.phone} 
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <Input 
                  type="email"
                  value={formData.email} 
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Lead Date (流入日)</label>
                <Input 
                  type="date"
                  value={formData.leadDate} 
                  onChange={(e) => handleInputChange("leadDate", e.target.value)}
                  className="border-gray-300"
                />
              </div>
            </div>
          )}
        </Card>

        {/* Section 2: Career Background */}
        <Card className="p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Section 2 — Career Background
            </h2>
            <button
              onClick={() => toggleSection("career")}
              className="text-gray-500 hover:text-gray-700"
            >
              {expandedSections.career ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          {expandedSections.career && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">University</label>
                <Input 
                  value={formData.university} 
                  onChange={(e) => handleInputChange("university", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Job</label>
                <Input 
                  value={formData.currentJob} 
                  onChange={(e) => handleInputChange("currentJob", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Company</label>
                <Input 
                  value={formData.currentCompany} 
                  onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Years in Current Job</label>
                <Input 
                  type="number"
                  value={formData.yearsInCurrentJob} 
                  onChange={(e) => handleInputChange("yearsInCurrentJob", parseInt(e.target.value))}
                  className="border-gray-300"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for Leaving</label>
                <textarea 
                  value={formData.reasonForLeaving} 
                  onChange={(e) => handleInputChange("reasonForLeaving", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Previous Job</label>
                <Input 
                  value={formData.previousJob} 
                  onChange={(e) => handleInputChange("previousJob", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Previous Company</label>
                <Input 
                  value={formData.previousCompany} 
                  onChange={(e) => handleInputChange("previousCompany", e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Years in Previous Job</label>
                <Input 
                  type="number"
                  value={formData.yearsInPreviousJob} 
                  onChange={(e) => handleInputChange("yearsInPreviousJob", parseInt(e.target.value))}
                  className="border-gray-300"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for Leaving</label>
                <textarea 
                  value={formData.reasonForLeavingPrevious} 
                  onChange={(e) => handleInputChange("reasonForLeavingPrevious", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Total Number of Companies Worked</label>
                <Input 
                  type="number"
                  value={formData.totalCompanies} 
                  onChange={(e) => handleInputChange("totalCompanies", parseInt(e.target.value))}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Total Work Experience (years)</label>
                <Input 
                  type="number"
                  value={formData.totalWorkExperience} 
                  onChange={(e) => handleInputChange("totalWorkExperience", parseInt(e.target.value))}
                  className="border-gray-300"
                />
              </div>
            </div>
          )}
        </Card>

        {/* Section 3: Recruiter Notes */}
        <Card className="p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Section 3 — Recruiter Notes
            </h2>
            <button
              onClick={() => toggleSection("recruiter")}
              className="text-gray-500 hover:text-gray-700"
            >
              {expandedSections.recruiter ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          {expandedSections.recruiter && (
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note1")}</label>
                <textarea 
                  value={formData.jobSearchStatus} 
                  onChange={(e) => handleInputChange("jobSearchStatus", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note2")}</label>
                <textarea 
                  value={formData.currentJobDetails} 
                  onChange={(e) => handleInputChange("currentJobDetails", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note3")}</label>
                <textarea 
                  value={formData.currentJobReason} 
                  onChange={(e) => handleInputChange("currentJobReason", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note4")}</label>
                <textarea 
                  value={formData.previousJobDetails} 
                  onChange={(e) => handleInputChange("previousJobDetails", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note5")}</label>
                <textarea 
                  value={formData.previousJobReason} 
                  onChange={(e) => handleInputChange("previousJobReason", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note6")}</label>
                <textarea 
                  value={formData.totalCompaniesWorked} 
                  onChange={(e) => handleInputChange("totalCompaniesWorked", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note7")}</label>
                <textarea 
                  value={formData.desiredJoinDate} 
                  onChange={(e) => handleInputChange("desiredJoinDate", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note8")}</label>
                <textarea 
                  value={formData.desiredJobType} 
                  onChange={(e) => handleInputChange("desiredJobType", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note9")}</label>
                <textarea 
                  value={formData.desiredLocation} 
                  onChange={(e) => handleInputChange("desiredLocation", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("profile.note10")}</label>
                <textarea 
                  value={formData.salaryInfo} 
                  onChange={(e) => handleInputChange("salaryInfo", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows={2}
                />
              </div>
              
              {/* Summarize with AI Button */}
              <div className="flex justify-start pt-2">
                <Button
                  onClick={handleSummarize}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {t("profile.summarizeWithAI")}
                </Button>
              </div>
              
              {/* Proceed/Cancel Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200 mt-4">
                <Button
                  onClick={handleCancelApplication}
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  {t("profile.cancelApplication")}
                </Button>
                <Button
                  onClick={handleProceedWithApplication}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  {t("profile.proceedWithApplication")}
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Timeline Section */}
        <Card className="p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Candidate Timeline
            </h2>
            <button
              onClick={() => toggleSection("timeline")}
              className="text-gray-500 hover:text-gray-700"
            >
              {expandedSections.timeline ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          {expandedSections.timeline && (
            <>
              {/* Add New Event */}
              <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Add New Event</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="date"
                    value={newEventDate} 
                    onChange={(e) => setNewEventDate(e.target.value)}
                    className="border-gray-300"
                    placeholder="Date"
                  />
                  <Input 
                    value={newEventDescription} 
                    onChange={(e) => setNewEventDescription(e.target.value)}
                    className="border-gray-300 flex-1"
                    placeholder="Event description"
                  />
                  <Button
                    onClick={handleAddTimelineEvent}
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </Button>
                </div>
              </div>

              {/* Timeline Events */}
              <div className="space-y-4">
                {timeline.map((event, index) => {
                  const { month, day } = formatTimelineDate(event.date);
                  return (
                    <div key={event.id} className="flex gap-4 group">
                      {/* Date Column */}
                      <div className="w-24 flex-shrink-0">
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">{month} {day}</div>
                        </div>
                      </div>
                      
                      {/* Timeline Line */}
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-indigo-600' : 'bg-gray-400'} border-2 border-white shadow-sm`}></div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 flex-1 bg-gray-300 min-h-[30px]"></div>
                        )}
                      </div>
                      
                      {/* Event Description */}
                      <div className="flex-1 pb-6">
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-gray-700">{event.description}</p>
                          <button
                            onClick={() => handleDeleteTimelineEvent(event.id)}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 rounded transition-all"
                            title="Delete event"
                          >
                            <X className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </Card>

        {/* Save Button at Bottom */}
        {hasChanges && (
          <div className="flex justify-end">
            <Button 
              onClick={handleSave}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        )}
      </main>

      {/* AI Summary Modal */}
      {showSummaryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-bold text-gray-900">AI Summary</h2>
              </div>
              <button
                onClick={() => setShowSummaryModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <textarea
              value={editedSummary}
              onChange={(e) => setEditedSummary(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
              rows={10}
            />
            <div className="flex justify-end gap-3 mt-4">
              <Button
                onClick={() => setShowSummaryModal(false)}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveSummary}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Summary
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}