const API_BASE_URL = "http://127.0.0.1:8000";

export interface User {
  id: number;
  name: string;
  surname: string | null;
  age: number;
  email: string;
  interests: string[] | null;
  instagram: string | null;
  caption: string | null;
  created_at: string;
  photoUrl?: string[];
  position?: {
    lat: number;
    lng: number;
  };
}

export interface SwipeRequest {
  swiper_id: number;
  swiped_id: number;
  action: "like" | "pass";
}

const persons: User[] = [
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/men/76.jpg",
    ],
    position: { lat: 52.185948, lng: 21.102004 },
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/women/21.jpg",
      "https://randomuser.me/api/portraits/women/45.jpg",
    ],
    position: { lat: 52.130508, lng: 21.045202 },
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/men/33.jpg",
      "https://randomuser.me/api/portraits/men/58.jpg",
    ],
    position: { lat: 52.273166, lng: 20.914348 },
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/women/4.jpg",
      "https://randomuser.me/api/portraits/women/28.jpg",
      "https://randomuser.me/api/portraits/women/62.jpg",
    ],
    position: { lat: 52.264848, lng: 21.162536 },
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/40.jpg",
      "https://randomuser.me/api/portraits/men/71.jpg",
    ],
    position: { lat: 52.32576, lng: 21.013658 },
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/women/6.jpg",
      "https://randomuser.me/api/portraits/women/19.jpg",
      "https://randomuser.me/api/portraits/women/73.jpg",
    ],
    position: { lat: 52.320881, lng: 21.086375 },
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/men/7.jpg",
      "https://randomuser.me/api/portraits/men/22.jpg",
      "https://randomuser.me/api/portraits/men/64.jpg",
    ],
    position: { lat: 52.288731, lng: 20.902941 },
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/women/8.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
      "https://randomuser.me/api/portraits/women/55.jpg",
    ],
    position: { lat: 52.163029, lng: 20.909208 },
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/men/9.jpg",
      "https://randomuser.me/api/portraits/men/26.jpg",
      "https://randomuser.me/api/portraits/men/81.jpg",
    ],
    position: { lat: 52.149393, lng: 21.053974 },
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
    created_at: "2024-06-01T12:00:00Z",
    photoUrl: [
      "https://randomuser.me/api/portraits/women/10.jpg",
      "https://randomuser.me/api/portraits/women/36.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg",
    ],
    position: { lat: 52.306184, lng: 21.094419 },
  },
];

export const api = {
  async fetchUsers(): Promise<User[]> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(persons);
      }, 1000);
    });

    const response = await fetch(`${API_BASE_URL}/users/all`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  },

  async sendSwipe(swipeData: SwipeRequest): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(swipeData),
    });
    if (!response.ok) throw new Error("Failed to send swipe");
  },

  async fetchMatches(userId: number): Promise<User[]> {
    const response = await fetch(`${API_BASE_URL}/matches/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch matches");
    return response.json();
  },
};
