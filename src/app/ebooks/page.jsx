"use client";
import React from "react";

//importação de componentes
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CardModel5 from "@/components/cardModel5/cardModel5";
import { HeroSection } from "@/components/HeroSection";
import Section from "@/components/Section";

const EbooksPage = () => {
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
        <CardModel5 />
        <CardModel5 />
        <CardModel5 />
        <CardModel5 />
      </Section.Root>

      <Footer />
    </div>
  );
};

EbooksPage.propTypes = {};

export default EbooksPage;
