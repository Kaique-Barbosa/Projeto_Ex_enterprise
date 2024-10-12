import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import css from "styled-jsx/css";

const CardModel2 = ({ imagemSrc, titulo, descricao }) => {
  return (
    <div className="flex flex-col grow basis-60 rounded-lg bg-slate-500">
      <div className="h-60">
        <Image
          src={imagemSrc}
          alt="foto"
          className="w-full h-full rounded-t-lg"
        />
      </div>
      <div className="flex flex-col self-baseline gap-4 flex-1 p-4">
        <h3 className="text-center text-lg font-bold">{titulo}</h3>
        <p className="text-laranja_light dark:text-laranja_dark">
          {descricao}
        </p>
      </div>
    </div>
  );
};

CardModel2.propTypes = {
  imagemSrc: PropTypes.string.isRequired,
  titulo: PropTypes.string,
  descricao: PropTypes.string,
};

export default CardModel2;
