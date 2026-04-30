import { useState } from "react";
import "./ExtentSettings.css";
import { SiTinder } from "react-icons/si";
import { FaCrown } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { LuLockKeyhole } from "react-icons/lu";
import type { User } from "../../services/api";

interface SettingsViewProps {
  person: User;
}

function ExtentSettings({ person }: SettingsViewProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSubscriptionsOpen, setIsSubscriptionsOpen] = useState(false);
  const [isBlockedOpen, setIsBlockedOpen] = useState(false);
  if (isExpanded === false) {
    isPrivacyOpen && setIsPrivacyOpen(false);
    isLocationOpen && setIsLocationOpen(false);
    isSubscriptionsOpen && setIsSubscriptionsOpen(false);
  }
  if (isPrivacyOpen === false) {
    isBlockedOpen && setIsBlockedOpen(false);
  }

  return (
    <div className="extent-settings">
      <button
        className={`extent-button ${isExpanded ? "isExpanded" : ""}`}
        onClick={() => setIsExpanded((p) => !p)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`SettingsMenu ${isExpanded ? "expanded" : ""}`}>
        <SiTinder />
        <hr />
        <div className="menu-row">
          <p className="privacy" onClick={() => setIsPrivacyOpen((p) => !p)}>
            <LuLockKeyhole /> Prywatnosc
          </p>
          <div className={`submenu-side ${isPrivacyOpen ? "open" : ""}`}>
            <p>
              Widocznosc profilu: {person.isVisible ? "Publiczny" : "Prywatny"}
            </p>
            <div className="Submenu-divider">
              <p
                className="blocked-accounts"
                onClick={() => setIsBlockedOpen((p) => !p)}
              >
                Zablokowane konta:
                <br />
              </p>
              <div className={`blocked-list ${isBlockedOpen ? "open" : ""}`}>
                {person.blockedUsers.map((id) => (
                  <p key={id} className="blocked-user">
                    {id}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="menu-row">
          <p className="location" onClick={() => setIsLocationOpen((p) => !p)}>
            <IoEarth /> Lokalizacja
          </p>
          <div className={`submenu-side ${isLocationOpen ? "open" : ""}`}>
            <p>Kraj: {person.country}</p>
            <p>Miasto: {person.city}</p>
          </div>
        </div>
        <hr />
        <div className="menu-row">
          <p
            className="Subscriptions"
            onClick={() => setIsSubscriptionsOpen((p) => !p)}
          >
            <FaCrown /> Subskrypcje
          </p>
          <div className={`submenu-side ${isSubscriptionsOpen ? "open" : ""}`}>
            <p className="package">Aktualny pakiet: {person.package}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtentSettings;
