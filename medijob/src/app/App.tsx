import { RouterProvider } from "react-router";
import { router } from "./routes";

// v6 - 2026-03-11T17:30:00 - LanguageProvider moved to Root component with cache bust fix
export default function App() {
  return <RouterProvider router={router} />;
}