"use client";

import React from "react";

export default function Error({ error, reset }) {
  return (
    <main className="h-dvh flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl text-accent">Erro ao carregar imóvel</h1>
        <p className="text-base">
          Ocorreu um erro ao carregar o imóvel. Por favor, tente novamente.
        </p>
        <button
          onClick={reset}
          className="btn btn-accent rounded-full text-white"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
