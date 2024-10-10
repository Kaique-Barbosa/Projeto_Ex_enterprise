import React, { useContext } from "react";
import Image from "next/image";
import consultoria from "@/public/img/consultoria.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";
import { WindowWidthContext } from "@/app/WindowWidthContext";
import BotaoLinks from "../botaoLinks/BotaoLinks";

export default function SobreEmpresa() {
  const larguraDaTela = useContext(WindowWidthContext);
  return (
    <div
      className={`w-full my-[3%]  p-4 sm:p-8 md:p-12 flex flex-row max-w-screen-2xl items-center justify-center tracking-wide`}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4 flex-1 p-4">
          <div className=" flex flex-col items-center justify-center gap-4">
            <h2 className="font-semibold text-3xl text-center text-pretty tracking-wider leading-tight">
              Conheca mais sobre a empresa
            </h2>
            <p className="tracking-wider text-center leading-normal text-balance">
              <span className="text-laranja">Nossa missão é oferecer</span>
              <span>&nbsp;</span>
              <span>
                soluções tecnológicas avançadas, produtos de informática de alta
                qualidade e serviços de locação de imóveis excepcionais,
              </span>
              <span>&nbsp;</span>
              <span className="text-laranja">
                sempre com foco na inovação, na satisfação do cliente e na
                criação de valor sustentável.
              </span>
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <BotaoLinks href={"/"} alt={"Botao link"} texto={"Acessar"} />
          </div>
        </div>
        <div className="flex-1">
          <div className="p-4  lg:p-0 grid xs:grid-cols-2 items-center justify-center gap-4">
            <Image
              className="items-center w-full h-80 row-span-2 object-cover shadow-lg  shadow-slate-700 rounded-lg "
              alt="imagens ilustrativas"
              src={consultoria}
            />
            <Image className="w-full h-80 object-cover shadow-lg shadow-slate-700 rounded-lg" alt="imagens ilustrativas " src={locacao} />
            <Image className="w-full h-80 object-cover shadow-lg shadow-slate-700 rounded-lg" alt="imagens ilustrativas" src={ecommerce} />
          </div>
        </div>
      </div>
    </div>
  );
}
