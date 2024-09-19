/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon21 } from "../../icons/Icon21";
import { Button } from "../Button";

export const Ramos = ({ focus, screen, className }) => {
  return (
    <div
      className={`w-[var(--responsividade-view-width)] flex flex-col gap-12 relative ${
        screen === "mobile" ? "items-center" : "items-start"
      } ${screen === "mobile" ? "px-0 py-16" : "px-8 py-16"} ${className}`}
      data-cores-mode={screen === "desktop" ? "tema-escuro" : undefined}
      data-responsividade-mode={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
    >
      <div className="w-full flex self-stretch items-center gap-2.5 flex-[0_0_auto] justify-center relative">
        <p
          className={`font-h2-semi-bold mt-[-1.00px] tracking-[var(--h2-semi-bold-letter-spacing)] text-[length:var(--h2-semi-bold-font-size)] [font-style:var(--h2-semi-bold-font-style)] text-cores-fonte-p-gina relative font-[number:var(--h2-semi-bold-font-weight)] text-center leading-[var(--h2-semi-bold-line-height)] ${
            screen === "mobile" ? "w-[393px]" : "w-fit"
          } ${["desktop", "tablet"].includes(screen) ? "whitespace-nowrap" : ""}`}
        >
          Escolha um de nossos ramos
        </p>
      </div>
      <div
        className={`w-[var(--responsividade-width)] flex items-center relative ${
          screen === "mobile" ? "flex-col" : ""
        } ${screen === "mobile" ? "flex-[0_0_auto]" : ""} ${
          ["desktop", "tablet"].includes(screen) ? "h-[500px]" : ""
        } ${screen === "mobile" ? "rounded-2xl" : ""} ${
          ["desktop", "tablet"].includes(screen) ? "justify-center" : ""
        }`}
        data-responsividade-mode={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
      >
        <div
          className={`flex self-stretch rounded-2xl bg-cores-container-fundo relative ${
            screen === "mobile" ? "w-full" : "w-[var(--responsividade-width)]"
          } ${screen === "mobile" ? "flex-col" : ""} ${screen === "mobile" ? "items-start" : "items-center"} ${
            ["desktop", "tablet"].includes(screen) ? "grow" : ""
          } ${screen === "mobile" ? "flex-[0_0_auto]" : "flex-1"} ${
            ["desktop", "tablet"].includes(screen) ? "justify-between" : ""
          }`}
        >
          <img
            className={`self-stretch relative ${screen === "mobile" ? "w-full" : ""} ${
              screen === "mobile" ? "min-w-[350px]" : ""
            } ${["desktop", "tablet"].includes(screen) ? "grow" : ""} ${
              ["desktop", "tablet"].includes(screen) ? "flex-1" : ""
            } ${screen === "mobile" ? "h-[300px]" : ""}`}
            alt="Col"
            src={screen === "tablet" ? "/img/col-1-3.png" : screen === "mobile" ? "/img/col-1-6.png" : "/img/col-1.png"}
          />
          <div
            className={`flex self-stretch flex-col gap-8 p-8 justify-center relative ${
              screen === "mobile" ? "w-full" : ""
            } ${screen === "mobile" ? "items-center" : "items-start"} ${
              ["desktop", "tablet"].includes(screen) ? "grow" : ""
            } ${screen === "mobile" ? "flex-[0_0_auto]" : "flex-1"}`}
          >
            <div className="w-full flex self-stretch flex-col items-center gap-6 flex-[0_0_auto] relative">
              <div
                className={`w-full flex self-stretch flex-col gap-4 flex-[0_0_auto] relative ${
                  screen === "mobile" ? "items-center" : "items-start"
                } ${screen === "mobile" ? "justify-center" : ""}`}
              >
                <div
                  className={`[font-family:'Work_Sans',Helvetica] self-stretch mt-[-1.00px] tracking-[1.44px] text-2xl text-cores-fonte relative font-bold leading-[normal] ${
                    screen === "mobile" ? "text-center" : ""
                  }`}
                >
                  E-COMMERCE
                </div>
                <p
                  className={`font-fontes-fonte-m-dia-regular self-stretch [font-style:var(--fontes-fonte-m-dia-regular-font-style)] tracking-[var(--fontes-fonte-m-dia-regular-letter-spacing)] text-[length:var(--fontes-fonte-m-dia-regular-font-size)] text-cores-laranja font-[number:var(--fontes-fonte-m-dia-regular-font-weight)] leading-[var(--fontes-fonte-m-dia-regular-line-height)] relative ${
                    screen === "mobile" ? "text-center" : ""
                  }`}
                >
                  Conheça nossa variedade de produtos de informática e T.I
                </p>
              </div>
              <div
                className={`font-fontes-fonte-normal-light self-stretch tracking-[var(--fontes-fonte-normal-light-letter-spacing)] [font-style:var(--fontes-fonte-normal-light-font-style)] text-[length:var(--fontes-fonte-normal-light-font-size)] text-cores-fonte relative font-[number:var(--fontes-fonte-normal-light-font-weight)] leading-[var(--fontes-fonte-normal-light-line-height)] ${
                  screen === "mobile" ? "text-center" : ""
                }`}
              >
                Acesse abaixo
              </div>
            </div>
            {["desktop", "tablet"].includes(screen) && (
              <div className="border border-solid border-cores-laranja inline-flex items-center gap-2 flex-[0_0_auto] px-4 py-2 rounded-2xl justify-center relative">
                <div
                  className="font-fontes-fonte-normal-uppercase w-fit mt-[-1.00px] tracking-[var(--fontes-fonte-normal-uppercase-letter-spacing)] text-[length:var(--fontes-fonte-normal-uppercase-font-size)] [font-style:var(--fontes-fonte-normal-uppercase-font-style)] text-cores-fonte-p-gina font-[number:var(--fontes-fonte-normal-uppercase-font-weight)] leading-[var(--fontes-fonte-normal-uppercase-line-height)] whitespace-nowrap relative"
                  data-responsividade-mode="mobile"
                >
                  IR PARA A PÁGINA
                </div>
                <Icon21 className="!relative !w-4 !h-4" color="#E3E4E6" />
              </div>
            )}

            {screen === "mobile" && (
              <Button className="!flex-[0_0_auto]" expand={false} icon21StyleOverrideClassName="!relative !w-4 !h-4" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`w-[var(--responsividade-width)] flex items-center relative ${
          screen === "mobile" ? "flex-col" : ""
        } ${screen === "mobile" ? "flex-[0_0_auto]" : ""} ${
          ["desktop", "tablet"].includes(screen) ? "h-[500px]" : ""
        } ${screen === "mobile" ? "rounded-2xl" : ""} ${
          ["desktop", "tablet"].includes(screen) ? "justify-center" : ""
        }`}
        data-responsividade-mode={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
      >
        <div
          className={`flex self-stretch rounded-2xl bg-cores-container-fundo relative ${
            screen === "mobile" ? "w-full" : ""
          } ${screen === "mobile" ? "flex-col" : ""} ${screen === "mobile" ? "items-start" : "items-center"} ${
            ["desktop", "tablet"].includes(screen) ? "grow" : ""
          } ${screen === "mobile" ? "flex-[0_0_auto]" : "flex-1"} ${
            ["desktop", "tablet"].includes(screen) ? "justify-between" : ""
          }`}
        >
          {["desktop", "tablet"].includes(screen) && (
            <>
              <div className="flex self-stretch flex-col items-start grow gap-8 flex-1 p-8 justify-center relative">
                <div className="w-full flex self-stretch flex-col items-center gap-6 flex-[0_0_auto] relative">
                  <div className="w-full flex self-stretch flex-col items-start gap-4 flex-[0_0_auto] relative">
                    <div className="[font-family:'Work_Sans',Helvetica] self-stretch mt-[-1.00px] tracking-[1.44px] text-2xl text-cores-fonte font-bold leading-[normal] relative">
                      IMOVÉIS PARA ALOCAÇÃO
                    </div>
                    <p className="font-fontes-fonte-m-dia-regular self-stretch tracking-[var(--fontes-fonte-m-dia-regular-letter-spacing)] [font-style:var(--fontes-fonte-m-dia-regular-font-style)] text-[length:var(--fontes-fonte-m-dia-regular-font-size)] text-cores-laranja font-[number:var(--fontes-fonte-m-dia-regular-font-weight)] leading-[var(--fontes-fonte-m-dia-regular-line-height)] relative">
                      Escolha dentre os escritórios disponíveis para alocação
                    </p>
                  </div>
                  <div className="font-fontes-fonte-normal-light self-stretch tracking-[var(--fontes-fonte-normal-light-letter-spacing)] [font-style:var(--fontes-fonte-normal-light-font-style)] text-[length:var(--fontes-fonte-normal-light-font-size)] text-cores-fonte font-[number:var(--fontes-fonte-normal-light-font-weight)] leading-[var(--fontes-fonte-normal-light-line-height)] relative">
                    Acesse abaixo
                  </div>
                </div>
                <Button
                  className="!flex-[0_0_auto]"
                  expand={false}
                  icon21StyleOverrideClassName="!relative !w-4 !h-4"
                />
              </div>
              <img
                className="self-stretch grow flex-1 relative"
                alt="Col"
                src={screen === "tablet" ? "/img/col-1-4.png" : "/img/col-1-1.png"}
              />
            </>
          )}

          {screen === "mobile" && (
            <>
              <img className="relative self-stretch min-w-[350px] w-full h-[300px]" alt="Col" src="/img/col-1-7.png" />
              <div className="flex flex-col items-center justify-center gap-8 p-8 relative self-stretch w-full flex-[0_0_auto]">
                <div className="items-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-bold text-cores-fonte text-2xl text-center tracking-[1.44px] leading-[normal]">
                      IMOVÉIS PARA ALOCAÇÃO
                    </div>
                    <p className="text-cores-laranja leading-[var(--fontes-fonte-m-dia-regular-line-height)] relative self-stretch font-fontes-fonte-m-dia-regular font-[number:var(--fontes-fonte-m-dia-regular-font-weight)] text-[length:var(--fontes-fonte-m-dia-regular-font-size)] text-center tracking-[var(--fontes-fonte-m-dia-regular-letter-spacing)] [font-style:var(--fontes-fonte-m-dia-regular-font-style)]">
                      Escolha dentre os escritórios disponíveis para alocação
                    </p>
                  </div>
                  <div className="relative self-stretch font-fontes-fonte-normal-light font-[number:var(--fontes-fonte-normal-light-font-weight)] text-cores-fonte text-[length:var(--fontes-fonte-normal-light-font-size)] text-center tracking-[var(--fontes-fonte-normal-light-letter-spacing)] leading-[var(--fontes-fonte-normal-light-line-height)] [font-style:var(--fontes-fonte-normal-light-font-style)]">
                    Acesse abaixo
                  </div>
                </div>
                <Button
                  className="!flex-[0_0_auto]"
                  expand={false}
                  icon21StyleOverrideClassName="!relative !w-4 !h-4"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={`w-[var(--responsividade-width)] flex items-center relative ${
          screen === "mobile" ? "flex-col" : ""
        } ${screen === "mobile" ? "flex-[0_0_auto]" : ""} ${
          ["desktop", "tablet"].includes(screen) ? "h-[500px]" : ""
        } ${screen === "mobile" ? "rounded-2xl" : ""} ${
          ["desktop", "tablet"].includes(screen) ? "justify-center" : ""
        }`}
        data-responsividade-mode={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
      >
        <div
          className={`flex self-stretch rounded-2xl bg-cores-container-fundo relative ${
            screen === "mobile" ? "w-full" : "w-[var(--responsividade-width)]"
          } ${screen === "mobile" ? "flex-col" : ""} ${screen === "mobile" ? "items-start" : "items-center"} ${
            ["desktop", "tablet"].includes(screen) ? "grow" : ""
          } ${screen === "mobile" ? "flex-[0_0_auto]" : "flex-1"} ${
            ["desktop", "tablet"].includes(screen) ? "justify-between" : ""
          }`}
        >
          <img
            className={`self-stretch relative ${screen === "mobile" ? "w-full" : ""} ${
              screen === "mobile" ? "min-w-[350px]" : ""
            } ${["desktop", "tablet"].includes(screen) ? "grow" : ""} ${
              ["desktop", "tablet"].includes(screen) ? "flex-1" : ""
            } ${screen === "mobile" ? "h-[300px]" : ""}`}
            alt="Col"
            src={
              screen === "tablet" ? "/img/col-1-5.png" : screen === "mobile" ? "/img/col-1-8.png" : "/img/col-1-2.png"
            }
          />
          <div
            className={`flex self-stretch flex-col gap-8 p-8 justify-center relative ${
              screen === "mobile" ? "w-full" : ""
            } ${screen === "mobile" ? "items-center" : "items-start"} ${
              ["desktop", "tablet"].includes(screen) ? "grow" : ""
            } ${screen === "mobile" ? "flex-[0_0_auto]" : "flex-1"}`}
          >
            <div className="w-full flex self-stretch flex-col items-center gap-6 flex-[0_0_auto] relative">
              <div
                className={`w-full flex self-stretch flex-col gap-4 flex-[0_0_auto] relative ${
                  screen === "mobile" ? "items-center" : "items-start"
                } ${screen === "mobile" ? "justify-center" : ""}`}
              >
                <div
                  className={`[font-family:'Work_Sans',Helvetica] self-stretch mt-[-1.00px] tracking-[1.44px] text-2xl text-cores-fonte relative font-bold leading-[normal] ${
                    screen === "mobile" ? "text-center" : ""
                  }`}
                >
                  CONSULTORIA DE T.I
                </div>
                <div
                  className={`[font-family:'Work_Sans',Helvetica] self-stretch text-cores-laranja font-normal relative ${
                    screen === "desktop"
                      ? "tracking-[1.44px]"
                      : screen === "tablet"
                      ? "tracking-[1.32px]"
                      : "tracking-[1.20px]"
                  } ${screen === "desktop" ? "text-2xl" : screen === "tablet" ? "text-[22px]" : "text-xl"} ${
                    screen === "mobile" ? "text-center" : ""
                  } ${screen === "mobile" ? "leading-5" : "leading-[normal]"}`}
                >
                  <span className="font-fontes-fonte-m-dia-bold tracking-[var(--fontes-fonte-m-dia-bold-letter-spacing)] [font-style:var(--fontes-fonte-m-dia-bold-font-style)] text-[length:var(--fontes-fonte-m-dia-bold-font-size)] text-[#e3e4e6] font-[number:var(--fontes-fonte-m-dia-bold-font-weight)] leading-[var(--fontes-fonte-m-dia-bold-line-height)]">
                    Avaliação
                  </span>
                  <span className="font-fontes-fonte-m-dia-regular tracking-[var(--fontes-fonte-m-dia-regular-letter-spacing)] [font-style:var(--fontes-fonte-m-dia-regular-font-style)] text-[length:var(--fontes-fonte-m-dia-regular-font-size)] text-[#eb7500] font-[number:var(--fontes-fonte-m-dia-regular-font-weight)] leading-[var(--fontes-fonte-m-dia-regular-line-height)]">
                    {screen === "mobile" && (
                      <> detalhada da infraestrutura tecnológica existente para identificar pontos de</>
                    )}

                    {["desktop", "tablet"].includes(screen) && (
                      <> detalhada da infraestrutura tecnológica existente para identificar pontos de </>
                    )}
                  </span>
                  <span
                    className={`${
                      screen === "mobile" ? "font-fontes-fonte-normal-light" : "font-fontes-fonte-m-dia-bold"
                    } ${
                      screen === "mobile"
                        ? "tracking-[var(--fontes-fonte-normal-light-letter-spacing)]"
                        : "tracking-[var(--fontes-fonte-m-dia-bold-letter-spacing)]"
                    } ${
                      screen === "mobile"
                        ? "[font-style:var(--fontes-fonte-normal-light-font-style)]"
                        : "[font-style:var(--fontes-fonte-m-dia-bold-font-style)]"
                    } ${
                      screen === "mobile"
                        ? "text-[length:var(--fontes-fonte-normal-light-font-size)]"
                        : "text-[length:var(--fontes-fonte-m-dia-bold-font-size)]"
                    } ${screen === "mobile" ? "text-[#eb7500]" : "text-[#e3e4e6]"} ${
                      screen === "mobile"
                        ? "font-[number:var(--fontes-fonte-normal-light-font-weight)]"
                        : "font-[number:var(--fontes-fonte-m-dia-bold-font-weight)]"
                    } ${
                      screen === "mobile"
                        ? "leading-[var(--fontes-fonte-normal-light-line-height)]"
                        : "leading-[var(--fontes-fonte-m-dia-bold-line-height)]"
                    }`}
                  >
                    {screen === "mobile" && <>&nbsp;</>}

                    {["desktop", "tablet"].includes(screen) && <>melhoria e oportunidades de otimização. </>}
                  </span>
                  {screen === "mobile" && (
                    <p>
                      <span className="font-[number:var(--fontes-fonte-m-dia-bold-font-weight)] text-[#e3e4e6] tracking-[var(--fontes-fonte-m-dia-bold-letter-spacing)] font-fontes-fonte-m-dia-bold [font-style:var(--fontes-fonte-m-dia-bold-font-style)] leading-[var(--fontes-fonte-m-dia-bold-line-height)] text-[length:var(--fontes-fonte-m-dia-bold-font-size)]">
                        melhoria e oportunidades de otimização.{" "}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <div
                className={`font-fontes-fonte-normal-light self-stretch tracking-[var(--fontes-fonte-normal-light-letter-spacing)] [font-style:var(--fontes-fonte-normal-light-font-style)] text-[length:var(--fontes-fonte-normal-light-font-size)] text-cores-fonte relative font-[number:var(--fontes-fonte-normal-light-font-weight)] leading-[var(--fontes-fonte-normal-light-line-height)] ${
                  screen === "mobile" ? "text-center" : ""
                }`}
              >
                Acesse abaixo
              </div>
            </div>
            {["desktop", "tablet"].includes(screen) && (
              <div className="border border-solid border-cores-laranja inline-flex items-center gap-2 flex-[0_0_auto] px-4 py-2 rounded-2xl justify-center relative">
                <div
                  className="font-fontes-fonte-normal-uppercase w-fit mt-[-1.00px] tracking-[var(--fontes-fonte-normal-uppercase-letter-spacing)] text-[length:var(--fontes-fonte-normal-uppercase-font-size)] [font-style:var(--fontes-fonte-normal-uppercase-font-style)] text-cores-fonte-p-gina font-[number:var(--fontes-fonte-normal-uppercase-font-weight)] leading-[var(--fontes-fonte-normal-uppercase-line-height)] whitespace-nowrap relative"
                  data-responsividade-mode="mobile"
                >
                  IR PARA A PÁGINA
                </div>
                <Icon21 className="!relative !w-4 !h-4" color="#E3E4E6" />
              </div>
            )}

            {screen === "mobile" && (
              <Button className="!flex-[0_0_auto]" expand={false} icon21StyleOverrideClassName="!relative !w-4 !h-4" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Ramos.propTypes = {
  focus: PropTypes.oneOf(["on"]),
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
