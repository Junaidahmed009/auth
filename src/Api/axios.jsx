// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:3000/api", // ✅ Change this if your backend URL is different
//   withCredentials: true, // ✅ Allows sending cookies for authentication
// });

// export default API;

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // ✅ Send cookies for authentication
  headers: {
    "Content-Type": "application/json", // ✅ Ensure correct content type
  },
});

export default API;

// ✅ Google Login Function
export const googleLogin = () => {
  window.location.href = "http://localhost:3000/auth/google"; // ✅ Redirect to backend
};
