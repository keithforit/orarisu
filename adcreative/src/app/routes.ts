import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { ProgramPage } from "./components/ProgramPage";
import { HomePage } from "./components/HomePage";
import { ReportsPage } from "./components/ReportsPage";
import { ConversionsPage } from "./components/ConversionsPage";
import { TrackingLinkPage } from "./components/TrackingLinkPage";
import { ProfilePage } from "./components/ProfilePage";
import { PaymentHistoryPage } from "./components/PaymentHistoryPage";
import { ContactUsPage } from "./components/ContactUsPage";
import { AdCreativeDeckPage } from "./components/AdCreativeDeckPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "reports", Component: ReportsPage },
      { path: "conversions", Component: ConversionsPage },
      { path: "program", Component: ProgramPage },
      { path: "program/:id", Component: ProgramPage },
      { path: "program/:id/ad-creative-deck", Component: AdCreativeDeckPage },
      { path: "tracking-link", Component: TrackingLinkPage },
      { path: "profile", Component: ProfilePage },
      { path: "payment-history", Component: PaymentHistoryPage },
      { path: "contact", Component: ContactUsPage },
    ],
  },
]);