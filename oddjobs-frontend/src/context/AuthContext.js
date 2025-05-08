import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  // Load token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);

      // Optional: decode token to get email
      const payload = JSON.parse(atob(storedToken.split(".")[1]));
      setUserEmail(payload.email || "");
    }
  }, []);

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);

    const payload = JSON.parse(atob(newToken.split(".")[1]));
    setUserEmail(payload.email || "");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserEmail("");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
