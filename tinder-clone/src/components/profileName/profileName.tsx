function profileName({osoba}:any) {

  return (
    <div key={osoba.id}>
    <label id="name">{osoba.imie}</label>
    <label id="inter">, </label>
    <label id="age">{osoba.age}</label>
    </div>
  )
}

export default profileName