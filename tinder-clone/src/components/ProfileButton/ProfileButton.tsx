import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileButton from "../../assets/ProfileButton.jpeg";
import "./ProfileButton.css";
function ProfileView() {
  const [person] = useState(0);

  return (
    <div>
      <NavLink to="/profile" className="profile-button">
        <img src={ProfileButton} alt="profile" style={{ width: "50px" }} />
      </NavLink>
    </div>
  );
}

export default ProfileView;
