// "Use client"
import React, { useContext } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { WindowWidthContext } from "@/app/WindowWidthContext";
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
  cssImagem = [],
}) => {
  const larguraDaTela = useContext(WindowWidthContext);
  
  // Função condicional para renderizar o botão
  const botao = () => {
    if (naoUsarBotao) {
      return null;
    } else {
      return (
        <BotaoLinks
          href={linkButton}
          alt={altLink}
          texto="Acessar"
          css={larguraDaTela === "mobile" ? "m-auto" : ""}
        />
      );
    }
  };

  return (
    <div
      className={`${css} bg-[#cccccc] shadow-2xl dark:shadow-temaEscuro  dark:bg-preto_secondario dark:bg-opacity-90 bg-opacity-60  mb-12 flex min-h-[20em] max-w-7xl items-center justify-center rounded-lg tracking-widest leading-tighter
      data-responsividade-mode= ${larguraDaTela}
      ${
        larguraDaTela === "tablet" || larguraDaTela === "mobile" ? "mx-8" : ""
      }`}
    >
      <div
        className={`flex flex-1 self-stretch flex-col ${
          inverter ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        <div className={` ${cssImagem[0] || "flex-1 "}  `}>
          <Image
            className={` ${cssImagem[1] || "w-full"} object-cover h-full min-h-[10rem] rounded-t-lg ${
              inverter
                ? "sm:rounded-r-lg sm:rounded-l-none"
                : "sm:rounded-l-lg sm:rounded-r-none"
            }`}
            alt="Col"
            src={imagem}
          />
        </div>
        <div
          className={`flex flex-col justify-center  gap-8 p-5 relative flex-1 self-stretch grow`}
        >
          <div className="flex-col gap-6 w-full flex-[0_0_auto] flex items-center relative self-stretch">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className={`font-bold text-cores-fonte text-2xl text-pretty`}>
                {titulo}
              </h3>
              <p
                className={`font-semibold text-laranja_light dark:text-laranja_dark  text-pretty dark:text-laranja`}
              >
                {subTitulo}
              </p>
            </div>
          </div>

          {/* Renderização condicional do botão */}
          {botao()}
        </div>
      </div>
    </div>
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
  cssImagem: PropTypes.array, // Adicionando a verificação para cssImagem
};
