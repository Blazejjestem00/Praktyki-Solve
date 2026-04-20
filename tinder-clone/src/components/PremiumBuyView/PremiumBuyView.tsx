import "./PremiumBuyView.css";
import { motion } from "motion/react";

function PremiumBuyView() {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$9.99 / month",
      features: [
        "Unlimited likes",
        "Rewind last swipe",
        "5 Super Likes per week",
        "No ads",
      ],
      color: "#964B00",
    },
    {
      id: 2,
      name: "Platinum",
      price: "$19.99 / month",
      features: [
        "See who liked you",
        "Unlimited rewinds",
        "1 Boost per month",
        "Advanced filters (age, distance, interests)",
        "Priority likes (your profile shown first)",
      ],
      color: "#E5E4E2",
    },
    {
      id: 3,
      name: "Gold",
      price: "$29.99 / month",
      features: [
        "See who liked you (instant match)",
        "Unlimited Boosts",
        "Top Picks (daily curated matches)",
        "Passport (change location)",
        "Message before matching",
        "Profile highlighted in search",
      ],
      color: "#FFD700",
    },
  ];

  return (
    <div className="container">
      <h1>Upgrade to Tinder Premium</h1>
      <p>Unlock exclusive features and find your perfect match faster!</p>

      <div className="plans">
        {plans.map((plan) => (
          <div key={plan.id} className="card">
            <h2 style={{ color: plan.color }}>{plan.name}</h2>
            <p className="price">{plan.price}</p>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <motion.button
              className="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert(`You chose the ${plan.name} plan!`)}
            >
              Choose{plan.name}
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PremiumBuyView;
