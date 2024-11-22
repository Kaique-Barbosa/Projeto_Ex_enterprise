"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import FormField from "@/components/forms/FormField";

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

              <FormField.Container className="flex-1">
                <FormField.Label htmlFor="email" text="E-mail" />
                <FormField.Input
                  type="email"
                  id="email"
                  required={true}
                  tabIndex={1}
                  placeholder={"Digite seu e-mail"}
                ></FormField.Input>
              </FormField.Container>

              <FormField.Container className="flex-1">
                <FormField.Label htmlFor="password" text="Senha" />
                <FormField.InputPassword
                  id="password"
                  required={true}
                  tabIndex={2}
                  placeholder={"Digite sua senha"}
                ></FormField.InputPassword>
              </FormField.Container>

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
