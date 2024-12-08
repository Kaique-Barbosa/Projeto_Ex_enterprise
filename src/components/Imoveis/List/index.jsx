import React from "react";
import imovelImg from "@/public/img/mini_02577e27.jpg";
import CardImoveis from "@/components/Imoveis/CardImoveis";
import api from "@/utils/api";

export default async function Imoveis() {
  const response = await api.get(
    "/imoveis/listar"
  );
  const data = response.data;

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {data.map((imovel, index) => (
        <CardImoveis
          key={index}
          image={imovelImg}
          redirect={`/imoveis/${imovel.id}`}
          nome={imovel.nome}
          endereco={imovel.endereco}
          disponibilidade={imovel.disponibilidade}
          valorAlocacao={imovel.valorAlocacao}
          valorCondominio={imovel.valorCondominio}
          areaImovel={imovel.areaImovel}
          quantidadeQuartos={imovel.quantidadeQuartos}
          quantidadeBanheiros={imovel.quantidadeBanheiros}
          vagasEstacionamento={imovel.vagasEstacionamento}
        />
      ))}
    </div>
  );
}
