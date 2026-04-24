import "./App.css";
import MainView from "./components/MainView/MainView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchView from "./components/MatchView/MatchView";
import PremiumBuyView from "./components/PremiumBuyView/PremiumBuyView";
import FaqView from "./components/FaqView/FaqView";
import Settings from "./components/Settings/Settings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/match" element={<MatchView />} />
        <Route path="/premium" element={<PremiumBuyView />} />
        <Route path="/faq" element={<FaqView />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
