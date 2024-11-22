"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import InputTel from "@/components/forms/InputTel";
import logo from "@/public/img/logo.png";
import FormField from "@/components/forms/FormField";

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
                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label htmlFor="nome" text="Nome" />
                  <FormField.Input
                    id="nome"
                    type="text"
                    required={true}
                    tabIndex={1}
                    placeholder="Nome completo"
                    name="nome"
                  />
                </FormField.Container>

                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label htmlFor="sobrenome" text="Sobrenome" />
                  <FormField.Input
                    id="sobrenome"
                    type="text"
                    required={true}
                    tabIndex={2}
                    placeholder="Sobrenome"
                    name="sobrenome"
                  />
                </FormField.Container>
                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label htmlFor="email" text="E-mail" />
                  <FormField.Input
                    id="email"
                    type="email"
                    required={true}
                    tabIndex={3}
                    placeholder="Digite seu e-mail"
                    name="email"
                  />
                </FormField.Container>
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
                    name="telefone"
                  />
                </div>
                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label htmlFor="senha" text="Senha" />
                  <FormField.InputPassword
                    id="senha"
                    required={true}
                    tabIndex={5}
                    placeholder="Digite sua senha"
                    name="senha"
                  />
                </FormField.Container>
                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label
                    htmlFor="confirmar-senha"
                    text="Confirmar senha"
                  />
                  <FormField.InputPassword
                    id="confirmar-senha"
                    required={true}
                    tabIndex={6}
                    placeholder="Confirme sua senha"
                  />
                </FormField.Container>
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
