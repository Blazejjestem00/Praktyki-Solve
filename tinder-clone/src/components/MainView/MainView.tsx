import Info from "../Info/Info";
import Swipe from "../Swipe/Swipe";
import { useState } from "react";
<<<<<<< HEAD
=======
import bozena from "../../assets/bozena.png";

import LoginButton from "../../Login.jsx";
import SignupButton from "../../Signup.jsx";
import LogoutButton from "../../Logout.jsx";

>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
const persons = [
  {
    id: 1,
    name: "Jan",
    surname: "Kowalski",
    age: 25,
    email: "jan.kowalski@test.pl",
    interests: ["siłownia", "kolarstwo", "bieganie"],
    instagram: "jan_fit25",
    caption:
      "Hej, jestem Jan 🙂 Lubię sport, szczególnie siłownię i jazdę na rowerze. Szukam aktywnych osób do wspólnych treningów i wyjazdów.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/men/76.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/men/32.jpg","https://randomuser.me/api/portraits/men/76.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
    id: 2,
    name: "Anna",
    surname: "Nowak",
    age: 28,
    email: "anna.nowak@test.pl",
    interests: ["frontend", "design", "podróże"],
    instagram: "ania.codes",
    caption:
      "Hej, jestem Ania 👋 Na co dzień programuję frontend, a po godzinach lubię podróżować i poznawać nowe miejsca. Szukam kreatywnych ludzi z pasją.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/women/21.jpg",
      "https://randomuser.me/api/portraits/women/45.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/women/2.jpg","https://randomuser.me/api/portraits/women/21.jpg","https://randomuser.me/api/portraits/women/45.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
    id: 3,
    name: "Piotr",
    surname: "Wiśniewski",
    age: 30,
    email: "piotr.w@test.pl",
    interests: ["podróże", "fotografia", "trekking"],
    instagram: "piotr_travels",
    caption:
      "Cześć, jestem Piotr 🌍 Uwielbiam podróże i odkrywanie nowych kultur. Często chodzę po górach. Szukam osób do wspólnych wypraw.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/men/33.jpg",
      "https://randomuser.me/api/portraits/men/58.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/men/3.jpg","https://randomuser.me/api/portraits/men/33.jpg","https://randomuser.me/api/portraits/men/58.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
    id: 4,
    name: "Kasia",
    surname: "Wójcik",
    age: 22,
    email: "kasia.w@test.pl",
    interests: ["fotografia", "instagram", "moda"],
    instagram: "kasia_shots",
    caption:
      "Hej, jestem Kasia 📸 Studiuję i zajmuję się fotografią. Lubię łapać chwile i tworzyć coś kreatywnego. Szukam inspirujących osób.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/women/4.jpg",
      "https://randomuser.me/api/portraits/women/28.jpg",
      "https://randomuser.me/api/portraits/women/62.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/women/4.jpg","https://randomuser.me/api/portraits/women/28.jpg","https://randomuser.me/api/portraits/women/62.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
    id: 5,
    name: "Tomasz",
    surname: "Kaczmarek",
    age: 35,
    email: "tomasz.k@test.pl",
    interests: ["gotowanie", "wino", "podróże kulinarne"],
    instagram: "tomek_cooks",
    caption:
      "Cześć, jestem Tomek 🍝 Uwielbiam gotować i odkrywać nowe smaki. Chętnie poznam osoby, które też kochają kuchnię i wspólne gotowanie.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/40.jpg",
      "https://randomuser.me/api/portraits/men/71.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/men/5.jpg","https://randomuser.me/api/portraits/men/40.jpg","https://randomuser.me/api/portraits/men/71.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
    id: 6,
    name: "Magda",
    surname: "Mazur",
    age: 27,
    email: "magda.m@test.pl",
    interests: ["książki", "kawiarnie", "psychologia"],
    instagram: "magda_reads",
    caption:
      "Hej, jestem Magda 📚 Kocham książki i spokojne wieczory przy kawie. Interesuję się psychologią. Szukam osób do ciekawych rozmów.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/women/6.jpg",
      "https://randomuser.me/api/portraits/women/19.jpg",
      "https://randomuser.me/api/portraits/women/73.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/women/6.jpg","https://randomuser.me/api/portraits/women/19.jpg","https://randomuser.me/api/portraits/women/73.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
    id: 7,
    name: "Paweł",
    surname: "Krawczyk",
    age: 29,
    email: "pawel.k@test.pl",
    interests: ["gry", "streaming", "technologia"],
    instagram: "pawel_gamer29",
    caption:
      "Siema, jestem Paweł 🎮 Gram, streamuję i interesuję się technologią. Szukam ludzi do wspólnego grania i luźnych rozmów.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/men/7.jpg",
      "https://randomuser.me/api/portraits/men/22.jpg",
      "https://randomuser.me/api/portraits/men/64.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/men/7.jpg","https://randomuser.me/api/portraits/men/22.jpg","https://randomuser.me/api/portraits/men/64.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
    id: 8,
    name: "Ola",
    surname: "Piotrowska",
    age: 24,
    email: "ola.p@test.pl",
    interests: ["zwierzęta", "spacery", "wolontariat"],
    instagram: "ola_paws",
    caption:
      "Hej, jestem Ola 🐶 Uwielbiam zwierzęta i długie spacery. Działam też w wolontariacie. Szukam empatycznych i pozytywnych osób.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/women/8.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
      "https://randomuser.me/api/portraits/women/55.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/women/8.jpg","https://randomuser.me/api/portraits/women/30.jpg","https://randomuser.me/api/portraits/women/55.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
    id: 9,
    name: "Michał",
    surname: "Grabowski",
    age: 31,
    email: "michal.g@test.pl",
    interests: ["bieganie", "maratony", "fitness"],
    instagram: "michal_runs",
    caption:
      "Cześć, jestem Michał 🏃‍♂️ Biegam maratony i dbam o formę. Szukam osób do wspólnych treningów i motywacji.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/men/9.jpg",
      "https://randomuser.me/api/portraits/men/26.jpg",
      "https://randomuser.me/api/portraits/men/81.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/men/9.jpg","https://randomuser.me/api/portraits/men/26.jpg","https://randomuser.me/api/portraits/men/81.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
    id: 10,
    name: "Natalia",
    surname: "Zielińska",
    age: 26,
    email: "natalia.z@test.pl",
    interests: ["design", "UX", "sztuka"],
    instagram: "natalia.designs",
    caption:
      "Hej, jestem Natalia 🎨 Projektuję UI/UX i interesuję się sztuką. Szukam kreatywnych osób do wymiany pomysłów.",
    password: "123456",
<<<<<<< HEAD
    photoUrl: [
      "https://randomuser.me/api/portraits/women/10.jpg",
      "https://randomuser.me/api/portraits/women/36.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg",
    ],
=======
    photoUrl: ["https://randomuser.me/api/portraits/women/10.jpg","https://randomuser.me/api/portraits/women/36.jpg","https://randomuser.me/api/portraits/women/68.jpg"]
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
  },
  {
  "id": 11,
  "name": "Bożena",
  "surname": "Dąbrowska",
  "age": 59,
  "email": "bozena.d@test.pl",
  "interests": ["spacery", "ogrodnictwo", "kuchnia domowa"],
  "instagram": "bozena_zycie",
  "caption": "Cześć, jestem Bożena 🙂 Lubię spokojne życie, spacery i dbanie o ogród. Chętnie poznam osoby do rozmów i wspólnego spędzania czasu.",
  "password": "123456",
  "photoUrl": [
    bozena,
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/women/72.jpg"
  ]
}
];

export { persons };

function MainView() {
  const [personn, setPerson] = useState(0);

  const increment = () =>
    setPerson((prev) => (prev < persons.length - 1 ? prev + 1 : 0));
  const decrement = () => setPerson((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ width: "100%" }}>
        <Info person={persons[personn]} />
      </div>
<<<<<<< HEAD
      <div>
=======
      <div style={{ width: "100%", display: "flex", gap: "8px", justifyContent: "center" }}>
        <LoginButton />
        <SignupButton />
        <LogoutButton />
      </div>
      <div style={{ width: "100%" }}>
>>>>>>> 1a1c4199fe7227f092786ced0bb7c1b6b23bc2da
        <Swipe onIncrement={increment} onDecrement={decrement} />
      </div>
    </div>
  );
}

export default MainView;
