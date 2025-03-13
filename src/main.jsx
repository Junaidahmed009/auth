import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import User from "./Pages/User.jsx";
import Admin from "./Pages/Admin.jsx";
import Manager from "./Pages/Manager.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/User" element={<User />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Manager" element={<Manager />} />
    </Routes>
  </BrowserRouter>
);
