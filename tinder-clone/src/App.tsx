import "./App.css";
import MainView from "./components/MainView/MainView";
import ProfileView from "./components/ProfileView/ProfileView";
import MatchView from "./components/MatchView/MatchView";
import Login from "./components/Login/Login";
import LogOut from "./components/LogOut/LogOut";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const [isLocalLogged, setIsLocalLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  useEffect(() => {
    const handler = () => {
      setIsLocalLogged(localStorage.getItem("isLogged") === "true");
    };

    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const isLogged = isAuthenticated || isLocalLogged;

  if (isLoading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      {!isLogged ? (
        <Login />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/profile/:id" element={<ProfileView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/match" element={<MatchView />} />
          </Routes>

          <LogOut />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;