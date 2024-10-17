import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

// usa o children para inserir qualquer conteudo dentro da página
const SectionWithImg = ({ children, title, imgSrc, imgAlt }) => {
  return (
    <section className="h-fit container max-w-9xl flex flex-col md:flex-row text-center items-center justify-center gap-6 tracking-wide my-12">
      <div className="flex-1 w-full max-h-[30rem]">
        <Image
          src={imgSrc}
          className="w-full max-h-[30rem] object-cover rounded-lg"
          alt={imgAlt}
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-4">
        <h2 className="text-center text-3xl text-pretty font-bold">{title}</h2>
        {children}
      </div>
    </section>
  );
};

// Adicionar PropsType para definir o tipo da variavel
SectionWithImg.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default SectionWithImg;
