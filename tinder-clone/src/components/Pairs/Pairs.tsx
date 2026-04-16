import { persons } from "../MainView/MainView";
import Matches from "../Matches/Matches";

function Pairs() {
  return (
    <div className="grid">
      {persons.map((person) => (
        <Matches
          key={person.id}
          name={person.name}
          photoUrl={person.photoUrl[0]}
        />
      ))}
    </div>
  );
}
export default Pairs;
