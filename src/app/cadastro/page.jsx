
import React from "react";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/img/logo.png";
import imagem1 from "@/public/img/col-1-5.png";
import imagem2 from "@/public/img/col-1-5.png";
import imagem3 from "@/public/img/col-1-5.png";




function page() {
  return (
    <div className=" flex justify-around p-[1%] ">

      <div className="flex flex-col justify-around itens-center w-[40%]  p-[1%]  ">
        <div className="">
          <Image src={imagem1} alt="imagem 1" className="h-64 w-full"></Image>
        </div>
        <div className=" ">
          <Image src={imagem2} alt="imagem 2" className="h-64 w-full"></Image>
        </div>
        <div className=" ">
          <Image src={imagem2} alt="imagem 3" className="h-64 w-full"></Image>
        </div>
      </div>

      <div className="flex flex-col items-center w-[50%] p-[2%] justify-center  ">
        <div className="flex flex-col items-center justify-center gap-8 px-0 py-4 relative">
          <div className="flex flex-wrap justify-between gap-[10px_10px] self-stretch w-full flex-[0_0_auto] items-center relative">
            <div className="inline-flex gap-2 flex-[0_0_auto] items-center relative">
              <div className="flex flex-col w-[70px] h-[70px] justify-center gap-2.5 rounded-[100px] overflow-hidden items-center relative">
                <Image
                  className="relative w-[70px] h-[70px] object-cover"
                  alt="Logo"
                  src={logo}
                />
              </div>

              <div className="relative w-fit font-fontes-fonte-m-dia-bold font-[number:var(--fontes-fonte-m-dia-bold-font-weight)] text-white text-[length:var(--fontes-fonte-m-dia-bold-font-size)] tracking-[var(--fontes-fonte-m-dia-bold-letter-spacing)] leading-[var(--fontes-fonte-m-dia-bold-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-m-dia-bold-font-style)]">
                Ex Enterprise
              </div>
            </div>

            <button className="btn btn-outline hover:bg-[#eb7500] hover:border-none hover:text-white border-[#eb7500]">
              Voltar
            </button>
          </div>

          <div
            className="flex flex-col max-w-screen-lg items-center justify-center px-0 py-8 relative flex-1 self-stretch w-full grow rounded-lg overflow-hidden"
            data-responsividade-mode="desktop"
            data-temas-mode="tema-escuro"
          >
            <div className="items-center justify-center gap-8 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Work_Sans-SemiBold',Helvetica] font-semibold text-white text-[56px] tracking-[3.36px] leading-[normal]">
                  Crie sua conta
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-wrap items-start gap-[24px_24px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="min-w-[360px] items-start gap-4 p-1 flex-1 grow flex flex-col relative">
                    <div className="flex items-end gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        Nome
                      </div>

                      <div className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#eb7500] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        *
                      </div>
                    </div>
                    <input
                      className="border-cinza-200-600 p-4 relative self-stretch w-full mb-[-3.00px] ml-[-3.00px] mr-[-3.00px] bg-branco-100 rounded overflow-hidden border-[3px] border-solid text-cinza-200-600 whitespace-nowrap font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[length:var(--fontes-fonte-normal-light-font-size)] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]"
                      placeholder="Digite seu nome"
                      type="text"
                    />
                  </div>

                  <div className="min-w-[360px] items-start gap-4 p-1 flex-1 grow flex flex-col relative">
                    <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        Sobrenome
                      </div>
                    </div>

                    <input
                      className="border-cinza-200-600 p-4 relative self-stretch w-full mb-[-3.00px] ml-[-3.00px] mr-[-3.00px] bg-branco-100 rounded overflow-hidden border-[3px] border-solid text-cinza-200-600 whitespace-nowrap font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[length:var(--fontes-fonte-normal-light-font-size)] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]"
                      placeholder="Digite seu sobrenome"
                      type="text"
                    />
                  </div>

                  <div className="min-w-[360px] items-start gap-4 p-1 flex-1 grow flex flex-col relative">
                    <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        Telefone
                      </div>
                    </div>

                    <input
                      className="border-cinza-200-600 p-4 relative self-stretch w-full mb-[-3.00px] ml-[-3.00px] mr-[-3.00px] bg-branco-100 rounded overflow-hidden border-[3px] border-solid text-cinza-200-600 whitespace-nowrap font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[length:var(--fontes-fonte-normal-light-font-size)] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]"
                      placeholder="Digite seu numero de telefone"
                      type="number"
                    />
                  </div>

                  <div className="min-w-[360px] items-start gap-4 p-1 flex-1 grow flex flex-col relative">
                    <div className="flex items-end gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        Email
                      </div>

                      <div className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#eb7500] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        *
                      </div>
                    </div>

                    <input
                      className="border-cinza-200-600 p-4 relative self-stretch w-full mb-[-3.00px] ml-[-3.00px] mr-[-3.00px] bg-branco-100 rounded overflow-hidden border-[3px] border-solid text-cinza-200-600 whitespace-nowrap font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[length:var(--fontes-fonte-normal-light-font-size)] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]"
                      placeholder="Digite seu email"
                      type="email"
                    />
                  </div>

                  <div className="min-w-[360px] items-start gap-4 p-1 flex-1 grow flex flex-col relative">
                    <div className="flex items-end gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        Senha
                      </div>

                      <div className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#eb7500] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        *
                      </div>
                    </div>

                    <input
                      className="border-cinza-200-600 p-4 relative self-stretch w-full mb-[-3.00px] ml-[-3.00px] mr-[-3.00px] bg-branco-100 rounded overflow-hidden border-[3px] border-solid text-cinza-200-600 whitespace-nowrap font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[length:var(--fontes-fonte-normal-light-font-size)] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]"
                      placeholder="Defina sua senha"
                      type="password"
                    />
                  </div>

                  <div className="min-w-[360px] items-start gap-4 p-1 flex-1 grow flex flex-col relative">
                    <div className="flex items-end gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        Confirmar senha
                      </div>

                      <div className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#eb7500] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                        *
                      </div>
                    </div>

                    <input
                      className="border-cinza-200-600 p-4 relative self-stretch w-full mb-[-3.00px] ml-[-3.00px] mr-[-3.00px] bg-branco-100 rounded overflow-hidden border-[3px] border-solid text-cinza-200-600 whitespace-nowrap font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[length:var(--fontes-fonte-normal-light-font-size)] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]"
                      placeholder="Digite novamente"
                      type="password"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-[24px_0px] px-0 py-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className="all-[unset] box-border flex flex-col min-w-60 items-start relative flex-1 grow"
                    data-responsividade-mode="desktop"
                  >
                    <button className="btn w-full btn-success bg-[#eb7500] border-none hover:bg-white">
                      Cadastrar
                    </button>
                  </div>

                  <div className="flex flex-col min-w-[360px] items-center justify-center gap-[4.8px] px-3 py-2 relative flex-1 grow rounded overflow-hidden">
                    <Link
                      href={"/login"}
                      alt="Já tem uma conta? Faça seu login"
                      className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-regular-font-size)] text-center tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]"
                    >
                      Já tem uma conta? Faça seu login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
