import React from "react";

//importação de componentes
import { HeroSection } from "@/components/HeroSection";
import Card from "@/components/Card";
import Image from "next/image";
import { Header } from "@/components/header/Header";
import CardModel2 from "@/components/cardModel2/cardModel2";
import FAQSection from "@/components/perguntasFrequentes/FAQSection";
import Footer from "@/components/footer/Footer";
import Carrocel from "@/components/carrocel/Carrocel";

// importação de imagens e logos
import consultoria from "@/public/novasImagens/analise-diagnostico.jpg";
import consultoria2 from "@/public/img/consultoria2.jpg";
import solucoes from "@/public/novasImagens/Soluções-Personalizadas.png";
import implementacao from "@/public/novasImagens/Implantação-de-Sistemas.png";
import treinamento from "@/public/novasImagens/eventos-de-tecnologia.webp";
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
    imagem: solucoes,
    titulo: "Desenvolvimento de Soluções Personalizadas",
    subTitulo:
      "Criação e implementação de soluções sob medida para atender às necessidades específicas dos clientes, desde software até integração de sistemas.",
    altLink: "texto alternativo",
    inverter: false,
    linkButton: "/imoveis",
  },
  {
    imagem: implementacao,
    titulo: "Implementação de Sistemas e Softwares",
    subTitulo:
      "Planejamento e execução de projetos de implementação de novos sistemas e softwares, garantindo uma transição suave e eficiente.",
    altLink: "texto alternativo",
    inverter: true,
    linkButton: "/ecommerce",
  },
  {
    imagem: treinamento,
    titulo: "Treinamentos e Workshops em Tecnologia da Informação",
    subTitulo:
      "Capacitação de equipes através de treinamentos práticos e workshops, focados em novas tecnologias, boas práticas e tendências do mercado de TI.",
    altLink: "texto alternativo",
    inverter: false,
    linkButton: "/ecommerce",
  },
];

const PerguntasFrequentesData = [
  { titulo: "Como a empresa pode ajudar a renovar o meu negócio?", texto: "Nossa empresa oferece consultoria especializada, identificando pontos de melhoria e implementando soluções inovadoras, como tecnologias de ponta, estratégias personalizadas e ferramentas modernas, para transformar seu negócio e torná-lo mais competitivo.", aberto: true },
  { titulo: "Quais serviços estão disponíveis para apoiar empresas em sua transformação?", texto: "Dispomos de serviços como consultoria em tecnologia da informação, desenvolvimento de sistemas personalizados, suporte para transição digital, e-commerce para ampliação de vendas e soluções para otimização de processos internos.", aberto: false },
  { titulo: "Por que escolher a nossa empresa para renovar o seu negócio?", texto: "Porque unimos expertise técnica, experiência de mercado e um compromisso sólido com inovação. Nossa abordagem personalizada garante resultados que atendem às necessidades específicas de cada cliente, sempre com foco em eficiência e crescimento sustentável.", aberto: false },
  { titulo: "A empresa atende negócios de quais setores?", texto: "Atendemos uma ampla variedade de setores, incluindo tecnologia, comércio, serviços e imóveis, adaptando nossas soluções às necessidades e objetivos específicos de cada segmento.", aberto: false },
  { titulo: "Quanto tempo leva para ver os resultados das soluções implementadas?", texto: "O tempo varia conforme a complexidade do projeto e as necessidades do cliente. Contudo, nosso processo ágil e eficiente permite que você perceba melhorias iniciais em curto prazo, enquanto trabalhamos em soluções duradouras.", aberto: false },
  { titulo: "A empresa também oferece suporte pós-implementação?", texto: "Sim, oferecemos suporte contínuo após a implementação das soluções, garantindo o acompanhamento necessário para ajustes, otimizações e manutenção, sempre priorizando o sucesso do cliente.", aberto: false },
  { titulo: "As soluções desenvolvidas pela empresa são personalizadas?", texto: "Absolutamente. Trabalhamos lado a lado com nossos clientes para entender suas demandas e desenvolver soluções exclusivas, alinhadas aos seus objetivos e desafios específicos.", aberto: false },
  { titulo: "Quais tecnologias a empresa utiliza para impulsionar a renovação dos negócios?", texto: "Utilizamos tecnologias modernas e de alta performance, como inteligência artificial, análise de dados, sistemas de automação, plataformas de e-commerce e ferramentas de gestão, sempre alinhadas às tendências do mercado e às melhores práticas.", aberto: false },
];

// ----------------- FIM  area dos dados dos componentes-----------------

const ConsultoriaPage = () => {

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
          Somos uma empresa dedicada a transformar e impulsionar o seu negócio, 
          oferecendo soluções inovadoras e personalizadas para atender às suas 
          necessidades. Nosso foco é ajudar você a alcançar novos patamares de 
          sucesso, renovando estratégias e fortalecendo sua presença no mercado.
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
                  className={`object-cover w-full h-full rounded-t-lg ${
                    card.inverter
                      ? "md:rounded-r-lg md:rounded-l-none"
                      : "md:rounded-l-lg md:rounded-r-none"
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

      <FAQSection data={PerguntasFrequentesData}/>

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
            texto="Entre em contato"
            alt="botão para página de contato"
            href="/contato?option=consultoria"
            style="normal"
            color="accent"
            className="text-white"
          />
        </div>
      </Section.Root>

      <Footer />
    </div>
  );
};

ConsultoriaPage.propTypes = {};

export default ConsultoriaPage;
