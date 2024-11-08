"use client";
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import iconSetaBranco from "@/public/img/setaBaixoWhite.png";

const Session = ({ texto, notBotao, height}) => {
  const rolarParaBaixo = () => {
    window.scrollTo({
      top: window.innerHeight, // Rola para a altura da tela
      behavior: "smooth", // Rolagem suave
    });
  };

  const botao = () => {
    if (notBotao) {
      return null;
    } else {
      return (
        <button href={""} onClick={rolarParaBaixo} className="py-2 drop-shadow">
          <Image width={60} src={iconSetaBranco} alt="" />
        </button>
      );
    }
  };

  return (
    <div
      className={` ${height || "h-[100dvh]"}
       flex flex-col gap-2 justify-center items-center pt-20 `}
    >
      <div
        className={
          "w-full flex items-center justify-center flex-1 self-stretch"
        }
      >
        <h1 className="text-center tracking-wider leading-tight text-4xl sm:text-5xl">
          {texto[0] + " "}
          <strong className="text-laranja-light dark:text-laranja-dark font-semibold">
            {texto[1]}
          </strong>
        </h1>
      </div>
      <div className="">{botao()}</div>
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
