import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import iconSeta from "@/public/img/setaBaixoBlack.png";
import iconSetaBranco from "@/public/img/setaBaixoWhite.png";
import Link from "next/link";

import { WindowWidthContext } from "@/app/WindowWidthContext";
import logo from "@/public/img/logo2.png";


const Session = ({ texto }) => {
  const rolarParaBaixo = () => {
    window.scrollTo({
      top: window.innerHeight, // Rola para a altura da tela
      behavior: "smooth", // Rolagem suave
    });
  };
  const larguraDaTela = useContext(WindowWidthContext);
  
  // const [tema, setTema] = useState();

  // useEffect(() => {
    
  //   setTema(localStorage.getItem("chakra-ui-color-mode"))
    
  // })
  
  
  return (
    <header
      className={
        "h-[calc(100vh-80px)] flex flex-col gap-2 relative justify-center items-center "
      }
      data-responsividade-mode={larguraDaTela}
    >
      {/* <div className="w-full flex items-center justify-center p-4 relative flex-1 self-stretch  grow">
      <Image src={logo} alt="Logo Da empresa"  className=" w-full flex flex-wrap"/>

      </div> */}
      <div
        className={
          " !font-bold w-full flex items-center justify-center p-4 relative flex-1 self-stretch  grow"
        }
      >
        <h1 className="text-cores-laranja [font-family:'Work_Sana-Light, Helvetica]  text-center tracking-wider leading-tight text-4xl sm:text-5xl">
          {texto[0] + " "}
          <strong className="text-laranja font-semibold">{texto[1]}</strong>
        </h1>
      </div>
      <button href={""} onClick={rolarParaBaixo} className="py-2   drop-shadow">
        <Image width={60} src={ iconSetaBranco} alt="" />
      </button>
    </header>
  );
};

Session.propTypes = {
  texto: PropTypes.array.isRequired,
  iconSeta: PropTypes.symbol,
};

export default Session;
