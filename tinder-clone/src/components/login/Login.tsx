import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // blokuje odświeżenie strony

    console.log("Email:", email);
    console.log("Hasło:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Logowanie</h3>

      <label>E-mail</label>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <label>Hasło</label>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <button type="submit">Wyślij</button>
    </form>
  );
}

export default Login;
