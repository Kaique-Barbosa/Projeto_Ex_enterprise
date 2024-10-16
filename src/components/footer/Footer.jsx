import React from "react";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import { appNavigation, appSocialMedias } from "@/app/links";
import NavLinks from "@/components/navLinks/NavLinks";

export default function Footer() {
  return (
    <div className="w-full max-w-screen-2xl p-4 sm:p-8 lg-12 flex flex-col justify-center gap-6">
      <div className="flex flex-1 items-center justify-center gap-4">
        <Image src={logo} className="size-12" alt="logo" />
        <p className="font-semibold text-2xl">Ex Enterprise</p>
      </div>
      <div className="flex flex-col xs:flex-wrap xs:flex-row gap-4 items-center justify-center">
        {appNavigation.map((item, index) => (
          <NavLinks key={index} title={item.title} path={item.path} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-[1rem_2rem]">
        <p className="text-lg font-semibold text-laranja_light dark:text-laranja_dark">
          Siga Nós
        </p>

        <div className="flex gap-6">
          {appSocialMedias.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="size-6 hover:text-laranja_light dark:hover:text-laranja_dark"
            >
              {item.icon} 
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-laranja_light dark:text-laranja_dark">Ex enterprise Copyright © 2024</p>
    </div>
  );
}
