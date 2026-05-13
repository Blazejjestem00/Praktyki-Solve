import { useState } from "react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";
import type { User } from "../../services/api";
import { HiAdjustments } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

type Person = User;

interface SettingsProps {
  person: Person;
}

function Settings({ person }: SettingsProps) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [distance, setDistance] = useState(25);
  const [ageMin, setAgeMin] = useState(18);
  const [ageMax, setAgeMax] = useState(35);

  const navigate = useNavigate();

  const applyTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1>Ustawienia</h1>

        <div className="card2">
          <h2>Profil</h2>
          <div className="settings-profile">
            <img
              src={person.photoUrl?.[0]}
              alt={person.name}
              className="settings-avatar"
            />
            <div className="settings-profile-info">
              <p className="settings-profile-name">
                {person.name} {person.surname}, {person.age}
              </p>
              <p className="settings-profile-caption">{person.caption}</p>
              <p className="settings-profile-email">{person.email}</p>
            </div>
          </div>
        </div>

        <div className="card2">
          <h2>Konto</h2>
          <div className="buttons-row">
            <button className="primary">Zmień email</button>
            <button className="secondary">Zmień hasło</button>
          </div>
        </div>

        <div className="card2">
          <h2>Preferencje</h2>
          <HiAdjustments className="Adjustments" />

          <div className="settings-sliders">
            <label>
              Odległość: {distance} km
              <input
                type="range"
                min={1}
                max={100}
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
              />
            </label>
            <label>
              Minimalny wiek: {ageMin} lat
              <input
                type="range"
                min={18}
                max={ageMax - 1}
                value={ageMin}
                onChange={(e) => setAgeMin(Number(e.target.value))}
              />
            </label>
            <label>
              Maksymalny wiek: {ageMax} lat
              <input
                type="range"
                min={ageMin + 1}
                max={80}
                value={ageMax}
                onChange={(e) => setAgeMax(Number(e.target.value))}
              />
            </label>
          </div>
        </div>

        <div className="card2">
          <h2>Wygląd</h2>
          <div className="theme-select">
            <button
              className={`toggle-btn ${theme === "light" ? "active" : ""}`}
              onClick={() => applyTheme("light")}
            >
              <MdLightMode /> Jasny
            </button>
            <button
              className={`toggle-btn ${theme === "dark" ? "active" : ""}`}
              onClick={() => applyTheme("dark")}
            >
              <MdDarkMode /> Ciemny
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
