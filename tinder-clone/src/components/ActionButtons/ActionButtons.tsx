import { motion } from "framer-motion";
import "./ActionButtons.css";
import { FaThumbsUp, FaComment, FaBan } from "react-icons/fa";

function ActionButtons({ osoba, onLike, onMessage, onBlock }: any) {
  return (
    <div className="action-buttons">
      <motion.button
        whileTap={{
          scale: 3,
          transition: { duration: 0.2 },
        }}
        className="btn btn-like"
        onClick={() => onLike?.(osoba.id)}
        title="Like"
      >
        <FaThumbsUp />
        <span>Like</span>
      </motion.button>
      <motion.button
        whileTap={{
          scale: 3,
          transition: { duration: 0.2 },
        }}
        className="btn btn-message"
        onClick={() => onMessage?.(osoba.id)}
        title="Message"
      >
        <FaComment />
        <span>Message</span>
      </motion.button>
      <motion.button
        whileTap={{
          scale: 3,
          transition: { duration: 0.2 },
        }}
        className="btn btn-block"
        onClick={() => onBlock?.(osoba.id)}
        title="Block"
      >
        <FaBan />
        <span>Block</span>
      </motion.button>
    </div>
  );
}

export default ActionButtons;