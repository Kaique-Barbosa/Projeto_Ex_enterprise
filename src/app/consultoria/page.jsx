"use client";
import { React, useContext } from "react";
import PropTypes from "prop-types";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import { WindowWidthProvider } from "@/app/WindowWidthContext";
import cardModel2 from "@/components/cardModel2/cardModel2";
import SectionWithImg from "@/components/sectionWithImg/SectionWithImg";

// importação de imagens
import logo from "@/public/img/logo.png";
import consultoria from "@/public/img/consultoria.jpg";
import consultoria2 from "@/public/img/consultoria2.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";
import { Footer } from "@/components/footer/Footer";

// const larguraDaTela = useContext(WindowWidthContext);

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

const ConsultoriaPage = () =>
  // Props
  {
    return (
      <WindowWidthProvider>
        <div className="flex flex-col items-center  justify-center  relative bg-[--cores-container-fundo] w-[100%]">
          <Header />

          <SectionTitle texto={["Conheça a nossa", "Consultoria em T.I"]} />

          <SectionWithImg
            title="Uma empresa especializada em renovar o seu negócio"
            imgSrc={consultoria2}
            imgAlt="Imagem de um escritório"
          >
            <p className="text-laranja">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Borem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.
            </p>
          </SectionWithImg>

          <SectionTitle
            notBotao={true}
            height="h-fit"
            texto={["Veja o que oferecemos em", "soluções para TI"]}
          />

          {/* sequencia de cards. valores estão acima em um array de objetos */}
          <div className="p-4 sm:p-8 lg:p-12">
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
          <SectionTitle
            notBotao={true}
            height={"h-[2rem]"}
            margemy="mb-10"
            texto={["Público Alvo", null]}
          />

          <cardModel2 />

          <Footer />
        </div>
      </WindowWidthProvider>
    );
  };

ConsultoriaPage.propTypes = {};

export default ConsultoriaPage;
