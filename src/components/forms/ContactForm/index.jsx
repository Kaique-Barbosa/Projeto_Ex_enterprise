"use client";

import React from "react";
import FormField from "@/components/forms/FormField";
import RadioButton from "@/components/forms/RadioButton";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validarTelefone, formatarTelefoneParaNumeros } from "@/utils/telefone";

const schema = yup.object().shape({
  servico: yup.string().required("Selecione um serviço"),
  nome: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  telefone: yup
    .string()
    .transform(formatarTelefoneParaNumeros)
    .max(15, "Telefone inválido")
    .required("Telefone é obrigatório")
    .test("Numero de telefone válido", "Telefone inválido", (value) =>
      validarTelefone(value)
    ),
  assunto: yup.string().required("Digite um assunto"),
  mensagem: yup.string().required("Digite uma mensagem"),
});

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-center text-2xl">
        Qual servico quer entrar em contato?
      </h2>

      <div className="w-full max-w-3xl flex justify-center">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="w-full flex flex-col justify-center gap-4">
            <Controller
              name="servico"
              control={control}
              render={({ field }) => (
                <FormField.Container className="flex flex-col items-center xs:flex-row xs:justify-center gap-4">
                  <RadioButton
                    value="consultoria"
                    checked={field.value === "consultoria"}
                    label="Consultoria"
                    onChange={() => field.onChange("consultoria")}
                  />
                  <RadioButton
                    value="imoveis"
                    checked={field.value === "imoveis"}
                    label="Alocação de imóveis"
                    onChange={() => field.onChange("imoveis")}
                  />
                  <RadioButton
                    value="ecommerce"
                    checked={field.value === "ecommerce"}
                    label="E-commerce"
                    onChange={() => field.onChange("ecommerce")}
                  />
                </FormField.Container>
              )}
            />

            <FormField.Error className="text-center">
              {errors.servico?.message}
            </FormField.Error>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <div className="flex flex-wrap gap-y-2 gap-x-4">
              <FormField.Container className="grow basis-80">
                <FormField.Label>Nome</FormField.Label>
                <Controller
                  name="nome"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormField.Input
                      {...field}
                      type="text"
                      placeholder="Digite seu nome completo"
                    ></FormField.Input>
                  )}
                />
                <FormField.Error>{errors.nome?.message}</FormField.Error>
              </FormField.Container>
              <FormField.Container className="grow basis-80">
                <FormField.Label>E-mail</FormField.Label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormField.Input
                      {...field}
                      type="email"
                      placeholder="Digite seu email"
                    />
                  )}
                />
                <FormField.Error>{errors.email?.message}</FormField.Error>
              </FormField.Container>
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-4">
              <FormField.Container className="grow basis-80">
                <FormField.Label>Telefone</FormField.Label>
                <Controller
                  name="telefone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormField.Input
                      {...field}
                      type="tel"
                      placeholder="Digite seu telefone"
                    />
                  )}
                />
                <FormField.Error>{errors.telefone?.message}</FormField.Error>
              </FormField.Container>
              <FormField.Container className="grow basis-80">
                <FormField.Label>Assunto</FormField.Label>
                <Controller
                  name="assunto"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormField.Input
                      {...field}
                      type="text"
                      placeholder="Digite o assunto"
                    />
                  )}
                />
                <FormField.Error>{errors.assunto?.message}</FormField.Error>
              </FormField.Container>
            </div>

            <FormField.Container className="flex-1">
              <FormField.Label>Mensagem</FormField.Label>
              <Controller
                name="mensagem"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormField.Textarea {...field} className="h-40" />
                )}
              />
              <FormField.Error>{errors.mensagem?.message}</FormField.Error>
            </FormField.Container>
          </div>

          <button
            type="submit"
            className="w-32 self-center btn btn-accent text-white font-medium"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
