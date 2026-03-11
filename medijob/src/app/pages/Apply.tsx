import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Upload, X, CheckCircle2, Send } from "lucide-react";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export default function Apply() {
  const { t } = useLanguage();
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const clearFile = () => {
    setFileName("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
    alert("Application submitted! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8 font-medium group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t("apply.back")}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <CheckCircle2 className="w-4 h-4" />
              {t("apply.badge")}
            </motion.div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("apply.title")}
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t("apply.titleGradient")}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("apply.subtitle")}
            </p>
          </div>
          
          <Card className="p-8 lg:p-12 shadow-2xl border-2 border-indigo-100/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{t("apply.section1")}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">{t("apply.firstName")} *</Label>
                    <Input 
                      id="firstName" 
                      placeholder={t("apply.firstNamePlaceholder")} 
                      required 
                      className="h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">{t("apply.lastName")} *</Label>
                    <Input 
                      id="lastName" 
                      placeholder={t("apply.lastNamePlaceholder")} 
                      required 
                      className="h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">{t("apply.email")} *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t("apply.emailPlaceholder")} 
                    required 
                    className="h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">{t("apply.phone")} *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder={t("apply.phonePlaceholder")} 
                    required 
                    className="h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              
              {/* Professional Background */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{t("apply.section2")}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentRole" className="text-gray-700 font-medium">{t("apply.currentRole")}</Label>
                    <Input 
                      id="currentRole" 
                      placeholder={t("apply.currentRolePlaceholder")} 
                      className="h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-gray-700 font-medium">{t("apply.experience")}</Label>
                    <Input 
                      id="experience" 
                      type="number" 
                      placeholder={t("apply.experiencePlaceholder")} 
                      min="0" 
                      className="h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-gray-700 font-medium">{t("apply.goals")} *</Label>
                  <Textarea
                    id="goals"
                    placeholder={t("apply.goalsPlaceholder")}
                    rows={5}
                    required
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                  />
                </div>
              </div>
              
              {/* Documents */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{t("apply.section3")}</h2>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-gray-700 font-medium">{t("apply.resume")}</Label>
                  <div className="relative">
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 border-2 border-dashed border-indigo-300 rounded-xl p-8 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/50 transition-all group"
                    >
                      {fileName ? (
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-3 rounded-lg">
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium text-gray-900">{fileName}</div>
                            <div className="text-sm text-gray-500">{t("apply.changeFile")}</div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              clearFile();
                            }}
                            className="ml-auto text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="bg-indigo-100 p-4 rounded-full inline-flex mb-3 group-hover:bg-indigo-200 transition-colors">
                            <Upload className="w-8 h-8 text-indigo-600" />
                          </div>
                          <div className="font-medium text-gray-900 mb-1">{t("apply.uploadText")}</div>
                          <div className="text-sm text-gray-500">{t("apply.uploadFormats")}</div>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="referral" className="text-gray-700 font-medium">{t("apply.referral")}</Label>
                  <Input 
                    id="referral" 
                    placeholder={t("apply.referralPlaceholder")} 
                    className="h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all rounded-xl"
                >
                  {t("apply.submit")}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <p className="text-sm text-center text-gray-500 pt-4">
                {t("apply.terms")}
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}