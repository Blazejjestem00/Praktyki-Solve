import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { loginWithRedirect } = useAuth0();

 const handleSubmit = (e) => {
  e.preventDefault();

  if (login && password) {
    localStorage.setItem("isLogged", "true");

    window.dispatchEvent(new Event("storage"));
  }
};

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Logowanie</h2>

        <div className="field">
          <label>Login</label>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Hasło</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Zaloguj się</button>

        <h2>Lub</h2>

        <button
          type="button"
          className="loginByAuth0"
          onClick={() => loginWithRedirect()}
        >
          Zaloguj się przez Auth0
        </button>
      </form>
    </div>
  );
};

export default Login;