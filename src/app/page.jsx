"use client";
import { Header } from "@/components/header/Header";
import SessionTitle from "@/components/sessionTitle/SessionTitle";
import { WindowWidthProvider } from "./WindowWidthContext";
import { Card } from "@/components/card/Card";


// importação de imagens
import logo from "@/public/img/logo.png";
import consultoria from "@/public/img/consultoria.jpg";
import locacao from "@/public/img/imoveis.jpg"
import ecommerce from "@/public/img/ecommerce.jpg"
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

        <div className="text-white">

        <div className=" bg-white flex-col gap-6 w-full flex-[0_0_auto] flex items-center relative self-stretch">
            <div className=" bg-blue flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className={` w-full font-bold text-cores-fonte text-2xl`}>
              dwadwaddwadwaddawdwadwadwdwadadwa
              </h3>
              <p className={`font-light text-cores-laranja`}>dwadwa</p>
            </div>
            <div className=" bg-red flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
           
            </div>
           
          </div>


        </div>
      </div>
    </WindowWidthProvider>
  );
}
