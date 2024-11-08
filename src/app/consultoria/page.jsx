"use client";
import { React, useState } from "react";

//importação de componentes
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import CardModel2 from "@/components/cardModel2/cardModel2";
import SectionWithImg from "@/components/sectionWithImg/SectionWithImg";
import PerguntasFrequentes from "@/components/perguntasFrequentes/PerguntasFrequentes";
import BotaoOnClick from "@/components/botaoOnClick/BotaoOnClick";
import Footer from "@/components/footer/Footer";
import Carrocel from "@/components/carrocel/Carrocel";
import FaleConosco from "@/components/faleConosco/FaleConosco";
import { Heading } from "@/components/Heading/Heading";

// importação de imagens e logos
import consultoria from "@/public/img/consultoria.jpg";
import consultoria2 from "@/public/img/consultoria2.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";
import { GlobeIcon } from "@/icons/GlobeIcon/GlobeIcon";
import { EnterpriseIcon } from "@/icons/EnterpriseIcon/EnterpriseIcon";
import { RoctketIcon } from "@/icons/RocketIcon/RoctketIcon";

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

      <SectionTitle texto={["Conheça a nossa", "Consultoria em T.I"]} />

      <SectionWithImg
        title="Uma empresa especializada em renovar o seu negócio"
        imgSrc={consultoria2}
        imgAlt="Imagem de um escritório"
      >
        <p className="text-laranja-light dark:text-laranja-dark">
          Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Borem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis.
        </p>
      </SectionWithImg>

      {/* sequencia de cards. valores estão acima em um array de objetos */}
      <div className="container max-w-9xl flex flex-col items-center gap-12 my-12">
        <div>
          <Heading
            type="h2"
            css="text-center text-pretty mb-4"
          >
            Nossos Serviços
          </Heading>
          <p className="text-lg text-laranja-light dark:text-laranja-dark">
            Veja o que oferecemos em soluções para TI
          </p>
        </div>
        {cardsData.map((card, index) => (
          <Card
            key={index} // Adicione uma key para cada Card
            imagem={card.imagem}
            titulo={card.titulo}
            subTitulo={card.subTitulo}
            altLink={card.altLink}
            inverter={card.inverter}
            linkButton={card.linkButton}
          />
        ))}
      </div>

      <div className="container my-12 max-w-9xl">
        <Heading
          type="h2"
          css="text-center text-pretty mb-8"
        >
          Público Alvo
        </Heading>

        <div className="w-full justify-between flex flex-wrap gap-8 p-4 my-12">
          <CardModel2
            icon={
              <EnterpriseIcon css="size-20 fill-preto-950 dark:fill-cinza-200" />
            }
            titulo="Empresas de Pequeno, Médio e Grande Porte"
            descricao="Negócios que buscam otimizar seus processos tecnológicos, implementar novas soluções de TI ou necessitam de suporte especializado para projetos específicos."
          />
          <CardModel2
            icon={
              <RoctketIcon css="size-20 fill-preto-950 dark:fill-cinza-200" />
            }
            titulo="Startups e Empresas de Tecnologia"
            descricao="Organizações emergentes e inovadoras que
              necessitam de orientação técnica para desenvolver seus produtos e serviços, bem como estruturar sua infraestrutura de TI."
          />
          <CardModel2
            icon={
              <GlobeIcon css="size-20 fill-preto-950 dark:fill-cinza-200" />
            }
            titulo="Setor Público e Organizações Sem Fins Lucrativos"
            descricao="Instituições governamentais e ONGs que precisam de soluções tecnológicas eficientes para melhorar sua operação e impacto social."
          />
        </div>
      </div>

      <div className="container max-w-9xl my-12">
        <Heading
          type="h2"
          css="text-center text-pretty mb-12"
        >
          Nossos Clientes
        </Heading>
        <div className="w-full">
          <Carrocel />
        </div>
      </div>

      <div className="container max-w-9xl my-12 flex flex-col justify-center items-center">
        <Heading
          type="h2"
          css="text-center text-pretty mb-8">
            Perguntas Frequentes
        </Heading>
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
          <div className="mb-36 my-5">
            <BotaoOnClick texto={"ver mais"} funcaoOnclick={vermais} />
          </div>
        )}
      </div>

      <FaleConosco />
      <Footer />
    </div>
  );
};

ConsultoriaPage.propTypes = {};

export default ConsultoriaPage;
