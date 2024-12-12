"use client";
import React from "react";

//importação de componentes
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CardModel5 from "@/components/cardModel5/cardModel5";
import { HeroSection } from "@/components/HeroSection";
import Section from "@/components/Section";

import imagem1 from "@/public/capasEbooks/Formação de Suporte Técnico Proinfo (pdf.io).png";
import imagem2 from "@/public/capasEbooks/cloud-computing-na-pratica.png";
import imagem3 from "@/public/capasEbooks/IDENTIDADE-DA-SUA-EMPRESA.png";
import imagem4 from "@/public/capasEbooks/5-Conselhos-para-se-tornar-um-Empreendedor-de-Alto-Impacto.png";

const EbooksPage = () => {
  const dadosEbooks = [
    {
      titulo: "Formacao de Suporte Tecnico",
      capa: imagem1,
      descricao:
        "Descubra os pilares fundamentais para atuar como suporte técnico de forma eficiente e profissional. Este ebook aborda desde os conhecimentos básicos em TI até técnicas avançadas de resolução de problemas, comunicação com clientes e organização de processos. Ideal para quem deseja iniciar ou se destacar nesta carreira indispensável no mercado tecnológico.",
      url: "https://qsgsksirv7fkvuvt.public.blob.vercel-storage.com/ebooks/Formacao-de-Suporte-Tecnico-Proinfo.pdf",
    },
    {
      titulo: "cloud computing na pratica",
      capa: imagem2,
      descricao:
        "Entre no mundo da computação em nuvem com este guia prático e objetivo. Aprenda conceitos essenciais, como modelos de serviço (IaaS, PaaS, SaaS), ferramentas líderes do mercado e exemplos reais de aplicações. Este ebook é perfeito para profissionais e estudantes que querem explorar ou aprofundar seus conhecimentos em cloud computing.",
      url: "https://qsgsksirv7fkvuvt.public.blob.vercel-storage.com/ebooks/cloud-computing-na-pratica.pdf",
    },
    {
      titulo: "Como construir a  identidade da sua empresa",
      capa: imagem3,
      descricao:
        "Transforme sua visão de negócio em uma marca sólida e memorável! Este ebook detalha os passos para desenvolver a identidade visual, definir valores, missão e posicionamento, além de explorar estratégias para conquistar a confiança e a lealdade do seu público. Essencial para empreendedores que desejam deixar sua marca no mercado.",
      url: "https://qsgsksirv7fkvuvt.public.blob.vercel-storage.com/ebooks/COMO-CONSTRUIR-A-IDENTIDADE-DA-SUA-EMPRESA.pdf",
    },
    {
      titulo: "5 Conselhos para se tornar um Empreendedor de Alto Impacto",
      capa: imagem4,
      descricao:
        "Transforme sua visão de negócio em uma marca sólida e memorável! Este ebook detalha os passos para desenvolver a identidade visual, definir valores, missão e posicionamento, além de explorar estratégias para conquistar a confiança e a lealdade do seu público. Essencial para empreendedores que desejam deixar sua marca no mercado.",
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
        {dadosEbooks.map((ebook, index) => (
          <CardModel5
            key={index}
            capa={ebook.capa}
            titulo={ebook.titulo}
            descricao={ebook.descricao}
            url={ebook.url}
          />
        ))}
      </Section.Root>

      <Footer />
    </div>
  );
};

EbooksPage.propTypes = {};

export default EbooksPage;
