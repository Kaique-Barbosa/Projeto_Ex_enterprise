"use client";

import React, { useState, useEffect } from "react";
import Section from "@/components/Section";
import api from "@/utils/api";
import { useAuthContext } from "@/context/AuthContext";
import GerarContratoForm from "@/components/forms/GerarContratoForm";
import { useSearchParams } from "next/navigation";

export default function GerarContratoPage() {
  const { user, loading } = useAuthContext();
  const searchParams = useSearchParams();

  const [initialData, setInitialData] = useState({});
  const controllerRef = React.useRef(new AbortController());

  useEffect(() => {
    async function buscarDadosParaLocacao() {
      if (user && !loading) {
        try {
          const response = await api.get(`/usuario/${user.id}`, {
            signal: controllerRef.current.signal,
          });

          const data = response.data;

          const initData = {
            nomeCompleto: `${data.nome} ${data.sobrenome}`,
            cpf: data.cpf || "",
            imovelCod: searchParams.get("imovel"),
          };

          setInitialData(initData);
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error("Erro ao buscar dados:", error);
          }
        }
      }
    }

    buscarDadosParaLocacao();

    return () => {
      controllerRef.current.abort();
    };
  }, [user, loading, searchParams]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <span className="loading loading-spinner text-accent size-10"></span>
      </div>
    );
  }

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
        <GerarContratoForm initialData={initialData} />
      </Section.Root>
    </div>
  );
}
