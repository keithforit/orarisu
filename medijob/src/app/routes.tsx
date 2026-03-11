import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Applicants from "./pages/Applicants";
import ApplicantProfile from "./pages/ApplicantProfile";
import AddCandidate from "./pages/AddCandidate";
import Calendar from "./pages/Calendar";
import Applications from "./pages/Applications";
import JobMatch from "./pages/JobMatch";
import { LanguageProvider } from "./contexts/LanguageContext";

// v6 - Updated 2026-03-11T17:30:00 - Fixed LanguageProvider wrapping with element prop
function ErrorBoundary() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops!</h1>
          <p className="text-gray-600 mb-4">Something went wrong.</p>
          <a href="/" className="text-indigo-600 hover:text-indigo-700">
            Go back home
          </a>
        </div>
      </div>
    </LanguageProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apply",
        element: <Apply />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "applicants",
        element: <Applicants />,
      },
      {
        path: "applicants/:id",
        element: <ApplicantProfile />,
      },
      {
        path: "applicants/:id/match",
        element: <JobMatch />,
      },
      {
        path: "applications",
        element: <Applications />,
      },
      {
        path: "add-candidate",
        element: <AddCandidate />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
]);