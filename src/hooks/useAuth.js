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

        const user = {
          nome: response.data.nome,
          sobrenome: response.data.sobrenome,
          email: response.data.email,
          
        };

        // Salva o usuário no estado
        setUser(user);
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

  return { user, loading, logout, isAuthenticated };
}
