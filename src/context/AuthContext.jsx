"use client";

import React, { createContext, useContext } from "react";
import useAuth from "@/hooks/useAuth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const { user, loading, isAuthenticated, logout } = useAuth();
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
