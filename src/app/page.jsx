"use client";
import { Header } from "@/components/header/Header";
import SessionTitle from "@/components/sessionTitle/SessionTitle";
import { WindowWidthProvider } from "./WindowWidthContext";
import {Card} from "@/components/card/Card"

// importação de imagens
import logo from "@/public/img/logo.png";
import Sobre from "@/components/sobre/Sobre";

export default function Home({}) {
  return (
    <WindowWidthProvider>
      <div
        className="flex flex-col items-center justify-center  relative bg-[--cores-container-fundo] w-[100%]"
        data-cores-mode="tema-escuro"
      >
        {/* <HomePage/> */}
        <Header logoLogo={logo} />

        <SessionTitle texto={["Conheça a ", "Ex Enterprise"]} />
        <Sobre title="Conheça um pouco sobre a empresa">
          <p>
            Empresa multifacetada que oferece consultoria especializada em
            tecnologia da informação, um e-commerce robusto para venda de
            produtos de informática e serviços de locação de imóveis. Com uma
            equipe altamente qualificada e um representante palestrante renomado
            no setor de TI, nos destacamos pela nossa capacidade de entregar
            soluções inovadoras e personalizadas.
          </p>
        </Sobre>
       
        <Card 
          imagem= "https://media.istockphoto.com/id/1502896527/pt/foto/office-meeting-and-documents-of-business-people-clients-or-team-for-taxes-audit-or-revenue.jpg?s=2048x2048&w=is&k=20&c=__C0XQbjhAOJNf5mRY52YM7TdSODmGbnU_9_W2AAeCo="
          titulo="Consultoria"  
          subTitulo="Realize conosco uma sessão com os melhores profissionais do mercado"
          altLink="iamgem representando consultoria"
          inverter = {true}
          linkButton = '/consultoria'
         />
        <Card 
          imagem= "https://images.pexels.com/photos/20044365/pexels-photo-20044365/free-photo-of-computador-portatil-laptop-notebook-trabalhando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          titulo="Locação de Imóveis"  
          subTitulo="Aloque um de nossos escritorios, aconpanhe a disponibilidade no site"
          altLink="iamgem de locação de imoveis"
          inverter = {false}
          linkButton = '/imoveis'
         />
        <Card 
          imagem= "https://images.pexels.com/photos/20044365/pexels-photo-20044365/free-photo-of-computador-portatil-laptop-notebook-trabalhando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          titulo="Locação de Imóveis"  
          subTitulo="Aloque um de nossos escritorios, aconpanhe a disponibilidade no site"
          altLink="iamgem de locação de imoveis"
          inverter = {true}
          linkButton = '/imoveis'
         />
        <Card 
          imagem= "https://images.pexels.com/photos/20044365/pexels-photo-20044365/free-photo-of-computador-portatil-laptop-notebook-trabalhando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          titulo="Locação de Imóveis"  
          subTitulo="Aloque um de nossos escritorios, aconpanhe a disponibilidade no site"
          altLink="iamgem de locação de imoveis"
          inverter = {false}
          linkButton = '/imoveis'
         />
       
      </div>
    </WindowWidthProvider>
  );
}
