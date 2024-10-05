"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Substitui o useRouter por usePathname
import PropTypes from "prop-types";
import { WindowWidthContext } from "@/app/WindowWidthContext";

import MenuMobile from "../drawner/MenuMobile";
import ThemeButton from "../themeButton/ThemeButton";
export const Header = ({ logoLogo }) => {
  const currentRoute = usePathname(); // Obtém o caminho da URL atual

  const larguraDaTela = useContext(WindowWidthContext);
  console.log(larguraDaTela);

  return (
    <div
      className="flex items-center  justify-center w-full"
      data-navbar-mode={larguraDaTela}
    >
      <div className="w-full max-w-[1440px] flex items-center px-8 py-2 justify-between">
        {/* <Link href={"/"} alt={"logo Da Empresa/ Home Page"}> */}
        <Image
          priority
          src={logoLogo}
          alt="Logo Da empresa"
          className="h-16 w-16"
        />
        <div className="flex gap-8 items-center">
          <nav className="hidden md:flex items-center gap-2 justify-center text-cores-fonte">
            <div>
              <Link
                aria-disabled={currentRoute === "/"}
                href={"/"}
                className={` py-2 px-2 rounded-sm  ${
                  currentRoute === "/" ? "text-laranja" : "hover:text-branco hover:bg-laranja"
                }`}
              >
                HOME
              </Link>
            </div>
            <div>
              <Link
                aria-disabled={currentRoute === "/imoveis"}
                href={"/imoveis"}
                className={`py-2 px-2 rounded-sm ${
                  currentRoute === "/imoveis" ? "text-laranja" : "hover:text-branco hover:bg-laranja"
                }`}
              >
                IMÓVEIS
              </Link>
            </div>
            <div>
              <Link
                aria-disabled={currentRoute === "/consultoria"}
                href={"/consultoria"}
                className={`py-2 px-2 rounded-sm ${
                  currentRoute === "/consultoria" ? "text-laranja" : "hover:text-branco hover:bg-laranja"
                }`}
              >
                CONSULTORIA
              </Link>
            </div>
            <div>
              <Link
                aria-disabled={currentRoute === "/e-commerce"}
                href={"/e-commerce"}
                className={`py-2 px-2 rounded-sm  ${
                  currentRoute === "/e-commerce" ? "text-laranja" : "hover:text-branco hover:bg-laranja"
                }`}
              >
                E-COMMERCE
              </Link>
            </div>
            <div>
              <Link
                aria-disabled={currentRoute === "/ebooks"}
                href={"/ebooks"}
                className={`py-2 px-2 rounded-sm  ${
                  currentRoute === "/ebooks" ? "text-laranja" : "hover:text-branco hover:bg-laranja"
                }`}
              >
                E-BOOKS
              </Link>
            </div>
          </nav>
          <ThemeButton />
          <div className="block md:hidden">
            <MenuMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  logoLogo: PropTypes.string,
};
