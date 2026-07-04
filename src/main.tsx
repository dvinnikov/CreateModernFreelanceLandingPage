import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { initSiteAnalytics } from "./lib/siteAnalytics";
import "./styles/index.css";

initSiteAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
