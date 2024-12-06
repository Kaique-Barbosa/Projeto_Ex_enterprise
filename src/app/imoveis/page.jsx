"use client"
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/HeroSection";
import Section from "@/components/Section";
import CardModel2 from "@/components/cardModel2/cardModel2";
import LinkButton from "@/components/Buttons/LinkButton";
import HouseIcon from "@/icons/HouseIcon";
import REConsultancyIcon from "@/icons/REConsultancyIcon";
import ManagementIcon from "@/icons/ManagementIcon";
import CardImoveis from "@/components/CardImoveis";
import imovelImg from "@/public/img/mini_02577e27.jpg";
import api from "@/utils/api";
import CardImoveisSkeletron from "@/components/CardImoveis/Skeletron";

const ImoveisPage = () => {

  const [imoveis, setImoveis] = useState([]);
  
  // Função para buscar os imóveis
  const buscarImoveis = async () => {
    try {
      const dados = await api.get("https://api-ex-enterprise.onrender.com/imoveis/listar");
      setImoveis(dados.data); // Atualiza o estado com os dados recebidos
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
    }
  };

  // useEffect para chamar a função de busca de imóveis
  useEffect(() => {
    buscarImoveis(); // Chama a função de busca assim que o componente for montado
  }, []); // O efeito será executado apenas uma vez, após a montagem do componente


  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />

      <HeroSection.Root>
        <HeroSection.Title>
          Aloque imóveis com{" "}
          <strong className="text-secondary">
            com segurança e confiabilidade
          </strong>
        </HeroSection.Title>
      </HeroSection.Root>

      <Section.Root className="flex flex-col items-center gap-12">
        <Section.Title className="text-center text-accent">
          Todos os nossos Imóveis
        </Section.Title>
        
        {imoveis.length > 0 ? (
          imoveis.map((imovel, index) => (
            <CardImoveis key={index} image={imovelImg} redirect={`/imoveis/${imovel.id}`} 
            nome = {imovel.nome } 
            endereco = {imovel.endereco}
            disponibilidade = {imovel.disponibilidade}
            valorAlocacao = {imovel.valorAlocacao}
            valorCondominio = {imovel.valorCondominio}
            areaImovel = {imovel.areaImovel}
            quantidadeQuartos ={imovel.quantidadeQuartos}
            quantidadeBanheiros = {imovel.quantidadeBanheiros}
            vagasEstacionamento = {imovel.vagasEstacionamento}
            
            />
          ))
        ) : (
          <CardImoveisSkeletron/>
        )}
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

      <Footer />
    </div>
  );
};

export default ImoveisPage;
