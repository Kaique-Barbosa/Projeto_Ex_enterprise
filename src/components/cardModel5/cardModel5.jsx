"use client";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import imagem from "@/public/img/livroImg.jpg";
import Download from "@/icons/Download/Download";
import ButtonWithIcon from "@/components/Buttons/ButtonWithIcon";

export default function cardModel5() {
  return (
    <div className="w-80 md:w-full h-fit md:h-96 flex flex-col md:flex-row  justify-between items-center bg-cinza-200_neutro bg-opacity-10 p-4 gap-6 rounded-xl backdrop-filter backdrop-blur-lg backdrop-saturate-150">
      <Image
        src={imagem}
        className="w-80 h-96 md:h-fit rounded-lg"
        alt="Capa de ebook"
      />
      <div className="w-full h-full flex flex-col gap-3">
        <div className="flex-1 self-stretch">
          <h3 className="mb-4">Nome do Ebook</h3>
          <p>
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <ButtonWithIcon
          icon={<Download css="size-4 text-inherit fill-current" />}
          texto="Download"
          css="self-center md:self-start"
        />
      </div>
    </div>
  );
}
