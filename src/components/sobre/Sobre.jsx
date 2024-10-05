import React from "react";
import PropTypes from "prop-types";

// usa o children para inserir qualquer conteudo dentro da página
const Sobre = ({ children, title }) => {
  return (
    <section className="h-svh text-cores-fonte flex flex-col text-center justify-center p-4 sm:p-8  md:p-12 gap-10 tracking-wide">
      <h2 className="text-center text-3xl text-pretty">{title}</h2>
      {children}
    </section>
  );
};

// Adicionar PropsType para definir o tipo da variavel
Sobre.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
};

export default Sobre;
