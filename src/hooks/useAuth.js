import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/utils/api";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const controller = new AbortController();

  useEffect(() => {
    // Função para verificar se o usuário está autenticado
    async function checkAuth() {
      try {
        // Verifica se o token é válido no servidor
        const response = await api.get("/verificarToken", {
          signal: controller.signal,
        });

        const user = response.data.data;

        // Salva o usuário no estado
        setUser(user);

        // Se a rota atual for /login, redireciona para a home
        if (router.pathname === "/login") {
          router.push("/");
        }
      } catch (error) {
        setUser(null);
        setLoading(true);
      } finally {
        // Finaliza o loading
        setLoading(false);
      }
    }

    checkAuth();

    return () => {
      controller.abort();
    };
  }, [router.pathname]);

  const logout = () => {
    setUser(null);
    router.push("/login");
  };

  const isAuthenticated = !!user;

  return { user, loading, logout, isAuthenticated };
}
