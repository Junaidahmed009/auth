import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080", // Keycloak server URL
  realm: "Auth", // Your Keycloak realm
  clientId: "test3node", // Your client ID from Keycloak
});

export default keycloak;
