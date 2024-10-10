"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import iconSeta from "@/public/img/setaBaixoBlack.png";
import iconSetaBranco from "@/public/img/setaBaixoWhite.png";


import { WindowWidthContext } from "@/app/WindowWidthContext";


const Session = ({ texto, notBotao, margemy, height }) => {
  const rolarParaBaixo = () => {
    window.scrollTo({
      top: window.innerHeight, // Rola para a altura da tela
      behavior: "smooth", // Rolagem suave
    });
  };
  const larguraDaTela = useContext(WindowWidthContext);

  const botao = () => {
    if (notBotao) {
      return null;
    } else {
      return (
        <button
          href={""}
          onClick={rolarParaBaixo}
          className="py-2 drop-shadow"
        >
          <Image width={60} src={iconSetaBranco} alt="" />
        </button>
      );
    }
  };

  return (
    <div
      className={
        ` ${height || "h-[calc(90vh-80px)]"}  ${margemy || "mt-[8%]"} flex flex-col gap-2 relative justify-center items-center `
      }
      data-responsividade-mode={larguraDaTela}
    >
      <div
        className={
          " !font-bold w-full  flex items-center justify-center p-4 relative flex-1 self-stretch  grow"
        }
      >
        <h1 className="text-cores-laranja   [font-family:'Work_Sana-Light, Helvetica]  text-center tracking-wider leading-tight text-4xl sm:text-5xl">
          {texto[0] + " "}
          <strong className="text-laranja font-semibold">{texto[1]}</strong>
        </h1>
      </div>
        <div className="pb-8">{botao()}</div>
    </div>
  );
};

Session.propTypes = {
  texto: PropTypes.array.isRequired,
  iconSeta: PropTypes.symbol,
  notBotao: PropTypes.bool,
  height: PropTypes.string,
  margemy: PropTypes.string,
};

export default Session;
