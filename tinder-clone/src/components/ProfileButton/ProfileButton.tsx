import { NavLink } from "react-router-dom";
import ProfileButtonImg from "../../assets/ProfileButton.jpeg";
import "./ProfileButton.css";
function ProfileButton({ person }: any) {
  return (
    <NavLink to={`/profile/${person.id}`} className="profile-button">
      <img
        src={ProfileButtonImg}
        alt="profile"
        className="profile-button img"
      />
    </NavLink>
  );
}

export default ProfileButton;
