"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Substitui o useRouter por usePathname
import PropTypes from "prop-types";
import { WindowWidthContext } from "@/app/WindowWidthContext";

import MenuMobile from "../drawner/MenuMobile";
export const Header = ({ logoLogo }) => {
  const currentRoute = usePathname(); // Obtém o caminho da URL atual

  const larguraDaTela = useContext(WindowWidthContext);
  console.log(larguraDaTela);

  return (
    <div
      className="flex items-center  justify-center w-full"
      data-navbar-mode={larguraDaTela}
    >
      <div className="bg[--cores-container-fundo] w-full max-w-[1440px] flex items-center px-8 py-2 justify-between">
        {/* <Link href={"/"} alt={"logo Da Empresa/ Home Page"}> */}
        <Image
          priority
          src={logoLogo}
          alt="Logo Da empresa"
          width={64}
          height={64}
          className="h-auto w-auto"
        />

        <nav className="hidden md:flex items-center gap-6 justify-center text-cores-fonte">
          <div>
            <Link
              href={"/"}
              className={` hover:text-cores-laranja  ${
                currentRoute === "/" ? "text-cores-laranja" : ""
              }`}
            >
              HOME
            </Link>
          </div>
          <div>
            <Link
              href={"/imoveis"}
              className={`hover:text-cores-laranja  ${
                currentRoute === "/imoveis" ? "text-cores-laranja" : ""
              }`}
            >
              IMÓVEIS
            </Link>
          </div>
          <div>
            <Link
              href={"/consultoria"}
              className={`hover:text-cores-laranja ${
                currentRoute === "/consultoria" ? "text-cores-laranja" : ""
              }`}
            >
              CONSULTORIA
            </Link>
          </div>
          <div>
            <Link
              href={"/e-commerce"}
              className={`hover:text-cores-laranja  ${
                currentRoute === "/e-commerce" ? "text-cores-laranja" : ""
              }`}
            >
              E-COMMERCE
            </Link>
          </div>
          <div>
            <Link
              href={"/ebooks"}
              className={`hover:text-cores-laranja  ${
                currentRoute === "/ebooks" ? "text-cores-laranja" : ""
              }`}
            >
              E-BOOKS
            </Link>
          </div>
        </nav>
        <div className="block md:hidden">
          <MenuMobile />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  logoLogo: PropTypes.string,
};
