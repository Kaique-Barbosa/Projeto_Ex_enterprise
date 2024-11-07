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
    <div className="h-dvh flex flex-col justify-center p-4">
      <div className="flex gap-2 justify-center items-center">
        <Image className="size-16 object-cover" alt="Logo" src={logo} />
        <span className="inline text-2xl font-semibold">Ex Enterprise</span>
      </div>

      <div className="flex items-center justify-center flex-1">
        <div className="max-w-[450px] w-full flex flex-col gap-8 bg-cinza-50 dark:bg-preto-850 p-6 shadow-neutro_sm dark:shadow-neutro_dark_sm rounded-lg">
          <h1 className="text-center">Acesse sua conta</h1>

          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  className="input border-2 dark:border-cinza-200_neutro border-preto-800 rounded bg-cinza-200 w-full hover:border-laranja-light-normal dark:hover:border-laranja-dark-normal focus-visible:border-laranja-light-normal dark:focus-visible:border-laranja-dark-normal"
                  placeholder="Digite seu email"
                  type="email"
                  id="email"
                  required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="senha" className="label">
                  Senha
                </label>

                <input
                  className="input border-2 dark:border-cinza-200_neutro border-cinza-400 rounded bg-cinza-200 w-full hover:border-laranja-light-normal dark:hover:border-laranja-dark-normal focus-visible:border-laranja-light-normal dark:focus-visible:border-laranja-dark-normal"
                  placeholder="Defina sua senha"
                  type="password"
                  id="senha"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full text-white bg-laranja-light-normal hover:bg-laranja-light-hover dark:bg-laranja-dark-normal dark:hover:bg-laranja-dark-hover"
            >
              Acessar
            </button>
          </form>

          <Link
            href={"/cadastro"}
            alt="Já tem uma conta? Faça seu login"
            className="text-center text-laranja-light-normal dark:text-laranja-dark-normal hover:underline hover:underline-offset-2"
          >
            Ainda não têm cadastro? Faça o seu
          </Link>

          <button
            className="btn btn-outline hover:bg-laranja-light-normal dark:hover:bg-laranja-dark-normal hover:border-none hover:text-white border-laranja-light-normal dark:border-laranja-dark-normal"
            onClick={() => router.back()}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
