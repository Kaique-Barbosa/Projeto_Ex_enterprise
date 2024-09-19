/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonGrandeFalse } from "../ButtonGrandeFalse";
import { Cover } from "../Cover";

export const Mais = ({
  direO,
  className,
  coverCover = "/img/cover-5.svg",
  coverImg = "/img/cover-6.svg",
  coverCover1 = "/img/cover-7.svg",
}) => {
  return (
    <div
      className={`w-[var(--responsividade-view-width)] flex flex-col items-center justify-center relative ${
        ["horizontal", "vertical"].includes(direO) ? "gap-2" : ""
      } ${direO === "vertical" ? "p-8" : direO === "horizontal-mobile" ? "p-4" : "px-8 py-0"} ${
        direO === "horizontal" ? "h-[996px]" : ""
      } ${className}`}
      data-responsividade-mode={direO === "vertical" ? "desktop" : direO === "horizontal-mobile" ? "mobile" : undefined}
    >
      <div
        className={`w-full flex self-stretch items-center gap-12 justify-center relative ${
          ["horizontal-mobile", "vertical"].includes(direO) ? "flex-col" : ""
        } ${direO === "horizontal" ? "grow" : ""} ${direO === "horizontal" ? "flex-1" : "flex-[0_0_auto]"}`}
      >
        <div
          className={`items-center relative ${direO === "horizontal" ? "flex" : "inline-flex"} ${
            ["horizontal-mobile", "horizontal"].includes(direO) ? "flex-col" : ""
          } ${direO === "horizontal" ? "grow" : ""} ${direO === "horizontal-mobile" ? "gap-6" : "gap-4"} ${
            direO === "horizontal" ? "flex-1" : "flex-[0_0_auto]"
          } ${direO === "horizontal" ? "p-4" : ""} ${direO === "vertical" ? "justify-end" : "justify-center"}`}
        >
          {["horizontal-mobile", "vertical"].includes(direO) && (
            <Cover
              className={
                direO === "horizontal-mobile"
                  ? "!self-stretch !h-[300px] !relative !left-[unset] !w-full !top-[unset]"
                  : "!relative !left-[unset] !w-[379.5px] !top-[unset]"
              }
              cover={direO === "horizontal-mobile" ? "/img/cover-11.svg" : "/img/cover-8.svg"}
            />
          )}

          <div
            className={`flex flex-col justify-center relative ${
              direO === "horizontal-mobile" ? "w-[300px]" : direO === "horizontal" ? "w-full" : "w-[379.5px]"
            } ${["horizontal", "vertical"].includes(direO) ? "self-stretch" : ""} ${
              direO === "horizontal" ? "items-center" : "items-end"
            } ${direO === "horizontal" ? "gap-4" : "gap-8"} ${
              ["horizontal-mobile", "horizontal"].includes(direO) ? "flex-[0_0_auto]" : ""
            }`}
          >
            {["horizontal-mobile", "vertical"].includes(direO) && (
              <>
                <Cover
                  className={
                    direO === "horizontal-mobile"
                      ? "!self-stretch !h-[300px] !relative !left-[unset] !w-full !top-[unset]"
                      : "!self-stretch !h-[374px] !relative !left-[unset] !w-full !top-[unset]"
                  }
                  cover={direO === "horizontal-mobile" ? "/img/cover-12.svg" : "/img/cover-9.svg"}
                />
                <Cover
                  className={
                    direO === "horizontal-mobile"
                      ? "!self-stretch !h-[300px] !relative !left-[unset] !w-full !top-[unset]"
                      : "!h-[375px] !ml-[-0.50px] !relative !left-[unset] !w-[380px] !top-[unset]"
                  }
                  cover={direO === "horizontal-mobile" ? "/img/cover-13.svg" : "/img/cover-10.svg"}
                />
              </>
            )}

            {direO === "horizontal" && (
              <>
                <p className="relative w-fit mt-[-1.00px] font-heading-4-semibold font-[number:var(--heading-4-semibold-font-weight)] text-cores-fonte text-[length:var(--heading-4-semibold-font-size)] tracking-[var(--heading-4-semibold-letter-spacing)] leading-[var(--heading-4-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-4-semibold-font-style)]">
                  CONHEÇA MAIS SOBRE A EMPRESA
                </p>
                <p className="relative self-stretch [font-family:'Work_Sans',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-[48px]">
                  <span className="font-[number:var(--heading-3-light-font-weight)] text-[#eb7500] font-heading-3-light [font-style:var(--heading-3-light-font-style)] tracking-[var(--heading-3-light-letter-spacing)] leading-[var(--heading-3-light-line-height)] text-[length:var(--heading-3-light-font-size)]">
                    Nossa missão é oferecer
                  </span>
                  <span className="font-[number:var(--heading-3-semibold-font-weight)] text-[#e3e4e6] font-heading-3-semibold [font-style:var(--heading-3-semibold-font-style)] tracking-[var(--heading-3-semibold-letter-spacing)] leading-[var(--heading-3-semibold-line-height)] text-[length:var(--heading-3-semibold-font-size)]">
                    &nbsp;
                  </span>
                  <span className="font-[number:var(--heading-3-semibold-font-weight)] text-[#e3e4e6] font-heading-3-semibold [font-style:var(--heading-3-semibold-font-style)] tracking-[var(--heading-3-semibold-letter-spacing)] leading-[var(--heading-3-semibold-line-height)] text-[length:var(--heading-3-semibold-font-size)]">
                    soluções tecnológicas avançadas, produtos de informática de alta qualidade e serviços de locação de
                    imóveis excepcionais,
                  </span>
                  <span className="font-[number:var(--heading-3-semibold-font-weight)] text-[#e3e4e6] font-heading-3-semibold [font-style:var(--heading-3-semibold-font-style)] tracking-[var(--heading-3-semibold-letter-spacing)] leading-[var(--heading-3-semibold-line-height)] text-[length:var(--heading-3-semibold-font-size)]">
                    &nbsp;
                  </span>
                  <span className="font-[number:var(--heading-3-light-font-weight)] text-[#eb7500] font-heading-3-light [font-style:var(--heading-3-light-font-style)] tracking-[var(--heading-3-light-letter-spacing)] leading-[var(--heading-3-light-line-height)] text-[length:var(--heading-3-light-font-size)]">
                    sempre com foco na inovação, na satisfação do cliente e na criação de valor sustentável.
                  </span>
                </p>
              </>
            )}
          </div>
          {direO === "horizontal" && <ButtonGrandeFalse className="!flex-[0_0_auto]" />}
        </div>
        <div
          className={`flex self-stretch items-center gap-4 relative ${
            ["horizontal-mobile", "vertical"].includes(direO) ? "w-full" : ""
          } ${["horizontal-mobile", "vertical"].includes(direO) ? "flex-col" : ""} ${
            direO === "horizontal" ? "grow" : ""
          } ${direO === "horizontal" ? "flex-1" : "flex-[0_0_auto]"} ${
            direO === "horizontal" ? "justify-end" : "justify-center"
          }`}
        >
          {direO === "horizontal" && (
            <>
              <Cover className="!relative !left-[unset] !w-[342px] !top-[unset]" cover={coverCover} />
              <div className="flex flex-col w-[342px] items-end justify-center gap-8 relative self-stretch">
                <Cover
                  className="!self-stretch !h-[374px] !relative !left-[unset] !w-full !top-[unset]"
                  cover={coverImg}
                />
                <Cover
                  className="!self-stretch !h-[375px] !relative !left-[unset] !w-full !top-[unset]"
                  cover={coverCover1}
                />
              </div>
            </>
          )}

          {["horizontal-mobile", "vertical"].includes(direO) && (
            <>
              <div className="w-full flex self-stretch flex-col items-center gap-4 flex-[0_0_auto] p-4 justify-center relative">
                <p
                  className={`font-heading-4-semibold mt-[-1.00px] tracking-[var(--heading-4-semibold-letter-spacing)] text-[length:var(--heading-4-semibold-font-size)] [font-style:var(--heading-4-semibold-font-style)] text-cores-fonte font-[number:var(--heading-4-semibold-font-weight)] leading-[var(--heading-4-semibold-line-height)] relative ${
                    direO === "horizontal-mobile" ? "text-center" : ""
                  } ${direO === "vertical" ? "w-fit" : ""} ${direO === "horizontal-mobile" ? "self-stretch" : ""} ${
                    direO === "vertical" ? "whitespace-nowrap" : ""
                  }`}
                >
                  CONHEÇA MAIS SOBRE A EMPRESA
                </p>
                <p className="[font-family:'Work_Sans',Helvetica] self-stretch tracking-[0] text-[32px] text-transparent font-normal leading-[48px] relative">
                  <span className="font-heading-3-light [font-style:var(--heading-3-light-font-style)] tracking-[var(--heading-3-light-letter-spacing)] text-[length:var(--heading-3-light-font-size)] text-[#eb7500] font-[number:var(--heading-3-light-font-weight)] leading-[var(--heading-3-light-line-height)]">
                    Nossa missão é oferecer
                  </span>
                  <span className="font-heading-3-semibold [font-style:var(--heading-3-semibold-font-style)] tracking-[var(--heading-3-semibold-letter-spacing)] text-[length:var(--heading-3-semibold-font-size)] text-[#e3e4e6] font-[number:var(--heading-3-semibold-font-weight)] leading-[var(--heading-3-semibold-line-height)]">
                    &nbsp;
                  </span>
                  <span className="font-heading-3-semibold [font-style:var(--heading-3-semibold-font-style)] tracking-[var(--heading-3-semibold-letter-spacing)] text-[length:var(--heading-3-semibold-font-size)] text-[#e3e4e6] font-[number:var(--heading-3-semibold-font-weight)] leading-[var(--heading-3-semibold-line-height)]">
                    soluções tecnológicas avançadas, produtos de informática de alta qualidade e serviços de locação de
                    imóveis excepcionais,
                  </span>
                  <span className="font-heading-3-semibold [font-style:var(--heading-3-semibold-font-style)] tracking-[var(--heading-3-semibold-letter-spacing)] text-[length:var(--heading-3-semibold-font-size)] text-[#e3e4e6] font-[number:var(--heading-3-semibold-font-weight)] leading-[var(--heading-3-semibold-line-height)]">
                    &nbsp;
                  </span>
                  <span className="font-heading-3-light [font-style:var(--heading-3-light-font-style)] tracking-[var(--heading-3-light-letter-spacing)] text-[length:var(--heading-3-light-font-size)] text-[#eb7500] font-[number:var(--heading-3-light-font-weight)] leading-[var(--heading-3-light-line-height)]">
                    sempre com foco na inovação, na satisfação do cliente e na criação de valor sustentável.
                  </span>
                </p>
              </div>
              <ButtonGrandeFalse
                className="!flex-[0_0_auto]"
                icon21StyleOverrideClassName={direO === "horizontal-mobile" ? "!relative !w-4 !h-4" : undefined}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Mais.propTypes = {
  direO: PropTypes.oneOf(["vertical", "horizontal", "horizontal-mobile"]),
  coverCover: PropTypes.string,
  coverImg: PropTypes.string,
  coverCover1: PropTypes.string,
};
