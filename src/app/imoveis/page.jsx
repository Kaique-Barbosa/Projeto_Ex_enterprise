import React, { Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import Section from "@/components/Section";
import CardModel2 from "@/components/cardModel2/cardModel2";
import LinkButton from "@/components/Buttons/LinkButton";
import HouseIcon from "@/icons/HouseIcon";
import REConsultancyIcon from "@/icons/REConsultancyIcon";
import ManagementIcon from "@/icons/ManagementIcon";
import Imoveis from "@/components/Imoveis/List";
import LoadingImoveis from "@/components/Imoveis/Loading";

const ImoveisPage = () => {
  return (
    <main>
      <HeroSection.Root>
        <HeroSection.Title>
          Encontre e Alugue imóveis{" "} 
          <strong className="text-secondary">
            com total segurança e confiança.
          </strong>
        </HeroSection.Title>
      </HeroSection.Root>

      <Section.Root className="flex flex-col items-center gap-12">
        <Section.Title className="text-center text-accent">
          Todos os nossos Imóveis
        </Section.Title>

        <Suspense fallback={<LoadingImoveis />}>
          <Imoveis />
        </Suspense>

      </Section.Root>

      <Section.Root className="flex flex-col gap-12">
        <Section.Title className="text-center">
          O Imóvel que você procura está aqui
        </Section.Title>
        <div className="w-full justify-between flex flex-wrap gap-8">
          <CardModel2
            icon={<HouseIcon className="size-20 stroke-secondary" />}
            titulo="Locação de Imóveis Residenciais e Comerciais"
            descricao="Oferta de imóveis para aluguel, tanto residenciais quanto comerciais, atendendo a diversas necessidades e perfis de clientes."
          />
          <CardModel2
            icon={<REConsultancyIcon className="size-20 fill-secondary" />}
            titulo="Consultoria em Gestão de Imóveis"
            descricao="Assistência na administração de propriedades, incluindo a maximização do retorno sobre o investimento e a redução de custos operacionais."
          />
          <CardModel2
            icon={<ManagementIcon className="size-20 fill-secondary" />}
            titulo="Administração de Locações"
            descricao="Gestão completa do processo de locação, desde a prospecção de inquilinos até a manutenção e resolução de questões contratuais."
          />
        </div>
      </Section.Root>

      <Section.Root>
        <Section.Title className="text-center text-accent mb-8">
          Fale Conosco
        </Section.Title>
        <div className="flex flex-col gap-8 justify-between items-center">
          <Section.Description className="text-center">
            Entre em contato pelo nosso formulário de contato para tirar suas
            dúvidas e conversar sobre os nossos serviços de alocação de Imoveis.
          </Section.Description>
          <LinkButton
            texto="Entre em contato"
            alt="botão para página de contato"
            href="/contato?option=imoveis"
            style="normal"
            color="accent"
            className="text-white"
          />
        </div>
      </Section.Root>
    </main>
  );
};

export default ImoveisPage;
