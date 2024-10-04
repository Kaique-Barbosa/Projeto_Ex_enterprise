"use client";
import { Header } from "@/components/header/Header";
import SessionTitle from "@/components/sessionTitle/SessionTitle";
import { WindowWidthProvider } from "./WindowWidthContext";
import { Card } from "@/components/card/Card";
import  SobreEmpresa  from "@/components/sobreEmpresa/SobreEmpresa";
// importação de imagens
import logo from "@/public/img/logo.png";
import consultoria from "@/public/img/consultoria.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";
import Sobre from "@/components/sobre/Sobre";


export default function Home({})  {
  return (
    <WindowWidthProvider>
      <div
        className="flex flex-col items-center justify-center  relative bg-[--cores-container-fundo] w-[100%]"
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
          imagem={consultoria}
          titulo="Consultoria"
          subTitulo="Realize conosco uma sessão com os melhores profissionais do mercado"
          altLink="imagem representando consultoria"
          inverter={true}
          linkButton="/consultoria"
        />
        <Card
          imagem={locacao}
          titulo="Locação de Imóveis"
          subTitulo="Aloque um de nossos escritorios, aconpanhe a disponibilidade no site"
          altLink="iamgem de locação de imoveis"
          inverter={false}
          linkButton="/imoveis"
        />
        <Card
          imagem={ecommerce}
          titulo="E-commerce"
          subTitulo="Adiquira produtos de tecnologia com qualidade e confiança"
          altLink="iamgem de locação de imoveis"
          inverter={true}
          linkButton="/ecomerce"
        />
    <SobreEmpresa/>
      </div>
    </WindowWidthProvider>
  );
}
