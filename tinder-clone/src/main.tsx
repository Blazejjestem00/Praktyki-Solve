import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/components/style.css";
import App from "./App.tsx";

import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="tinder-clone.eu.auth0.com"
      clientId="PG42YQruv7LxWeVGbMfouti2sNA6EreH"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);