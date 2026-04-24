import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

function NavLinks() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrapper nav-left">
      {" "}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen((p) => !p)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`menu ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link to="/premium" onClick={() => setOpen(false)}>
          Buy Premium
        </Link>

        <Link to="/match" onClick={() => setOpen(false)}>
          Matches
        </Link>

        <Link to="/settings" onClick={() => setOpen(false)}>
          Settings
        </Link>
      </div>
    </div>
  );
}
export default NavLinks;
