import { useState } from "react";
import Baner from "../../components/Baner/Baner";
import MatchButtons from "../MatchButtons/MatchButtons";
import Pairs from "../Pairs/Pairs";
import Chats from "../Chats/Chats";
import "./MatchView.css";

function MatchView() {
  const [active, setActive] = useState("pairs");

  return (
    <div id="matchviewcontainer">
      <Baner />
      <MatchButtons active={active} setActive={setActive} />

      <div style={{ display: active === "pairs" ? "block" : "none" }}>
        <Pairs />
      </div>

      <div style={{ display: active === "chat" ? "block" : "none" }}>
        <Chats />
      </div>
    </div>
  );
}


export default MatchView;