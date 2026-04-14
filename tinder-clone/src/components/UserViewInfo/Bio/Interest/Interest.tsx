import "./Interest.css";

function Interest({ osoba }: any) {
  return (
    <div className="interest">
      <p>Zainteresowania</p>
      <p>{osoba.zainteresowania.join(", ")}</p>
    </div>
  );
}

export default Interest;
