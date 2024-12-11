import React from "react";
import Link from "next/link";
import LinkButton from "@/components/Buttons/LinkButton";
import { IconWhatsapp } from "@/icons/IconWhatsapp";
import api from "@/utils/api";
import ImgCarrocel from "@/components/imgCarrocel/ImgCarrocel";
import Section from "@/components/Section";
import GerarContratoLink from "@/components/Imoveis/GerarContratoLink";

async function buscarImovel(id) {
  const response = await api.get(`/imoveis/listar/${id}`);
  const data = response.data;
  return data;
}

const ImovelPage = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const imovel = await buscarImovel(params.id);

  return (
    <main className="flex flex-col w-full items-center">
      <Section.Root className="mt-28 h-96">
        <ImgCarrocel />
      </Section.Root>

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
        <div className="flex flex-col gap-12 mx-2">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex flex-col gap-6 flex-1">
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
                <h1 className="text-accent mb-4 text-4xl">{imovel.nome}</h1>
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
              <div className="flex gap-x-8 gap-y-4 flex-wrap justify-start sm:justify-between text-xl">
                <div className="flex gap-1 items-center">
                  <span className="iconify mdi--image-area text-2xl text-accent mr-1"></span>
                  <span>{imovel.areaImovel} m²</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="iconify mdi--bed text-2xl text-accent mr-1"></span>
                  <span>
                    {imovel.quantidadeQuartos} quarto
                    {imovel.quantidadeQuartos > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="iconify mdi--garage text-2xl text-accent mr-1"></span>
                  <span>
                    {imovel.vagasEstacionamento} vaga
                    {imovel.vagasEstacionamento > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="iconify mdi--bathroom text-2xl text-accent mr-1"></span>
                  <span>
                    {imovel.quantidadeBanheiros} banheiro
                    {imovel.quantidadeBanheiros > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            </div>
            <aside className="w-full lg:max-w-[25rem] h-fit bg-primary shadow-neutro_sm rounded-lg p-4 flex flex-col gap-4 aside-imovel">
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
              <div>
                <GerarContratoLink imovelCod={imovel.id} />
              </div>
            </aside>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-accent">Descrição</h2>
            <p>{imovel.descricao}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImovelPage;
