import React from "react";
import { Devs } from "../../components/Devs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Link } from "../../components/Link";
import { LinkAtual } from "../../components/LinkAtual";
import { Logo } from "../../components/Logo";
import { Mais } from "../../components/Mais";
import { Ramos } from "../../components/Ramos";
import { Sobre } from "../../components/Sobre";

export const PginaHomeTema = () => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div
        className="bg-cores-fundo w-[1512px] h-[6394px] relative"
        data-cores-mode="tema-escuro"
        data-responsividade-mode="desktop"
      >
        <Header background="normal" className="!h-[880px] !absolute !left-0 !bg-transparent !top-[102px]" />
        <Sobre className="!absolute !left-0 !top-[984px]" focus="off" />
        <Ramos className="!absolute !left-0 !top-[1966px]" focus="on" screen="desktop" />
        <Mais
          className="!absolute !left-0 !top-[3942px]"
          coverCover="/img/cover-14.svg"
          coverCover1="/img/cover-16.svg"
          coverImg="/img/cover-15.svg"
          direO="horizontal"
        />
        <Devs
          className="!absolute !left-0 !top-[4938px]"
          coverCover="/img/cover-17.svg"
          coverImg="/img/cover-18.svg"
          direO="horizontal"
        />
        <Footer className="!absolute !left-0 !top-[5934px]" />
        <div
          className="flex w-[var(--navbar-width-breakpoint)] items-center justify-between p-8 fixed top-0 left-0 bg-cores-fundo"
          data-navbar-mode="desktop"
        >
          <Logo />
          <div className="inline-flex items-center justify-end gap-8 relative flex-[0_0_auto]">
            <div className="[display:var(--navbar-show-links,inline-flex)] items-center justify-center gap-4 px-0 py-3 relative flex-[0_0_auto] shadow-[0px_4px_4px_#00000040]">
              <LinkAtual
                className="!gap-[unset] !justify-center !flex-[0_0_auto] !px-3 !py-0 !inline-flex"
                line="/img/line-1.svg"
                lineClassName="!h-[1.25px] !mb-[unset]"
                linkClassName="!mr-[unset] !ml-[unset]"
                normal="default"
                text="HOME"
              />
              <Link className="!flex-[0_0_auto] !inline-flex !w-[unset]" padrO="default" text="IMOVÉIS" />
              <Link className="!flex-[0_0_auto] !inline-flex !w-[unset]" padrO="default" text="CONSULTORIA" />
              <Link className="!flex-[0_0_auto] !inline-flex !w-[unset]" padrO="default" text="E-COMMERCE" />
              <Link className="!flex-[0_0_auto] !inline-flex !w-[unset]" padrO="default" text="E-BOOKS" />
            </div>
            <img
              className="relative w-14 h-[70px] mb-[-11185.50px] mr-[-13941.00px]"
              alt="Material symbols"
              src="/img/icon-19.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
