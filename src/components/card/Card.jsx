import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { WindowWidthContext } from "@/app/WindowWidthContext";
import BotaoLinks from "@/components/botaoLinks/BotaoLinks";

export const Card = ({
  imagem,
  titulo,
  subTitulo,
  linkButton,
  altLink,
  inverter,
}) => {

  const larguraDaTela = useContext(WindowWidthContext);
  const [tema, setTema] = useState(localStorage.getItem("chakra-ui-color-mode"));

  

  return (
    <div
      className={`bg-cinza dark:bg-preto_secondario bg-opacity-50 mt-2 mb-12 flex min-h-[20em] max-w-7xl items-center justify-center rounded-lg tracking-widest leading-tighter
      data-responsividade-mode= ${larguraDaTela}
      ${
        larguraDaTela === "tablet" || larguraDaTela === "mobile" ? "mx-8" : ""
      } `}
    >
      <div
        className={`flex flex-1 self-stretch flex-col ${
          inverter ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        <div className="flex-1">
          <Image
            className={`w-full h-full min-h-[10rem] rounded-t-lg ${
              inverter
                ? "sm:rounded-r-lg sm:rounded-l-none"
                : "sm:rounded-l-lg sm:rounded-r-none"
            }`}
            alt="Col"
            src={imagem}
          />
        </div>
        <div
          className={`flex flex-col justify-center gap-8 p-8 relative flex-1 self-stretch grow`}
        >
          <div className="flex-col gap-6 w-full flex-[0_0_auto] flex items-center relative self-stretch">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className={`font-bold text-cores-fonte text-2xl text-pretty`}>
                {titulo}
              </h3>
              <p className={`font-semibold ${tema === "light"? 'text-black' : 'text-laranja'} text-laranja text-balance`}>{subTitulo}</p>
            </div>
            {/* <span className={`text-cores-fonte self-start`}>Acesse abaixo</span> */}
          </div>
          {/* <Link
            href={linkButton}
            alt={altLink}
            className={`w-fit text-cores-fonte self-start px-4 py-2 rounded-2xl border border-solid border-cores-laranja hover:bg-cores-laranja hover:text-white`}
          >
            Acessar
          </Link> */}
          <BotaoLinks href={linkButton} alt={altLink} texto="Acessar" css={larguraDaTela==="mobile" ? "m-auto" : ""} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  modoResponsiv: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  subTitulo: PropTypes.string.isRequired,
  linkButton: PropTypes.string.isRequired,
  altLink: PropTypes.string.isRequired,
  inverter: PropTypes.bool.isRequired,
};
