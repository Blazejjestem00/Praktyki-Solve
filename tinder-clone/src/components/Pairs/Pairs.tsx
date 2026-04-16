import './Pairs.css'
import { useState } from 'react';
import { persons } from "../MainView/MainView";
import Matches from '../Matches/Matches';


function Pairs() {
  const [person] = useState(0);
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
