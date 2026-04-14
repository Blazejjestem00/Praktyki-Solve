function profileName({ osoba }: any) {
  return (
    <div key={osoba.id}>
      <div>
        <label id="name">{osoba.imie}</label>
        <label id="inter">, </label>
        <label id="age">{osoba.age}</label>
      </div>
    </div>
  );
}

export default profileName;
