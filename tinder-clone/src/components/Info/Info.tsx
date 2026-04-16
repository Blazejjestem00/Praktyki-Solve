import "./Info.css";
import { FaInstagram } from "react-icons/fa";

function Info({ person }: any) {
  return (
    <div id="content">
      <div className="tinderCard">
        <div id="photo2">
          <img src={person.photoUrl[0]} alt={person.name} />
        </div>
        <div id="text">
          <div className="nameRow">
            <span id="name">{person.name}</span>
            <span id="surname"> {person.surname} </span>
            <span id="age"> {person.age}</span>
          </div>
          <span id="caption">{person.caption}</span>
          <ul>
            {person.interests.map((interest: string, index: number) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <span id="instagram">
            <FaInstagram /> @{person.instagram}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;
