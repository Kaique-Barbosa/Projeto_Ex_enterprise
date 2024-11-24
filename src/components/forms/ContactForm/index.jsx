"use client";

import React from "react";
import FormField from "@/components/forms/FormField";
import RadioButton from "@/components/forms/RadioButton";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-center text-2xl">
        Qual servico quer entrar em contato?
      </h2>

      <div className="w-full max-w-3xl flex justify-center">
        <form action="#" className="w-full flex flex-col gap-6">
          <div className="w-full flex justify-center gap-4">
            <RadioButton />

            <label
              htmlFor="Option2"
              className="p-3 rounded-lg border-2 border-accent text-white font-semibold hover:bg-accent has-[:checked]:bg-accent has-[:checked]:text-white cursor-pointer"
              tabIndex="0"
            >
              <input
                className="sr-only"
                id="Option2"
                type="radio"
                tabIndex="-1"
                name="servico"
              />

              <span className="text-sm"> Alocação de imóveis</span>
            </label>
            <label
              htmlFor="Option3"
              className="p-3 rounded-lg border-2 border-accent text-white font-semibold hover:bg-accent has-[:checked]:bg-accent has-[:checked]:text-white cursor-pointer"
              tabIndex="0"
            >
              <input
                className="sr-only"
                id="Option3"
                type="radio"
                tabIndex="-1"
                name="servico"
              />

              <span className="text-sm"> E-commerce </span>
            </label>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <FormField.Container className="flex-1">
              <FormField.Label htmlFor="name" text="Nome" />
              <FormField.Input
                id="name"
                type="text"
                name="nome"
                placeholder="Nome completo"
                required={true}
              />
            </FormField.Container>

            <div className="flex flex-wrap gap-y-2 gap-x-4">
              <FormField.Container className="grow basis-80">
                <FormField.Label htmlFor="email" text="Email" />
                <FormField.Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                />
              </FormField.Container>
              <FormField.Container className="grow basis-80">
                <FormField.Label htmlFor="phone" text="Telefone" />
                <FormField.Input
                  id="phone"
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  required={true}
                />
              </FormField.Container>
            </div>

            <FormField.Container className="flex-1">
              <FormField.Label htmlFor="message" text="Mensagem" />
              <FormField.Textarea
                id="message"
                name="mensagem"
                placeholder="Mensagem"
                required={true}
                className="h-32"
              />
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
