import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Função para verificar se o usuário está autenticado
    async function checkAuth() {
      try {
        // Verifica se o token é válido no servidor
        const response = await axios.get("/verificarToken", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        // Se o token não for válido, lança um erro
        if (!data.valid) {
          throw new Error("Token inválido");
        }

        // Decodifica o token e salva o usuário
        const decodeUser = jwtDecode(token);

        // Salva o usuário no estado
        setUser(decodeUser);

        // Se a rota atual for /login, redireciona para a home
        if (router.pathname === "/login") {
          router.push(router.query.redirect || "/");
        }
      } catch (error) {
        console.error(error);
        setUser(null);
        setLoading(true);
      } finally {
        // Finaliza o loading
        setLoading(false);
      }
    }

    checkAuth();
  }, [router.pathname]);

  const logout = () => {
    document.cookie = "token=; path=/; max-age=0";
    setUser(null);
    router.push("/login");
  };

  return { user, loading, logout, isAutenticaded: !!user };
}
