"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/img/logo.png";
import InputPassword from "@/components/forms/InputPassword";
import Input from "@/components/forms/Input";

function page() {
  return (
    <div className="min-h-svh h-full flex flex-col justify-center p-4 gap-8">
      <header className="flex gap-2 justify-center items-center">
        <Image className="size-16 object-cover" alt="Logo" src={logo} />
        <span className="inline text-2xl font-semibold">Ex Enterprise</span>
      </header>

      <main className="flex items-center justify-center flex-1">
        <div className="max-w-md w-full flex flex-col gap-6 bg-cinza-50/10 dark:bg-preto-850/10 p-4">
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="flex flex-col gap-4">
              <legend className="text-center text-4xl mb-6">
                Acesse sua conta
              </legend>
              <div className="flex-1">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <Input
                  css="w-full"
                  placeholder="Digite seu email"
                  type="email"
                  id="email"
                  required
                  tabIndex={1}
                />
              </div>

              <div className="flex-1">
                <label htmlFor="senha" className="label">
                  Senha
                </label>
                <InputPassword
                  id="senha"
                  placeholder="Digite sua senha"
                  required={true}
                  css="w-full"
                  tabIndex={2}
                />
              </div>
              <button
                type="submit"
                className="btn w-full py-3 text-white bg-laranja-light hover:bg-laranja-light dark:bg-laranja-dark dark:hover:bg-laranja-dark hover:bg-opacity-75 dark:hover:bg-opacity-75"
                tabIndex={3}
              >
                Acessar
              </button>
            </fieldset>
          </form>

          <Link
            href={"/cadastro"}
            alt="Já tem uma conta? Faça seu login"
            className="text-center text-laranja-light dark:text-laranja-dark hover:underline hover:underline-offset-2"
            tabIndex={4}
          >
            Ainda não têm cadastro? Faça o seu
          </Link>
        </div>
      </main>
    </div>
  );
}

export default page;
