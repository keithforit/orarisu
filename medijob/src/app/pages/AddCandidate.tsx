import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Bell, LogOut, FileText, ClipboardPaste, Image, Sparkles } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import mediverseLogo from "figma:asset/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NotificationDropdown from "../components/NotificationDropdown";

type InputMethod = "manual" | "paste" | "screenshot";

export default function AddCandidate() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<InputMethod>("manual");
  const [pasteText, setPasteText] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Manual entry form state
  const [formData, setFormData] = useState({
    nameKanji: "",
    nameKana: "",
    email: "",
    phone: "",
    age: "",
    gender: "Male",
    desiredJob: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasteSubmit = async () => {
    setIsProcessing(true);
    // Simulate AI parsing
    setTimeout(() => {
      alert("Text parsed successfully! Candidate profile created.");
      setIsProcessing(false);
      navigate("/applicants");
    }, 2000);
  };

  const handleScreenshotUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setScreenshot(file);
    }
  };

  const handleScreenshotSubmit = async () => {
    if (!screenshot) return;
    setIsProcessing(true);
    // Simulate AI extraction
    setTimeout(() => {
      alert("Screenshot processed successfully! Candidate profile created.");
      setIsProcessing(false);
      navigate("/applicants");
    }, 2500);
  };

  const handleManualSubmit = () => {
    // Validate basic fields
    if (!formData.nameKanji || !formData.email) {
      alert("Please fill in required fields (Name and Email)");
      return;
    }
    alert("Candidate added successfully!");
    navigate("/applicants");
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
              <span className="text-xl font-semibold text-gray-800">{t("addCandidate.title")}</span>
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
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/applicants">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("addCandidate.backToApplicants")}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("addCandidate.title")}</h1>
          <p className="text-gray-600 text-lg">{t("addCandidate.subtitle")}</p>
        </div>

        {/* Method Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Manual Entry */}
          <Card
            onClick={() => setSelectedMethod("manual")}
            className={`p-6 cursor-pointer transition-all hover:shadow-xl ${
              selectedMethod === "manual"
                ? "ring-2 ring-indigo-600 shadow-lg bg-indigo-50/50"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                selectedMethod === "manual" ? "bg-indigo-600" : "bg-gray-200"
              }`}>
                <FileText className={`w-8 h-8 ${selectedMethod === "manual" ? "text-white" : "text-gray-600"}`} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{t("addCandidate.manualEntry")}</h3>
              <p className="text-sm text-gray-600">{t("addCandidate.manualEntryDesc")}</p>
            </div>
          </Card>

          {/* Paste Text */}
          <Card
            onClick={() => setSelectedMethod("paste")}
            className={`p-6 cursor-pointer transition-all hover:shadow-xl ${
              selectedMethod === "paste"
                ? "ring-2 ring-indigo-600 shadow-lg bg-indigo-50/50"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                selectedMethod === "paste" ? "bg-indigo-600" : "bg-gray-200"
              }`}>
                <ClipboardPaste className={`w-8 h-8 ${selectedMethod === "paste" ? "text-white" : "text-gray-600"}`} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{t("addCandidate.pasteText")}</h3>
              <p className="text-sm text-gray-600">{t("addCandidate.pasteTextDesc")}</p>
            </div>
          </Card>

          {/* Upload Screenshot */}
          <Card
            onClick={() => setSelectedMethod("screenshot")}
            className={`p-6 cursor-pointer transition-all hover:shadow-xl ${
              selectedMethod === "screenshot"
                ? "ring-2 ring-indigo-600 shadow-lg bg-indigo-50/50"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                selectedMethod === "screenshot" ? "bg-indigo-600" : "bg-gray-200"
              }`}>
                <Image className={`w-8 h-8 ${selectedMethod === "screenshot" ? "text-white" : "text-gray-600"}`} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{t("addCandidate.uploadScreenshot")}</h3>
              <p className="text-sm text-gray-600">{t("addCandidate.uploadScreenshotDesc")}</p>
            </div>
          </Card>
        </div>

        {/* Input Area */}
        <Card className="p-8 shadow-xl">
          {/* Manual Entry Form */}
          {selectedMethod === "manual" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-indigo-600" />
                {t("addCandidate.manualEntry")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("addCandidate.nameKanji")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={formData.nameKanji}
                    onChange={(e) => handleInputChange("nameKanji", e.target.value)}
                    placeholder="田中 優希"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("addCandidate.nameKana")}</label>
                  <Input
                    value={formData.nameKana}
                    onChange={(e) => handleInputChange("nameKana", e.target.value)}
                    placeholder="たなか ゆうき"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("addCandidate.email")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="example@email.com"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("addCandidate.phone")}</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+81 90-1234-5678"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("addCandidate.age")}</label>
                  <Input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    placeholder="27"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("addCandidate.gender")}</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange("gender", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Male">{t("addCandidate.male")}</option>
                    <option value="Female">{t("addCandidate.female")}</option>
                    <option value="Other">{t("addCandidate.other")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("addCandidate.desiredJob")}</label>
                  <Input
                    value={formData.desiredJob}
                    onChange={(e) => handleInputChange("desiredJob", e.target.value)}
                    placeholder="Sales Manager"
                    className="border-gray-300"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={handleManualSubmit}
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all px-8"
                >
                  {t("addCandidate.addButton")}
                </Button>
              </div>
            </div>
          )}

          {/* Paste Text */}
          {selectedMethod === "paste" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ClipboardPaste className="w-6 h-6 text-indigo-600" />
                {t("addCandidate.pasteTitle")}
              </h2>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-4">
                  {t("addCandidate.pasteDescription")}
                </p>
                <textarea
                  value={pasteText}
                  onChange={(e) => setPasteText(e.target.value)}
                  placeholder={t("addCandidate.pastePlaceholder").replace(/\\n/g, '\n')}
                  className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 resize-none font-mono text-sm"
                />
              </div>
              <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <p className="text-sm text-indigo-900">
                  <strong>{t("addCandidate.aiPowered")}</strong> {t("addCandidate.aiParseDescription")}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={handlePasteSubmit}
                  disabled={!pasteText || isProcessing}
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                      {t("addCandidate.processing")}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      {t("addCandidate.parseButton")}
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Upload Screenshot */}
          {selectedMethod === "screenshot" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Image className="w-6 h-6 text-indigo-600" />
                {t("addCandidate.uploadTitle")}
              </h2>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-4">
                  {t("addCandidate.uploadDescription")}
                </p>
                
                {!screenshot ? (
                  <label className="flex flex-col items-center justify-center w-full h-96 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Image className="w-16 h-16 text-gray-400 mb-4" />
                      <p className="mb-2 text-sm text-gray-600">
                        <span className="font-semibold">{t("addCandidate.uploadText")}</span>
                      </p>
                      <p className="text-xs text-gray-500">{t("addCandidate.uploadFormats")}</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleScreenshotUpload}
                    />
                  </label>
                ) : (
                  <div className="border-2 border-indigo-500 rounded-lg p-6 bg-indigo-50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Image className="w-10 h-10 text-indigo-600" />
                        <div>
                          <p className="font-semibold text-gray-900">{screenshot.name}</p>
                          <p className="text-sm text-gray-600">
                            {(screenshot.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setScreenshot(null)}
                        className="border-gray-300"
                      >
                        {t("addCandidate.removeFile")}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <p className="text-sm text-indigo-900">
                  <strong>{t("addCandidate.aiVision")}</strong> {t("addCandidate.aiVisionDescription")}
                </p>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={handleScreenshotSubmit}
                  disabled={!screenshot || isProcessing}
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                      {t("addCandidate.extracting")}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      {t("addCandidate.extractButton")}
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}