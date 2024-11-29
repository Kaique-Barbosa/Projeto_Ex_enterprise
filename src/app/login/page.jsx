"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import FormField from "@/components/forms/FormField";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  senha: yup.string().required("Campo obrigatório"),
});

function page() {
  const router = useRouter();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginSubmit = (data) => {
    api
      .post("/usuario/login", data, {
        timeout: 3000,
      })
      .then((response) => {
        toast({
          title: "Sucesso!",
          description: response.data.message,
          position: "top-center",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        localStorage.setItem("token", response.data.token);
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
        const { response } = error;
        toast({
          title: "Erro ao fazer login!",
          description: response.data.message,
          position: "top-center",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <div className="min-h-svh h-full flex flex-col justify-center p-4 gap-8">
      <header className="flex gap-2 justify-center items-center">
        <Link alt="ir para home" href="/" className="flex items-center gap-2">
          <Image className="size-16 object-cover" alt="Logo" src={logo} />
          <span className="text-2xl font-semibold">Ex Enterprise</span>
        </Link>
      </header>

      <main className="flex items-center justify-center flex-1">
        <div className="max-w-md w-full flex flex-col gap-6 p-4">
          <form className="flex flex-col" onSubmit={handleSubmit(loginSubmit)}>
            <fieldset className="flex flex-col gap-4">
              <legend className="text-center text-4xl mb-6">
                Acesse sua conta
              </legend>

              <FormField.Container className="flex-1">
                <FormField.Label>E-mail</FormField.Label>
                <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  render={({ field }) => (
                    <FormField.Input
                      {...field}
                      type="email"
                      required={true}
                      tabIndex={1}
                      placeholder="Digite seu e-mail"
                    ></FormField.Input>
                  )}
                />
                <FormField.Error>{errors.email?.message}</FormField.Error>
              </FormField.Container>

              <FormField.Container className="flex-1">
                <FormField.Label>Senha</FormField.Label>
                <Controller
                  control={control}
                  name="senha"
                  defaultValue=""
                  render={({ field }) => (
                    <FormField.InputPassword
                      {...field}
                      required={true}
                      tabIndex={2}
                      placeholder="Digite sua senha"
                    ></FormField.InputPassword>
                  )}
                />
                <FormField.Error>{errors.password?.message}</FormField.Error>
              </FormField.Container>

              <button
                type="submit"
                className="btn btn-accent text-white"
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
