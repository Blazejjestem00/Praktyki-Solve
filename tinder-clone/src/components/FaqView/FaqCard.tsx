import { faqs } from "./Faq";
import { useState } from "react";
import { motion } from "motion/react";
import "./FaQ.css";

function FaqCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="faq-container">
      <div className="faq">
        <h1>Frequently Asked Questions</h1>

        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <motion.div
              className="faq-question"
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <span className="faq-category">
                {" "}
                {item.category}:<br />
              </span>
              {item.question}
            </motion.div>

            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqCard;
