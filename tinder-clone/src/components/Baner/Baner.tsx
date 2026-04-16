import bozena from "../../assets/bozena.png";
import "./Baner.css";
function Baner() {
  return (
    <div id="container">
      <img id="banerphoto" src={bozena} alt="Bozena"/><span id="banertext">Ty</span>
    </div>
  );
}

export default Baner;
