"use client";
import React from "react";

//importação de componentes
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CardModel5 from "@/components/cardModel5/cardModel5";
import { HeroSection } from "@/components/HeroSection";
import Section from "@/components/Section";


import imagem from "@/public/img/livroImg.jpg";

const EbooksPage = () => {

  const dadosEbooks = [ 
    {
      titulo: "opoder",
      capa: imagem,
      descricao: "A descrição fica aqui"
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />

      <HeroSection.Root>
        <HeroSection.Title>
          Baixe Gratuitamente nossos{" "}
          <strong className="text-secondary">E-books</strong>
        </HeroSection.Title>
      </HeroSection.Root>

      <Section.Root className="flex flex-col items-center gap-8">

        {dadosEbooks.map((ebook, index)=>(
          <CardModel5 key={index} capa={ebook.capa} titulo={ebook.titulo} descricao={ebook.descricao} />
        ))}
       
      </Section.Root>

      <Footer />
    </div>
  );
};

EbooksPage.propTypes = {};

export default EbooksPage;
