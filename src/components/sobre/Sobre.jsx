import React from "react";
import PropTypes from "prop-types";

// usa o children para inserir qualquer conteudo dentro da página
const Sobre = ({ children, title }) => {
  return (
    <section className="h-svh text-cores-fonte flex flex-col justify-center p-4 sm:p-8 gap-6">
      <h2 className="text-center text-3xl">{title}</h2>
      {children}
    </section>
  );
};

Sobre.propTypes = {};

export default Sobre;
