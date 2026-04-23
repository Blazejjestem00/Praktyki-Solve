import "./App.css";
import MainView from "./components/MainView/MainView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchView from "./components/MatchView/MatchView";
import PremiumBuyView from "./components/PremiumBuyView/PremiumBuyView";
import MapView from "./components/MapView/MapView";
import FaqView from "./components/FaqView/FaqView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/match" element={<MatchView />} />
        <Route path="/premium" element={<PremiumBuyView />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/faq" element={<FaqView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
