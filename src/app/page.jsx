"use client";
import { Header } from "@/components/header/Header";
import SessionTitle from "@/components/sessionTitle/SessionTitle";
import { WindowWidthProvider } from "./WindowWidthContext";

// importação de imagens
import logo from "@/public//img/logo.png";
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
      </div>
    </WindowWidthProvider>
  );
}
