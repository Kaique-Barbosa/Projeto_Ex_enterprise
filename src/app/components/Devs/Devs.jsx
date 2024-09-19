/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { ButtonGrandeFalse } from "../ButtonGrandeFalse";
import { Cover } from "../Cover";

import imgCover from '@/app/static/img/cover.svg';

export const Devs = ({ direO, className, coverCover = "/img/cover-2.svg", coverImg = "/img/cover-3.svg" }) => {
  return (
    <div
      className={`w-[var(--responsividade-view-width)] flex flex-wrap gap-[8px_8px] p-8 justify-center relative ${
        direO === "horizontal" ? "items-center" : "items-start"
      } ${className}`}
      data-cores-mode={direO === "horizontal" ? "tema-escuro" : undefined}
      data-responsividade-mode="desktop"
    >
      <div
        className={`flex grow flex-1 justify-center relative ${direO === "horizontal" ? "content-between" : ""} ${
          direO === "horizontal" ? "flex-wrap" : ""
        } ${direO === "vertical" ? "flex-col" : ""} ${direO === "horizontal" ? "items-center" : "items-start"} ${
          direO === "vertical" ? "gap-8" : ""
        } ${direO === "horizontal" ? "h-[932px]" : ""}`}
      >
        <div
          className={`flex items-center relative ${direO === "vertical" ? "w-full" : ""} ${
            direO === "vertical" ? "flex-wrap" : ""
          } ${direO === "vertical" ? "self-stretch" : ""} ${direO === "horizontal" ? "flex-col" : ""} ${
            direO === "horizontal" ? "grow" : ""
          } ${direO === "horizontal" ? "gap-8" : "gap-[32px_32px]"} ${
            direO === "horizontal" ? "flex-1" : "flex-[0_0_auto]"
          } ${direO === "horizontal" ? "p-8" : "p-4"} ${direO === "horizontal" ? "justify-center" : "justify-end"}`}
        >
          {direO === "vertical" && (
            <div className="flex flex-wrap items-center justify-end gap-[32px_32px] relative flex-1 grow">
              <Cover
                className="!h-[374px] !flex-1 !relative !left-[unset] !grow !min-w-[300px] !w-[unset] !top-[unset]"
                cover={imgCover}
              />
              <Cover
                className="!h-[375px] !flex-1 !relative !left-[unset] !grow !min-w-[300px] !w-[unset] !top-[unset]"
                cover="/img/cover-1.svg"
              />
            </div>
          )}

          {direO === "horizontal" && (
            <>
              <div className="flex flex-col items-center justify-center gap-4 px-0 py-8 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-semibold text-cores-fonte text-2xl text-center tracking-[1.44px] leading-[normal]">
                  DESENVOLVEDORES RESPONSÁVEIS
                </div>
                <p className="relative self-stretch [font-family:'Work_Sans',Helvetica] font-normal text-transparent text-xl text-center tracking-[1.20px] leading-8">
                  <span className="font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[#eb7500] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] font-fontes-fonte-normal-light [font-style:var(--fontes-fonte-normal-light-font-style)] leading-[var(--fontes-fonte-normal-light-line-height)] text-[length:var(--fontes-fonte-normal-light-font-size)]">
                    Conheça a
                  </span>
                  <span className="font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[#f8a833] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] font-fontes-fonte-normal-light [font-style:var(--fontes-fonte-normal-light-font-style)] leading-[var(--fontes-fonte-normal-light-line-height)] text-[length:var(--fontes-fonte-normal-light-font-size)]">
                    &nbsp;
                  </span>
                  <span className="font-[number:var(--fontes-fonte-normal-bold-font-weight)] text-[#e3e4e6] tracking-[var(--fontes-fonte-normal-bold-letter-spacing)] font-fontes-fonte-normal-bold [font-style:var(--fontes-fonte-normal-bold-font-style)] leading-[var(--fontes-fonte-normal-bold-line-height)] text-[length:var(--fontes-fonte-normal-bold-font-size)]">
                    equipe de desenvolvedores
                  </span>
                  <span className="font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[#f8a833] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] font-fontes-fonte-normal-light [font-style:var(--fontes-fonte-normal-light-font-style)] leading-[var(--fontes-fonte-normal-light-line-height)] text-[length:var(--fontes-fonte-normal-light-font-size)]">
                    &nbsp;
                  </span>
                  <span className="font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[#eb7500] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] font-fontes-fonte-normal-light [font-style:var(--fontes-fonte-normal-light-font-style)] leading-[var(--fontes-fonte-normal-light-line-height)] text-[length:var(--fontes-fonte-normal-light-font-size)]">
                    responsáveis pelo sistema da empresa
                  </span>
                </p>
              </div>
              <ButtonGrandeFalse className="!flex-[0_0_auto]" icon21StyleOverrideClassName="!relative !w-5 !h-5" />
            </>
          )}
        </div>
        <div
          className={`flex items-center relative ${direO === "horizontal" ? "content-between" : ""} ${
            direO === "vertical" ? "w-full" : ""
          } ${direO === "vertical" ? "self-stretch" : ""} ${direO === "horizontal" ? "flex-wrap" : ""} ${
            direO === "vertical" ? "flex-col" : ""
          } ${direO === "horizontal" ? "min-w-[300px]" : ""} ${direO === "horizontal" ? "grow" : ""} ${
            direO === "vertical" ? "gap-4" : ""
          } ${direO === "horizontal" ? "flex-1" : "flex-[0_0_auto]"} ${direO === "horizontal" ? "h-[848px]" : ""} ${
            direO === "horizontal" ? "justify-end" : "justify-center"
          }`}
        >
          {direO === "vertical" && (
            <>
              <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-semibold text-cores-fonte text-2xl text-center tracking-[1.44px] leading-[normal]">
                  DESENVOLVEDORES RESPONSÁVEIS
                </div>
                <p className="relative self-stretch [font-family:'Work_Sans',Helvetica] font-normal text-transparent text-xl text-center tracking-[1.20px] leading-8">
                  <span className="font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[#eb7500] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] font-fontes-fonte-normal-light [font-style:var(--fontes-fonte-normal-light-font-style)] leading-[var(--fontes-fonte-normal-light-line-height)] text-[length:var(--fontes-fonte-normal-light-font-size)]">
                    Conheça a
                  </span>
                  <span className="font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[#f8a833] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] font-fontes-fonte-normal-light [font-style:var(--fontes-fonte-normal-light-font-style)] leading-[var(--fontes-fonte-normal-light-line-height)] text-[length:var(--fontes-fonte-normal-light-font-size)]">
                    &nbsp;
                  </span>
                  <span className="font-[number:var(--fontes-fonte-normal-bold-font-weight)] text-[#e3e4e6] tracking-[var(--fontes-fonte-normal-bold-letter-spacing)] font-fontes-fonte-normal-bold [font-style:var(--fontes-fonte-normal-bold-font-style)] leading-[var(--fontes-fonte-normal-bold-line-height)] text-[length:var(--fontes-fonte-normal-bold-font-size)]">
                    equipe de desenvolvedores
                  </span>
                  <span className="font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[#f8a833] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] font-fontes-fonte-normal-light [font-style:var(--fontes-fonte-normal-light-font-style)] leading-[var(--fontes-fonte-normal-light-line-height)] text-[length:var(--fontes-fonte-normal-light-font-size)]">
                    &nbsp;
                  </span>
                  <span className="font-[number:var(--fontes-fonte-normal-light-font-weight)] text-[#eb7500] tracking-[var(--fontes-fonte-normal-light-letter-spacing)] font-fontes-fonte-normal-light [font-style:var(--fontes-fonte-normal-light-font-style)] leading-[var(--fontes-fonte-normal-light-line-height)] text-[length:var(--fontes-fonte-normal-light-font-size)]">
                    responsáveis pelo sistema da empresa
                  </span>
                </p>
              </div>
              <Button className="!flex-[0_0_auto]" expand={false} icon21StyleOverrideClassName="!relative !w-5 !h-5" />
            </>
          )}

          {direO === "horizontal" && (
            <div className="flex flex-col h-[848px] items-end justify-center gap-8 relative flex-1 grow">
              <Cover
                className="!self-stretch !h-[374px] !relative !left-[unset] !w-full !top-[unset]"
                cover={coverCover}
              />
              <Cover
                className="!self-stretch !h-[375px] !relative !left-[unset] !w-full !top-[unset]"
                cover={coverImg}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Devs.propTypes = {
  direO: PropTypes.oneOf(["vertical", "horizontal"]),
  coverCover: PropTypes.string,
  coverImg: PropTypes.string,
};
