import "./App.css";
import MainView from "./components/MainView/MainView";
import ProfileView from "./components/ProfileView/ProfileView";
import MatchView from "./components/MatchView/MatchView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./LoginButton";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Ładowanie...</div>;

  if (!isAuthenticated) {
    return <LoginButton />;
  }

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