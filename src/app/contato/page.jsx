"use client";

import React, { useRef, useEffect, useState } from "react";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/forms/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import Section from "@/components/Section";
import { useSearchParams } from "next/navigation";

const contatoPage = () => {
  const params = useSearchParams();
  const scrollRef = useRef(null);
  const [option, setOption] = useState(null);

  useEffect(() => {
    const option = params.get("option");
    console.log(option);

    if (option) {
      setOption(option);
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [params]);

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

      <Section.Root ref={scrollRef}>
        <ContactForm selectedOption={option} />
      </Section.Root>

      <Footer />
    </div>
  );
};

export default contatoPage;
