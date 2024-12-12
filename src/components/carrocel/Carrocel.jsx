"use client";
import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import imagem from "@/public/img/logo.png";
import CardModel3 from "../cardModel3/CardModel3";

function Carrocel({}) {
  const dadosPerguntas = [
    {
      titulo: "TechNova Solutions",
      subtitulo: "Inovação para empresas que desejam crescer",
      mensagem: "TechNova Solutions oferece serviços especializados em consultoria tecnológica e desenvolvimento de software personalizado, ajudando negócios de médio porte a escalar com soluções inovadoras e eficientes. (Empresa fictícia)",
    },
    {
      titulo: "GreenFlow",
      subtitulo: "Sustentabilidade inteligente ao seu alcance",
      mensagem: "GreenFlow desenvolve soluções de energia limpa e otimização de recursos naturais, combinando tecnologia de ponta com práticas sustentáveis para empresas e comunidades. (StartUp fictício)",
    },
    {
      titulo: "Vida Plena",
      subtitulo: "Transformando vidas com inclusão e cuidado",
      mensagem: "Vida Plena é uma organização sem fins lucrativos focada em programas de educação e assistência social, promovendo a inclusão e o desenvolvimento de comunidades em situação de vulnerabilidade. (Setor fictício)",
    },

  ];

  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className=""
    >
      {dadosPerguntas.map((card, index) => (
        <SwiperSlide key={index} className="mb-12 p-3">
          <CardModel3
            logo={imagem}
            titulo={card.titulo}
            subtitulo={card.subtitulo}
            mensagem={card.mensagem}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carrocel;
