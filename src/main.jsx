// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Login from "./Pages/Login.jsx";
// import SignUp from "./Pages/SignUp.jsx";
// import User from "./Pages/User.jsx";
// import Admin from "./Pages/Admin.jsx";
// import Manager from "./Pages/Manager.jsx";
// import { AuthProvider } from "./Context/AuthContext.jsx";
// import ProtectedRoute from "./Pages/ProctedRoutes.jsx";

// createRoot(document.getElementById("root")).render(
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>
//   // <AuthProvider>
//   //   <BrowserRouter>
//   //     <Routes>
//   //       <Route path="/" element={<App />}></Route>
//   //       <Route path="/login" element={<Login />} />
//   //       <Route path="/signup" element={<SignUp />} />
//   //       <Route path="/User" element={<User />} />
//   //       <Route path="/Admin" element={<Admin />} />
//   //       <Route path="/Manager" element={<Manager />} />
//   //     </Routes>
//   //   </BrowserRouter>
//   // </AuthProvider>
//   <Routes>
//     <Route path="/" element={<App />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/signup" element={<SignUp />} />
//     <Route
//       path="/User"
//       element={
//         <ProtectedRoute
//           element={<User />}
//           allowedRoles={["user", "manager", "admin"]}
//         />
//       }
//     />
//     <Route
//       path="/Admin"
//       element={<ProtectedRoute element={<Admin />} allowedRoles={["admin"]} />}
//     />
//     <Route
//       path="/Manager"
//       element={
//         <ProtectedRoute
//           element={<Manager />}
//           allowedRoles={["manager", "admin"]}
//         />
//       }
//     />
//   </Routes>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import User from "./Pages/User.jsx";
import Admin from "./Pages/Admin.jsx";
import Manager from "./Pages/Manager.jsx";
import AuthSuccess from "./Pages/AuthSucess.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import ProtectedRoutes from "./Pages/ProctedRoutes.jsx";

createRoot(document.getElementById("root")).render(
  // AuthProvider Wraps the app with authentication logic.
  <AuthProvider>
    {/* Enables navigation and URL-based routing. */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/AuthSuccess" element={<AuthSuccess />} />
        {/* <Route path="/GoogDashboard" element={<GoogDashboard />} /> */}
        <Route
          path="/User"
          element={
            <ProtectedRoutes
              element={<User />}
              allowedRoles={["user", "manager", "admin"]}
            />
          }
        />
        <Route
          path="/Admin"
          element={
            <ProtectedRoutes element={<Admin />} allowedRoles={["admin"]} />
          }
        />
        <Route
          path="/Manager"
          element={
            <ProtectedRoutes
              element={<Manager />}
              allowedRoles={["manager", "admin"]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
