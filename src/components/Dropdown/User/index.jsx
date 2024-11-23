import React from "react";
import Link from "next/link";

export default function DropdownUser() {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
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
    </div>
  );
}
