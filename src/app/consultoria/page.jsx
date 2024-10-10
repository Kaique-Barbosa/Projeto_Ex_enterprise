"use client";
import { React, useContext } from "react";
import PropTypes from "prop-types";
import SessionTitle from "@/components/sessionTitle/SessionTitle";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import { WindowWidthProvider } from "@/app/WindowWidthContext";

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

          <SessionTitle texto={["Conheça a nossa", "Consultoria em T.I"]} />

          {/* card maior */}
          <div className="mt-[15%]">
            <Card
              imagem={consultoria2}
              titulo="Uma empresa especializada em renovar o seu negócio"
              subTitulo="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
              altLink="texto alternativo"
              inverter={false}
              linkButton="/consultoria"
              naoUsarBotao={true}
              cssImagem={[
                "!flex-2 lg:!w-[60%] mobile:!w-[100%] ",
                "!w-[100%] m-auto",
              ]} //o primerio valor muda a div e o segundo a imagem
            />
          </div>

          <SessionTitle
            notBotao={true}
            height={'h-[5rem]'}
            margemy = "mt-[5%]"
            texto={["Veja o que oferecemos em", "soluções para TI"]}
          />

          {/* sequencia de cards. valores estão acima em um array de objetos */}
          <div className="my-[15%]">
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
          <SessionTitle
            notBotao={true}
            height={'h-[2rem]'}
            margemy = "mb-10"
            texto={["Público Alvo", null]}
          />

          <Footer />
        </div>
      </WindowWidthProvider>
    );
  };

ConsultoriaPage.propTypes = {};

export default ConsultoriaPage;
