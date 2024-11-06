"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import { appNavigation } from "@/app/links";
import MenuMobile from "../drawner/MenuMobile";
import ThemeButton from "../themeButton/ThemeButton";
import NavLinks from "../navLinks/NavLinks";
import Link from "next/link";

const headerNavigation = appNavigation.filter(
  (link) => link.title !== "Contato"
);

export const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add(
          "shadow-neutro_sm",
          "backdrop-blur-sm",
          "backdrop-filter",
          "bg-branco_75%",
          "dark:bg-preto_75%"
        );
      } else {
        header.classList.remove(
          "shadow-neutro_sm",
          "backdrop-blur-sm",
          "backdrop-filter",
          "bg-branco_75%",
          "dark:bg-preto_75%"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="flex items-center justify-center w-full fixed top-0 z-50 transition-all duration-300"
      ref={headerRef}
    >
      <div className="w-full max-w-8xl flex items-center px-8 py-2 justify-between">
        <Link href={"/"} alt="Ir para home">
          <Image
            priority
            src={logo}
            alt="Logo Da empresa"
            className="h-16 w-16"
          />
        </Link>
        <div className="flex gap-8 items-center">
          <nav className="hidden md:flex items-center gap-2 justify-center">
            {headerNavigation.map((link) => (
              <NavLinks key={link.title} title={link.title} path={link.path} />
            ))}
          </nav>
          <ThemeButton />
          <div className="block md:hidden">
            <MenuMobile />
          </div>
        </div>
      </div>
    </header>
  );
};
