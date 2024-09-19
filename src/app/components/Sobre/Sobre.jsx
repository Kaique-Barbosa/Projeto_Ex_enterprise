/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Sobre = ({ focus, className }) => {
  return (
    <div
      className={`flex flex-col w-[var(--responsividade-view-width)] h-[var(--responsividade-view-height)] items-center justify-center px-8 py-0 relative ${className}`}
      data-responsividade-mode="desktop"
    >
      <div className="flex flex-col items-center gap-8 px-0 py-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex-1 mt-[-1.00px] font-h2-bold font-[number:var(--h2-bold-font-weight)] text-cores-fonte text-[length:var(--h2-bold-font-size)] text-center tracking-[var(--h2-bold-letter-spacing)] leading-[var(--h2-bold-line-height)] [font-style:var(--h2-bold-font-style)]">
            Conheça um pouco sobre a empresa
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[72px] px-0 py-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex-1 self-stretch mt-[-1.00px] font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-cores-fonte text-[length:var(--fontes-fonte-normal-light-font-size)] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]">
              Empresa multifacetada que oferece consultoria especializada em tecnologia da informação, um e-commerce
              robusto para venda de produtos de informática e serviços de locação de imóveis.&nbsp;&nbsp;Com uma equipe
              altamente qualificada e um representante palestrante renomado no setor de TI, nos destacamos pela nossa
              capacidade de entregar soluções inovadoras e personalizadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Sobre.propTypes = {
  focus: PropTypes.oneOf(["off"]),
};
