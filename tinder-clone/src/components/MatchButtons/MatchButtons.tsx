import "./MatchButtons.css";
import { useState, useEffect } from "react";
function MatchButtons({
  setActive,
  active,
}: {
  setActive: (value: string) => void;
  active: string;
}) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  return (
    <div className={`match-buttons-container ${theme} `}>
      <button
        className={`pairs ${theme}`}
        data-active={active === "pairs"}
        onClick={() => setActive("pairs")}
      >
        Pary
      </button>

      <button
        className={`chat ${theme}`}
        data-active={active === "chat"}
        onClick={() => setActive("chat")}
      >
        Wiadomości
      </button>
    </div>
  );
}

export default MatchButtons;
