import "./Info.css";
import { FaInstagram } from "react-icons/fa";

function Info({ person }: any) {
  return (
<<<<<<< HEAD
    <div id="content">
      <div className="tinder-card">
        <div id="photo2">
          <img src={person.photoUrl[0]} alt={person.name} />
        </div>
        <div id="text">
          <div className="name-row">
            <span id="name">{person.name}</span>
            <span id="surname"> {person.surname} </span>
            <span id="age"> {person.age}</span>
=======
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
            <label id="instagram"> <FaInstagram /> Instagram: @{person.instagram}</label>
            </div>
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
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
