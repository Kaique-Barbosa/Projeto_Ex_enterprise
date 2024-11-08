import React from "react";
import PropTypes from "prop-types";

const CardModel2 = ({ icon, titulo, descricao }) => {
  return (
    <article className="flex flex-col items-center p-4 gap-6 grow basis-60">
      {icon}
      <div className="flex flex-col gap-4 flex-1">
        <h3 className="text-center text-lg font-bold">{titulo}</h3>
        <p className="text-center text-accent">
          {descricao}
        </p>
      </div>
    </article>
  );
};

CardModel2.propTypes = {
  imagemSrc: PropTypes.string.isRequired,
  titulo: PropTypes.string,
  descricao: PropTypes.string,
};

export default CardModel2;
