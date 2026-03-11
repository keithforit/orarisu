import { Outlet } from "react-router";
import { LanguageProvider } from "./contexts/LanguageContext";

// v6 - 2026-03-11T17:30:00 - LanguageProvider wrapper with fixed routing and cache bust
export default function Root() {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}