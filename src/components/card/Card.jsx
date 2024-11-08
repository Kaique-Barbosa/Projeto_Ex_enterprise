// "Use client"
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import BotaoLinks from "@/components/botaoLinks/BotaoLinks";

export const Card = ({
  imagem,
  titulo,
  subTitulo,
  linkButton,
  altLink,
  inverter,
  naoUsarBotao, //(prop para não usar o botao "acessar", o default é com botao)
  css,
}) => {
  // Função condicional para renderizar o botão
  const botao = () => {
    if (naoUsarBotao) {
      return null;
    } else {
      return <BotaoLinks href={linkButton} alt={altLink} texto="Acessar" />;
    }
  };

  return (
    <article
      className={`${css} bg-cinza-200 dark:bg-preto-900 shadow-neutro flex h-fit sm:min-h-80 w-full max-w-7xl items-center justify-center rounded-lg tracking-widest leading-tighter`}
    >
      <div
        className={`flex flex-1 self-stretch flex-col ${
          inverter ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        <div className="flex-1 h-60 sm:h-full">
          <Image
            className={`w-full object-cover h-full rounded-t-lg ${
              inverter
                ? "sm:rounded-r-lg sm:rounded-l-none"
                : "sm:rounded-l-lg sm:rounded-r-none"
            }`}
            alt="Col"
            src={imagem}
          />
        </div>
        <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-start gap-8 p-5 flex-1 self-stretch grow">
          <div className="flex flex-col gap-4 self-stretch">
            <h3 className="font-bold text-2xl text-pretty">{titulo}</h3>
            <p className="text-accent text-balance">
              {subTitulo}
            </p>
          </div>
          {botao()}
        </div>
      </div>
    </article>
  );
};

Card.propTypes = {
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  subTitulo: PropTypes.string.isRequired,
  linkButton: PropTypes.string.isRequired,
  altLink: PropTypes.string.isRequired,
  css: PropTypes.string,
  inverter: PropTypes.bool.isRequired,
  naoUsarBotao: PropTypes.bool,
};
