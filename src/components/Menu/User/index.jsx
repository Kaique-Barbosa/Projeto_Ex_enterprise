import React from "react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import LinkButton from "@/components/Buttons/LinkButton";

export default function MenuUser() {
  const { isAuthenticated, user, logout, loading } = useAuthContext();

  if (loading) {
    return null;
  }

  return (
    <>
      {isAuthenticated ? (
        <div className="flex flex-col gap-4">
          <p tabIndex={0} role="button" className="font-medium text-xl">
            Ola, {user.nome} {user.sobrenome}
          </p>

          <div className="flex flex-col items-start gap-1">
            <p className="font-semibold text-base">Email</p>
            <p>{user.email}</p>
          </div>

          <button
            onClick={logout}
            className="text-base btn btn-accent text-white"
          >
            Sair
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <LinkButton
            href="/login"
            alt="fazer login"
            style="normal"
            className="text-white text-base"
            color="accent"
          >
            Login
          </LinkButton>

          <LinkButton
            href="/cadastro"
            alt="criar conta"
            style="outline"
            className="text-base hover:text-white"
            color="accent"
          >
            Criar conta
          </LinkButton>
        </div>
      )}
    </>
  );
}
