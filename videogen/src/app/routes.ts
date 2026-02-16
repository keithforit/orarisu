import { createBrowserRouter } from "react-router";
import CampaignsPage from "./pages/CampaignsPage";
import VideoGeneratorPage from "./pages/VideoGeneratorPage";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: CampaignsPage },
      { path: "generate-video/:campaignId", Component: VideoGeneratorPage },
    ],
  },
]);
