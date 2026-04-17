import { GoHeartFill } from "react-icons/go";
import { BiSolidRewindCircle } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import "./Swipe.css";
import { motion } from "framer-motion";

export function Swipe({
  onIncrement,
  onDecrement,
  onRewind,
  canRewind = true,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
  onRewind: () => void;
  canRewind?: boolean;
}) {
  return (
    <div className="swipe">
      <motion.button
        whileTap={{
          scale: 1.18,
          transition: { duration: 0.2 },
        }}
        onClick={onRewind}
        className="rewind"
        title="Rewind"
        disabled={!canRewind}
      >
        {" "}
        <BiSolidRewindCircle />{" "}
      </motion.button>
      <motion.button
        whileTap={{
          scale: 1.18,
          transition: { duration: 0.2 },
        }}
        onClick={onDecrement}
        className="nope"
        title="Nope"
      >
        <MdClose />{" "}
      </motion.button>
      <motion.button
        whileTap={{
          scale: 1.18,
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