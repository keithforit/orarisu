import { useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Upload, Plus, X } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import mediverseLogo from "../../assets/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

interface WorkExperience {
  id: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  responsibilities: string;
}

interface Education {
  id: string;
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  graduationDate: string;
}

interface License {
  id: string;
  licenseName: string;
  issuingOrganization: string;
  dateObtained: string;
}

export default function ResumeBuilder() {
  const { t } = useLanguage();
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Step 1: Resume File Information
  const [fileInfo, setFileInfo] = useState({
    fileName: "",
    creationDate: new Date().toISOString().split('T')[0],
  });
  
  // Step 2: ID Photo
  const [idPhoto, setIdPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  
  // Step 3: Profile Information
  const [profileInfo, setProfileInfo] = useState({
    familyName: "",
    givenName: "",
    familyNameKana: "",
    givenNameKana: "",
    dateOfBirth: "",
    gender: "male",
  });
  
  // Step 4: Current Address / Contact Information
  const [contactInfo, setContactInfo] = useState({
    postalCode: "",
    currentAddress: "",
    currentAddressKana: "",
    email: "",
    phoneNumber: "",
  });
  
  // Step 5: Experience (Education, Work History, Licenses)
  const [educationList, setEducationList] = useState<Education[]>([
    { id: "1", schoolName: "", degree: "", fieldOfStudy: "", graduationDate: "" }
  ]);
  
  const [workHistory, setWorkHistory] = useState<WorkExperience[]>([
    { id: "1", companyName: "", position: "", startDate: "", endDate: "", currentlyWorking: false, responsibilities: "" }
  ]);
  
  const [licenses, setLicenses] = useState<License[]>([
    { id: "1", licenseName: "", issuingOrganization: "", dateObtained: "" }
  ]);

  // Step 6: Motivation for Application / Self-Promotion
  const [motivation, setMotivation] = useState({
    applicationReason: "",
    selfPromotion: "",
    careerGoals: ""
  });

  // Step 7: Commuting Time & Family
  const [commutingFamily, setCommutingFamily] = useState({
    commutingTime: "",
    transportationMethod: "",
    dependents: "",
    spouseEmploymentStatus: ""
  });

  // Step 8: Personal Requests
  const [personalRequests, setPersonalRequests] = useState({
    salaryExpectations: "",
    desiredWorkLocation: "",
    startDate: "",
    otherRequests: ""
  });

  const totalSteps = 9;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, label: t("resumeBuilder.step1") },
    { number: 2, label: t("resumeBuilder.step2") },
    { number: 3, label: t("resumeBuilder.step3") },
    { number: 4, label: t("resumeBuilder.step4") },
    { number: 5, label: t("resumeBuilder.step5") },
    { number: 6, label: t("resumeBuilder.step6") },
    { number: 7, label: t("resumeBuilder.step7") },
    { number: 8, label: t("resumeBuilder.step8") },
    { number: 9, label: t("resumeBuilder.step9") },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      alert(t("resumeBuilder.successMessage"));
      setIsSubmitting(false);
    }, 2000);
  };

  // Photo upload handlers
  const handlePhotoUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setIdPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handlePhotoUpload(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handlePhotoUpload(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={mediverseLogo} alt="Mediverse" className="h-8 w-auto" />
              <span className="text-xl font-semibold text-gray-800">{t("resumeBuilder.title")}</span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-2xl font-bold text-gray-900">{t("resumeBuilder.subtitle")}</h1>
            <span className="text-sm font-medium text-gray-600">
              {currentStep} / {totalSteps}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* Step indicators */}
          <div className="flex justify-between">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-2 transition-all ${
                    step.number < currentStep
                      ? "bg-green-500 text-white"
                      : step.number === currentStep
                      ? "bg-indigo-600 text-white ring-4 ring-indigo-200"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step.number < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step.number}
                </div>
                <span className={`text-xs font-medium text-center max-w-[80px] ${step.number === currentStep ? "text-indigo-600" : "text-gray-500"}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-8 shadow-xl bg-white/90 backdrop-blur-sm">
          {/* Step 1: Resume File Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {t("resumeBuilder.step1")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.fileName")}
                  </label>
                  <Input
                    value={fileInfo.fileName}
                    onChange={(e) => setFileInfo({ ...fileInfo, fileName: e.target.value })}
                    placeholder="MyResume.pdf"
                    className="border-gray-300"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    {t("resumeBuilder.fileNameNote")}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.creationDate")}
                  </label>
                  <Input
                    type="date"
                    value={fileInfo.creationDate}
                    onChange={(e) => setFileInfo({ ...fileInfo, creationDate: e.target.value })}
                    className="border-gray-300"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: ID Photo */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {t("resumeBuilder.step2")}
              </h2>

              {/* ID Photo Upload Area */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("resumeBuilder.idPhoto")}
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                    isDragging 
                      ? 'border-indigo-500 bg-indigo-50' 
                      : photoPreview 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-300 bg-gray-50 hover:border-indigo-400 hover:bg-indigo-50'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('photoInput')?.click()}
                >
                  {photoPreview ? (
                    <div className="relative w-48 h-64 mx-auto">
                      <img 
                        src={photoPreview} 
                        alt="ID Photo" 
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        style={{ aspectRatio: '4 / 3' }}
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPhotoPreview("");
                          setIdPhoto(null);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-all"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-base font-medium text-gray-700 mb-2">
                        {t("resumeBuilder.uploadPhoto")}
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, JPEG (4:3 aspect ratio recommended)
                      </p>
                    </div>
                  )}
                  <input
                    type="file"
                    id="photoInput"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Photo Requirements */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">{t("resumeBuilder.photoRequirementsTitle")}</h3>
                <div className="text-sm text-blue-800 space-y-1 whitespace-pre-line">
                  {t("resumeBuilder.photoRequirements")}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Profile Information */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {t("resumeBuilder.step3")}
              </h2>
              <div className="space-y-6">
                {/* Full Name Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("resumeBuilder.fullName")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("resumeBuilder.familyName")}
                      </label>
                      <Input
                        value={profileInfo.familyName}
                        onChange={(e) => setProfileInfo({ ...profileInfo, familyName: e.target.value })}
                        placeholder="田中"
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("resumeBuilder.givenName")}
                      </label>
                      <Input
                        value={profileInfo.givenName}
                        onChange={(e) => setProfileInfo({ ...profileInfo, givenName: e.target.value })}
                        placeholder="太郎"
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Full Name (Kana) Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("resumeBuilder.fullNameKana")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("resumeBuilder.familyNameKana")}
                      </label>
                      <Input
                        value={profileInfo.familyNameKana}
                        onChange={(e) => setProfileInfo({ ...profileInfo, familyNameKana: e.target.value })}
                        placeholder="たなか"
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("resumeBuilder.givenNameKana")}
                      </label>
                      <Input
                        value={profileInfo.givenNameKana}
                        onChange={(e) => setProfileInfo({ ...profileInfo, givenNameKana: e.target.value })}
                        placeholder="たろう"
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Date of Birth and Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("resumeBuilder.dateOfBirth")}
                    </label>
                    <Input
                      type="date"
                      value={profileInfo.dateOfBirth}
                      onChange={(e) => setProfileInfo({ ...profileInfo, dateOfBirth: e.target.value })}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("resumeBuilder.gender")}
                    </label>
                    <select
                      value={profileInfo.gender}
                      onChange={(e) => setProfileInfo({ ...profileInfo, gender: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="male">{t("resumeBuilder.male")}</option>
                      <option value="female">{t("resumeBuilder.female")}</option>
                    </select>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.email")}
                  </label>
                  <Input
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    placeholder="example@example.com"
                    className="border-gray-300"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.phoneNumber")}
                  </label>
                  <Input
                    value={contactInfo.phoneNumber}
                    onChange={(e) => setContactInfo({ ...contactInfo, phoneNumber: e.target.value })}
                    placeholder="012-3456-7890"
                    className="border-gray-300"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Current Address / Contact Information */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {t("resumeBuilder.step4")}
              </h2>
              <div className="space-y-6">
                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.postalCode")}
                  </label>
                  <Input
                    value={contactInfo.postalCode}
                    onChange={(e) => setContactInfo({ ...contactInfo, postalCode: e.target.value })}
                    placeholder="123-4567"
                    className="border-gray-300"
                  />
                </div>

                {/* Current Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.currentAddress")}
                  </label>
                  <Input
                    value={contactInfo.currentAddress}
                    onChange={(e) => setContactInfo({ ...contactInfo, currentAddress: e.target.value })}
                    placeholder="東京都中央区"
                    className="border-gray-300"
                  />
                </div>

                {/* Current Address (Kana) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.currentAddressKana")}
                  </label>
                  <Input
                    value={contactInfo.currentAddressKana}
                    onChange={(e) => setContactInfo({ ...contactInfo, currentAddressKana: e.target.value })}
                    placeholder="とうきょうとちゅうおうく"
                    className="border-gray-300"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Experience (Education, Work History, Licenses) */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {t("resumeBuilder.step5")}
              </h2>

              {/* Education Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{t("resumeBuilder.education")}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t("resumeBuilder.educationRequired")}</p>
                  </div>
                  <Button
                    onClick={() => {
                      const newEducation: Education = {
                        id: Date.now().toString(),
                        schoolName: "",
                        degree: "",
                        fieldOfStudy: "",
                        graduationDate: ""
                      };
                      setEducationList([...educationList, newEducation]);
                    }}
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    {t("resumeBuilder.addEducation")}
                  </Button>
                </div>
                <div className="space-y-3">
                  {educationList.map((edu) => (
                    <div key={edu.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <Input
                          value={edu.schoolName}
                          onChange={(e) => setEducationList(educationList.map(e => e.id === edu.id ? { ...e, schoolName: e.target.value } : e))}
                          placeholder={t("resumeBuilder.schoolName")}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="w-48">
                        <select
                          value={edu.degree}
                          onChange={(e) => setEducationList(educationList.map(e => e.id === edu.id ? { ...e, degree: e.target.value } : e))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="High School">{t("resumeBuilder.highSchool")}</option>
                          <option value="Associate Degree">{t("resumeBuilder.associateDegree")}</option>
                          <option value="Bachelor's Degree">{t("resumeBuilder.bachelorsDegree")}</option>
                          <option value="Master's Degree">{t("resumeBuilder.mastersDegree")}</option>
                          <option value="Doctorate">{t("resumeBuilder.doctorate")}</option>
                        </select>
                      </div>
                      <div className="w-48">
                        <Input
                          value={edu.fieldOfStudy}
                          onChange={(e) => setEducationList(educationList.map(e => e.id === edu.id ? { ...e, fieldOfStudy: e.target.value } : e))}
                          placeholder={t("resumeBuilder.fieldOfStudy")}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="w-48">
                        <Input
                          type="date"
                          value={edu.graduationDate}
                          onChange={(e) => setEducationList(educationList.map(e => e.id === edu.id ? { ...e, graduationDate: e.target.value } : e))}
                          className="border-gray-300"
                        />
                      </div>
                      {educationList.length > 1 && (
                        <button
                          onClick={() => setEducationList(educationList.filter(e => e.id !== edu.id))}
                          className="text-red-600 hover:text-red-800 p-1"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Work History Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{t("resumeBuilder.workHistory")}</h3>
                  <Button
                    onClick={() => {
                      const newWork: WorkExperience = {
                        id: Date.now().toString(),
                        companyName: "",
                        position: "",
                        startDate: "",
                        endDate: "",
                        currentlyWorking: false,
                        responsibilities: ""
                      };
                      setWorkHistory([...workHistory, newWork]);
                    }}
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    {t("resumeBuilder.addWork")}
                  </Button>
                </div>
                <div className="space-y-3">
                  {workHistory.map((work) => (
                    <div key={work.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <Input
                          value={work.companyName}
                          onChange={(e) => setWorkHistory(workHistory.map(e => e.id === work.id ? { ...e, companyName: e.target.value } : e))}
                          placeholder={t("resumeBuilder.companyName")}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="w-48">
                        <Input
                          value={work.position}
                          onChange={(e) => setWorkHistory(workHistory.map(e => e.id === work.id ? { ...e, position: e.target.value } : e))}
                          placeholder={t("resumeBuilder.position")}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="w-48">
                        <Input
                          type="date"
                          value={work.startDate}
                          onChange={(e) => setWorkHistory(workHistory.map(e => e.id === work.id ? { ...e, startDate: e.target.value } : e))}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="w-48">
                        <Input
                          type="date"
                          value={work.endDate}
                          onChange={(e) => setWorkHistory(workHistory.map(e => e.id === work.id ? { ...e, endDate: e.target.value } : e))}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="w-48">
                        <select
                          value={work.currentlyWorking ? "true" : "false"}
                          onChange={(e) => setWorkHistory(workHistory.map(e => e.id === work.id ? { ...e, currentlyWorking: e.target.value === "true" } : e))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="false">{t("resumeBuilder.no")}</option>
                          <option value="true">{t("resumeBuilder.yes")}</option>
                        </select>
                      </div>
                      <div className="w-48">
                        <Input
                          value={work.responsibilities}
                          onChange={(e) => setWorkHistory(workHistory.map(e => e.id === work.id ? { ...e, responsibilities: e.target.value } : e))}
                          placeholder={t("resumeBuilder.responsibilities")}
                          className="border-gray-300"
                        />
                      </div>
                      {workHistory.length > 1 && (
                        <button
                          onClick={() => setWorkHistory(workHistory.filter(e => e.id !== work.id))}
                          className="text-red-600 hover:text-red-800 p-1"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Licenses Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{t("resumeBuilder.licenses")}</h3>
                  <Button
                    onClick={() => {
                      const newLicense: License = {
                        id: Date.now().toString(),
                        licenseName: "",
                        issuingOrganization: "",
                        dateObtained: ""
                      };
                      setLicenses([...licenses, newLicense]);
                    }}
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    {t("resumeBuilder.addLicense")}
                  </Button>
                </div>
                <div className="space-y-3">
                  {licenses.map((license) => (
                    <div key={license.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <Input
                          value={license.licenseName}
                          onChange={(e) => setLicenses(licenses.map(e => e.id === license.id ? { ...e, licenseName: e.target.value } : e))}
                          placeholder={t("resumeBuilder.licenseName")}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="w-48">
                        <Input
                          value={license.issuingOrganization}
                          onChange={(e) => setLicenses(licenses.map(e => e.id === license.id ? { ...e, issuingOrganization: e.target.value } : e))}
                          placeholder={t("resumeBuilder.issuingOrganization")}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="w-48">
                        <Input
                          type="date"
                          value={license.dateObtained}
                          onChange={(e) => setLicenses(licenses.map(e => e.id === license.id ? { ...e, dateObtained: e.target.value } : e))}
                          className="border-gray-300"
                        />
                      </div>
                      {licenses.length > 1 && (
                        <button
                          onClick={() => setLicenses(licenses.filter(e => e.id !== license.id))}
                          className="text-red-600 hover:text-red-800 p-1"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Motivation for Application / Self-Promotion */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {t("resumeBuilder.step6")}
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.applicationReason")}
                  </label>
                  <textarea
                    value={motivation.applicationReason}
                    onChange={(e) => setMotivation({ ...motivation, applicationReason: e.target.value })}
                    placeholder={t("resumeBuilder.applicationReasonPlaceholder")}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.selfPromotion")}
                  </label>
                  <textarea
                    value={motivation.selfPromotion}
                    onChange={(e) => setMotivation({ ...motivation, selfPromotion: e.target.value })}
                    placeholder={t("resumeBuilder.selfPromotionPlaceholder")}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.careerGoals")}
                  </label>
                  <textarea
                    value={motivation.careerGoals}
                    onChange={(e) => setMotivation({ ...motivation, careerGoals: e.target.value })}
                    placeholder={t("resumeBuilder.careerGoalsPlaceholder")}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Commuting Time & Family */}
          {currentStep === 7 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {t("resumeBuilder.step7")}
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("resumeBuilder.commutingTime")}
                    </label>
                    <Input
                      value={commutingFamily.commutingTime}
                      onChange={(e) => setCommutingFamily({ ...commutingFamily, commutingTime: e.target.value })}
                      placeholder={t("resumeBuilder.commutingTimePlaceholder")}
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("resumeBuilder.transportationMethod")}
                    </label>
                    <Input
                      value={commutingFamily.transportationMethod}
                      onChange={(e) => setCommutingFamily({ ...commutingFamily, transportationMethod: e.target.value })}
                      placeholder={t("resumeBuilder.transportationMethodPlaceholder")}
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("resumeBuilder.dependents")}
                    </label>
                    <Input
                      value={commutingFamily.dependents}
                      onChange={(e) => setCommutingFamily({ ...commutingFamily, dependents: e.target.value })}
                      placeholder={t("resumeBuilder.dependentsPlaceholder")}
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("resumeBuilder.spouseEmploymentStatus")}
                    </label>
                    <select
                      value={commutingFamily.spouseEmploymentStatus}
                      onChange={(e) => setCommutingFamily({ ...commutingFamily, spouseEmploymentStatus: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">{t("resumeBuilder.selectOption")}</option>
                      <option value="employed">{t("resumeBuilder.employed")}</option>
                      <option value="unemployed">{t("resumeBuilder.unemployed")}</option>
                      <option value="n/a">{t("resumeBuilder.notApplicable")}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 8: Personal Requests */}
          {currentStep === 8 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {t("resumeBuilder.step8")}
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("resumeBuilder.salaryExpectations")}
                    </label>
                    <Input
                      value={personalRequests.salaryExpectations}
                      onChange={(e) => setPersonalRequests({ ...personalRequests, salaryExpectations: e.target.value })}
                      placeholder={t("resumeBuilder.salaryExpectationsPlaceholder")}
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("resumeBuilder.desiredWorkLocation")}
                    </label>
                    <Input
                      value={personalRequests.desiredWorkLocation}
                      onChange={(e) => setPersonalRequests({ ...personalRequests, desiredWorkLocation: e.target.value })}
                      placeholder={t("resumeBuilder.desiredWorkLocationPlaceholder")}
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.startDate")}
                  </label>
                  <Input
                    type="date"
                    value={personalRequests.startDate}
                    onChange={(e) => setPersonalRequests({ ...personalRequests, startDate: e.target.value })}
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("resumeBuilder.otherRequests")}
                  </label>
                  <textarea
                    value={personalRequests.otherRequests}
                    onChange={(e) => setPersonalRequests({ ...personalRequests, otherRequests: e.target.value })}
                    placeholder={t("resumeBuilder.otherRequestsPlaceholder")}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 9: Review & Submit */}
          {currentStep === 9 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t("resumeBuilder.step9")}
              </h2>
              <p className="text-gray-600 mb-6">{t("resumeBuilder.reviewMessage")}</p>
              
              <div className="space-y-6">
                {/* File Info Summary */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("resumeBuilder.step1")}</h3>
                  <p className="text-sm text-gray-700"><strong>{t("resumeBuilder.fileName")}:</strong> {fileInfo.fileName || "—"}</p>
                  <p className="text-sm text-gray-700"><strong>{t("resumeBuilder.creationDate")}:</strong> {fileInfo.creationDate || "—"}</p>
                </div>

                {/* Profile Summary */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("resumeBuilder.step3")}</h3>
                  <p className="text-sm text-gray-700"><strong>{t("resumeBuilder.fullName")}:</strong> {profileInfo.familyName} {profileInfo.givenName}</p>
                  <p className="text-sm text-gray-700"><strong>{t("resumeBuilder.dateOfBirth")}:</strong> {profileInfo.dateOfBirth || "—"}</p>
                  <p className="text-sm text-gray-700"><strong>{t("resumeBuilder.email")}:</strong> {contactInfo.email || "—"}</p>
                </div>

                {/* Confirmation Message */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    {t("resumeBuilder.confirmMessage")}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("resumeBuilder.previous")}
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                {t("resumeBuilder.next")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                {isSubmitting ? t("resumeBuilder.submitting") : t("resumeBuilder.submit")}
                {!isSubmitting && <CheckCircle2 className="w-4 h-4" />}
              </Button>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}
