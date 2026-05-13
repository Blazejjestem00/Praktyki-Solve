import { useState } from "react";
import { createPortal } from "react-dom";
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

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmModal({ onConfirm, onCancel }: ConfirmModalProps) {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Zapisać preferencje?</h3>
        <p>Czy na pewno chcesz zapisać nowe ustawienia preferencji?</p>
        <div className="modal-buttons">
          <button className="primary" onClick={onConfirm}>
            Tak, zapisz
          </button>
          <button className="secondary" onClick={onCancel}>
            Anuluj
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function Settings({ person }: SettingsProps) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [distance, setDistance] = useState(() => {
    return Number(localStorage.getItem("distance")) || 25;
  });

  const [ageMin, setAgeMin] = useState(() => {
    return Number(localStorage.getItem("ageMin")) || 18;
  });

  const [ageMax, setAgeMax] = useState(() => {
    return Number(localStorage.getItem("ageMax")) || 35;
  });

  const [pendingDistance, setPendingDistance] = useState(distance);
  const [pendingAgeMin, setPendingAgeMin] = useState(ageMin);
  const [pendingAgeMax, setPendingAgeMax] = useState(ageMax);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const applyTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  const handleConfirm = () => {
    localStorage.setItem("distance", String(pendingDistance));
    localStorage.setItem("ageMin", String(pendingAgeMin));
    localStorage.setItem("ageMax", String(pendingAgeMax));
    setDistance(pendingDistance);
    setAgeMin(pendingAgeMin);
    setAgeMax(pendingAgeMax);
    setShowModal(false);
  };

  const handleCancel = () => {
    setPendingDistance(distance);
    setPendingAgeMin(ageMin);
    setPendingAgeMax(ageMax);
    setShowModal(false);
  };

  return (
    <div className="settings-page">
      {showModal && (
        <ConfirmModal onConfirm={handleConfirm} onCancel={handleCancel} />
      )}

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
              Odległość: {pendingDistance} km
              <input
                type="range"
                min={1}
                max={100}
                value={pendingDistance}
                onChange={(e) => setPendingDistance(Number(e.target.value))}
              />
            </label>
            <label>
              Minimalny wiek: {pendingAgeMin} lat
              <input
                type="range"
                min={18}
                max={pendingAgeMax - 1}
                value={pendingAgeMin}
                onChange={(e) => setPendingAgeMin(Number(e.target.value))}
              />
            </label>
            <label>
              Maksymalny wiek: {pendingAgeMax} lat
              <input
                type="range"
                min={pendingAgeMin + 1}
                max={80}
                value={pendingAgeMax}
                onChange={(e) => setPendingAgeMax(Number(e.target.value))}
              />
            </label>
            <div className="buttons-row" style={{ marginTop: "1rem" }}>
              <button className="primary" onClick={() => setShowModal(true)}>
                Zapisz preferencje
              </button>
            </div>
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
