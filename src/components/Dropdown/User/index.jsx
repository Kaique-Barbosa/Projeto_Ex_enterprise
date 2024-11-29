import React from "react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

export default function DropdownUser() {
  const { isAuthenticated, user, logout, loading } = useAuthContext();

  if (loading) {
    return null;
  }

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      {isAuthenticated ? (
        <>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost font-normal text-base"
          >
            Ola, {user.nome} {user.sobrenome}
          </div>
          <ul className="dropdown-content menu absolute w-60 bg-primary rounded-lg shadow-lg mt-2">
            <li className="dropdown-item">
              <div className="flex flex-col items-start gap-2">
                <p className="font-semibold text-base">Email</p>
                <p>{user.email}</p>
              </div>
            </li>
            <li className="dropdown-item">
              <button
                onClick={logout}
                className="hover:bg-accent hover:text-white"
              >
                Sair
              </button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost font-normal text-base"
          >
            Voçê não está logado
          </div>

          <ul className="dropdown-content menu absolute w-60 bg-primary rounded-lg shadow-lg mt-2">
            <li className="dropdown-item">
              <Link
                alt="fazer login"
                href="/login"
                className="hover:bg-accent hover:text-white"
              >
                Login
              </Link>
            </li>
            <li className="dropdown-item">
              <Link
                alt="criar conta"
                href="/cadastro"
                className="hover:bg-accent hover:text-white"
              >
                Criar conta
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
