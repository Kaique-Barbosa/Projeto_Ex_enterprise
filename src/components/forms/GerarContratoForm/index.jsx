import React, { useEffect } from "react";
import FormField from "../FormField";
import SubmitButton from "@/components/Buttons/SubmitButton";
import { Controller, Form, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const schema = yup.object().shape({
  nomeCompleto: yup.string().required("Campo obrigatório"),
  estadoCivil: yup.string().required("Campo obrigatório"),
  profissao: yup.string().required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  rg: yup.string().required("Campo obrigatório"),
  cep: yup
    .string()
    .max(9, "CEP Inválido")
    .required("Campo obrigatório")
    .matches(/^\d{5}-?\d{3}$/, "CEP Inválido"),
  logradouro: yup.string().required("Campo obrigatório"),
  numero: yup.number().required("Campo obrigatório"),
  bairro: yup.string().required("Campo obrigatório"),
  cidade: yup.string().required("Campo obrigatório"),
});

export default function GerarContratoForm({ userCompleteName, imovelCod }) {
  const {
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nomeCompleto: userCompleteName || "",
      estadoCivil: "",
      profissao: "",
      cpf: "",
      rg: "",
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      imovelCodigo: imovelCod || "",
    },
  });

  const cep = watch("cep");
  const controller = new AbortController();

  useEffect(() => {
    async function buscarEnderecoPorCep() {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`,
          {
            signal: controller.signal,
          }
        );

        const data = response.data;

        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
      } catch (error) {
        console.error("Erro:", error);
        setError("cep", {
          type: "manual",
          message: "CEP inválido",
        });
        clearErrors("cep");
      }
    }

    if (cep.length === 8) {
      buscarEnderecoPorCep();
    }

    return () => {
      controller.abort();
    };
  }, [cep]);

  const enviarDadosParaLocacao = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-full flex flex-col gap-8"
      onSubmit={handleSubmit(enviarDadosParaLocacao)}
    >
      <fieldset className="flex flex-wrap gap-x-6 gap-y-4">
        <legend className="text-xl font-semibold mb-4 text-accent">
          Dados Pessoais do Locador
        </legend>
        <FormField.Container className="grow basis-80">
          <FormField.Label>Nome completo</FormField.Label>
          <Controller
            name="nomeCompleto"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="Digite Seu Nome Completo"
                tabindex={0}
                {...field}
              />
            )}
          />
          <FormField.Error>{errors.nomeCompleto?.message}</FormField.Error>
        </FormField.Container>
        <FormField.Container className="grow basis-80">
          <FormField.Label>Estado Civil</FormField.Label>
          <Controller
            name="estadoCivil"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="Digite seu estado civil"
                tabindex={0}
                {...field}
              />
            )}
          />
          <FormField.Error>{errors.estadoCivil?.message}</FormField.Error>
        </FormField.Container>
        <FormField.Container className="grow basis-80">
          <FormField.Label>Profissão</FormField.Label>
          <Controller
            name="profissao"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="Digite sua profissão"
                tabindex={0}
                {...field}
              />
            )}
          />
          <FormField.Error>{errors.profissao?.message}</FormField.Error>
        </FormField.Container>

        <FormField.Container className="grow basis-80">
          <FormField.Label>CPF</FormField.Label>
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="Digite seu CPF"
                tabindex={0}
                {...field}
              />
            )}
          />
          <FormField.Error>{errors.cpf?.message}</FormField.Error>
        </FormField.Container>

        <FormField.Container className="grow basis-80">
          <FormField.Label>RG</FormField.Label>
          <Controller
            name="rg"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="Digite seu RG"
                tabindex={0}
                {...field}
              />
            )}
          />
        </FormField.Container>
      </fieldset>
      <fieldset className="flex flex-wrap gap-x-6 gap-y-4">
        <legend className="text-xl font-semibold mb-4 text-accent">
          Endereço do Locador
        </legend>
        <FormField.Container className="grow basis-96">
          <FormField.Label>CEP</FormField.Label>
          <Controller
            name="cep"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="CEP"
                tabindex={0}
                {...field}
              />
            )}
          />
          <FormField.Error>{errors.cep?.message}</FormField.Error>
        </FormField.Container>
        <FormField.Container className="grow basis-96">
          <FormField.Label>Logradouro</FormField.Label>
          <Controller
            name="logradouro"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="Logradouro"
                tabindex={0}
                {...field}
              />
            )}
          />
        </FormField.Container>
        <FormField.Container className="grow basis-96">
          <FormField.Label>Número</FormField.Label>
          <Controller
            name="numero"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="Número"
                tabindex={0}
                {...field}
              />
            )}
          />
        </FormField.Container>
        <FormField.Container className="grow basis-96">
          <FormField.Label>Bairro</FormField.Label>
          <Controller
            name="bairro"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="Bairro"
                tabindex={0}
                {...field}
              />
            )}
          />
        </FormField.Container>
        <FormField.Container className="grow basis-96">
          <FormField.Label>Cidade</FormField.Label>
          <Controller
            name="cidade"
            control={control}
            render={({ field }) => (
              <FormField.Input
                type="text"
                placeholder="Cidade"
                tabindex={0}
                {...field}
              />
            )}
          />
        </FormField.Container>

        <Controller
          name="imovelCodigo"
          control={control}
          render={({ field }) => <input type="hidden" {...field} />}
        />
      </fieldset>

      <SubmitButton
        loading={false}
        style="normal"
        color="accent"
        text="Enviar dados"
        className="w-full max-w-96 text-white self-center"
      />
    </form>
  );
}
