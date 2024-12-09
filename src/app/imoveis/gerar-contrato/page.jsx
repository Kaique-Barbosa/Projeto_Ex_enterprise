"use client";

import React, { useState, useEffect } from "react";
import Section from "@/components/Section";
import api from "@/utils/api";
import { useAuthContext } from "@/context/AuthContext";
import GerarContratoForm from "@/components/forms/GerarContratoForm";
import { useSearchParams } from "next/navigation";

export default function GerarContratoPage() {
  const { user } = useAuthContext();
  const searchParams = useSearchParams();

  const [initialData, setInitialData] = useState({});
  const controller = new AbortController();

  useEffect(() => {
    async function buscarDadosParaLocacao() {
      try {
        const response = await api.get(`/usuario/${user.id})`, {
          signal: controller.signal,
        });

        const { nome, sobrenome } = response.data;

        const data = {
          nomeCompleto: `${nome} ${sobrenome}`,
          imovelCod: searchParams.get("imovel"),
        };

        setInitialData(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    }

    buscarDadosParaLocacao();

    return () => {
      controller.abort();
    };
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Section.Root className="py-12 mt-20 flex flex-col gap-4">
        <h1 className="text-5xl text-accent">Gerar Contrato de locação</h1>
        <p className="text-lg">
          Insira os seus dados para gerar o contrato de locação e alugar este
          imóvel
        </p>
      </Section.Root>
      <Section.Root className="mt-0 flex gap-4 items-center">
        <GerarContratoForm
          userCompleteName={initialData.nomeCompleto}
          imovelCod={initialData.imovelCod}
        />
      </Section.Root>
    </div>
  );
}
