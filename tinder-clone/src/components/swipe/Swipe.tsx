import { GoHeartFill } from "react-icons/go";
import { BiSolidRewindCircle } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import "./Swipe.css";

export function Swipe({
  onIncrement,
  onDecrement,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <div className="swipe">
      <button onClick={onDecrement} className="rewind">
        {" "}
        <BiSolidRewindCircle />{" "}
      </button>
      <button onClick={onIncrement} className="nope">
        <MdClose />{" "}
      </button>
      <button onClick={onIncrement} className="heart">
        {" "}
        <GoHeartFill />{" "}
      </button>
    </div>
  );
}

export default Swipe;
