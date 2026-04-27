import "./PremiumBuyView.css";
import { motion } from "motion/react";
import { plans } from "./plans";
import { SiTinder } from "react-icons/si";

interface plans {
  id: number;
  name: string;
  price: string;
  features: string[];
  cssClass: string;
}
function Card() {
  return (
    <div className="premium-container">
      <h1 className="Logo"><SiTinder /> Przejdź na Tinder Premium</h1>
<p>Odblokuj ekskluzywne funkcje i znajdź swoją idealną parę szybciej!</p>

      <div className="plans">
        {plans.map((plan) => (
          <div key={plan.id} className="card1">
            <h2 style={{ color: plan.color }}>{plan.name}</h2>
            <img src={`/public/${plan.image}`} alt={plan.name} />
            <p className="price">{plan.price}</p>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <motion.button
              className="button"
              onClick={() => alert(`Wybrałeś ${plan.name} plan!`)}
            >
              Wybierz {plan.name}
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
