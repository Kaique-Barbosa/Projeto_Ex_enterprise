"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import logo from "@/public/img/logo.png";
import imagem1 from "@/public/img/col-1-5.png";
import imagem2 from "@/public/img/col-1-5.png";
import imagem3 from "@/public/img/col-1-5.png";

function page() {
  const router = useRouter();

  return (
    <div className="container py-6 max-w-5xl m-auto min-h-dvh flex gap-8">
      {/* <div className="hidden md:block md:flex-1 md:h-full">
        <div className="h-full">
          <Image
            src={imagem1}
            alt="imagem 1"
            className="h-full w-full object-cover rounded-lg"
          ></Image>
        </div>
      </div> */}

      <div className="flex flex-col items-center flex-1 justify-center gap-12 py-4">
        <div className="flex w-full gap-4 justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image className="size-16 object-cover" alt="Logo" src={logo} />
            <span className="inline text-2xl font-semibold">Ex Enterprise</span>
          </div>

          <button
            className="btn btn-outline hover:bg-laranja-light-normal dark:hover:bg-laranja-dark-normal hover:border-none hover:text-white border-laranja-light-normal dark:border-laranja-dark-normal"
            onClick={() => router.back()}
          >
            Voltar
          </button>
        </div>

        <div className="flex flex-1 self-stretch flex-col justify-center items-center">
          <div className="items-center justify-center gap-8 flex-1 flex flex-col relative">
            <h1 className="text-center">Acesse sua conta</h1>

            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-wrap items-start gap-[24px_24px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-4 flex-grow flex-basis-80">
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <input
                    className="p-4 border border-cinza_neutro rounded bg-preto_secondario flex-1"
                    placeholder="Digite seu email"
                    type="email"
                    id="email"
                  />
                </div>

                <div className="min-w-[360px] items-start gap-4 p-1 flex-1 grow flex flex-col relative">
                  <div className="flex items-end gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-regular-font-size)] tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]">
                      Senha
                    </div>
                  </div>

                  <input
                    className="border-cinza-600 p-4 relative self-stretch w-full mb-[-3.00px] ml-[-3.00px] mr-[-3.00px] bg-branco-100 rounded overflow-hidden border-[3px] border-solid text-cinza-600 whitespace-nowrap font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[length:var(--fontes-fonte-normal-light-font-size)] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]"
                    placeholder="Defina sua senha"
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
                    Acessar
                  </button>
                </div>

                <div className="flex flex-col min-w-[360px] items-center justify-center gap-[4.8px] px-3 py-2 relative flex-1 grow rounded overflow-hidden">
                  <Link
                    href={"/cadastro"}
                    alt="Já tem uma conta? Faça seu login"
                    className="relative w-fit mt-[-1.00px] font-fontes-fonte-normal-regular font-[number:var(--fontes-fonte-normal-regular-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-regular-font-size)] text-center tracking-[var(--fontes-fonte-normal-regular-letter-spacing)] leading-[var(--fontes-fonte-normal-regular-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-regular-font-style)]"
                  >
                    Ainda não têm cadastro? Faça o seu
                  </Link>
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
