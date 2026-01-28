import { createContext,useContext } from "react";
import { useState,useEffect } from "react";
export const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
useEffect(() => {
    const savedToken = localStorage.getItem("token");
    console.log("Saved token:", savedToken);
    if (savedToken) setToken(savedToken);
     console.log("Saved token:in state");
  }, []);
  function saveToken(newToken) {
    localStorage.setItem("token", newToken);
     console.log(localStorage.getItem("token"));
    setToken(newToken);
  } 
  function clearToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  

  return (
    <AuthContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );

  
}
