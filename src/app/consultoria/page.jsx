"use client";

import { React, useState } from "react";

//importação de componentes
import { HeroSection } from "@/components/HeroSection";
import Card from "@/components/Card";
import Image from "next/image";
import { Header } from "@/components/header/Header";
import CardModel2 from "@/components/cardModel2/cardModel2";
import PerguntasFrequentes from "@/components/perguntasFrequentes/PerguntasFrequentes";
import BotaoOnClick from "@/components/Buttons/BotaoOnClick";
import Footer from "@/components/footer/Footer";
import Carrocel from "@/components/carrocel/Carrocel";
import FaleConosco from "@/components/faleConosco/FaleConosco";

// importação de imagens e logos
import consultoria from "@/public/img/consultoria.jpg";
import consultoria2 from "@/public/img/consultoria2.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";
import { GlobeIcon } from "@/icons/GlobeIcon/GlobeIcon";
import { EnterpriseIcon } from "@/icons/EnterpriseIcon/EnterpriseIcon";
import { RoctketIcon } from "@/icons/RocketIcon/RoctketIcon";
import Section from "@/components/Section";
import LinkButton from "@/components/Buttons/LinkButton";

// INICIO -------------- area dos dados dos componentes ------------------
const cardsData = [
  {
    imagem: consultoria,
    titulo: "Análise e Diagnóstico de Sistemas de TI",
    subTitulo:
      "Avaliação detalhada da infraestrutura tecnológica existente para identificar pontos de melhoria e oportunidades de otimização.",
    altLink: "texto alternativo",
    inverter: true,
    linkButton: "/consultoria",
  },
  {
    imagem: locacao,
    titulo: "Desenvolvimento de Soluções Personalizadas",
    subTitulo:
      "Criação e implementação de soluções sob medida para atender às necessidades específicas dos clientes, desde software até integração de sistemas.",
    altLink: "texto alternativo",
    inverter: false,
    linkButton: "/imoveis",
  },
  {
    imagem: ecommerce,
    titulo: "Implementação de Sistemas e Softwares",
    subTitulo:
      "Planejamento e execução de projetos de implementação de novos sistemas e softwares, garantindo uma transição suave e eficiente.",
    altLink: "texto alternativo",
    inverter: true,
    linkButton: "/ecommerce",
  },
  {
    imagem: ecommerce,
    titulo: "Treinamentos e Workshops em Tecnologia da Informação",
    subTitulo:
      "Capacitação de equipes através de treinamentos práticos e workshops, focados em novas tecnologias, boas práticas e tendências do mercado de TI.",
    altLink: "texto alternativo",
    inverter: false,
    linkButton: "/ecommerce",
  },
];

const PerguntasFrequentesData = [
  { titulo: "Pergunta 1", texto: "texto texto texto texto", aberto: true },
  { titulo: "Pergunta 2", texto: "texto texto texto texto", aberto: false },
  { titulo: "Pergunta 3", texto: "texto texto texto texto", aberto: false },
  { titulo: "Pergunta 4", texto: "texto texto texto texto", aberto: false },
  { titulo: "Pergunta 5", texto: "texto texto texto texto", aberto: false },
  { titulo: "Pergunta 6", texto: "texto texto texto texto", aberto: false },
  { titulo: "Pergunta 7", texto: "texto texto texto texto", aberto: false },
  { titulo: "Pergunta 8", texto: "texto texto texto texto", aberto: false },
];

// ----------------- FIM  area dos dados dos componentes-----------------

const ConsultoriaPage = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Inicialmente 5 perguntas visíveis

  const vermais = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Aumenta a contagem visível em 5
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />

      <HeroSection.Root>
        <HeroSection.Title>
          Conheça a nossa{" "}
          <strong className="text-secondary">Consultoria em TI</strong>
        </HeroSection.Title>
      </HeroSection.Root>

      <Section.Root className="flex flex-col lg:flex-row gap-8">
        <Image
          src={consultoria2}
          className="flex-1 max-h-80 lg:max-h-96 object-cover rounded-lg"
          alt="imagem de um escritório"
        />
        <div className="flex-1 flex flex-col justify-center">
          <Section.Title className="text-center mb-6">
            Uma empresa especializada em renovar o seu negócio
          </Section.Title>
          <Section.Description className="text-center text-accent">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Borem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio
          </Section.Description>
        </div>
      </Section.Root>

      {/* sequencia de cards. valores estão acima em um array de objetos */}
      <Section.Root className="flex flex-col items-center gap-12">
        <div>
          <Section.Title className="text-center mb-4">
            Nossos Serviços
          </Section.Title>
          <Section.Description className="text-lg text-accent">
            Veja o que oferecemos em soluções para TI
          </Section.Description>
        </div>
        {cardsData.map((card, index) => (
          <Card.Root key={index}>
            <Card.Container inverter={card.inverter}>
              <Card.Header flex>
                <Image
                  className={`object-cover h-full rounded-t-lg ${
                    card.inverter
                      ? "sm:rounded-r-lg sm:rounded-l-none"
                      : "sm:rounded-l-lg sm:rounded-r-none"
                  }`}
                  alt={card.altLink}
                  src={card.imagem}
                />
              </Card.Header>
              <Card.Body>
                <div className="flex flex-col gap-4 self-stretch">
                  <Card.Title>{card.titulo}</Card.Title>
                  <Card.Description>{card.subTitulo}</Card.Description>
                </div>
              </Card.Body>
            </Card.Container>
          </Card.Root>
        ))}
      </Section.Root>

      <Section.Root>
        <Section.Title className="text-center mb-8">Público Alvo</Section.Title>

        <div className="w-full justify-between flex flex-wrap gap-8 p-4 my-12">
          <CardModel2
            icon={<EnterpriseIcon css="size-20 fill-secondary" />}
            titulo="Empresas de Pequeno, Médio e Grande Porte"
            descricao="Negócios que buscam otimizar seus processos tecnológicos, implementar novas soluções de TI ou necessitam de suporte especializado para projetos específicos."
          />
          <CardModel2
            icon={<RoctketIcon css="size-20 fill-secondary" />}
            titulo="Startups e Empresas de Tecnologia"
            descricao="Organizações emergentes e inovadoras que
              necessitam de orientação técnica para desenvolver seus produtos e serviços, bem como estruturar sua infraestrutura de TI."
          />
          <CardModel2
            icon={<GlobeIcon css="size-20 fill-secondary" />}
            titulo="Setor Público e Organizações Sem Fins Lucrativos"
            descricao="Instituições governamentais e ONGs que precisam de soluções tecnológicas eficientes para melhorar sua operação e impacto social."
          />
        </div>
      </Section.Root>

      <Section.Root>
        <Section.Title className="text-center mb-12">
          Nossos Clientes
        </Section.Title>
        <div className="w-full">
          <Carrocel />
        </div>
      </Section.Root>

      <Section.Root className="flex flex-col justify-center items-center">
        <Section.Title className="text-center mb-8">
          Perguntas Frequentes
        </Section.Title>
        {PerguntasFrequentesData.slice(0, visibleCount).map(
          (pergunta, index) => (
            <PerguntasFrequentes
              key={index}
              titulo={pergunta.titulo}
              texto={pergunta.texto}
              aberto={pergunta.aberto}
            />
          )
        )}
        {visibleCount < PerguntasFrequentesData.length && (
          <div className="mb-12 my-5">
            <BotaoOnClick texto={"ver mais"} funcaoOnclick={vermais} />
          </div>
        )}
      </Section.Root>

      <Section.Root>
        <Section.Title className="text-center text-accent mb-8">
          Fale Conosco
        </Section.Title>
        <div className="flex flex-col gap-8 justify-between items-center">
          <Section.Description className="text-center">
            Quer conversar com os nossos consultores? Quer conhecer mais sobre
            os nossos serviços? Ainda têm mais dúvidas sobre a nossa
            consultoria? Entre em contato pelo nosso formulário de contato.
          </Section.Description>
          <LinkButton
            texto={"Entre em contato"}
            alt={"botão para página de contato"}
            href={"/contato"}
          />
        </div>
      </Section.Root>
      {/*  <FaleConosco /> */}
      <Footer />
    </div>
  );
};

ConsultoriaPage.propTypes = {};

export default ConsultoriaPage;
