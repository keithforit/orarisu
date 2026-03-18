import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { ArrowLeft, Send, CheckCircle, Copy, History, Clock, Mail, FileText } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import mediverseLogo from "../../assets/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

type HistoryItem = {
  id: string;
  date: string;
  email: string;
  subject: string;
};

type FormStatus = "notStarted" | "inProgress" | "completed";

export default function SendResumeBuilder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  // Mock applicant data - in a real app, this would be fetched based on the ID
  const applicant = {
    id: id,
    name: "Tanaka Yuki",
    email: "tanaka.yuki@example.com",
  };

  // Get default message based on language
  const getDefaultMessage = () => {
    const messageFunc = t("sendResume.defaultMessage");
    if (typeof messageFunc === 'function') {
      return messageFunc(applicant.name);
    }
    return `Dear ${applicant.name},\n\nThank you for your time so far. To continue with the process, please complete the form at the link below with your resume information.\n\nhttps://mediverse-career.com/applicants/new/20260792/TY/applicant/resumebuilder/\n\nThank you.\n\nBest regards,\nOyama-san`;
  };

  const resumeBuilderLink = "https://mediverse-career.com/applicants/new/20260792/TY/applicant/resumebuilder/";

  const [email, setEmail] = useState(applicant.email);
  const [subject, setSubject] = useState(t("sendResume.defaultSubject"));
  const [message, setMessage] = useState(getDefaultMessage());
  const [isSending, setIsSending] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  
  // Mock history data - in a real app, this would be fetched from the backend
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: "1",
      date: "2026-03-15 14:30",
      email: "tanaka.yuki@example.com",
      subject: "Resume Builder - Next Steps",
    },
  ]);
  
  // Mock form status - in a real app, this would be tracked on the backend
  const [formStatus, setFormStatus] = useState<FormStatus>("inProgress");
  const [completionRate, setCompletionRate] = useState(60); // Percentage
  const [resendingId, setResendingId] = useState<string | null>(null);

  const handleCopyLink = async () => {
    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(resumeBuilderLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for environments where Clipboard API is blocked
        const textArea = document.createElement('textarea');
        textArea.value = resumeBuilderLink;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Fallback copy failed:', err);
        }
        
        document.body.removeChild(textArea);
      }
    } catch (err) {
      // If modern API fails, try fallback
      const textArea = document.createElement('textarea');
      textArea.value = resumeBuilderLink;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('All copy methods failed:', fallbackErr);
      }
      
      document.body.removeChild(textArea);
    }
  };

  const handleSend = () => {
    setIsSending(true);
    // Simulate sending email
    setTimeout(() => {
      setIsSending(false);
      // Add to history
      const newHistoryItem: HistoryItem = {
        id: String(Date.now()),
        date: new Date().toLocaleString('en-GB', { 
          year: 'numeric', 
          month: '2-digit', 
          day: '2-digit', 
          hour: '2-digit', 
          minute: '2-digit' 
        }).replace(',', ''),
        email: email,
        subject: subject,
      };
      setHistory([newHistoryItem, ...history]);
      setShowConfirmation(true);
    }, 1500);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    navigate(`/applicants/${id}`);
  };

  const handleResend = (historyItem: HistoryItem) => {
    setResendingId(historyItem.id);
    
    // Simulate resending email
    setTimeout(() => {
      // Add new entry to history
      const newHistoryItem: HistoryItem = {
        id: String(Date.now()),
        date: new Date().toLocaleString('en-GB', { 
          year: 'numeric', 
          month: '2-digit', 
          day: '2-digit', 
          hour: '2-digit', 
          minute: '2-digit' 
        }).replace(',', ''),
        email: historyItem.email,
        subject: historyItem.subject,
      };
      setHistory([newHistoryItem, ...history]);
      setResendingId(null);
    }, 1500);
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
              <span className="text-xl font-semibold text-gray-800">{t("sendResume.title")}</span>
            </div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to={`/applicants/${id}`}>
          <Button
            variant="outline"
            className="mb-6 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("sendResume.backToProfile")}
          </Button>
        </Link>

        {/* Page Title */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("sendResume.title")}</h1>
            <p className="text-gray-600 text-lg">{t("sendResume.subtitle")}</p>
          </div>
          
          {/* History Button */}
          <Button
            onClick={() => setShowHistory(true)}
            variant="outline"
            className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 flex items-center gap-2"
          >
            <History className="w-5 h-5" />
            {t("sendResume.history")}
          </Button>
        </div>

        {/* Form Card */}
        <Card className="p-8 shadow-xl">
          {/* Applicant Details */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t("sendResume.applicantDetails")}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">{t("sendResume.name")}</label>
                <p className="text-base text-gray-900 mt-1">{applicant.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">{t("sendResume.email")}</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Email Composition */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">{t("sendResume.message")}</h2>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                {t("sendResume.subject")}
              </label>
              <Input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder={t("sendResume.subject")}
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t("sendResume.messageBody")}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                placeholder={t("sendResume.messageBody")}
              />
            </div>

            {/* Resume Builder Link Preview */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-sm font-medium text-indigo-900 mb-2">{t("sendResume.linkPreview")}</p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-indigo-700 font-mono break-all flex-1">
                  {resumeBuilderLink}
                </p>
                <button
                  onClick={handleCopyLink}
                  className="flex-shrink-0 p-2 hover:bg-indigo-100 rounded-md transition-colors"
                  title={copied ? t("sendResume.copied") : t("sendResume.copyLink")}
                >
                  <Copy className={`w-5 h-5 ${copied ? 'text-emerald-600' : 'text-indigo-600'}`} />
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-600 mt-1 font-medium">{t("sendResume.copied")}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
            <Link to={`/applicants/${id}`}>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {t("sendResume.cancel")}
              </Button>
            </Link>
            <Button
              onClick={handleSend}
              disabled={isSending || !email.trim() || !subject.trim() || !message.trim()}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  {t("sendResume.sending")}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {t("sendResume.send")}
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{t("sendResume.sentSuccess")}</h2>
              <p className="text-gray-600 text-lg">{email}</p>
              <div className="flex items-center justify-end mt-6">
                <Button
                  onClick={handleConfirmationClose}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  {t("sendResume.close")}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* History Modal */}
        {showHistory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{t("sendResume.historyTitle")}</h2>
                  <Button
                    onClick={() => setShowHistory(false)}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    {t("sendResume.closeHistory")}
                  </Button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-8">
                {/* Form Status */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-lg font-semibold text-gray-900">{t("sendResume.formStatus")}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        formStatus === "completed" 
                          ? "bg-emerald-100 text-emerald-700" 
                          : formStatus === "inProgress"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {t(`sendResume.${formStatus}`)}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{t("sendResume.completionRate")}</span>
                        <span className="font-semibold">{completionRate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${completionRate}%` }}
                        />
                      </div>
                    </div>

                    {/* Summary Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-white rounded-lg p-4 border border-indigo-100">
                        <p className="text-xs text-gray-600 mb-1">{t("sendResume.sentCount")}</p>
                        <p className="text-2xl font-bold text-indigo-600">{history.length}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-indigo-100">
                        <p className="text-xs text-gray-600 mb-1">{t("sendResume.lastSent")}</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {history.length > 0 ? history[0].date : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email History */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    {t("sendResume.history")}
                  </h3>
                  
                  {history.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <Mail className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                      <p>{t("sendResume.noHistory")}</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {history.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="bg-indigo-100 rounded-full p-2 mt-1">
                                <Mail className="w-4 h-4 text-indigo-600" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 mb-1">{item.subject}</p>
                                <p className="text-sm text-gray-600 mb-1">{t("sendResume.emailSent")} <span className="font-medium">{item.email}</span></p>
                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {item.date}
                                </p>
                              </div>
                            </div>
                            <div>
                              <Button
                                onClick={() => handleResend(item)}
                                disabled={resendingId === item.id}
                                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {resendingId === item.id ? (
                                  <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                    {t("sendResume.resending")}
                                  </>
                                ) : (
                                  <>
                                    <Send className="w-4 h-4 mr-2" />
                                    {t("sendResume.resendEmail")}
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}