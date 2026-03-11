import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Bell, LogOut, Search, Download, Eye, Filter, ArrowUpDown, Plus, Trash2, Upload, ChevronDown } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import mediverseLogo from "../../assets/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage, getJobKey, getStatusKey, getActionKey } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NotificationDropdown from "../components/NotificationDropdown";

type ApplicantStatus = "Interview Scheduled" | "Screening" | "First Call" | "Offered" | "Rejected";
type Priority = "High" | "Medium" | "Low";
type SortField = "name" | "age" | "desiredJob" | "status" | "priority" | "nextAction";
type SortDirection = "asc" | "desc";

interface TimelineEvent {
  date: string;
  description: string;
}

interface Applicant {
  id: number;
  name: string;
  age: number;
  desiredJob: string;
  status: ApplicantStatus;
  priority: Priority;
  nextAction: string;
  lastActivity?: TimelineEvent; // Most recent timeline event
}

export default function Applicants() {
  const { t } = useLanguage();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<ApplicantStatus | "All">("All");
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [applicantStatuses, setApplicantStatuses] = useState<Record<number, ApplicantStatus>>({});
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);
  const [buttonMode, setButtonMode] = useState<"export" | "import">("export");
  const [showDropdown, setShowDropdown] = useState(false);
  const [importFile, setImportFile] = useState<File | null>(null);
  const [animatingOut, setAnimatingOut] = useState<number | null>(null);
  const [animatingIn, setAnimatingIn] = useState<number | null>(null);

  // Load status updates from localStorage on mount and when navigating back
  useEffect(() => {
    const stored = localStorage.getItem("applicantStatusUpdates");
    if (stored) {
      const updates = JSON.parse(stored);
      setApplicantStatuses(updates);

      // Check if there's a recently updated applicant
      const recentUpdate = localStorage.getItem("recentStatusUpdate");
      if (recentUpdate) {
        const { id, oldStatus, newStatus } = JSON.parse(recentUpdate);

        // If moved from Screening to another status, animate
        if (oldStatus === "Screening" && newStatus !== "Screening") {
          setAnimatingOut(id);

          // After fade out, trigger fade in
          setTimeout(() => {
            setAnimatingOut(null);
            setAnimatingIn(id);

            // Clear animating in after animation completes
            setTimeout(() => {
              setAnimatingIn(null);
              localStorage.removeItem("recentStatusUpdate");
            }, 600);
          }, 400);
        } else {
          localStorage.removeItem("recentStatusUpdate");
        }
      }
    }
  }, []);

  // Mock data
  const applicants: Applicant[] = [
    {
      id: 1,
      name: "Tanaka Yuki",
      age: 27,
      desiredJob: "Sales",
      status: "Interview Scheduled",
      priority: "High",
      nextAction: "Interview tomorrow",
      lastActivity: { date: "2026-03-12", description: "Interview scheduled" },
    },
    {
      id: 2,
      name: "Suzuki Mei",
      age: 25,
      desiredJob: "Marketing",
      status: "Screening",
      priority: "Medium",
      nextAction: "Call again",
      lastActivity: { date: "2026-03-10", description: "Resume review completed" },
    },
    {
      id: 3,
      name: "Sato Kenji",
      age: 30,
      desiredJob: "Software Engineer",
      status: "First Call",
      priority: "High",
      nextAction: "Technical interview",
      lastActivity: { date: "2026-03-10", description: "Lead received" },
    },
    {
      id: 4,
      name: "Emily Chen",
      age: 28,
      desiredJob: "Product Manager",
      status: "Offered",
      priority: "High",
      nextAction: "Awaiting response",
      lastActivity: { date: "2026-03-11", description: "Offer extended" },
    },
    {
      id: 5,
      name: "Yamamoto Hiroshi",
      age: 24,
      desiredJob: "Data Analyst",
      status: "Screening",
      priority: "Low",
      nextAction: "Resume review",
      lastActivity: { date: "2026-03-09", description: "Application submitted" },
    },
    {
      id: 6,
      name: "Sarah Johnson",
      age: 32,
      desiredJob: "UX Designer",
      status: "Interview Scheduled",
      priority: "Medium",
      nextAction: "Portfolio review",
      lastActivity: { date: "2026-03-11", description: "Interview scheduled" },
    },
  ];

  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.desiredJob.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || applicant.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Separate applicants into two groups
  const newApplicants = filteredApplicants.filter(a => a.status === "Screening");
  const activeApplicants = filteredApplicants.filter(a => a.status !== "Screening");

  const getStatusBadgeColor = (status: ApplicantStatus) => {
    switch (status) {
      case "Interview Scheduled":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Screening":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "First Call":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Offered":
        return "bg-green-100 text-green-700 border-green-200";
      case "Rejected":
        return "bg-red-100 text-red-700 border-red-200";
    }
  };

  const getPriorityBadgeColor = (priority: Priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low":
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleStatusChange = (applicantId: number, newStatus: ApplicantStatus) => {
    setApplicantStatuses(prev => ({
      ...prev,
      [applicantId]: newStatus
    }));

    // Store status updates in localStorage
    localStorage.setItem("applicantStatusUpdates", JSON.stringify({
      ...applicantStatuses,
      [applicantId]: newStatus
    }));

    // Store recent status update for animation
    const applicant = applicants.find(a => a.id === applicantId);
    if (applicant) {
      localStorage.setItem("recentStatusUpdate", JSON.stringify({
        id: applicantId,
        oldStatus: applicant.status,
        newStatus: newStatus
      }));
    }
  };

  const getApplicantStatus = (applicant: Applicant) => {
    return applicantStatuses[applicant.id] || applicant.status;
  };

  const handleDeleteClick = (id: number) => {
    setDeleteConfirmId(id);
  };

  const handleDeleteConfirm = () => {
    // In a real app, this would delete the applicant from the database
    console.log("Deleting applicant with id:", deleteConfirmId);
    setDeleteConfirmId(null);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmId(null);
  };

  const handleExport = () => {
    // Export all applicants data to CSV/Excel
    console.log("Exporting data...");
    // In a real app, this would generate and download a CSV/Excel file
  };

  const handleImportFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImportFile(file);
      // In a real app, this would parse the file and import the data
      console.log("Importing file:", file.name);
    }
  };

  const toggleMode = (mode: "export" | "import") => {
    setButtonMode(mode);
    setShowDropdown(false);
  };

  const sortedApplicants = filteredApplicants.sort((a, b) => {
    if (!sortField) return 0;
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
    return sortDirection === "asc" ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number);
  });

  // Format date for timeline preview (e.g., "Mar 12")
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
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
              <span className="text-xl font-semibold text-gray-800">{t("applicants.title")}</span>
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
        {/* Header Section */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("applicants.title")}</h1>
            <p className="text-gray-600 text-lg">{t("applicants.subtitle")}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {/* Export/Import Button with Dropdown */}
            <div className="relative">
              <div className="flex">
                {buttonMode === "export" ? (
                  <Button
                    onClick={handleExport}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all rounded-r-none"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("applicants.export")}
                  </Button>
                ) : (
                  <>
                    <input
                      type="file"
                      id="import-file"
                      accept=".csv,.xlsx,.xls"
                      onChange={handleImportFileChange}
                      className="hidden"
                    />
                    <label htmlFor="import-file">
                      <Button
                        as="span"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all rounded-r-none cursor-pointer"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {t("applicants.import")}
                      </Button>
                    </label>
                  </>
                )}
                <Button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className={`${buttonMode === "export"
                      ? "bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900"
                      : "bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900"
                    } text-white shadow-lg hover:shadow-xl transition-all rounded-l-none border-l border-white/20 px-2`}
                >
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10">
                  <button
                    onClick={() => toggleMode("export")}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {t("applicants.switchToExport")}
                  </button>
                  <button
                    onClick={() => toggleMode("import")}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    {t("applicants.switchToImport")}
                  </button>
                </div>
              )}
            </div>

            <Link to="/add-candidate">
              <Button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all">
                <Plus className="w-4 h-4 mr-2" />
                {t("applicants.addNew")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 mb-6 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder={t("applicants.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Status Filter */}
            <div className="relative sm:w-64 w-full">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as ApplicantStatus | "All")}
                className="w-full pl-10 pr-10 h-12 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value="All">{t("applicants.statusAll")}</option>
                <option value="Interview Scheduled">{t("applicants.statusInterviewScheduled")}</option>
                <option value="Screening">{t("applicants.statusScreening")}</option>
                <option value="First Call">{t("applicants.statusFirstCall")}</option>
                <option value="Offered">{t("applicants.statusOffered")}</option>
                <option value="Rejected">{t("applicants.statusRejected")}</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {t("applicants.results", { count: filteredApplicants.length })}
          </div>
        </Card>

        {/* New Applicants Table - Screening Status */}
        {newApplicants.length > 0 && (
          <>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {t("applicants.newApplicants")} ({newApplicants.length})
              </h2>
              <p className="text-gray-600 text-sm mt-1">{t("applicants.newApplicantsSubtitle")}</p>
            </div>

            <Card className="shadow-xl overflow-hidden mb-8">
              <div className="overflow-x-auto overflow-y-visible">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold">
                        <div className="flex items-center gap-1">
                          {t("applicants.name")}
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold">
                        <div className="flex items-center gap-1">
                          {t("applicants.age")}
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold">
                        <div className="flex items-center gap-1">
                          {t("applicants.desiredJob")}
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold">
                        <div className="flex items-center gap-1">
                          {t("applicants.priority")}
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold">
                        <div className="flex items-center gap-1">
                          {t("applicants.nextAction")}
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold">{t("applicants.actions")}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {newApplicants.map((applicant) => {
                      const currentStatus = getApplicantStatus(applicant);
                      const isAnimatingOut = animatingOut === applicant.id;
                      // Don't show if it's being moved to active (status changed from Screening)
                      if (currentStatus !== "Screening") return null;

                      return (
                        <tr
                          key={applicant.id}
                          className={`hover:bg-purple-50/50 transition-all duration-400 group ${isAnimatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                            }`}
                        >
                          <td className="px-6 py-3 whitespace-nowrap relative">
                            {applicant.lastActivity && (
                              <div className="absolute left-0 top-full mt-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                <div className="bg-white/95 backdrop-blur-md border border-purple-200 rounded-lg shadow-xl px-4 py-3 min-w-[280px] ml-6">
                                  <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                                    <div>
                                      <p className="text-xs font-semibold text-gray-900 mb-0.5">Last activity:</p>
                                      <p className="text-xs text-gray-700">{applicant.lastActivity.description}</p>
                                      <p className="text-xs text-purple-600 font-medium mt-1">{formatDate(applicant.lastActivity.date)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            <Link to={`/applicants/${applicant.id}`}>
                              <div className="text-xs font-medium text-purple-600 hover:text-purple-800 hover:underline cursor-pointer">
                                {applicant.name}
                              </div>
                            </Link>
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{applicant.age}</td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{t(getJobKey(applicant.desiredJob))}</td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getPriorityBadgeColor(
                                applicant.priority
                              )}`}
                            >
                              {t(`applicants.priority${applicant.priority}`)}
                            </span>
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{t(getActionKey(applicant.nextAction))}</td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <Link to={`/applicants/${applicant.id}`}>
                                <Button
                                  size="sm"
                                  className="bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow-md transition-all text-xs"
                                >
                                  <Eye className="w-3 h-3 mr-1" />
                                  {t("applicants.viewProfile")}
                                </Button>
                              </Link>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteClick(applicant.id)}
                                className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 shadow-sm hover:shadow-md transition-all text-xs"
                                aria-label={t("applicants.delete")}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {/* Active Applicants Table - First Call and beyond */}
        {activeApplicants.length > 0 && (
          <>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {t("applicants.activeApplicants")} ({activeApplicants.length})
              </h2>
              <p className="text-gray-600 text-sm mt-1">{t("applicants.activeApplicantsSubtitle")}</p>
            </div>

            <Card className="shadow-xl overflow-hidden">
              <div className="overflow-x-auto overflow-y-visible">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold cursor-pointer hover:bg-indigo-800 transition-colors" onClick={() => handleSort("name")}>
                        <div className="flex items-center gap-1">
                          {t("applicants.name")}
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold cursor-pointer hover:bg-indigo-800 transition-colors" onClick={() => handleSort("age")}>
                        <div className="flex items-center gap-1">
                          {t("applicants.age")}
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold cursor-pointer hover:bg-indigo-800 transition-colors" onClick={() => handleSort("desiredJob")}>
                        <div className="flex items-center gap-1">
                          {t("applicants.desiredJob")}
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold cursor-pointer hover:bg-indigo-800 transition-colors" onClick={() => handleSort("status")}>
                        <div className="flex items-center gap-1">
                          {t("applicants.status")}
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold cursor-pointer hover:bg-indigo-800 transition-colors" onClick={() => handleSort("priority")}>
                        <div className="flex items-center gap-1">
                          {t("applicants.priority")}
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold cursor-pointer hover:bg-indigo-800 transition-colors" onClick={() => handleSort("nextAction")}>
                        <div className="flex items-center gap-1">
                          {t("applicants.nextAction")}
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold">{t("applicants.actions")}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {activeApplicants.map((applicant) => {
                      const currentStatus = getApplicantStatus(applicant);
                      const isAnimatingIn = animatingIn === applicant.id;
                      // Only show if it has an active status (not Screening)
                      if (currentStatus === "Screening") return null;

                      return (
                        <tr
                          key={applicant.id}
                          className={`hover:bg-indigo-50/50 transition-all duration-600 group ${isAnimatingIn ? 'animate-fadeInSlide' : ''}`}
                        >
                          <td className="px-6 py-3 whitespace-nowrap relative">
                            {/* Timeline Preview Tooltip */}
                            {applicant.lastActivity && (
                              <div className="absolute left-0 top-full mt-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                <div className="bg-white/95 backdrop-blur-md border border-indigo-200 rounded-lg shadow-xl px-4 py-3 min-w-[280px] ml-6">
                                  <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></div>
                                    <div>
                                      <p className="text-xs font-semibold text-gray-900 mb-0.5">Last activity:</p>
                                      <p className="text-xs text-gray-700">{applicant.lastActivity.description}</p>
                                      <p className="text-xs text-indigo-600 font-medium mt-1">{formatDate(applicant.lastActivity.date)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            <Link to={`/applicants/${applicant.id}`}>
                              <div className="text-xs font-medium text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer">
                                {applicant.name}
                              </div>
                            </Link>
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{applicant.age}</td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{t(getJobKey(applicant.desiredJob))}</td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <select
                              value={getApplicantStatus(applicant)}
                              onChange={(e) => handleStatusChange(applicant.id, e.target.value as ApplicantStatus)}
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${getStatusBadgeColor(
                                getApplicantStatus(applicant)
                              )}`}
                            >
                              <option value="Interview Scheduled">{t("status.interviewScheduled")}</option>
                              <option value="Screening">{t("status.screening")}</option>
                              <option value="First Call">{t("status.firstCall")}</option>
                              <option value="Offered">{t("status.offered")}</option>
                              <option value="Rejected">{t("status.rejected")}</option>
                            </select>
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getPriorityBadgeColor(
                                applicant.priority
                              )}`}
                            >
                              {t(`applicants.priority${applicant.priority}`)}
                            </span>
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{t(getActionKey(applicant.nextAction))}</td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <Link to={`/applicants/${applicant.id}`}>
                                <Button
                                  size="sm"
                                  className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md transition-all text-xs"
                                >
                                  <Eye className="w-3 h-3 mr-1" />
                                  {t("applicants.viewProfile")}
                                </Button>
                              </Link>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteClick(applicant.id)}
                                className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 shadow-sm hover:shadow-md transition-all text-xs"
                                aria-label={t("applicants.delete")}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}
      </main>

      {/* Delete Confirmation Dialog */}
      {deleteConfirmId !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("applicants.deleteConfirm")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("applicants.deleteMessage")}
            </p>
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={handleDeleteCancel}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {t("applicants.deleteCancel")}
              </Button>
              <Button
                onClick={handleDeleteConfirm}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {t("applicants.deleteConfirmButton")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}