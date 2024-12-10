"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import api from "@/utils/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const controller = new AbortController();

  useEffect(() => {
    // Função para verificar se o usuário está autenticado
    async function checkAuth() {
      try {
        // Verifica se o token é válido no servidor
        const response = await api.get("/verificarToken", {
          signal: controller.signal,
        });

        const data = response.data;

        const user = {
          id: data.usuario,
          nome: data.nome,
          sobrenome: data.sobrenome,
          email: data.email,
        };

        // Salva o usuário no estado
        setUser(user);
      } catch (error) {
        setUser(null);
      } finally {
        // Finaliza o loading
        setLoading(false);
      }
    }

    checkAuth();

    return () => {
      controller.abort();
    };
  }, [pathname]);

  const logout = async () => {
    try {
      // Faz a requisição para o servidor
      const response = await api.post("/usuario/logout");

      if (response.status === 200) {
        setUser(null);
      }

      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, loading, logout}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
