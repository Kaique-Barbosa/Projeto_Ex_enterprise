import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const CardModel3 = ({ logo, titulo, subtitulo, mensagem }) => {
  return (
    <div className="card w-full p-4 rounded-lg bg-cinza dark:bg-preto_secondario">
      <div className="card-header flex flex-col items-center text-center justify-center gap-6 mb-6">
        <Image className="w-14 rounded-full" src={logo} alt="logo" />
        <div>
          <h3 className="text-xl mb-1">
            {titulo}
          </h3>
          <h4 className="text-lg font-medium">{subtitulo}</h4>
        </div>
      </div>
      <div>
        <p>{mensagem}</p>
      </div>
    </div>
  );
};

CardModel3.propTypes = {
  logo: PropTypes.string,
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
  mensagem: PropTypes.string,
};

export default CardModel3;
