import React from "react";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import imovelImg from "@/public/img/mini_02577e27.jpg";
import Link from "next/link";
import LinkButton from "@/components/Buttons/LinkButton";
import { IconWhatsapp } from "@/icons/IconWhatsapp";
import FormField from "@/components/forms/FormField";

const ImovelPage = ({ params }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />
      <div className="container py-12 w-full max-w-9xl mt-20 h-96">
        <Image
          src={imovelImg}
          className="h-full w-full"
          alt="Imagem do imóvel"
        />
      </div>

      <div className="container w-full max-w-9xl my-12 flex flex-col gap-8">
        <div className="breadcrumbs text-lg">
          <ul>
            <li>
              <Link
                href="/imoveis"
                alt="voltar para imóveis"
                className="hover:text-accent hover:underline-offset-2"
              >
                Imóveis
              </Link>
            </li>
            <li>
              <span className="text-accent">{params.id}</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-12">
            <div>
              <div className="bg-success text-white p-2 rounded inline">
                Disponivel para locação
              </div>
            </div>
            <div>
              <h1 className="text-accent mb-4 text-4xl">
                Apartamento 1 quarto para locação, 40,03m²
              </h1>
              <div className="flex gap-2 items-center text-xl mb-4">
                <span className="iconify mdi--address-marker text-2xl text-accent"></span>
                <span>Pituba, Rua Rubem Berta, 46</span>
              </div>
              <span className="uppercase text-2xl">
                Código: <span className="text-accent">{params.id}</span>
              </span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-6">
              <div className="grow basis-52">
                <p className="text-4xl text-accent text-semibold">R$ 0,00 </p>
                <p className="mt-1">Valor de locação (por mês)</p>
              </div>
              <div className="grow basis-32">
                <p className="text-2xl text-accent text-semibold">R$ 0,00 </p>
                <p className="mt-1">Condomínio</p>
              </div>
              <div className="grow basis-32">
                <p className="text-2xl text-accent text-semibold">R$ 0,00 </p>
                <p className="mt-1">IPTU</p>
              </div>
            </div>
            <div className="flex gap-x-8 gap-y-4 flex-wrap justify-start text-xl">
              <div className="flex gap-1 items-center">
                <span className="iconify mdi--image-area text-2xl text-accent mr-1"></span>
                <span>0 m²</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="iconify mdi--bed text-2xl text-accent mr-1"></span>
                <span> 0 quarto</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="iconify mdi--garage text-2xl text-accent mr-1"></span>
                <span>0 vaga</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="iconify mdi--bathroom text-2xl text-accent mr-1"></span>
                <span>0 banheiro</span>
              </div>
            </div>
            <hr className="bg-secondary" />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-accent">Descrição</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                metus purus, ultricies ac odio sed, tempus ultricies felis.
                Donec ultricies, purus vitae luctus lacinia, mi ligula ultricies
                tortor, sit amet laoreet nunc velit nec libero. Nullam
                condimentum, ligula ac fermentum tincidunt
              </p>
            </div>
          </div>
          <aside className="w-full lg:max-w-[30rem] h-fit bg-primary shadow-neutro_sm rounded-lg p-4 flex flex-col gap-4 aside-imovel">
            <h3 className="text-2xl">Entre em contato</h3>
            <div className="aside-imovel-contact flex flex-col gap-1">
              <LinkButton
                href="#"
                alt="Clique para conversar no WhatsApp"
                texto="Conversar no WhatsApp"
                style="normal"
                color="green-600"
                className="text-white bg-green-600 hover:bg-green-700 flex-1"
              >
                <IconWhatsapp className="size-4 fill-current text-inherit" />
              </LinkButton>
              <div className="divider">ou</div>
              <LinkButton
                href="#"
                alt="ir para formulário de contato"
                texto="Formulário de contato"
                style="normal"
                color="accent"
                className="text-white flex-1"
              />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImovelPage;
