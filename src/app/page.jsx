"use client";
import { Header } from "@/components/header/Header";
import SessionTitle from "@/components/sessionTitle/SessionTitle";
import { WindowWidthProvider } from "./WindowWidthContext";

// importação de imagens
import logo from "@/public//img/logo.png";


export default function Home({ }) {

  return (
    <WindowWidthProvider>
      <div
        className="flex flex-col items-center justify-center  relative bg-[--cores-container-fundo] w-[100%]"
        data-cores-mode="tema-escuro"
       
      >
        {/* <HomePage/> */}
        <Header logoLogo={logo} />

        <SessionTitle texto={["Conheça a ", "Ex Enterprise"]} />
      </div>
    </WindowWidthProvider>
  );
}
