import { NavLink } from "react-router-dom";
import Home from "../../assets/Home.png";
import "./HomeButton.css";
function HomeButton() {
  return (
    <div className="home-button">
      <NavLink to="/">
        <img src={Home} alt="home" style={{ width: "50px" }} />
      </NavLink>
    </div>
  );
}

export default HomeButton;
