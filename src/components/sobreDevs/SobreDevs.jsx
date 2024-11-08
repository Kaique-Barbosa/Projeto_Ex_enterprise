import React from "react";
import Image from "next/image";
import BotaoLinks from "../botaoLinks/BotaoLinks";
import devs1 from "@/public/img/devs1.png";
import devs2 from "@/public/img/devs2.png";

export default function SobreDevs() {
  return (
    <div
      className={`container my-12 flex flex-row max-w-screen-2xl items-center justify-center tracking-wide`}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4 flex-1 p-4">
          <div className=" flex flex-col items-center justify-center gap-4">
            <h2 className="font-semibold text-3xl text-center text-pretty tracking-wider leading-tight">
              Conheca mais sobre o time de desenvolvedores
            </h2>
            <p className="tracking-wider text-center leading-normal text-balance">
              <span>Nosso time de devs</span>
              <span>&nbsp;</span>
              <span>
                busca inovação com sustentabilidade, utilizando das melhores
                tecnologias do marcado
              </span>
              <span>&nbsp;</span>
              <span>focando na</span>
              <span className="text-laranja-light dark:text-laranja-dark">
                {" "}
                usabilidade, eficiencia e seguranda do sistema.
              </span>
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <BotaoLinks href={"/"} alt={"Botao link"} texto={"Acessar"} />
          </div>
        </div>
        <div className="flex-1 ">
          <div className="p-4 lg:p-0 grid xs:  items-center justify-center gap-4">
            <Image
              className="items-center w-full h-80 row-span-2"
              alt="Cover"
              src={devs1}
            />

            <Image className="w-full h-80" alt="Cover" src={devs2} />
          </div>
        </div>
      </div>
    </div>
  );
}
