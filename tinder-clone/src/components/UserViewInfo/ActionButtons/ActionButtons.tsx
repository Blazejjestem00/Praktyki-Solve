import "./ActionButtons.css";
import { FaThumbsUp, FaComment, FaBan } from "react-icons/fa";

function ActionButtons({ osoba, onLike, onMessage, onBlock }: any) {
  return (
    <div className="action-buttons">
      <button
        className="btn btn-like"
        onClick={() => onLike?.(osoba.id)}
        title="Like"
      >
        <FaThumbsUp />
        <span>Like</span>
      </button>
      <button
        className="btn btn-message"
        onClick={() => onMessage?.(osoba.id)}
        title="Message"
      >
        <FaComment />
        <span>Message</span>
      </button>
      <button
        className="btn btn-block"
        onClick={() => onBlock?.(osoba.id)}
        title="Block"
      >
        <FaBan />
        <span>Block</span>
      </button>
    </div>
  );
}

export default ActionButtons;
