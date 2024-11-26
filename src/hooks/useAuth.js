import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function useAuth() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const response = await axios.get("/verificarToken");
      const data = await response.json();

      if (data.auth) {
        setAuth(true);
      } else {
        router.push("/acesso-bloqueado");
      }

      setLoading(false);
    }

    checkAuth();
  }, []);

  return auth;
}