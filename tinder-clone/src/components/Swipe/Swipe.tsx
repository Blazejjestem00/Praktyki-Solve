import { GoHeartFill } from "react-icons/go";
import { BiSolidRewindCircle } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import "./Swipe.css";
import { motion } from "motion/react";

export function Swipe({
  onIncrement,
  onDecrement,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <div className="swipe">
      <motion.button
        whileTap={{
          scale: 3,
          transition: { duration: 0.2 },
        }}
        onClick={onDecrement}
        className="rewind"
        title="Rewind"
      >
        {" "}
        <BiSolidRewindCircle />{" "}
      </motion.button>
      <motion.button
        whileTap={{
          scale: 3,
          transition: { duration: 0.2 },
        }}
        onClick={onIncrement}
        className="nope"
        title="Nope"
      >
        <MdClose />{" "}
      </motion.button>
      <motion.button
        whileTap={{
          scale: 3,
          transition: { duration: 0.2 },
        }}
        onClick={onIncrement}
        className="heart"
        title="Heart"
      >
        {" "}
        <GoHeartFill />{" "}
      </motion.button>
    </div>
  );
}

export default Swipe;
