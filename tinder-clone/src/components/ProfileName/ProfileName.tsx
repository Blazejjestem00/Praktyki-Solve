function profileName({ person }: any) {
  return (
    <div key={person.id}>
      <div>
        <label id="name">{person.imie}</label>
        <label id="inter">, </label>
        <label id="age">{person.age}</label>
      </div>
    </div>
  );
}

export default profileName;
