import "./Matches.css";

function Matches({ name, photoUrl }: { name: string; photoUrl: string }) {
  return (
    <div className="card">
      <img src={photoUrl} alt={name} className="card-img" />

      <div className="card-name">{name}</div>
    </div>
  );
}
export default Matches;
