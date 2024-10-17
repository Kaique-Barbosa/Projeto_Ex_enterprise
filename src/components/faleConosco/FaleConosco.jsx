import React from "react";
import BotaoLinks from "@/components/botaoLinks/BotaoLinks";

const FaleConosco = () => {
  return (
    <section className="container flex gap-4 flex-col max-w-9xl items-center justify-center my-12">
      <h2 className="font-semibold text-center text-laranja_light dark:text-laranja_dark text-5xl">
        Fale Conosco
      </h2>

      <div className="flex flex-col text-center md:flex-row md:text-start w-full max-w-5xl items-center justify-between py-4 gap-6">
        <div className="flex-1">
          <p className="font-medium text-balance">
            Quer conversar com os noosos consultores?
            <br />
            Quer conhecer mais sobre os nossos servicos?
            <br />
            Ainda têm mais duvidas sobre a nossa consultoria?
            <br />
            Entre em contato pelo nosso formulário de contato.
          </p>
        </div>

        <BotaoLinks
          href="/"
          texto="Entre em contato"
          alt={"botão para página de contato"}
        />
      </div>
    </section>
  );
};

export default FaleConosco;
