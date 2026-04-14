import "./Bio.css";

function Bio({ osoba }: any) {
  return (
    <div className="bio">
      <p>Bio</p>
      <p>{osoba.opis}</p>
    </div>
  );
}

export default Bio;
