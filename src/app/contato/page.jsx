import React from "react";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/forms/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import Section from "@/components/Section";

const contatoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />

      <HeroSection.Root>
        <HeroSection.Title>Entre em Contato</HeroSection.Title>
        <HeroSection.Subtitle textAlignment="center">
          Estamos prontos para ajudar! Preencha o formulário abaixo e
          responderemos o mais rápido possível.
        </HeroSection.Subtitle>
      </HeroSection.Root>

      <Section.Root>
        <ContactForm />
      </Section.Root>

      <Footer />
    </div>
  );
};

export default contatoPage;
