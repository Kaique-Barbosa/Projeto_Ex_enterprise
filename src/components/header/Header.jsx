"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import { appNavigation } from "@/app/links";
import MenuMobile from "../drawner/MenuMobile";
import ThemeButton from "../themeButton/ThemeButton";
import NavLinks from "../navLinks/NavLinks";

export const Header = () => {

  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("shadow-neutro");
      } else {
        header.classList.remove("shadow-neutro");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header
      className="flex items-center justify-center w-full font-bold fixed top-0 z-50 transition-all duration-300 bg-gradient-to-l from-branco dark:from-preto_primario from-50% to-[#FBFAFA] dark:to-preto_secondario"
      ref={headerRef}
    >
      <div className="w-full max-w-8xl flex items-center px-8 py-2 justify-between">
        <Image
          priority
          src={logo}
          alt="Logo Da empresa"
          className="h-16 w-16"
        />
        <div className="flex gap-8 items-center">
          <nav className="hidden md:flex items-center gap-2 justify-center">
            {appNavigation.map((link) => (
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
