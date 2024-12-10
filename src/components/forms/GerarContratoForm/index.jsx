import React, { useEffect } from "react";
import FormField from "../FormField";
import SubmitButton from "@/components/Buttons/SubmitButton";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  buscarEnderecoPorCep,
  formatCEP,
  formatCEPtoNumber,
} from "@/utils/cep";
import { validateCPF, formatCPF } from "@/utils/cpf";
import { formatRG, validateRG } from "@/utils/rg";
import Select from "../Select";

const schema = yup.object().shape({
  nomeCompleto: yup.string().required("Campo obrigatório"),
  estadoCivil: yup.string().required("Selecione uma opção"),
  profissao: yup.string().required("Campo obrigatório"),
  cpf: yup
    .string()
    .required("Campo obrigatório")
    .test("cpf", "CPF inválido", (value) => {
      return validateCPF(value);
    }), // Adicione a validação do CPF
  rg: yup
    .string()
    .required("Campo obrigatório")
    .test("rg", "RG inválido", (value) => {
      return validateRG(value);
    }),
  cep: yup
    .string()
    .matches(/^\d{5}-?\d{3}$/, "CEP inválido")
    .required("Campo obrigatório"),
  logradouro: yup.string().required("Campo obrigatório"),
  numero: yup.number().required("Campo obrigatório"),
  bairro: yup.string().required("Campo obrigatório"),
  cidade: yup.string().required("Campo obrigatório"),
});

export default function GerarContratoForm({ initialData }) {
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
      nomeCompleto: "",
      estadoCivil: "",
      profissao: "",
      cpf: "",
      rg: "",
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      imovelCodigo: "",
    },
  });

  const cep = watch("cep");

  useEffect(() => {
    const cepToSearch = formatCEPtoNumber(cep);

    async function setEndereco() {
      try {
        const data = await buscarEnderecoPorCep(cepToSearch);

        if (data.erro) {
          setError("cep", {
            type: "cep",
            message: "CEP não encontrado",
          });
          return;
        }

        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);

        clearErrors("cep");
      } catch (error) {
        setError("cep", {
          type: "cep",
          message: "CEP não encontrado",
        });
      }
    }

    if (cepToSearch.length === 8) {
      setEndereco();
    }
  }, [cep, setValue, setError, clearErrors]);

  useEffect(() => {
    if (initialData) {
      setValue("nomeCompleto", initialData.nomeCompleto);
      setValue("cpf", initialData.cpf);
      setValue("imovelCodigo", initialData.imovelCod);
    }
  }, [initialData, setValue]);

  const enviarDadosParaLocacao = (data) => {
    const dataLocador = {
      nomeLocador: data.nomeCompleto,
      estadoCivilLocador: data.estadoCivil + "(a)",
      profissaoLocador: data.profissao,
      cpfLocador: formatCPF(data.cpf),
      rgLocador: formatRG(data.rg),
      cepLocador: formatCEP(data.cep),
      logradouroLocador: data.logradouro,
      numeroLocador: data.numero,
      bairroLocador: data.bairro,
      cidadeLocador: data.cidade,
      codImovelParaLocacao: data.imovelCodigo,
    };

    console.log(dataLocador);
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
            defaultValue=""
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
              <Select {...field}>
                <option value="">Selecione</option>
                <option value="Solteiro">Solteiro(a)</option>
                <option value="Casado">Casado(a)</option>
                <option value="Divorciado">Divorciado(a)</option>
                <option value="Viuvo">Viúvo(a)</option>
              </Select>
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
                placeholder="Digite seu CPF (somente números)"
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
                placeholder="Digite seu RG (somente números)"
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
                type="number"
                placeholder="Número"
                tabindex={0}
                {...field}
              />
            )}
          />
          <FormField.Error>{errors.numero?.message}</FormField.Error>
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
