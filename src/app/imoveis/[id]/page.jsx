"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import imovelImg from "@/public/img/mini_02577e27.jpg";
import Link from "next/link";
import LinkButton from "@/components/Buttons/LinkButton";
import { IconWhatsapp } from "@/icons/IconWhatsapp";
import api from "@/utils/api";

const ImovelPage = ({ params }) => {
  const [imovel, setImovel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Função para buscar o imóvel
  const buscarImovel = async () => {
    try {
      const response = await api.post(`https://api-ex-enterprise.onrender.com/imoveis/listar/${params.id}`);
      setImovel(response.data); // Atualiza o estado com os dados recebidos
      setIsLoading(false); // Define isLoading como false após os dados serem carregados
    } catch (error) {
      console.error("Erro ao buscar imóvel:", error);
      setIsLoading(false); // Define isLoading como false mesmo se houver erro
    }
  };

  // useEffect para chamar a função de busca de imóvel
  useEffect(() => {
    buscarImovel(); // Chama a função de busca assim que o componente for montado
  }, []); // O efeito será executado apenas uma vez, após a montagem do componente

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />
      <div className="container py-12 w-full max-w-9xl mt-20 h-96">
        <Image
          src={imovelImg}
          className="h-full w-full"
          alt="Imagem do imóvel"
          priority
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
        
        {isLoading ? (
          <span className="loading w-20 max-w-screen-md m-auto loading-dots "></span>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 mx-2">
            <div className="flex flex-col gap-12">
              <div>
              {imovel.disponibilidade ? (
              <div className="bg-success w-fit text-white px-4 py-2 rounded-md">
                 Disponivel para alocação
              </div>
            ) : (
              <div className="bg-error w-fit text-white px-4 py-2 rounded-md">
               Indisponivel para alocação
              </div>
            )}
              
              </div>
              <div>
                <h1 className="text-accent mb-4 text-4xl">
                  {imovel.nome}
                </h1>
                <div className="flex gap-2 items-center text-xl mb-4">
                  <span className="iconify mdi--address-marker text-2xl text-accent"></span>
                  <span>{imovel.endereco}</span>
                </div>
                <span className="uppercase text-2xl">
                  Código: <span className="text-accent">{params.id}</span>
                </span>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-6">
                <div className="grow basis-52">
                  <p className="text-4xl text-accent text-semibold">
                    R$ {imovel.valorAlocacao}
                  </p>
                  <p className="mt-1">Valor de locação (por mês)</p>
                </div>
                <div className="grow basis-32">
                  <p className="text-2xl text-accent text-semibold">
                    R$ {imovel.valorCondominio}
                  </p>
                  <p className="mt-1">Condomínio</p>
                </div>
                <div className="grow basis-32">
                  <p className="text-2xl text-accent text-semibold">
                    R$ {imovel.valorIPTU}
                  </p>
                  <p className="mt-1">IPTU</p>
                </div>
              </div>
              <div className="flex gap-x-8 gap-y-4 flex-wrap justify-start text-xl">
                <div className="flex gap-1 items-center">
                  <span className="iconify mdi--image-area text-2xl text-accent mr-1"></span>
                  <span>{imovel.areaImovel} m²</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="iconify mdi--bed text-2xl text-accent mr-1"></span>
                  <span>{imovel.quantidadeQuartos} quarto{imovel.quantidadeQuartos > 1 ? 's' : ''}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="iconify mdi--garage text-2xl text-accent mr-1"></span>
                  <span>{imovel.vagasEstacionamento} vaga{imovel.vagasEstacionamento > 1 ? 's' : ''}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="iconify mdi--bathroom text-2xl text-accent mr-1"></span>
                  <span>{imovel.quantidadeBanheiros} banheiro{imovel.quantidadeBanheiros > 1 ? 's' : ''}</span>
                </div>
              </div>
              <hr className="bg-secondary" />
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl text-accent">Descrição</h2>
                <p>
                  {imovel.descricao}
                </p>
              </div>
            </div>
            {/* o card de contato\ só aparece se estiver disponivel */}
            {imovel.disponibilidade ? (
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
                  href="/contato?option=imoveis"
                  alt="ir para formulário de contato"
                  texto="Formulário de contato"
                  style="normal"
                  color="accent"
                  className="text-white flex-1"
                />
              </div>
            </aside>

            ) : (
                " "
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ImovelPage;
