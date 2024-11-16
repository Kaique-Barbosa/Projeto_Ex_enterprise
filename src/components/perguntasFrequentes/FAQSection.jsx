"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import PerguntasFrequentesDetais from "./PerguntasFrequentesDetais";
import BotaoOnClick from "@/components/Buttons/BotaoOnClick";

export default function FAQSection({ data }) {
  const [visibleCount, setVisibleCount] = useState(3); // Inicialmente 5 perguntas visíveis

  const vermais = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Aumenta a contagem visível em 5
  };
  return (
    <Section.Root className="flex flex-col justify-center items-center">
      <Section.Title className="text-center mb-8">
        Perguntas Frequentes
      </Section.Title>
      {data.slice(0, visibleCount).map((pergunta, index) => (
        <PerguntasFrequentesDetais
          key={index}
          titulo={pergunta.titulo}
          texto={pergunta.texto}
          aberto={pergunta.aberto}
        />
      ))}
      {visibleCount < data.length && (
        <div className="mb-12 my-5">
          <BotaoOnClick texto={"ver mais"} funcaoOnclick={vermais} />
        </div>
      )}
    </Section.Root>
  );
}
