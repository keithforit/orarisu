import { Link } from "react-router";
import mediverseLogo from "../../assets/033be242c2b57d0c297161f9934e633207a10d29.png";

export default function Footer() {
  return (
    <footer className="bg-indigo-50 border-t border-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={mediverseLogo} alt="Mediverse" className="h-8 w-auto" />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/terms" className="text-gray-700 hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-700 hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/company" className="text-gray-700 hover:text-gray-900 transition-colors">
              Company Information
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact Us
            </Link>
          </nav>

          <p className="text-sm text-gray-600">
            © Mediverse powered by Professional Recruiting Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}