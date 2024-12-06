"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo.png";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="flex gap-2 justify-center items-center p-4">
        <Link alt="ir para home" href="/" className="flex items-center gap-2">
          <Image className="size-16 object-cover" alt="Logo" src={logo} />
          <span className="text-2xl font-semibold">Ex Enterprise</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center gap-6">
        <span className="text-9xl text-accent">401</span>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl text-accent">Acesso negado</h1>
          <p className="text-center text-lg">
            Você não tem permissão para acessar essa página.
          </p>
          <button
            className="btn font-medium py-2 px-8 bg-transparent text-secondary rounded-full border-accent hover:bg-accent"
            onClick={() => router.back()}
          >
            Voltar
          </button>
        </div>
      </main>
    </div>
  );
}
