"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import { appNavigation } from "@/app/links";
import MenuMobile from "../drawner/MenuMobile";
import ThemeButton from "../themeButton/ThemeButton";
import NavLinks from "../navLinks/NavLinks";

export const Header = () => {
  
  return (
    <header
      className="flex items-center justify-center w-full font-bold"
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
