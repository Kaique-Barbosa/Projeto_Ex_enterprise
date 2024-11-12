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
    <div className="min-h-svh h-full flex flex-col justify-center items-center">
      <header className="flex gap-2 justify-center items-center p-4">
        <Image className="size-16 object-cover" alt="Logo" src={logo} />
        <span className="inline text-2xl font-semibold">Ex Enterprise</span>
      </header>

      <main className="w-full max-w-screen-lg flex items-center justify-center flex-1 px-4 sm:px-8 lg:px-12 py-4">
        <div className="w-full flex flex-col gap-6 p-4">
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="flex flex-col gap-8">
              <legend className="text-center text-4xl mb-6">
                Crie a sua conta
              </legend>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <div className="flex-grow basis-80">
                  <label htmlFor="nome" className="label">
                    Nome
                  </label>
                  <Input
                    css="w-full"
                    placeholder="Primeiro nome"
                    type="text"
                    id="nome"
                    required
                    tabIndex={1}
                  />
                </div>
                <div className="flex-grow basis-80">
                  <label htmlFor="sobrenome" className="label">
                    Sobrenome
                  </label>
                  <Input
                    css="w-full"
                    placeholder="Sobrenome completo"
                    type="text"
                    id="sobrenome"
                    required
                    tabIndex={2}
                  />
                </div>
                <div className="flex-grow basis-80">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <Input
                    css="w-full"
                    placeholder="exemplo@mail.com"
                    type="email"
                    id="email"
                    required
                    tabIndex={3}
                  />
                </div>
                <div className="flex-grow basis-80">
                  <label htmlFor="telefone" className="label">
                    Telefone
                  </label>
                  <InputTel
                    css="w-full"
                    placeholder="(99) 99999-9999"
                    id="telefone"
                    required
                    tabIndex={4}
                  />
                </div>
                <div className="flex-grow basis-80">
                  <label htmlFor="senha" className="label">
                    Senha
                  </label>
                  <InputPassword
                    id="senha"
                    placeholder="Defina sua senha"
                    required={true}
                    css="w-full"
                    tabIndex={5}
                  />
                </div>
                <div className="flex-grow basis-80">
                  <label htmlFor="confirmar-senha" className="label">
                    Confirmar senha
                  </label>
                  <InputPassword
                    id="confirmar-senha"
                    placeholder="Digite sua senha definida"
                    required={true}
                    css="w-full"
                    tabIndex={6}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                <button
                  type="submit"
                  className="btn btn-accent text-white flex-grow basis-80 py-3"
                  tabIndex={7}
                >
                  Criar conta
                </button>
                <Link
                  href={"/login"}
                  alt="Já tem uma conta? Faça seu login"
                  className="text-center text-laranja-light dark:text-laranja-dark hover:underline hover:underline-offset-2 flex-grow basis-80"
                  tabIndex={8}
                >
                  Já têm uma conta? Faça seu login
                </Link>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}

export default page;
