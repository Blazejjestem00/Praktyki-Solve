import { useState } from "react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";

function Settings() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const navigate = useNavigate();

  return (
    <div className={`settings-page ${theme}`}>
      <div className="settings-container">
        <h1>Ustawienia</h1>

        <div className="card2">
          <h2>Konto</h2>

          <div className="buttons-row">
            <button className="primary">Zmień email</button>
            <button className="secondary">Zmień hasło</button>
          </div>
        </div>
        <div className="card2">
          <h2>Wygląd</h2>

          <div className="theme-select">
            <button
              className={`toggle-btn ${theme === "light" ? "active" : ""}`}
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            >
              Jasny
            </button>

            <button
              className={`toggle-btn ${theme === "dark" ? "active" : ""}`}
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
            >
              Ciemny
            </button>
          </div>
        </div>

        <div className="card2">
          <h2>Pomoc</h2>

          <button className="faq-button" onClick={() => navigate("/faq")}>
            FAQ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
