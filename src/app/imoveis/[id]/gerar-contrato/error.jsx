"use client";

import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="h-dvh flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl text-accent">Erro ao gerar contrato</h1>
        <p className="text-base">
          Ocorreu um erro ao gerar o contrato de locação. Por favor, tente
          novamente.
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
