export interface Message {
  id: number;
  from: "me" | "them";
  text: string;
  timestamp: number;
}

export interface Conversation {
  id: number;
  userId: number;
  name: string;
  photoUrl: string;
  messages: Message[];
}

//export const CURRENT_USER_ID = 1;

export const conversations: Conversation[] = [
  {
    id: 1,
    userId: 2,
    name: "Anna",
    photoUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    messages: [
      {
        id: 1,
        from: "them",
        text: "Hej! Widzę, że też lubisz podróże 🌍",
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2,
      },
      {
        id: 2,
        from: "me",
        text: "Cześć Aniu! Tak, ostatnio wróciłem z Włoch.",
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 5,
      },
      {
        id: 3,
        from: "them",
        text: "Łoo, zazdroszczę! Gdzie konkretnie byłeś?",
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 10,
      },
      {
        id: 4,
        from: "me",
        text: "Florencja i Cinque Terre. Polecam!",
        timestamp: Date.now() - 1000 * 60 * 60 * 24,
      },
    ],
  },
  {
    id: 2,
    userId: 4,
    name: "Kasia",
    photoUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    messages: [
      {
        id: 1,
        from: "them",
        text: "Hej, fajne zdjęcia masz na profilu 📸",
        timestamp: Date.now() - 1000 * 60 * 60 * 5,
      },
      {
        id: 2,
        from: "me",
        text: "Dzięki! Sama też świetnie fotografujesz.",
        timestamp: Date.now() - 1000 * 60 * 60 * 4,
      },
      {
        id: 3,
        from: "them",
        text: "Może wybierzemy się kiedyś na sesję w plenerze?",
        timestamp: Date.now() - 1000 * 60 * 30,
      },
    ],
  },
  {
    id: 3,
    userId: 6,
    name: "Magda",
    photoUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    messages: [
      {
        id: 1,
        from: "me",
        text: "Cześć Magda, co ostatnio czytasz?",
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3,
      },
      {
        id: 2,
        from: "them",
        text: "Hej! Akurat skończyłam 'Lekcje chemii'. Mocno polecam.",
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 60,
      },
    ],
  },
  {
    id: 4,
    userId: 8,
    name: "Ola",
    photoUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    messages: [
      {
        id: 1,
        from: "them",
        text: "Heej 🐶",
        timestamp: Date.now() - 1000 * 60 * 10,
      },
      {
        id: 2,
        from: "me",
        text: "Cześć! Ale słodki piesek na Twoim zdjęciu!",
        timestamp: Date.now() - 1000 * 60 * 5,
      },
    ],
  },
  {
    id: 5,
    userId: 10,
    name: "Natalia",
    photoUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    messages: [
      {
        id: 1,
        from: "them",
        text: "Cześć! Widzę, że też siedzisz w designie?",
        timestamp: Date.now() - 1000 * 60 * 60 * 48,
      },
      {
        id: 2,
        from: "me",
        text: "Tak, głównie UI. A Ty bardziej UX?",
        timestamp: Date.now() - 1000 * 60 * 60 * 47,
      },
      {
        id: 3,
        from: "them",
        text: "Dokładnie. Pracuję teraz nad apką fitness.",
        timestamp: Date.now() - 1000 * 60 * 60 * 46,
      },
      {
        id: 4,
        from: "me",
        text: "Brzmi ciekawie, pokażesz kiedyś?",
        timestamp: Date.now() - 1000 * 60 * 60 * 20,
      },
      {
        id: 5,
        from: "them",
        text: "Jasne, podeślę Ci na dniach link do Figmy.",
        timestamp: Date.now() - 1000 * 60 * 15,
      },
    ],
  },
];
