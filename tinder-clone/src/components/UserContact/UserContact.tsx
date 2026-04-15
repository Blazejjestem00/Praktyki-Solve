import "./UserContact.css";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

function UserContact({ person }: any) {
  return (
    <div key={person.id} className="UserContainer">
      <div className="user-contact">
        <h3>Kontakt:</h3>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>{person.email}</span>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <span>@{person.instagram}</span>
        </div>
      </div>
    </div>
  );
}

export default UserContact;
