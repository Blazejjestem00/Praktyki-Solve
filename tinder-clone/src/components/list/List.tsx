import { useState } from "react";
import './List.css'

function ListaOsob() {
  const [osoby, setOsoby] = useState([
    { id: 1, imie: "Jan", wiek: 25, opis: "Jestem Jan, lubię podróże i gotowanie." , src: "src/components/list/img/test.jpeg"},
     {
    "id": 2,
    "imie": "Anna",
    "nazwisko": "Nowak",
    "wiek": 28,
    "email": "anna.nowak@test.pl",
    "opis": "Programistka frontend",
    "haslo": "123456",
    "zdjecieUrl": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "id": 3,
    "imie": "Piotr",
    "nazwisko": "Wiśniewski",
    "wiek": 30,
    "email": "piotr.w@test.pl",
    "opis": "Fan podróży",
    "haslo": "123456",
    "zdjecieUrl": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "id": 4,
    "imie": "Kasia",
    "nazwisko": "Wójcik",
    "wiek": 22,
    "email": "kasia.w@test.pl",
    "opis": "Studentka i fotografka",
    "haslo": "123456",
    "zdjecieUrl": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "id": 5,
    "imie": "Tomasz",
    "nazwisko": "Kaczmarek",
    "wiek": 35,
    "email": "tomasz.k@test.pl",
    "opis": "Lubi gotować",
    "haslo": "123456",
    "zdjecieUrl": "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    "id": 6,
    "imie": "Magda",
    "nazwisko": "Mazur",
    "wiek": 27,
    "email": "magda.m@test.pl",
    "opis": "Miłośniczka książek",
    "haslo": "123456",
    "zdjecieUrl": "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    "id": 7,
    "imie": "Paweł",
    "nazwisko": "Krawczyk",
    "wiek": 29,
    "email": "pawel.k@test.pl",
    "opis": "Gracz i streamer",
    "haslo": "123456",
    "zdjecieUrl": "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    "id": 8,
    "imie": "Ola",
    "nazwisko": "Piotrowska",
    "wiek": 24,
    "email": "ola.p@test.pl",
    "opis": "Uwielbia zwierzęta",
    "haslo": "123456",
    "zdjecieUrl": "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    "id": 9,
    "imie": "Michał",
    "nazwisko": "Grabowski",
    "wiek": 31,
    "email": "michal.g@test.pl",
    "opis": "Biega maratony",
    "haslo": "123456",
    "zdjecieUrl": "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    "id": 10,
    "imie": "Natalia",
    "nazwisko": "Zielińska",
    "wiek": 26,
    "email": "natalia.z@test.pl",
    "opis": "Projektantka UI/UX",
    "haslo": "123456",
    "zdjecieUrl": "https://randomuser.me/api/portraits/women/10.jpg"
  }
  ]);

  return (
    <div>
      {/* {osoby.map((osoba) => (
        <div key={osoba.id} className="List">
          <img src={osoba.src} id="zdj"alt={osoba.imie} className="profile-picture" />
          <p className="info">{osoba.imie} <br />{osoba.wiek} Lat</p>
          <p className="description">{osoba.opis}</p>
          
          
          
        </div>
      ))} */}
    </div>
  );
}

export default ListaOsob
