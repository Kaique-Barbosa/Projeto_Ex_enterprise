"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import FormField from "@/components/forms/FormField";
import * as yup from "yup";
import { Controller, set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import SubmitButton from "@/components/Buttons/SubmitButton";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  senha: yup.string().required("Campo obrigatório"),
});

function page() {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    api
      .post("/usuario/login", data, {
        timeout: 3000,
      })
      .then((response) => {
        toast({
          description: response.data.message,
          position: "top-center",
          status: "success",
          duration: 1400,
          isClosable: true,
        });

        setLoading(false);

        setTimeout(() => {
          router.back();
        }, 1500);
      })
      .catch((error) => {
        const { response } = error;
        toast({
          title: "Erro ao fazer login!",
          description: response.data.message,
          position: "top-center",
          status: "error",
          duration: 3000,
          isClosable: true,
        });

        setLoading(false);
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
                      tabIndex={2}
                      placeholder="Digite sua senha"
                    ></FormField.InputPassword>
                  )}
                />
                <FormField.Error>{errors.senha?.message}</FormField.Error>
              </FormField.Container>

              <SubmitButton
                text="Entrar"
                color="accent"
                style="normal"
                className="text-white hover:bg-accent/75 disabled:bg-accent/50"
                loading={loading}
              />
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
