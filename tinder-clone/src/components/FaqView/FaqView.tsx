import FaqCard from "./FaqCard";
import NavLinks from "../NavLinks/NavLinks";
function FaqView() {
  return (
    <div>
      <FaqCard />

      <div className="match">
        <NavLinks />
      </div>
    </div>
  );
}

export default FaqView;
