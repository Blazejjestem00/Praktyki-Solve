import "./Bio.css";
function Bio({ person }: any) {
  return (
    <div className="bio">
      <p className="bio-title">Bio:</p>
      <p className="bio-text">{person.caption}</p>
    </div>
  );
}

export default Bio;