"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/forms/Input";
import InputPassword from "@/components/forms/InputPassword";
import InputTel from "@/components/forms/InputTel";
import logo from "@/public/img/logo.png";

function page() {
  return (
    <div className="min-h-svh h-full flex flex-col justify-center p-4 gap-8">
      <div className="flex gap-2 justify-center items-center">
        <Image className="size-16 object-cover" alt="Logo" src={logo} />
        <span className="inline text-2xl font-semibold">Ex Enterprise</span>
      </div>

      <div className="flex items-center justify-center flex-1">
        <div className="max-w-md w-full flex flex-col gap-6 bg-cinza-50 dark:bg-preto-850 p-6 shadow-neutro_sm dark:shadow-neutro_dark_sm rounded-lg">
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="flex flex-col gap-4">
              <legend className="text-center text-4xl mb-6">
                Crie a sua conta
              </legend>
              <div className="flex-1">
                <label htmlFor="nome" className="label">
                  Nome
                </label>
                <Input
                  css="w-full"
                  placeholder="Digite seu primeiro nome"
                  type="text"
                  id="nome"
                  required
                  tabIndex={1}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="sobrenome" className="label">
                  Sobrenome
                </label>
                <Input
                  css="w-full"
                  placeholder="Digite seu sobrenome"
                  type="text"
                  id="sobrenome"
                  required
                  tabIndex={2}
                />
              </div>
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
                  tabIndex={3}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="telefone" className="label">
                  Telefone
                </label>
                <InputTel
                  css="w-full"
                  placeholder="Digite seu número de telefone"
                  id="telefone"
                  required
                  tabIndex={4}
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
                  tabIndex={5}
                />
              </div>

              <div className="flex-1">
                <label htmlFor="confirmar-senha" className="label">
                  Confirmar senha
                </label>
                <InputPassword
                  id="confirmar-senha"
                  placeholder="Confirme sua senha"
                  required={true}
                  css="w-full"
                  tabIndex={6}
                />
              </div>

              <button
                type="submit"
                className="btn btn-accent text-white w-full py-3"
                tabIndex={7}
              >
                Acessar
              </button>
            </fieldset>
          </form>

          <Link
            href={"/login"}
            alt="Já tem uma conta? Faça seu login"
            className="text-center text-laranja-light dark:text-laranja-dark hover:underline hover:underline-offset-2"
            tabIndex={8}
          >
            Já têm uma conta? Faça seu login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
