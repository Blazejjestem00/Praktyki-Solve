import "./Style.css";
import { FaInstagram } from "react-icons/fa";

function Info({ person }: any) {
  return (
    <div>
      <div id="content">
        <div key={person.id} className="List">
          <div id="info">
            <div id="photo2">
              <img src={person.photoUrl[0]} alt={person.name} />
            </div>
          </div>
          <div id="text">
            <label id="name">{person.name}</label>
            <label id="inter"> </label>
            <label id="surname">{person.surname}</label>
            <label id="inter">, </label>
            <label id="age">{person.age}</label>
            <br />
            <label id="caption">{person.caption}</label>
            <ul>
              <li>{person.interests[0]}</li>
              <li>{person.interests[1]}</li>
              <li>{person.interests[2]}</li>
            </ul>
            <label id="instagram">
              {" "}
              <FaInstagram /> Instagram: @{person.instagram}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
