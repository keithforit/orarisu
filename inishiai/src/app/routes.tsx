import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { DashboardPage } from "./pages/DashboardPage";
import { CreateJobPage } from "./pages/CreateJobPage";
import { JobMatchesPage } from "./pages/JobMatchesPage";
import { CandidateProfilePage } from "./pages/CandidateProfilePage";
import { BillingPage } from "./pages/BillingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/pricing",
    Component: PricingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/dashboard",
    Component: DashboardPage,
  },
  {
    path: "/create-job",
    Component: CreateJobPage,
  },
  {
    path: "/job-matches/:id",
    Component: JobMatchesPage,
  },
  {
    path: "/candidate/:id",
    Component: CandidateProfilePage,
  },
  {
    path: "/billing",
    Component: BillingPage,
  },
]);