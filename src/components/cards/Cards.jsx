import React from "react";
import PropTypes from "prop-types";

import Imagem1 from "@/public/img/col-1-1.png"
import Image from "next/image";

export const Cards = ({ props }) => {
  return (
    <div className={`flex flex-col gap-12 relative bg-teal-600 w-full `}>

      <div
        className={` w-[80%] m-auto flex self-stretch items-center gap-2.5 flex-[0_0_auto] justify-center relative`}
      >
        <p
          className={`font-h2-semi-bold mt-[-1.00px] tracking-[var(--h2-semi-bold-letter-spacing)] text-[length:var(--h2-semi-bold-font-size)] [font-style:var(--h2-semi-bold-font-style)] text-cores-fonte-p-gina relative font-[number:var(--h2-semi-bold-font-weight)] text-center leading-[var(--h2-semi-bold-line-height)] `}
        >
          Escolha um de nossos ramos
        </p>
      </div>


      <div
        className=" transform -scale-x-100 !bg-yellow-800 flex flex-wrap m-auto w-[80%] h-[500px] items-center justify-center "
        data-responsividade-mode="desktop"
      >
        <div className=" !w-[80%] m-auto  justify-between flex-1 grow bg-cores-container-fundo rounded-2xl flex items-center  self-stretch">
          <Image
            className="relative flex-1 self-stretch grow"
            alt="Col"
            src={Imagem1}
          />
          <div className="flex flex-col items-start justify-center gap-8 p-8 relative flex-1 self-stretch grow">
            <div className="flex-col gap-6 w-full flex-[0_0_auto] flex items-center relative self-stretch">
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div  className=" transform -scale-x-100 relative self-stretch mt-[-1.00px] [font-family:'Work_Sans-Bold',Helvetica] font-bold text-cores-fonte text-2xl tracking-[1.44px] leading-[normal]">
                  E-COMMERCE
                </div>
                <p className=" transform -scale-x-100 relative self-stretch font-fontes-fonte-m-dia-regular font-[number:var(--fontes-fonte-m-dia-regular-font-weight)] text-cores-laranja text-[length:var(--fontes-fonte-m-dia-regular-font-size)] tracking-[var(--fontes-fonte-m-dia-regular-letter-spacing)] leading-[var(--fontes-fonte-m-dia-regular-line-height)] [font-style:var(--fontes-fonte-m-dia-regular-font-style)]">
                  Conheça nossa variedade de produtos de informática e T.I
                </p>
              </div>
              <div className="relative self-stretch font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-cores-fonte text-[length:var(--fontes-fonte-normal-light-font-size)] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]">
                Acesse abaixo
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 relative flex-[0_0_auto] rounded-2xl border border-solid border-cores-laranja">
              <div
                className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-uppercase font-[number:var(--fontes-fonte-normal-uppercase-font-weight)] text-cores-fonte-p-gina text-[length:var(--fontes-fonte-normal-uppercase-font-size)] tracking-[var(--fontes-fonte-normal-uppercase-letter-spacing)] leading-[var(--fontes-fonte-normal-uppercase-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-uppercase-font-style)]"
                data-responsividade-mode="mobile"
              >
                IR PARA A PÁGINA
              </div>
              {/* <ExpandFalse className="!relative !w-4 !h-4" color="#E3E4E6" /> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

Cards.propTypes = {};
