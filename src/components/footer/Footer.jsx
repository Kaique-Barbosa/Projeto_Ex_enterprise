import React from "react";
import { Facebook1 } from "@/icons/Facebook1/Facebook1";
import { Instagram1 } from "@/icons/Instagram1/Instagram1";
import { Linkedin1 } from "@/icons/Linkedin1/Linkedin1";
import { IconWhatsapp } from "@/icons/IconWhatsapp/IconWhatsapp";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl items-center justify-center gap-8 px-4 py-8 leading-tight tracking-wider">
      <div className="text-center">
        <h2 className="text-6xl text-laranja mb-4">Contato</h2>
        <p className="text-lg">
          Nossos canais de atendimento e contato para resolução de duvidas
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto]">
        <Link
          href={"/"}
          className="flex flex-1 max-w-48 items-center justify-center gap-4 px-4 py-3 hover:text-laranja"
        >
          <IconWhatsapp className="text-inherit fill-current" />
          WHATSAPP
        </Link>

        <Link
          href={"/"}
          className="flex flex-1 max-w-48 items-center justify-center gap-4 px-4 py-3 hover:text-laranja"
        >
          <Facebook1 className="text-inherit fill-current" />
          FACEBOOK
        </Link>

        <Link
          href={"/"}
          className="flex flex-1 max-w-48 items-center justify-center gap-4 px-4 py-3 hover:text-laranja"
        >
          <Instagram1 className="text-inherit fill-current" />
          INSTRAGRAM
        </Link>

        <Link
          href={"/"}
          className="flex flex-1 max-w-48 items-center justify-center gap-4 px-4 py-3 hover:text-laranja"
        >
          <Linkedin1 className="text-inherit fill-current" />
          LINKEDIN
        </Link>
      </div>
    </div>
  );
};
