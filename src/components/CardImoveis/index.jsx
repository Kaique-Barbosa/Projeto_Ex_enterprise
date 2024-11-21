import Image from "next/image";
import React from "react";
import LinkButton from "../Buttons/LinkButton";

export default function index({ image, redirect }) {
  return (
    <div className="bg-cinza-200 dark:bg-preto-900 shadow-neutro flex h-fit md:min-h-80 w-full max-w-7xl items-center justify-center rounded-lg tracking-widest leading-tighter">
      <div className="flex flex-1 self-stretch flex-col md:flex-row">
        <Image
          src={image}
          className="h-60 md:h-full w-full md:w-80 rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
        />
        <div className="flex flex-col items-start justify-center gap-8 p-6 flex-1">
          <div className="flex flex-col gap-2">
            <h5>Apartamento 1 quarto para locação, 40,03m²</h5>
            <div className="flex gap-2 items-center">
              <span className="iconify mdi--address-marker text-2xl text-accent"></span>
              <span>Pituba, Rua Rubem Berta, 46</span>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="flex gap-1 items-center">
              <span className="iconify mdi--image-area text-2xl text-accent mr-1"></span>
              <span>0</span>
              <span>m²</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="iconify mdi--bed text-2xl text-accent mr-1"></span>
              <span>0</span>
              <span>quarto</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="iconify mdi--garage text-2xl text-accent mr-1"></span>
              <span>0</span>
              <span>vaga</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="iconify mdi--bathroom text-2xl text-accent mr-1"></span>
              <span>0</span>
              <span>banheiro</span>
            </div>
          </div>
          <div className="bg-success text-white p-2 rounded-xl">Disponivel</div>
          <div className="w-full flex flex-col xs:flex-row justify-center items-center xs:justify-between gap-4">
            <div className="flex flex-col gap-2 text-center xs:text-start">
              <span className="text-accent text-4xl font-semibold leading-7 ">
                R$<span className="ml-1">0,00 </span>
                <span className="text-xl text-secondary">/mês</span>
              </span>
              <span className="font-medium">
                + R$ <span>0,00</span> de condomínio
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
    </div>
  );
}
