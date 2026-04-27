import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";
import { FaHome } from "react-icons/fa"; 
import { FaHeart } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { SiTinder } from "react-icons/si";


function NavLinks() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrapper nav-left">
      {" "}
      {/* hamburger */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen((p) => !p)}
      >
        <span className="line"/>
        <span className="line"/>
        <span className="line"/>
      </button>
      {/* menu */}
      <div className={`menu ${open ? "show" : ""}`}>
        <SiTinder />
        <Link to="/" onClick={() => setOpen(false)}>
          <FaHome /> Home
        </Link>

        <Link to="/premium" onClick={() => setOpen(false)}>
          <FaCrown /> Buy Premium
        </Link>

        <Link to="/match" onClick={() => setOpen(false)}>
          <FaHeart /> Matches
        </Link>

        <Link to="/maps" onClick={() => setOpen(false)}>
          <FaMap /> Maps
        </Link>

        <Link to="/settings" onClick={() => setOpen(false)}>
          <FaCog /> Settings
        </Link>
      </div>
    </div>
  );
}
export default NavLinks;
