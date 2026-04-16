import "./MatchButtons.css";

function MatchButtons({setActive, active}: {setActive: (value: string) => void, active: string}) {
  return (
    <div>
      <button className="Pairs" data-active={active === "pairs"}
         onClick={() => setActive("pairs")}>Pary</button>

      <button className="Chat" data-active={active === "chat"} 
      onClick={() => setActive("chat")}>Wiadomości</button>
    </div>
  );
}

export default MatchButtons;
