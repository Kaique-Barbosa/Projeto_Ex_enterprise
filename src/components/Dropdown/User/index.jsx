import React from "react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

export default function DropdownUser() {
  const { isAuthenticated, user, logout, loading } = useAuthContext();

  if (loading) {
    return <div className="w-36 h-9 rounded-full bg-gray-300 animate-pulse"></div>;
  }

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      {isAuthenticated ? (
        <>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:bg-accent h-12 rounded-full text-lg py-1 px-4 font-semibold hover:text-white"
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
            className="btn btn-ghost hover:bg-accent h-12 rounded-full text-lg py-1 px-4 font-semibold hover:text-white"
          >
            Fazer Login
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
