import { useState } from "react";
import "./Registration.css";

function Registration() {
  const [email, setEmail] = useState(""); //zmienne stanu, domyślnie puste
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* obsługa wysłania formularza i  blokada odświeżenia strony, e to event, czyli zdarzenie, a w React funkcje podobnież często nazywają
    się handle + coś*/
    if (password !== confirmPassword) { //sprawdza, czy oba hasła są identyczne
      alert("Hasła nie są takie same!");
      return; //Przerywa to działanie kodu
    }

    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Rejestracja</h3>

      <label>E-mail</label>
      <input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br></br>
      <label>Hasło</label>
      <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br></br>
      <label>Powtórz hasło</label>
      <input type="password" name="confirmPassword" placeholder="repeat password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
      <br></br>
      <button type="submit">Zarejestruj się</button>
    </form>
  );
}

export default Registration;