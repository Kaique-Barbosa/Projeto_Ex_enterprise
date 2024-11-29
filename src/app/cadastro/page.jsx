"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo.png";
import FormField from "@/components/forms/FormField";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validarTelefone, formatarTelefoneParaNumeros } from "@/utils/telefone";
import api from "@/utils/api";
import { useToast } from "@chakra-ui/react";

const schema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  sobrenome: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  telefone: yup
    .string()
    .transform(formatarTelefoneParaNumeros)
    .max(15, "Telefone inválido")
    .required("Campo obrigatório")
    .test("Numero de telefone válido", "Telefone inválido", (value) =>
      validarTelefone(value)
    ),
  senha: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Campo obrigatório"),
  confirmarSenha: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("senha"), null], "As senhas não coincidem"),
});

function page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toast = useToast()

  const registerSubmit = (data) => {
    const { confirmarSenha, ...filterData } = data;
    console.log(JSON.stringify(filterData));
  };

  return (
    <div className="min-h-svh h-full flex flex-col justify-center items-center">
      <header className="flex gap-2 justify-center items-center p-4">
        <Link alt="ir para home" href="/" className="flex items-center gap-2">
          <Image className="size-16 object-cover" alt="Logo" src={logo} />
          <span className="text-2xl font-semibold">Ex Enterprise</span>
        </Link>
      </header>

      <main className="w-full max-w-screen-lg flex items-center justify-center flex-1 px-4 sm:px-8 lg:px-12 py-4">
        <div className="w-full flex flex-col gap-6 p-4">
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(registerSubmit)}
          >
            <fieldset className="flex flex-col gap-8">
              <legend className="text-center text-4xl mb-6">
                Crie a sua conta
              </legend>
              <div className="flex flex-wrap gap-x-8 gap-y-1">
                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label>Nome</FormField.Label>
                  <Controller
                    control={control}
                    name="nome"
                    defaultValue=""
                    render={({ field }) => (
                      <FormField.Input
                        {...field}
                        type="text"
                        tabIndex={1}
                        placeholder="Primeiro nome"
                      ></FormField.Input>
                    )}
                  />
                  <FormField.Error>{errors.nome?.message}</FormField.Error>
                </FormField.Container>

                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label>Sobrenome</FormField.Label>
                  <Controller
                    control={control}
                    name="sobrenome"
                    defaultValue=""
                    render={({ field }) => (
                      <FormField.Input
                        {...field}
                        type="text"
                        tabIndex={2}
                        placeholder="Sobrenome completo"
                      ></FormField.Input>
                    )}
                  />
                  <FormField.Error>{errors.sobrenome?.message}</FormField.Error>
                </FormField.Container>
                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label>Email</FormField.Label>
                  <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    render={({ field }) => (
                      <FormField.Input
                        {...field}
                        type="email"
                        tabIndex={3}
                        placeholder="Digite seu e-mail"
                      ></FormField.Input>
                    )}
                  />
                  <FormField.Error>{errors.email?.message}</FormField.Error>
                </FormField.Container>
                <div className="flex-grow basis-80">
                  <FormField.Container className="flex-grow basis-80">
                    <FormField.Label>Telefone</FormField.Label>
                    <Controller
                      control={control}
                      name="telefone"
                      defaultValue=""
                      render={({ field }) => (
                        <FormField.Input
                          {...field}
                          type="tel"
                          tabIndex={4}
                          placeholder="(00) 00000-0000"
                        ></FormField.Input>
                      )}
                    />
                    <FormField.Error>
                      {errors.telefone?.message}
                    </FormField.Error>
                  </FormField.Container>
                </div>
                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label>Senha</FormField.Label>
                  <Controller
                    control={control}
                    name="senha"
                    defaultValue=""
                    render={({ field }) => (
                      <FormField.InputPassword
                        {...field}
                        tabIndex={5}
                        placeholder="Digite sua senha"
                      ></FormField.InputPassword>
                    )}
                  />
                  <FormField.Error>{errors.senha?.message}</FormField.Error>
                </FormField.Container>
                <FormField.Container className="flex-grow basis-80">
                  <FormField.Label>Confirmar senha</FormField.Label>
                  <Controller
                    control={control}
                    name="confirmarSenha"
                    defaultValue=""
                    render={({ field }) => (
                      <FormField.InputPassword
                        {...field}
                        tabIndex={6}
                        placeholder="Confirme sua senha"
                      ></FormField.InputPassword>
                    )}
                  />
                  <FormField.Error>
                    {errors.confirmarSenha?.message}
                  </FormField.Error>
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
