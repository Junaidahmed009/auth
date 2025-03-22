// export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useEffect, useState } from "react";

// createContext() creates a global authentication state.
//  Use useContext(AuthContext) to get user, login, logout anywhere in the app.
const AuthContext = createContext();

//AuthProvider is a wrapper component that provides authentication data globally.
//children means it wraps other components, allowing them to access user, login, logout.
//Used in App.js to share auth state across the entire app.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  let logoutTimer = null; // Store logout timer

  // Decode JWT safely
  const parseJWT = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
      console.error("Invalid token format");
      return null;
    }
  };

  // Check if token is expired using its time
  const isTokenExpired = (token) => {
    const decoded = parseJWT(token);
    return decoded ? decoded.exp * 1000 < Date.now() : true;
  };

  // Set a logout timer based on token expiration
  const setLogoutTimer = (exp) => {
    const timeLeft = exp * 1000 - Date.now();
    if (timeLeft > 0) {
      logoutTimer = setTimeout(() => {
        console.warn("Token expired! Logging out...");
        logout();
      }, timeLeft);
    }
  };
  //login function passsing token here.
  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = parseJWT(token);
    if (decoded) {
      setUser(decoded);
      setLogoutTimer(decoded.exp); // Auto-logout when the token expires
    }
  };
  //after time expire logout function log outs the user
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    if (logoutTimer) clearTimeout(logoutTimer); // Clear any existing logout timer
  };

  // ✅ Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = parseJWT(token); //  Decode the token to get user info
      if (decoded && !isTokenExpired(token)) {
        setUser(decoded); // Set user state if token is valid
        setLogoutTimer(decoded.exp); // Start logout timer based on token expiry
      } else {
        console.warn("Token expired! Logging out...");
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
