import { useState } from "react";
import { Link } from "react-router";
import { Bell, LogOut, Search, Eye, Filter, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import mediverseLogo from "../../assets/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage, getJobKey } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NotificationDropdown from "../components/NotificationDropdown";

interface Application {
  id: number;
  name: string;
  age: number;
  desiredJob: string;
  submittedDate: string;
  email: string;
  phone: string;
}

export default function Applications() {
  const { t } = useLanguage();

  const [searchTerm, setSearchTerm] = useState("");
  const [isCancelledExpanded, setIsCancelledExpanded] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

  // Load cancelled applications from localStorage
  const getCancelledApplications = (): Application[] => {
    const stored = localStorage.getItem("cancelledApplications");
    return stored ? JSON.parse(stored) : [];
  };

  const [cancelledApplications, setCancelledApplications] = useState<Application[]>(getCancelledApplications());

  // Mock data for pending applications
  const pendingApplications: Application[] = [
    {
      id: 101,
      name: "Nakamura Akiko",
      age: 26,
      desiredJob: "Marketing",
      submittedDate: "2026-03-11",
      email: "akiko.n@email.com",
      phone: "090-1234-5678",
    },
    {
      id: 102,
      name: "Kobayashi Takeshi",
      age: 29,
      desiredJob: "Sales",
      submittedDate: "2026-03-10",
      email: "takeshi.k@email.com",
      phone: "080-9876-5432",
    },
    {
      id: 103,
      name: "Watanabe Lisa",
      age: 24,
      desiredJob: "Designer",
      submittedDate: "2026-03-09",
      email: "lisa.w@email.com",
      phone: "070-5555-1234",
    },
  ];

  const filteredPendingApplications = pendingApplications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.desiredJob.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const filteredCancelledApplications = cancelledApplications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.desiredJob.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const handleDeleteClick = (id: number) => {
    setDeleteConfirmId(id);
  };

  const handleDeleteConfirm = () => {
    if (deleteConfirmId !== null) {
      // Remove from cancelled applications
      const updated = cancelledApplications.filter(app => app.id !== deleteConfirmId);
      setCancelledApplications(updated);
      localStorage.setItem("cancelledApplications", JSON.stringify(updated));
      setDeleteConfirmId(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmId(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
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
              <span className="text-xl font-semibold text-gray-800">{t("applications.title")}</span>
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("applications.title")}</h1>
          <p className="text-gray-600 text-lg">{t("applications.subtitle")}</p>
        </div>

        {/* Search */}
        <Card className="p-6 mb-6 shadow-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder={t("applications.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {t("applications.results", { count: filteredPendingApplications.length })}
          </div>
        </Card>

        {/* Pending Applications Table */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {t("applications.pendingApplications")} ({filteredPendingApplications.length})
          </h2>
          <p className="text-gray-600 text-sm mt-1">{t("applications.pendingSubtitle")}</p>
        </div>

        <Card className="shadow-xl overflow-hidden mb-8">
          <div className="overflow-x-auto overflow-y-visible">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold">
                    {t("applications.name")}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold">
                    {t("applications.age")}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold">
                    {t("applications.desiredJob")}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold">
                    {t("applications.email")}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold">
                    {t("applications.phone")}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold">
                    {t("applications.submittedDate")}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold">{t("applications.actions")}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPendingApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-indigo-50/50 transition-colors">
                    <td className="px-6 py-3 whitespace-nowrap">
                      <Link to={`/applicants/${app.id}`}>
                        <div className="text-xs font-medium text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer">
                          {app.name}
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{app.age}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{t(getJobKey(app.desiredJob))}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{app.email}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{app.phone}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{formatDate(app.submittedDate)}</td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <Link to={`/applicants/${app.id}`}>
                        <Button
                          size="sm"
                          className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md transition-all text-xs"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          {t("applications.viewProfile")}
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Cancelled Applications Table - Collapsible */}
        {cancelledApplications.length > 0 && (
          <>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("applications.cancelledApplications")} ({cancelledApplications.length})
                </h2>
                <p className="text-gray-600 text-sm mt-1">{t("applications.cancelledSubtitle")}</p>
              </div>
              <Button
                onClick={() => setIsCancelledExpanded(!isCancelledExpanded)}
                variant="outline"
                className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {isCancelledExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    {t("applications.collapse")}
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    {t("applications.expand")}
                  </>
                )}
              </Button>
            </div>

            {isCancelledExpanded && (
              <Card className="shadow-xl overflow-hidden mb-8">
                <div className="overflow-x-auto overflow-y-visible">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold">
                          {t("applications.name")}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold">
                          {t("applications.age")}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold">
                          {t("applications.desiredJob")}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold">
                          {t("applications.email")}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold">
                          {t("applications.phone")}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold">
                          {t("applications.submittedDate")}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold">{t("applications.actions")}</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredCancelledApplications.map((app) => (
                        <tr key={app.id} className="hover:bg-red-50/50 transition-colors">
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-900">{app.name}</td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{app.age}</td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{t(getJobKey(app.desiredJob))}</td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{app.email}</td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{app.phone}</td>
                          <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600">{formatDate(app.submittedDate)}</td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeleteClick(app.id)}
                              className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 shadow-sm hover:shadow-md transition-all text-xs"
                              aria-label={t("applications.delete")}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}
          </>
        )}
      </main>

      {/* Delete Confirmation Dialog */}
      {deleteConfirmId !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("applications.deleteConfirm")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("applications.deleteMessage")}
            </p>
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={handleDeleteCancel}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {t("applications.deleteCancel")}
              </Button>
              <Button
                onClick={handleDeleteConfirm}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {t("applications.deleteConfirmButton")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
