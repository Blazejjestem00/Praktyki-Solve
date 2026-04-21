import "./App.css";
import MainView from "./components/MainView/MainView";
import MatchView from "./components/MatchView/MatchView";
import Login from "./components/Login/Login";
import LogOut from "./components/LogOut/LogOut";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const [isLocalLogged, setIsLocalLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  const isLogged = isAuthenticated || isLocalLogged;

  if (isLoading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      {!isLogged ? (
        <Login setIsLocalLogged={setIsLocalLogged} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/match" element={<MatchView />} />
          </Routes>

          <LogOut setIsLocalLogged={setIsLocalLogged} />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;