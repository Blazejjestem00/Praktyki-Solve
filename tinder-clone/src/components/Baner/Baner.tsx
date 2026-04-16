import bozena from "../../assets/bozena.png";
import "./Baner.css";
function Baner() {
  return (
    <div id="container">
      <img id="baner-photo" src={bozena} alt="Bozena" />
      <span id="baner-text">Ty</span>
    </div>
  );
}

export default Baner;
