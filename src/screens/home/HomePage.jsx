import React from "react";
import { Header } from "@/components/header/header";
import {Sobre} from "@/components/sobre/Sobre";

export default function HomePage() {
  return (
    <>
      <Header
        className=""
        // linkAtualLine="line-1-2.svg"
        login={false}
        // logoLogo="src/public/img/logo.png"
        menuButton="menu-button-2.svg"
        menuButtonClassName="!mb-[-11167.00px] !mr-[-14470.00px]"
      />
      <Sobre title="Conheca mais sobre a empresa">
        <p>
          Empresa multifacetada que oferece consultoria especializada em
          tecnologia da informação, um e-commerce robusto para venda de produtos
          de informática e serviços de locação de imóveis. Com uma equipe
          altamente qualificada e um representante palestrante renomado no setor
          de TI, nos destacamos pela nossa capacidade de entregar soluções
          inovadoras e personalizadas.{" "}
        </p>
      </Sobre>
    </>
  );
}
