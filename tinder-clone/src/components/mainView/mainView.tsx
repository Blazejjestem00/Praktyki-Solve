import Info from "../info/info";
import Description from "../description/Description";
import List from "../list/List";


import Swipe from "../swipe/Swipe";

const osoby = [
  {
    id: 1,
    imie: "Jan",
    nazwisko: "Kowalski",
    wiek: 25,
    email: "jan.kowalski@test.pl",
    zainteresowania: ["siłownia", "kolarstwo", "bieganie"],
    instagram: "jan_fit25",
    opis: "Hej, jestem Jan 🙂 Lubię sport, szczególnie siłownię i jazdę na rowerze. Szukam aktywnych osób do wspólnych treningów i wyjazdów.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    imie: "Anna",
    nazwisko: "Nowak",
    wiek: 28,
    email: "anna.nowak@test.pl",
    zainteresowania: ["frontend", "design", "podróże"],
    instagram: "ania.codes",
    opis: "Hej, jestem Ania 👋 Na co dzień programuję frontend, a po godzinach lubię podróżować i poznawać nowe miejsca. Szukam kreatywnych ludzi z pasją.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    imie: "Piotr",
    nazwisko: "Wiśniewski",
    wiek: 30,
    email: "piotr.w@test.pl",
    zainteresowania: ["podróże", "fotografia", "trekking"],
    instagram: "piotr_travels",
    opis: "Cześć, jestem Piotr 🌍 Uwielbiam podróże i odkrywanie nowych kultur. Często chodzę po górach. Szukam osób do wspólnych wypraw.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    imie: "Kasia",
    nazwisko: "Wójcik",
    wiek: 22,
    email: "kasia.w@test.pl",
    zainteresowania: ["fotografia", "instagram", "moda"],
    instagram: "kasia_shots",
    opis: "Hej, jestem Kasia 📸 Studiuję i zajmuję się fotografią. Lubię łapać chwile i tworzyć coś kreatywnego. Szukam inspirujących osób.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    imie: "Tomasz",
    nazwisko: "Kaczmarek",
    wiek: 35,
    email: "tomasz.k@test.pl",
    zainteresowania: ["gotowanie", "wino", "podróże kulinarne"],
    instagram: "tomek_cooks",
    opis: "Cześć, jestem Tomek 🍝 Uwielbiam gotować i odkrywać nowe smaki. Chętnie poznam osoby, które też kochają kuchnię i wspólne gotowanie.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    imie: "Magda",
    nazwisko: "Mazur",
    wiek: 27,
    email: "magda.m@test.pl",
    zainteresowania: ["książki", "kawiarnie", "psychologia"],
    instagram: "magda_reads",
    opis: "Hej, jestem Magda 📚 Kocham książki i spokojne wieczory przy kawie. Interesuję się psychologią. Szukam osób do ciekawych rozmów.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    imie: "Paweł",
    nazwisko: "Krawczyk",
    wiek: 29,
    email: "pawel.k@test.pl",
    zainteresowania: ["gry", "streaming", "technologia"],
    instagram: "pawel_gamer29",
    opis: "Siema, jestem Paweł 🎮 Gram, streamuję i interesuję się technologią. Szukam ludzi do wspólnego grania i luźnych rozmów.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    imie: "Ola",
    nazwisko: "Piotrowska",
    wiek: 24,
    email: "ola.p@test.pl",
    zainteresowania: ["zwierzęta", "spacery", "wolontariat"],
    instagram: "ola_paws",
    opis: "Hej, jestem Ola 🐶 Uwielbiam zwierzęta i długie spacery. Działam też w wolontariacie. Szukam empatycznych i pozytywnych osób.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    imie: "Michał",
    nazwisko: "Grabowski",
    wiek: 31,
    email: "michal.g@test.pl",
    zainteresowania: ["bieganie", "maratony", "fitness"],
    instagram: "michal_runs",
    opis: "Cześć, jestem Michał 🏃‍♂️ Biegam maratony i dbam o formę. Szukam osób do wspólnych treningów i motywacji.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    imie: "Natalia",
    nazwisko: "Zielińska",
    wiek: 26,
    email: "natalia.z@test.pl",
    zainteresowania: ["design", "UX", "sztuka"],
    instagram: "natalia.designs",
    opis: "Hej, jestem Natalia 🎨 Projektuję UI/UX i interesuję się sztuką. Szukam kreatywnych osób do wymiany pomysłów.",
    haslo: "123456",
    zdjecieUrl: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

export { osoby };

function MainView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <div style={{ width: "100%" }}>
        <Info osoba={osoby[0]} />
      </div>
      <div style={{ width: "100%" }}>
        <List />
      </div>
      <div style={{ width: "100%" }}>
        <Swipe />
      </div>
    </div>
  );
}

export default MainView;
