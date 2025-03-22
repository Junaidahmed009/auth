import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
//-----------------------------
// import React, { useState } from "react";
// import "./App.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.min.css";
// import "/node_modules/primeflex/primeflex.css";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { httpClient } from "./Pages/Httpclient";

// import Keycloak from "keycloak-js";

// /*
//   Init Options
// */
// let initOptions = {
//   url: "http://localhost:8080/",
//   realm: "Auth",
//   clientId: "nodeapp",
// };
// // const initOptions = new initOptions({
// //   url: "http://localhost:8080/",
// //   realm: "Auth", // Use your Keycloak realm
// //   clientId: "test3node", // Use your client ID
// // });

// let kc = new Keycloak(initOptions);

// kc.init({
//   onLoad: "login-required", // Supported values: 'check-sso' , 'login-required'
//   checkLoginIframe: false,
//   // pkceMethod: "S256",
//   prompt: "login", // Forces login prompt
// }).then(
//   (auth) => {
//     if (!auth) {
//       window.location.reload();
//     } else {
//       /* Remove below logs if you are using this on production */
//       // console.info("Authenticated");
//       // console.log("auth", auth);
//       // console.log("Keycloak", kc);
//       // console.log("Access Token", kc.token);
//       const tokenn = kc.token;
//       console.log("token", tokenn);
//       // Get user roles from token
//       const roles = kc.tokenParsed?.resource_access?.["myclient"]?.roles || [];
//       console.log("User Roles:", roles);

//       /* http client will use this header in every request it sends */
//       httpClient.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${kc.token}`;

//       kc.onTokenExpired = () => {
//         console.log("token expired");
//       };
//     }
//   },
//   () => {
//     /* Notify the user if necessary */
//     console.error("Authentication Failed");
//   }
// );
// function App() {
//   const [infoMessage, setInfoMessage] = useState("");

//   /* To demonstrate : http client adds the access token to the Authorization header */
//   const callBackend = () => {
//     httpClient.get("https://mockbin.com/request");
//   };

//   return (
//     <div className="App">
//       <div className="grid">
//         <div className="col-12">
//           <h1>My Secured React App</h1>
//         </div>
//       </div>
//       <div className="grid"></div>

//       <div className="grid">
//         <div className="col-1"></div>
//         <div className="col-2">
//           <div className="col">
//             <Button
//               onClick={() => {
//                 setInfoMessage(
//                   kc.authenticated
//                     ? "Authenticated: TRUE"
//                     : "Authenticated: FALSE"
//                 );
//               }}
//               className="m-1 custom-btn-style"
//               label="Is Authenticated"
//             />
//             <Button
//               onClick={() => {
//                 kc.login();
//               }}
//               className="m-1 custom-btn-style"
//               label="Login"
//               severity="success"
//             />
//             <Button
//               onClick={() => {
//                 setInfoMessage(kc.token);
//               }}
//               className="m-1 custom-btn-style"
//               label="Show Access Token"
//               severity="info"
//             />
//             <Button
//               onClick={() => {
//                 setInfoMessage(JSON.stringify(kc.tokenParsed));
//               }}
//               className="m-1 custom-btn-style"
//               label="Show Parsed Access token"
//               severity="warning"
//             />
//             <Button
//               onClick={() => {
//                 setInfoMessage(kc.isTokenExpired(5).toString());
//               }}
//               className="m-1 custom-btn-style"
//               label="Check Token expired"
//               severity="info"
//             />
//             <Button
//               onClick={() => {
//                 kc.updateToken(10).then(
//                   (refreshed) => {
//                     setInfoMessage("Token Refreshed: " + refreshed.toString());
//                   },
//                   (e) => {
//                     setInfoMessage("Refresh Error");
//                   }
//                 );
//               }}
//               className="m-1 custom-btn-style"
//               label="Update Token (if about to expire)"
//             />{" "}
//             {/** 10 seconds */}
//             <Button
//               onClick={callBackend}
//               className="m-1 custom-btn-style"
//               label="Send HTTP Request"
//               severity="success"
//             />
//             <Button
//               onClick={() => {
//                 kc.logout({ redirectUri: "http://localhost:5173/" });
//               }}
//               className="m-1 custom-btn-style"
//               label="Logout"
//               severity="danger"
//             />
//             <Button
//               onClick={() => {
//                 setInfoMessage(kc.hasRealmRole("admin").toString());
//               }}
//               className="m-1 custom-btn-style"
//               label='has realm role "Admin"'
//               severity="info"
//             />
//             <Button
//               onClick={() => {
//                 setInfoMessage(kc.hasResourceRole("test").toString());
//               }}
//               className="m-1 custom-btn-style"
//               label='has client role "test"'
//               severity="info"
//             />
//           </div>
//         </div>
//         <div className="col-6">
//           <Card>
//             <p style={{ wordBreak: "break-all" }} id="infoPanel">
//               {infoMessage}
//             </p>
//           </Card>
//         </div>

//         <div className="col-2"></div>
//       </div>
//     </div>
//   );
// }

// export default App;
