import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@aurora/common/dist/style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@styles/global.scss";
import ReactGA from "react-ga4";

const gaKey = import.meta.env.VITE_GOOGLE_ANALYTICS;

if (gaKey) {
  ReactGA.initialize(gaKey);
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
