"use client";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import imagem from "@/public/img/livroImg.jpg";
import Download from "@/icons/Download/Download";
import ButtonWithIcon from "@/components/buttonWithIcon/ButtonWithIcon";

export default function cardModel5() {
  return (
    <div className="w-80 md:w-full h-fit md:h-[30em] flex flex-col md:flex-row  justify-between items-center ">
      <Image
        src={imagem}
        className="w-80 h-[30em] rounded-xl"
        alt="Capa de ebook"
      />
      {/* <Image src={imagem} className='w-64' alt='capa dos ebooks' /> */}

      <div className="w-full h-full flex flex-col gap-3 p-6">
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
