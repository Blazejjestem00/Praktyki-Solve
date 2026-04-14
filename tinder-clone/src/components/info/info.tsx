import "../../../public/../src/components/info/styl.css";
import { FaInstagram } from "react-icons/fa";

function Info({ osoba }: any) {
  return (
    <div>
      <div id="content">
        <div key={osoba.id} className="List">
          {/* <img src={osoba.zdjecieUrl} id="zdj"alt={osoba.imie} className="profile-picture" />
          <p className="info">{osoba.imie} <br />{osoba.wiek} Lat</p>
          <p className="description">{osoba.opis}</p> */}
          <div id="info">
            <div id="photo2">
              <img src={osoba.zdjecieUrl} alt={osoba.imie} />
            </div>
            <div id="text">
              <label id="imie">{osoba.imie}</label>
              <label id="inter"> </label>
              <label id="nazwisko">{osoba.nazwisko}</label>
              <label id="inter">, </label>
              <label id="wiek">{osoba.wiek}</label>
              <br />
              <label id="opis">{osoba.opis}</label>
              <ul>
                <li>{osoba.zainteresowania.join(" ")}</li>
              </ul>
              <label id="instagram">
                {" "}
                <FaInstagram /> Instagram: @{osoba.instagram}
              </label>
              </div>
              <div id="text">
            <label id="imie">{osoba.imie}</label>
            <label id="inter"> </label>
            <label id="nazwisko">{osoba.nazwisko}</label>
            <label id="inter">, </label>
            <label id="wiek">{osoba.wiek}</label>
            <br />
            <label id="opis">{osoba.opis}</label>
            <ul>
              <li>{osoba.zainteresowania[0]}</li>
              <li>{osoba.zainteresowania[1]}</li>
              <li>{osoba.zainteresowania[2]}</li>
            </ul>
            <label id="instagram"> <FaInstagram /> Instagram: @{osoba.instagram}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
