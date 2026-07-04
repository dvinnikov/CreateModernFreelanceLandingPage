import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AdminStats from "./app/AdminStats";
import { initSiteAnalytics } from "./lib/siteAnalytics";
import "./styles/index.css";

const isAdminStats = window.location.pathname === "/admin/stats";

if (!isAdminStats) {
  initSiteAnalytics();
}

createRoot(document.getElementById("root")!).render(isAdminStats ? <AdminStats /> : <App />);
