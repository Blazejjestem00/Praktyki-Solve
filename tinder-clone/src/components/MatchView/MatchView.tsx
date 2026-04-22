import { useState } from "react";
import Baner from "../../components/Baner/Baner";
import MatchButtons from "../MatchButtons/MatchButtons";
import Pairs from "../Pairs/Pairs";
import Chats from "../Chats/Chats";
import "./MatchView.css";
import NavLinks from "../NavLinks/NavLinks";

function MatchView() {
  const [active, setActive] = useState("pairs");

  return (
    <div className="matchview-container">
      <Baner />
      <MatchButtons active={active} setActive={setActive} />

      <div style={{ display: active === "pairs" ? "block" : "none" }}>
        <Pairs />
      </div>

      <div style={{ display: active === "chat" ? "block" : "none" }}>
        <Chats />
      </div>
      <div className="nav-wrapper nav-right">
        <NavLinks />
      </div>
    </div>
  );
}

export default MatchView;
