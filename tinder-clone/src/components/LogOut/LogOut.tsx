import { useAuth0 } from "@auth0/auth0-react";

export const LogOut = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    // lokalny logout
    localStorage.removeItem("isLogged");

    
    if (isAuthenticated) {
      logout({
        logoutParams: {
          returnTo: window.location.origin,
        },
      });
    } else {
      // tylko lokalny logout → wymuszenie rerenderu
      window.location.reload();
    }
  };

  return <button onClick={handleLogout}>Wyloguj się</button>;
};

export default LogOut;