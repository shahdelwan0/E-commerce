import React, { createContext, useEffect, useState } from "react";
import * as authApi from "../api/auth";
import { TOKEN_KEY } from "../utils/constants";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (token) {
        try {
          const data = await authApi.getCurrentUser();
          setUser(data);
        } catch (e) {
          setUser(null);
          localStorage.removeItem(TOKEN_KEY);
          setToken(null);
        }
      }
      setLoading(false);
    }
    load();
  }, [token]);

  async function login(credentials) {
    const res = await authApi.loginUser(credentials);
    if (res.token) {
      localStorage.setItem(TOKEN_KEY, res.token);
      setToken(res.token);
    }
    setUser(res.user || null);
    return res;
  }

 async function register(userData) {
  try {
    const res = await authApi.registerUser(userData);
    if (res.token) {
      localStorage.setItem(TOKEN_KEY, res.token);
      setToken(res.token);
    }
    setUser(res.user || null);
    console.log("✅ Register successful:", res); // 👈
    return res;
  } catch (err) {
    console.log("Register error details:", err.response?.data);
    throw err;
  }
}

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
    window.location.href = "/login";
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
