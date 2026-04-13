import { useState } from "react";
import "./Login.css";

function Login() {
 

  return (
    <form>
      <h3>Logowanie</h3>
      <br></br>
      <label>E-mail</label>
      <input type="email" name="email" placeholder="E-mail" />
      <br></br>
      <label>Hasło</label>
      <input type="password" name="password" placeholder="password" />
      <br></br>
      <button type="submit">Wyślij</button>
    </form>
  );
}

export default Login;