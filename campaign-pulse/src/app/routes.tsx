import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { ConnectSocial } from "./components/ConnectSocial";
import { CampaignSelection } from "./components/CampaignSelection";
import { LoadingProgress } from "./components/LoadingProgress";
import { CalendarView } from "./components/CalendarView";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: ConnectSocial },
      { path: "campaign", Component: CampaignSelection },
      { path: "loading", Component: LoadingProgress },
      { path: "calendar", Component: CalendarView },
      { path: "*", Component: NotFound },
    ],
  },
]);