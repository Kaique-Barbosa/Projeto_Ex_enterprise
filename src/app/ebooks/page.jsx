"use client";
import { React, useState } from "react";

//importação de componentes
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CardModel4 from "@/components/cardModel4/CardModel4";

// importação de imagens e logos

// INICIO -------------- area dos dados dos componentes ------------------

// ----------------- FIM  area dos dados dos componentes-----------------

const ConsultoriaPage = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Inicialmente 5 perguntas visíveis

  const vermais = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Aumenta a contagem visível em 5
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />

      <SectionTitle texto={["BAIXE GRATUITAMENTE", "E-BOOKS    "]} />

      <CardModel4/>
   
      <Footer />
    </div>
  );
};

ConsultoriaPage.propTypes = {};

export default ConsultoriaPage;
