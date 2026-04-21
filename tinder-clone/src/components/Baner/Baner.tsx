import bozena from "../../assets/bozena.png";
import "./Baner.css";
function Baner() {
  return (
    <div className="container">
      <img className="baner-photo" src={bozena} alt="Bozena" />
      <span className="baner-text">Ty</span>
    </div>
  );
}

export default Baner;
