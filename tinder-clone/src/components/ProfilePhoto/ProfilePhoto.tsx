import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import "./ProfilePhoto.css";

function ProfilePhoto({ person }: any) {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((prev) => (prev + 1) % person.photoUrl.length);
  };
  return (
    <div className="photo-container">
      <div className="photo-progress">
        {person?.photoUrl?.map((_: any, i: number) => (
          <div
            key={i}
            className={`progress-bar ${i === index ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="List" onClick={handleClick}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={person.photoUrl[index]}
            alt="profile"
            className="photo"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
export default ProfilePhoto;
