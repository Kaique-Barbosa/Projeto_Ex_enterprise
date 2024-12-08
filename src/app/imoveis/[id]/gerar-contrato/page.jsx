import React from "react";
import Section from "@/components/Section";
import api from "@/utils/api";

async function authUser() {
  const response = await api.get("/verificarToken");
  const { usuario } = response.data;
  return { id: usuario };
}

async function buscarDadosParaLocação(userId, imovelCod) {
  const [userResponse, imovelResponse] = await Promise.all([
    api.get("/usuario/" + userId),
    api.get("/imoveis/listar/" + imovelCod),
  ]);

  return { userData: userResponse.data, imovelData: imovelResponse.data };
}

export default async function GerarContrato(params) {
  const user = await authUser();

  const { userData, imovelData } = buscarDadosParaLocação(user.id, params.id);

  console.log(userData, imovelData);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Section.Root className="py-12 mt-20 flex flex-col gap-4">
        <h1 className="text-5xl text-accent">Gerar Contrato de locação</h1>
        <p className="text-lg">
          Insira os seus dados para gerar o contrato de locação e alugar este
          imóvel
        </p>
      </Section.Root>
      <Section.Root className="flex flex-col gap-4">
        <Section.Title>Informações do Imóvel</Section.Title>
      </Section.Root>
    </div>
  );
}
