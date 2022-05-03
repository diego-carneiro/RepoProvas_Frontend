import React from "react";
import { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {

  const [loginTrigger, setLoginTrigger] = useState(false);
  const [screenSwitch, setScreenSwitch] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenStorage = localStorage.getItem("userToken");

    if (tokenStorage) {
      setToken(tokenStorage);
    }
    console.log(token);
  }, []);
  
  return (
    <AuthContext.Provider value={{
      loginTrigger,
      setLoginTrigger,
      screenSwitch,
      setScreenSwitch,
      token,
      setToken,
    }}>
      {children}
    </ AuthContext.Provider>
  )
}