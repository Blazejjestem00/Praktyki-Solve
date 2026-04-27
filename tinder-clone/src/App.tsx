import "./App.css";
import MainView from "./components/MainView/MainView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchView from "./components/MatchView/MatchView";
import PremiumBuyView from "./components/PremiumBuyView/PremiumBuyView";
import FaqView from "./components/FaqView/FaqView";
import SettingsView from "./components/Settings/SettingsView";
import type { User } from "./services/api";
import MapView from "./components/MapView/MapView";
// tymczasowo — pierwszy user = zalogowany
const currentUser: User = {
  id: 1,
  name: "Jan",
  surname: "Kowalski",
  age: 25,
  email: "jan.kowalski@test.pl",
  interests: ["siłownia", "kolarstwo", "bieganie"],
  instagram: "jan_fit25",
  caption: "Hej, jestem Jan 🙂",
  created_at: "",
  photoUrl: ["https://randomuser.me/api/portraits/men/1.jpg"],
};
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.setAttribute("data-theme", savedTheme);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/match" element={<MatchView />} />
        <Route path="/premium" element={<PremiumBuyView />} />
        <Route path="/faq" element={<FaqView />} />
        <Route path="/maps" element={<MapView />} />
        <Route
          path="/settings"
          element={<SettingsView person={currentUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
