"use client";
import React from "react";

//importação de componentes
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CardModel5 from "@/components/cardModel5/cardModel5";
import { HeroSection } from "@/components/HeroSection";
import Section from "@/components/Section";


import imagem1 from "@/public/capasEbooks/Formação de Suporte Técnico Proinfo (pdf.io).png"
import imagem2 from "@/public/capasEbooks/cloud-computing-na-pratica.png"
import imagem3 from "@/public/capasEbooks/IDENTIDADE-DA-SUA-EMPRESA.png"
import imagem4 from "@/public/capasEbooks/5-Conselhos-para-se-tornar-um-Empreendedor-de-Alto-Impacto.png"

const EbooksPage = () => {

  const dadosEbooks = [
    {
      titulo: "Formacao de Suporte Tecnico",
      capa: imagem1,
      descricao: "A descrição fica aqui",
      url: "https://qsgsksirv7fkvuvt.public.blob.vercel-storage.com/ebooks/Formacao-de-Suporte-Tecnico-Proinfo.pdf",
    },
    {
      titulo: "cloud computing na pratica",
      capa: imagem2,
      descricao: "A descrição fica aqui",
      url: "https://qsgsksirv7fkvuvt.public.blob.vercel-storage.com/ebooks/cloud-computing-na-pratica.pdf",
    },
    {
      titulo: "Como construir a  identidade da sua empresa",
      capa: imagem3,
      descricao: "A descrição fica aqui",
      url: "https://qsgsksirv7fkvuvt.public.blob.vercel-storage.com/ebooks/COMO-CONSTRUIR-A-IDENTIDADE-DA-SUA-EMPRESA.pdf",
    },
    {
      titulo: "5 Conselhos para se tornar um Empreendedor de Alto Impacto",
      capa: imagem4,
      descricao: "A descrição fica aqui",
      url: "https://qsgsksirv7fkvuvt.public.blob.vercel-storage.com/ebooks/5-Conselhos-para-se-tornar-um-Empreendedor-de-Alto-Impacto.pdf",
    },
  ];

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
          <CardModel5 key={index} capa={ebook.capa} titulo={ebook.titulo} descricao={ebook.descricao} url={ebook.url} />
        ))}
       
      </Section.Root>

      <Footer />
    </div>
  );
};

EbooksPage.propTypes = {};

export default EbooksPage;
