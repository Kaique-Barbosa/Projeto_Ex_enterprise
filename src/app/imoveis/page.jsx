import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/HeroSection";
import React from "react";

const ImoveisPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />

      <HeroSection.Root>
        <HeroSection.Title>
          Aloque imóveis com <strong className="text-secondary">com segurança e confiabilidade</strong>
        </HeroSection.Title>
      </HeroSection.Root>
    </div>
  );
};

export default ImoveisPage;
