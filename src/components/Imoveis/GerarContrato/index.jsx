"use client";

import React from "react";
import LinkButton from "@/components/Buttons/LinkButton";
import { useAuthContext } from "@/context/AuthContext";
import { twMerge } from "tailwind-merge";

export default function GerarContrato() {
  const { isAuthenticated } = useAuthContext();

  return (
    <div>
      <h3 className="text-2xl mb-2">Deseja alugar este imóvel?</h3>
      <p className="text-sm mb-2">
        Clique no botão abaixo para gerar o contrato de locação e alugar este
        imóvel.
      </p>
      <LinkButton
        href="/imoveis/:id/gerar-contrato"
        alt="ir para á paǵina para gerar contrato de locação"
        texto="Gerar Contrato"
        className={`
          ${
            !isAuthenticated && "bg-opacity-75 pointer-events-none"
          } w-full text-white`}
        style="normal"
        color="accent"
        ariaDisabled={!isAuthenticated}
      />

      {!isAuthenticated && (
        <p className="text-xs mt-2">
          Faça login ou crie sua conta para gerar o contrato de locação.
        </p>
      )}
    </div>
  );
}
