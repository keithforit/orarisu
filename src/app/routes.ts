import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage';
import { AdaptiveLanding } from './pages/AdaptiveLanding';
import { GeoAnalytics } from './pages/GeoAnalytics';
import { ContentStudio } from './pages/ContentStudio';
import { AuraNetwork } from './pages/AuraNetwork';
import { Compliance } from './pages/Compliance';
import { Contact } from './pages/Contact';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { Onboarding } from './pages/Onboarding';
import { AboutUs } from './pages/AboutUs';
import { Pricing } from './pages/Pricing';
import { RedirectToCompliance } from './pages/RedirectToCompliance';
import { Dashboard } from './pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'adaptive', Component: AdaptiveLanding },
      { path: 'geo-analytics', Component: GeoAnalytics },
      { path: 'content-studio', Component: ContentStudio },
      { path: 'aura-network', Component: AuraNetwork },
      { path: 'compliance', Component: Compliance },
      { path: 'enterprise-safety', Component: RedirectToCompliance },
      { path: 'contact', Component: Contact },
      { path: 'signup', Component: SignUp },
      { path: 'login', Component: Login },
      { path: 'onboarding', Component: Onboarding },
      { path: 'about', Component: AboutUs },
      { path: 'pricing', Component: Pricing },
    ],
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
]);