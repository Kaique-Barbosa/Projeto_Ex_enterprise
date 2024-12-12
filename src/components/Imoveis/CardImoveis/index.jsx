import Image from "next/image";
import React from "react";
import LinkButton from "@/components/Buttons/LinkButton";
import Card from "@/components/Card";
import { validateFieldsNatively } from "@hookform/resolvers";
import Link from "next/link";

export default function index({
  image,
  redirect,
  nome,
  endereco,
  disponibilidade,
  valorAlocacao,
  valorCondominio,
  valorIPTU,
  areaImovel,
  quantidadeQuartos,
  quantidadeBanheiros,
  vagasEstacionamento,
  descricao,
}) {
  return (
    <div className="card-imoveis bg-cinza-200 dark:bg-preto-900 shadow-neutro flex h-fit w-full max-w-9xl items-center justify-center rounded-lg tracking-widest leading-tighter">
      <Link
        href={redirect}
        alt="conferir detalhes do imóvel"
        className="card-imoveis-align flex flex-col self-stretch flex-1"
      >
        <div className="card-imoveis-align flex flex-col self-stretch flex-1">
          <Image
            src={image}
            alt="imagem do imovel"
            className="card-imoveis-image h-80 w-full rounded-t-lg"
          />
          <div className="flex flex-col gap-8 p-6 flex-1">
            <div className="flex flex-col gap-2">
              <h5>{nome}</h5>
              <div className="flex gap-2 items-center">
                <span className="iconify mdi--address-marker text-2xl text-accent"></span>
                <span>{endereco}</span>
              </div>
            </div>
            <div className="flex gap-6 flex-wrap">
              <div className="flex gap-1 items-center">
                <span className="iconify mdi--image-area text-2xl text-accent mr-1"></span>
                <span>{areaImovel} m²</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="iconify mdi--bed text-2xl text-accent mr-1"></span>
                <span>{quantidadeQuartos} quartos</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="iconify mdi--garage text-2xl text-accent mr-1"></span>
                <span>{vagasEstacionamento} vagas</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="iconify mdi--bathroom text-2xl text-accent mr-1"></span>
                <span>{quantidadeBanheiros} banheiros</span>
              </div>
            </div>
            {disponibilidade ? (
              <div className="bg-success w-fit text-white px-4 py-2 rounded-md">
                Disponivel para alocação
              </div>
            ) : (
              <div className="bg-error w-fit text-white px-4 py-2 rounded-md">
                Indisponivel para alocação
              </div>
            )}

            <div className="w-full flex flex-col xs:flex-row justify-center items-center xs:justify-between gap-4">
              <div className="flex flex-col gap-2 text-center xs:text-start">
                <span className="text-accent text-3xl font-semibold leading-7 ">
                  R$ {valorAlocacao}/mês
                </span>
                <span className="font-medium">
                  + R$ {valorCondominio} de condomínio
                </span>
              </div>
              <div className="btn btn-ghost hover:bg-accent hover:text-white">
                Mais informações
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
