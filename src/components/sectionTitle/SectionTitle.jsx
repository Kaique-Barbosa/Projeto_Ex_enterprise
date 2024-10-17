"use client";
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import iconSetaBranco from "@/public/img/setaBaixoWhite.png";

const Session = ({ texto, notBotao, margemy, height }) => {
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
      className={` ${height || "h-[calc(90vh-80px)]"}  ${
        margemy || "mt-[8%]"
      } flex flex-col gap-2 relative justify-center items-center `}
    >
      <div
        className={
          " !font-bold w-full flex items-center justify-center p-4 relative flex-1 self-stretch  grow"
        }
      >
        <h1 className="text-center tracking-wider leading-tight text-4xl sm:text-5xl">
          {texto[0] + " "}
          <strong className="text-laranja_light dark:text-laranja_dark font-semibold">
            {texto[1]}
          </strong>
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
