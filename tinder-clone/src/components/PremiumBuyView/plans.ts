const plans = [
  {
    id: 1,
    name: "Podstawowy",
    price: "9,99 ZŁ / miesiąc",
    features: [
      "Nielimitowane polubienia",
      "Cofnięcie ostatniego przesunięcia",
      "5 Super Polubień tygodniowo",
      "Brak reklam",
    ],
    color: "#964B00",
    image: "bronze.png",
  },
  {
    id: 2,
    name: "Premium",
    price: "19,99 ZŁ / miesiąc",
    features: [
      "Zobacz, kto Cię polubił",
      "Nielimitowane cofnięcia",
      "1 Boost miesięcznie",
      "Zaawansowane filtry (wiek, odległość, zainteresowania)",
      "Priorytetowe polubienia (Twój profil wyświetlany jako pierwszy)",
    ],
    color: "#E5E4E2",
    image: "silver.png",
  },
  {
    id: 3,
    name: "Gold",
    price: "29,99 ZŁ / miesiąc",
    features: [
      "Zobacz, kto Cię polubił (natychmiastowe dopasowanie)",
      "Nielimitowane Boosty",
      "Top Picks (codziennie wybrane dopasowania)",
      "Paszport (zmiana lokalizacji)",
      "Wiadomość przed dopasowaniem",
      "Wyróżniony profil w wyszukiwarce",
    ],
    color: "#D4AF37",
    image: "gold.png",
  },
];

export { plans };
