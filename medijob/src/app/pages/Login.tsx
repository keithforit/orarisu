import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import mediverseLogo from "../../assets/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check credentials using auth context
    const success = login(email, password);
    
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px] opacity-20"></div>

      {/* Top Bar */}
      <div className="absolute top-8 left-0 right-0 flex items-center justify-between px-8">
        <Link 
          to="/" 
          className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>{t("login.back")}</span>
        </Link>
        <LanguageSwitcher />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <Card className="bg-white/95 backdrop-blur-xl shadow-2xl p-8 rounded-3xl border border-white/20">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={mediverseLogo} 
              alt="Mediverse Logo" 
              className="h-10 object-contain"
            />
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t("login.email")}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  placeholder={t("login.emailPlaceholder")}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {t("login.password")}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  placeholder={t("login.passwordPlaceholder")}
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-center justify-end">
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                {t("login.forgot")}
              </a>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:animate-pulse hover:border-2 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(34,211,238,0.6),0_0_60px_rgba(34,211,238,0.4)]"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {t("login.signingIn")}
                </span>
              ) : (
                t("login.signin")
              )}
            </Button>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
              {t("login.error")}
            </div>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">{t("login.noAccess")}</span>
            </div>
          </div>

          {/* Contact Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              {t("login.contact")}
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}