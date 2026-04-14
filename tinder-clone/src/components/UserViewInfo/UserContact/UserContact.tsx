import "./UserContact.css";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

function UserContact({ osoba }: any) {
  return (
    <div className="user-contact">
      <h3>Kontakt</h3>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <span>{osoba.email}</span>
      </div>
      <div className="contact-item">
        <FaInstagram className="contact-icon" />
        <span>@{osoba.instagram}</span>
      </div>
    </div>
  );
}

export default UserContact;
