import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { ArrowLeft, Bell, LogOut, Upload, FileText, X, Sparkles, Star, Loader2, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import mediverseLogo from "figma:asset/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NotificationDropdown from "../components/NotificationDropdown";
import { motion, AnimatePresence } from "motion/react";

interface JobInput {
  id: string;
  description?: string;
  file?: File;
  fileName?: string;
}

interface JobResult {
  id: string;
  jobTitle: string;
  matchingScore: number;
  reason: string;
  proposalReason: string;
  jobImage: string;
  postJoinImage: string;
  futureProspects: string;
}

export default function JobMatch() {
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [inputMethod, setInputMethod] = useState<"text" | "file">("text");
  const [jobs, setJobs] = useState<JobInput[]>([{ id: "1" }]);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<JobResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [inputSectionCollapsed, setInputSectionCollapsed] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState<Set<string>>(new Set());

  const handleAddJob = () => {
    const newId = (jobs.length + 1).toString();
    setJobs([...jobs, { id: newId }]);
  };

  const handleRemoveJob = (jobId: string) => {
    if (jobs.length > 1) {
      setJobs(jobs.filter(job => job.id !== jobId));
    }
  };

  const handleJobDescriptionChange = (jobId: string, description: string) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, description } : job
    ));
  };

  const handleFileUpload = (jobId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setJobs(jobs.map(job => 
        job.id === jobId ? { ...job, file, fileName: file.name } : job
      ));
    }
  };

  const handleRemoveFile = (jobId: string) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, file: undefined, fileName: undefined } : job
    ));
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setShowResults(false);
    
    // Simulate AI analysis
    setTimeout(() => {
      // Mock results based on the jobs
      const mockResults: JobResult[] = jobs.map((job, index) => {
        const scores = [5, 4, 3, 2, 1];
        const score = scores[index % scores.length];
        
        return {
          id: job.id,
          jobTitle: job.description?.split('\n')[0]?.substring(0, 50) || `Job Position ${index + 1}`,
          matchingScore: score,
          reason: score >= 4 
            ? "優れたスキルマッチと豊富な経験。候補者のバックグラウンドはこのポジションに非常に適しています。"
            : score === 3
            ? "適切なスキルセットですが、いくつかの領域でさらなる経験が必要です。"
            : "スキルのギャップがあり、このポジションには経験不足です。",
          proposalReason: score >= 4
            ? "この求人は候補者のキャリア目標と完全に一致し、成長の機会を提供します。チームは協力的で、候補者のコミュニケーションスキルを活かせる環境です。"
            : score === 3
            ? "この求人は候補者のスキルを活かせますが、一部のギャップを埋めるためのトレーニングが必要になる可能性があります。"
            : "",
          jobImage: "このポジションでは、候補者は日々の業務でチームと密接に協力し、プロジェクトをリードする機会があります。",
          postJoinImage: score >= 3 
            ? "入社後、候補者はチームの重要なメンバーとして、プロジェクトの計画と実行に貢献します。メンターシップを受けながら、リーダーシップスキルを開発する機会があります。"
            : "",
          futureProspects: score >= 3
            ? "この企業は急成長しており、次の3年間で市場シェアを拡大する計画です。候補者にはキャリアアップと昇進の明確な道筋があります。"
            : "",
        };
      });

      setResults(mockResults);
      setAnalyzing(false);
      setShowResults(true);
      setInputSectionCollapsed(true); // Collapse input section after analysis
    }, 3000);
  };

  const handleToggleJobSelection = (jobId: string) => {
    const newSelected = new Set(selectedJobs);
    if (newSelected.has(jobId)) {
      newSelected.delete(jobId);
    } else {
      newSelected.add(jobId);
    }
    setSelectedJobs(newSelected);
  };

  const handleDeleteJob = (jobId: string) => {
    setResults(results.filter(result => result.id !== jobId));
    // Also remove from selected if it was selected
    const newSelected = new Set(selectedJobs);
    newSelected.delete(jobId);
    setSelectedJobs(newSelected);
  };

  const handleAddToProfile = () => {
    if (selectedJobs.size === 0) {
      alert(t("match.selectJobsFirst"));
      return;
    }

    // Get selected job results
    const selectedJobResults = results.filter(result => selectedJobs.has(result.id));
    
    // Store in localStorage
    const existingJobs = localStorage.getItem(`matchedJobs_${id}`);
    const jobsList = existingJobs ? JSON.parse(existingJobs) : [];
    const updatedJobs = [...jobsList, ...selectedJobResults];
    localStorage.setItem(`matchedJobs_${id}`, JSON.stringify(updatedJobs));
    
    alert(t("match.jobsAddedToProfile"));
    navigate(`/applicants/${id}`);
  };

  const renderStars = (score: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= score
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
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
              <span className="text-xl font-semibold text-gray-800">{t("match.title")}</span>
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
        {/* Back Button */}
        <div className="flex items-center justify-between mb-6">
          <Link to={`/applicants/${id}`}>
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("match.backToProfile")}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("match.title")}</h1>
          <p className="text-gray-600 text-lg">{t("match.subtitle")}</p>
        </div>

        {/* Input Method Toggle */}
        <Card className="p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{t("match.inputMethod")}</h2>
            {showResults && (
              <button
                onClick={() => setInputSectionCollapsed(!inputSectionCollapsed)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                {inputSectionCollapsed ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronUp className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
          
          {!inputSectionCollapsed && (
            <>
              <div className="flex gap-4 mb-6">
                <Button
                  onClick={() => setInputMethod("text")}
                  variant={inputMethod === "text" ? "default" : "outline"}
                  className={inputMethod === "text" ? "bg-gradient-to-r from-indigo-600 to-indigo-700" : ""}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {t("match.pasteText")}
                </Button>
                <Button
                  onClick={() => setInputMethod("file")}
                  variant={inputMethod === "file" ? "default" : "outline"}
                  className={inputMethod === "file" ? "bg-gradient-to-r from-indigo-600 to-indigo-700" : ""}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {t("match.uploadFile")}
                </Button>
              </div>

              {/* Job Inputs */}
              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {t("match.jobDescription")} {index + 1}
                      </h3>
                      {jobs.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveJob(job.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    {inputMethod === "text" ? (
                      <Textarea
                        value={job.description || ""}
                        onChange={(e) => handleJobDescriptionChange(job.id, e.target.value)}
                        placeholder={t("match.pasteJobDesc")}
                        className="min-h-[150px] resize-none"
                      />
                    ) : (
                      <div>
                        {!job.fileName ? (
                          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors bg-gray-50">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-10 h-10 mb-3 text-gray-400" />
                              <p className="mb-2 text-sm text-gray-600">
                                <span className="font-semibold">{t("match.uploadText")}</span>
                              </p>
                              <p className="text-xs text-gray-500">{t("match.uploadFormats")}</p>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              accept=".png,.jpg,.jpeg,.pdf"
                              onChange={(e) => handleFileUpload(job.id, e)}
                            />
                          </label>
                        ) : (
                          <div className="flex items-center justify-between p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-indigo-600" />
                              <span className="text-sm font-medium text-gray-900">{job.fileName}</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveFile(job.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <X className="w-4 h-4" />
                              {t("match.removeFile")}
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Add Job Button */}
              <Button
                onClick={handleAddJob}
                variant="outline"
                className="w-full mt-4 border-dashed border-2"
              >
                {t("match.addJob")}
              </Button>

              {/* Analyze Button */}
              <Button
                onClick={handleAnalyze}
                disabled={analyzing || jobs.every(job => !job.description && !job.fileName)}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {analyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t("match.analyzing")}
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    {t("match.analyzeCompatibility")}
                  </>
                )}
              </Button>
            </>
          )}
        </Card>

        {/* AI Analysis Animation */}
        <AnimatePresence>
          {analyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6"
            >
              <Card className="p-8 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-4"
                  >
                    <Sparkles className="w-16 h-16 text-purple-600" />
                  </motion.div>
                  <p className="text-lg font-semibold text-gray-900 text-center">
                    {t("match.aiAnalyzing")}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="w-3 h-3 bg-purple-600 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="p-6 mb-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">{t("match.results")}</h2>
                </div>

                <div className="space-y-6">
                  {results.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-white to-gray-50"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {result.jobTitle}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-gray-700">
                              {t("match.matchingScore")}:
                            </span>
                            {renderStars(result.matchingScore)}
                          </div>
                        </div>
                        <Checkbox
                          checked={selectedJobs.has(result.id)}
                          onCheckedChange={() => handleToggleJobSelection(result.id)}
                          className="w-5 h-5"
                        />
                      </div>

                      {/* Reason */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          {t("match.reason")}:
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{result.reason}</p>
                      </div>

                      {/* Proposal Reason (only for high matches) */}
                      {result.matchingScore >= 3 && result.proposalReason && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            {t("match.proposalReason")}:
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{result.proposalReason}</p>
                        </div>
                      )}

                      {/* Job Image (only for high matches) */}
                      {result.matchingScore >= 3 && result.jobImage && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            {t("match.jobImage")}:
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{result.jobImage}</p>
                        </div>
                      )}

                      {/* Post-Join Image (only for high matches) */}
                      {result.matchingScore >= 3 && result.postJoinImage && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            {t("match.postJoinImage")}:
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{result.postJoinImage}</p>
                        </div>
                      )}

                      {/* Future Prospects (only for high matches) */}
                      {result.matchingScore >= 3 && result.futureProspects && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            {t("match.futureProspects")}:
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{result.futureProspects}</p>
                        </div>
                      )}

                      {/* Delete Button */}
                      <div className="flex justify-start pt-4 border-t border-gray-200">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteJob(result.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          {t("match.delete")}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Add to Profile Button */}
                <Button
                  onClick={handleAddToProfile}
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  {t("match.addToProfile")}
                </Button>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}