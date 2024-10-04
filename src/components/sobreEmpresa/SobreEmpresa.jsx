import React, { useContext } from "react";
// import { Icon } from "@/public/img/icon-19.png";

import Image from "next/image";

import consultoria from "@/public/img/consultoria.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";
import { WindowWidthContext } from "@/app/WindowWidthContext";
import BotaoLinks from "../botaoLinks/BotaoLinks";

export default function SobreEmpresa () {
    const larguraDaTela = useContext(WindowWidthContext);
    return (
      <div
      className={` w-[100%] mt-12 mb-12 flex flex-row max-w-7xl items-center justify-center  rounded-lg [font-family:'Work_Sans-Bold',Helvetica] tracking-[1.44px]
        data-responsividade-mode= ${larguraDaTela}
        ${larguraDaTela === "tablet" || larguraDaTela === "mobile"  ? "mx-8" : ""
        } `}
      >
        <div className="flex-wrap w-[100%] flex items-center justify-center gap-6 relative flex-1 self-stretch grow">
          <div className=" w-[80%]  flex flex-col items-center justify-center gap-4 p-4  flex-1 grow ">
            <div className=" flex flex-col items-center justify-center gap-4 relative self-stretch w-full ">
              <p className="relative w-fit [font-family:'Work_Sans-SemiBold',Helvetica] font-semibold text-[#e3e4e6] md:text-[32px] tracking-[1.92px] leading-[48px] whitespace-nowrap">
                CONHEÇA MAIS SOBRE A EMPRESA
              </p>
              <p className="relative self-stretch [font-family:'Work_Sans-Regular',Helvetica] font-normal text-transparent text-2xl tracking-[1.44px] leading-[normal]">
                <span className="text-[#eb7500] tracking-[var(--fontes-fonte-m-dia-light-letter-spacing)] font-fontes-fonte-m-dia-light [font-style:var(--fontes-fonte-m-dia-light-font-style)] font-[number:var(--fontes-fonte-m-dia-light-font-weight)] leading-[var(--fontes-fonte-m-dia-light-line-height)] text-[length:var(--fontes-fonte-m-dia-light-font-size)]">
                  Nossa missão é oferecer
                </span>
                <span className="text-[#e3e4e6] tracking-[var(--fontes-fonte-m-dia-light-letter-spacing)] font-fontes-fonte-m-dia-light [font-style:var(--fontes-fonte-m-dia-light-font-style)] font-[number:var(--fontes-fonte-m-dia-light-font-weight)] leading-[var(--fontes-fonte-m-dia-light-line-height)] text-[length:var(--fontes-fonte-m-dia-light-font-size)]">
                  &nbsp;
                </span>
                <span className="font-h4-semi-bold font-[number:var(--h4-semi-bold-font-weight)] text-[#e3e4e6] tracking-[var(--h4-semi-bold-letter-spacing)] [font-style:var(--h4-semi-bold-font-style)] leading-[var(--h4-semi-bold-line-height)] text-[length:var(--h4-semi-bold-font-size)]">
                  soluções tecnológicas avançadas, produtos de informática de alta qualidade e serviços de locação de
                  imóveis excepcionais,
                </span>
                <span className="text-[#e3e4e6] tracking-[var(--fontes-fonte-m-dia-light-letter-spacing)] font-fontes-fonte-m-dia-light [font-style:var(--fontes-fonte-m-dia-light-font-style)] font-[number:var(--fontes-fonte-m-dia-light-font-weight)] leading-[var(--fontes-fonte-m-dia-light-line-height)] text-[length:var(--fontes-fonte-m-dia-light-font-size)]">
                  &nbsp;
                </span>
                <span className="text-[#eb7500] tracking-[var(--fontes-fonte-m-dia-light-letter-spacing)] font-fontes-fonte-m-dia-light [font-style:var(--fontes-fonte-m-dia-light-font-style)] font-[number:var(--fontes-fonte-m-dia-light-font-weight)] leading-[var(--fontes-fonte-m-dia-light-line-height)] text-[length:var(--fontes-fonte-m-dia-light-font-size)]">
                  sempre com foco na inovação, na satisfação do cliente e na criação de valor sustentável.
                </span>
              </p>
            </div>
            <div className="w-full flex items-center justify-center">

              <BotaoLinks  href={"/"} alt={"Botao link"} texto={"Acessar"} />
            </div>
            
          </div>
          <div className="grid grid-cols-2 w-full mx-[1%]  items-center justify-center gap-4 relative  ">
            <Image className="relative  flex-1 w-full  grow h-full" alt="Cover" src={consultoria}  />

            <div className="flex flex-col bg-blue-100  w-full items-center justify-center    ">
              <Image className="relative self-stretch w-full h-full" alt="Cover" src={locacao} />
              <Image className="relative self-stretch w-full h-full" alt="Cover" src={ecommerce} />
            </div>
          </div>
        </div>
      </div>
    );
  }