"use client";
import { React, useState } from "react";

//importação de componentes
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CardModel5 from "@/components/cardModel5/cardModel5";

// importação de imagens e logos

// INICIO -------------- area dos dados dos componentes ------------------

// ----------------- FIM  area dos dados dos componentes-----------------

const EbooksPage = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Inicialmente 5 perguntas visíveis

  const vermais = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Aumenta a contagem visível em 5
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />

      <SectionTitle texto={["BAIXE GRATUITAMENTE", "E-BOOKS    "]} />

      <div className="container max-w-9xl p-4 sm:p-8 lg:p-12 flex flex-col items-center"><CardModel5 /></div>

      <Footer />
    </div>
  );
};

EbooksPage.propTypes = {};

export default EbooksPage;
