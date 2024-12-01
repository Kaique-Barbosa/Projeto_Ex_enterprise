import Image from "next/image";
import React from "react";
import LinkButton from "@/components/Buttons/LinkButton";
import Card from "@/components/Card";

export default function index({ image, redirect }) {
  return (
    <Card.Root css="card-imoveis">
      <div className="card-imoveis-align flex flex-col self-stretch flex-1">
        <Image
          src={image}
          alt="imagem do imovel"
          className="card-imoveis-image h-60 w-full rounded-t-lg"
        />
        <div className="flex flex-col gap-8 p-6 flex-1">
          <div className="flex flex-col gap-2">
            <h5>Apartamento 1 quarto para locação, 40,03m²</h5>
            <div className="flex gap-2 items-center">
              <span className="iconify mdi--address-marker text-2xl text-accent"></span>
              <span>Pituba, Rua Rubem Berta, 46</span>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-1 items-center">
              <span className="iconify mdi--image-area text-2xl text-accent mr-1"></span>
              <span>0 m²</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="iconify mdi--bed text-2xl text-accent mr-1"></span>
              <span>0 quartos</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="iconify mdi--garage text-2xl text-accent mr-1"></span>
              <span>0 vagas</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="iconify mdi--bathroom text-2xl text-accent mr-1"></span>
              <span>0 banheiros</span>
            </div>
          </div>
          <div className="bg-success w-fit text-white px-4 py-2 rounded-md">
            Disponivel para alocação
          </div>
          <div className="w-full flex flex-col xs:flex-row justify-center items-center xs:justify-between gap-4">
            <div className="flex flex-col gap-2 text-center xs:text-start">
              <span className="text-accent text-3xl font-semibold leading-7 ">
                R$ 0,00/mês
              </span>
              <span className="font-medium">
                + R$ 0,00 de condomínio
              </span>
            </div>
            <LinkButton
              href={redirect}
              alt="conferir detalhes do imóvel"
              texto="Mais informações"
              style="ghost"
              color="accent"
              className="text-secondary hover:text-white"
            />
          </div>
        </div>
      </div>
    </Card.Root>
  );
}
