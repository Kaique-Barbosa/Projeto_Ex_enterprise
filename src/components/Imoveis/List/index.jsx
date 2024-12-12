import React from "react";
import imovelImg1 from "@/public/imoveis/terreo/terreo.jpeg";
import imovelImg2 from "@/public/imoveis/escritorio/imagem1.jpg";
import imovelImg3 from "@/public/imoveis/apt1/imagem1.png";


import CardImoveis from "@/components/Imoveis/CardImoveis";
import api from "@/utils/api";

export default async function Imoveis() {
  const response = await api.get("/imoveis/listar");
  const data = response.data;

  // Array com as imagens dos imóveis
  const imagensImoveis = [imovelImg1, imovelImg2, imovelImg3]; 

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {data.map((imovel, index) => (
        <CardImoveis
          key={index}
          image={imagensImoveis[index % imagensImoveis.length]} // Seleciona a imagem pelo índice
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
