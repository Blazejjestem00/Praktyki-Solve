import Baner from "../../components/Baner/Baner";
import MatchButtons from "../MatchButtons/MatchButtons";
import Pairs from "../Pairs/Pairs";
import Chats from "../Chats/Chats";
import "./MatchView.css";
import { useState, useEffect } from "react";
import NavLinks from "../NavLinks/NavLinks";

function MatchView() {
  const [active, setActive] = useState("pairs");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  return (
    <div className={`matchview-container ${theme}`}>
      <Baner />
      <MatchButtons active={active} setActive={setActive} />

      {active === "pairs" && <Pairs />}
      {active === "chat" && <Chats />}
      <div className="nav-wrapper nav-right">
        <NavLinks />
      </div>
    </div>
  );
}

export default MatchView;
