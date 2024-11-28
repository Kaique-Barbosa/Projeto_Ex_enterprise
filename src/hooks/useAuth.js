import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/utils/api";
import { jwtDecode } from "jwt-decode";
import cookie from "cookie";

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = cookie.parse(req.headers.cookie || "");

  const token = cookies.token;

  return {
    props: {
      token,
    },
  };
}

export default function useAuth(token) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Função para verificar se o usuário está autenticado
    async function checkAuth() {
      try {
        if (!token) {
          throw new Error("Token não encontrado");
        }
        // Verifica se o token é válido no servidor
        const response = await api.get("/verificarToken");

        const data = await response.json();

        // Se o token não for válido, lança um erro
        if (data) {
          throw new Error("Token inválido");
        }

        // Decodifica o token e salva o usuário
        const decodeUser = jwtDecode(token);

        // Salva o usuário no estado
        setUser(decodeUser);

        // Se a rota atual for /login, redireciona para a home
        if (router.pathname === "/login") {
          router.push("/");
        }
      } catch (error) {
        console.error(error);
        console.log("token não é válido");
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
