import Info from "../Info/Info";
import Swipe from "../Swipe/Swipe";
import { useState } from "react";

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
    photoUrl: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/men/76.jpg",
      "https://randomuser.me/api/portraits/men/10.jpg",
      "https://randomuser.me/api/portraits/men/45.jpg",
      "https://randomuser.me/api/portraits/men/88.jpg",
    ],
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
    photoUrl: [
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/women/21.jpg",
      "https://randomuser.me/api/portraits/women/45.jpg",
      "https://randomuser.me/api/portraits/women/10.jpg",
      "https://randomuser.me/api/portraits/women/33.jpg",
      "https://randomuser.me/api/portraits/women/77.jpg",
    ],
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
    photoUrl: [
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/men/33.jpg",
      "https://randomuser.me/api/portraits/men/58.jpg",
      "https://randomuser.me/api/portraits/men/12.jpg",
      "https://randomuser.me/api/portraits/men/44.jpg",
      "https://randomuser.me/api/portraits/men/90.jpg",
    ],
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
    photoUrl: [
      "https://randomuser.me/api/portraits/women/4.jpg",
      "https://randomuser.me/api/portraits/women/28.jpg",
      "https://randomuser.me/api/portraits/women/62.jpg",
      "https://randomuser.me/api/portraits/women/11.jpg",
      "https://randomuser.me/api/portraits/women/36.jpg",
      "https://randomuser.me/api/portraits/women/80.jpg",
    ],
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
    photoUrl: [
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/40.jpg",
      "https://randomuser.me/api/portraits/men/71.jpg",
      "https://randomuser.me/api/portraits/men/14.jpg",
      "https://randomuser.me/api/portraits/men/52.jpg",
      "https://randomuser.me/api/portraits/men/83.jpg",
    ],
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
    photoUrl: [
      "https://randomuser.me/api/portraits/women/6.jpg",
      "https://randomuser.me/api/portraits/women/19.jpg",
      "https://randomuser.me/api/portraits/women/73.jpg",
      "https://randomuser.me/api/portraits/women/15.jpg",
      "https://randomuser.me/api/portraits/women/41.jpg",
      "https://randomuser.me/api/portraits/women/92.jpg",
    ],
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
    photoUrl: [
      "https://randomuser.me/api/portraits/men/7.jpg",
      "https://randomuser.me/api/portraits/men/22.jpg",
      "https://randomuser.me/api/portraits/men/64.jpg",
      "https://randomuser.me/api/portraits/men/18.jpg",
      "https://randomuser.me/api/portraits/men/50.jpg",
      "https://randomuser.me/api/portraits/men/95.jpg",
    ],
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
    photoUrl: [
      "https://randomuser.me/api/portraits/women/8.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
      "https://randomuser.me/api/portraits/women/55.jpg",
      "https://randomuser.me/api/portraits/women/13.jpg",
      "https://randomuser.me/api/portraits/women/47.jpg",
      "https://randomuser.me/api/portraits/women/86.jpg",
    ],
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
    photoUrl: [
      "https://randomuser.me/api/portraits/men/9.jpg",
      "https://randomuser.me/api/portraits/men/26.jpg",
      "https://randomuser.me/api/portraits/men/81.jpg",
      "https://randomuser.me/api/portraits/men/16.jpg",
      "https://randomuser.me/api/portraits/men/60.jpg",
      "https://randomuser.me/api/portraits/men/97.jpg",
    ],
  },
];

export { persons };

function MainView() {
  const [index, setIndex] = useState(0);

  const nextPerson = () => {
    setIndex((prev) => {
      if (prev + 1 >= persons.length) return 0;
      return prev + 1;
    });
  };

  const prevPerson = () => {
    setIndex((prev) => {
      if (prev - 1 < 0) return persons.length - 1;
      return prev - 1;
    });
  };

  const handleSwipe = (direction: "left" | "right") => {
    console.log(direction);
    nextPerson();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Info
        person={persons[index]}
        nextPerson={persons[index + 1]}
        onSwipe={handleSwipe}
      />

      <Swipe onIncrement={nextPerson} onDecrement={prevPerson} />
    </div>
  );
}

export default MainView;
