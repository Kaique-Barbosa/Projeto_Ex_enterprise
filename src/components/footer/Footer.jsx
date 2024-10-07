import React from "react";
import { Facebook1 } from "@/icons/Facebook1/Facebook1";
import { Instagram1 } from "@/icons/Instagram1/Instagram1";
import { Linkedin1 } from "@/icons/Linkedin1/Linkedin1";
import { IconWhatsapp } from "@/icons/IconWhatsapp/IconWhatsapp";
import Link from "next/link";

export const Footer = () => {
  return (
    <div
      className="flex flex-col w-full   items-center justify-center gap-8 px-4 py-8 relative"
      data-cores-mode="tema-escuro"
    >
      <div className="flex flex-col min-w-80 items-center justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Work_Sans-Light',Helvetica] font-light text-[#eb7500] text-[56px] tracking-[-1.12px] leading-[84px] whitespace-nowrap">
            Contato
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex-1 mt-[-1.00px] font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-normal-light-font-size)] text-center tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]">
            Nossos canais de atendimento e contato para resolução de duvidas
          </p>
        </div>
      </div>
      <div className="flex flex-wrap min-w-80 items-center justify-center gap-[16px_16px] p-4 relative self-stretch w-full flex-[0_0_auto]">
        <Link href={"/"} className="flex w-64 items-center justify-center gap-4 px-4 py-3 relative rounded-[99px] overflow-hidden">
          <IconWhatsapp className="!relative !flex-[0_0_auto]" />
          <div className="relative w-fit font-fontes-fonte-m-dia-regular-uppercase font-[number:var(--fontes-fonte-m-dia-regular-uppercase-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-m-dia-regular-uppercase-font-size)] tracking-[var(--fontes-fonte-m-dia-regular-uppercase-letter-spacing)] leading-[var(--fontes-fonte-m-dia-regular-uppercase-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-m-dia-regular-uppercase-font-style)]">
            WHATSAPP
          </div>
        </Link>

        <Link href={"/"} className="flex w-64 items-center justify-center gap-4 px-4 py-3 relative rounded-[99px] overflow-hidden">
          <Facebook1 className="!relative !flex-[0_0_auto]" />
          <div className="relative w-fit font-fontes-fonte-m-dia-regular-uppercase font-[number:var(--fontes-fonte-m-dia-regular-uppercase-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-m-dia-regular-uppercase-font-size)] tracking-[var(--fontes-fonte-m-dia-regular-uppercase-letter-spacing)] leading-[var(--fontes-fonte-m-dia-regular-uppercase-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-m-dia-regular-uppercase-font-style)]">
            FACEBOOK
          </div>
        </Link>

        <Link href={"/"} className="flex w-64 items-center justify-center gap-4 px-4 py-3 relative rounded-[99px] overflow-hidden">
          <Instagram1 className="!relative !flex-[0_0_auto]" />
          <div className="relative w-fit font-fontes-fonte-m-dia-regular-uppercase font-[number:var(--fontes-fonte-m-dia-regular-uppercase-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-m-dia-regular-uppercase-font-size)] tracking-[var(--fontes-fonte-m-dia-regular-uppercase-letter-spacing)] leading-[var(--fontes-fonte-m-dia-regular-uppercase-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-m-dia-regular-uppercase-font-style)]">
            INSTRAGRAM
          </div>
        </Link>

        <Link href={"/"} className="flex w-64 items-center justify-center gap-4 px-4 py-3 relative rounded-[99px] overflow-hidden">
          <Linkedin1 className="!relative !flex-[0_0_auto]" />
          <div className="relative w-fit font-fontes-fonte-m-dia-regular-uppercase font-[number:var(--fontes-fonte-m-dia-regular-uppercase-font-weight)] text-[#e3e4e6] text-[length:var(--fontes-fonte-m-dia-regular-uppercase-font-size)] tracking-[var(--fontes-fonte-m-dia-regular-uppercase-letter-spacing)] leading-[var(--fontes-fonte-m-dia-regular-uppercase-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-m-dia-regular-uppercase-font-style)]">
            LINKEDIN
          </div>
        </Link>
      </div>
    </div>
  );
};
