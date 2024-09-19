/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Facebook1 } from "../../icons/Facebook1";
import { IconBase3 } from "../../icons/IconBase3";
import { Instagram1 } from "../../icons/Instagram1";
import { Linkedin1 } from "../../icons/Linkedin1";

export const Footer = ({ className }) => {
  return (
    <div
      className={`flex-col w-[var(--responsividade-view-width)] h-[460px] items-center px-4 py-0 flex justify-center gap-2 relative ${className}`}
      data-responsividade-mode="desktop"
    >
      <div className="flex flex-col items-center gap-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-light text-cores-laranja text-[56px] text-center tracking-[-1.12px] leading-[84px]">
                Contato
              </div>
            </div>
            <p className="self-stretch text-cores-fonte relative font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[length:var(--fontes-fonte-normal-light-font-size)] text-center tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]">
              Nossos canais de atendimento e contato para resolução de duvidas
            </p>
          </div>
          <div className="flex items-start justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <IconBase3 className="!relative !flex-[0_0_auto]" color="#E3E4E6" />
            <Instagram1 className="!relative !flex-[0_0_auto]" />
            <Facebook1 className="!relative !flex-[0_0_auto]" color="#E3E4E6" />
            <Linkedin1 className="!relative !flex-[0_0_auto]" color="#E3E4E6" />
          </div>
        </div>
        <div className="items-start px-0 py-1 self-stretch w-full flex-[0_0_auto] flex justify-center gap-2 relative">
          <p className="flex-1 mt-[-1.00px] text-cores-laranja relative font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[length:var(--fontes-fonte-normal-light-font-size)] text-center tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]">
            Ex enterprise Copyright © 2024
          </p>
        </div>
      </div>
    </div>
  );
};
