import "./App.css";
import MainView from "./components/MainView/MainView";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ProfileView from "./components/ProfileView/ProfileView";
import MatchView from "./components/MatchView/MatchView";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/profile/:id" element={<ProfileView />} />

        <Route path="/profile" element={<ProfileView />} />
        <Route path="/match" element={<MatchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;