import "./PremiumBuyView.css";
import { motion } from "motion/react";
import { plans } from "./plans";
interface plans {
  id: number;
  name: string;
  price: string;
  features: string[];
  cssClass: string;
}
function Card() {
  return (
    <div className="container">
      <h1>Upgrade to Tinder Premium</h1>
      <p>Unlock exclusive features and find your perfect match faster!</p>

      <div className="plans">
        {plans.map((plan) => (
          <div key={plan.id} className="card1">
            <h2 style={{ color: plan.color }}>{plan.name}</h2>

            <p className="price">{plan.price}</p>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <motion.button
              className="button"
              onClick={() => alert(`You chose the ${plan.name} plan!`)}
            >
              Choose {plan.name}
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
