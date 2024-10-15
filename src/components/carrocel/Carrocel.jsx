"use client";
import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CardModel3 from "../cardModel3/CardModel3";

function Carrocel({}) {
  const dadosPerguntas = [
    {
      titulo: "titulo teste",
      subtitulo: "subtitulo",
      mensagem: "dwadwagrsgsergdrgdrghfthdt",
    },
    {
      titulo: "titulo teste",
      subtitulo: "subtitulo",
      mensagem: "dwadwagrsgsergdrgdrghfthdt",
    },
    {
      titulo: "titulo teste",
      subtitulo: "subtitulo",
      mensagem: "dwadwagrsgsergdrgdrghfthdt",
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
        <SwiperSlide className="mb-12">
          <CardModel3
            key={index}
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
