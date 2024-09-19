/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconChevronDown1 } from "../../icons/IconChevronDown1";

export const Header = ({ background, className }) => {
  return (
    <div
      className={`flex flex-col w-[var(--responsividade-view-width)] h-[var(--responsividade-view-height)] items-start gap-2.5 px-0 py-8 relative ${className}`}
      data-responsividade-mode="desktop"
    >
      <div className="flex flex-col items-center relative flex-1 self-stretch w-full grow">
        <div className="flex items-center justify-center p-4 relative flex-1 self-stretch w-full grow">
          <p className="relative flex-1 [font-family:'Work_Sans',Helvetica] font-normal text-transparent text-[56px] text-center tracking-[3.36px] leading-[56px]">
            <span className="font-light text-[#eb7500] tracking-[1.88px] leading-8">Conheça a</span>
            <span className="font-[number:var(--h1-bold-font-weight)] text-[#f8a833] tracking-[var(--h1-bold-letter-spacing)] font-h1-bold [font-style:var(--h1-bold-font-style)] leading-[var(--h1-bold-line-height)] text-[length:var(--h1-bold-font-size)]">
              &nbsp;
            </span>
            <span className="font-[number:var(--h1-bold-font-weight)] text-[#e3e4e6] tracking-[var(--h1-bold-letter-spacing)] font-h1-bold [font-style:var(--h1-bold-font-style)] leading-[var(--h1-bold-line-height)] text-[length:var(--h1-bold-font-size)]">
              Ex Enterprise
            </span>
            <span className="font-[number:var(--h1-bold-font-weight)] text-[#e3e4e6] tracking-[var(--h1-bold-letter-spacing)] font-h1-bold [font-style:var(--h1-bold-font-style)] leading-[var(--h1-bold-line-height)] text-[length:var(--h1-bold-font-size)]">
              &nbsp;
            </span>
          </p>
        </div>
        <IconChevronDown1 className="!relative !w-10 !h-10" />
      </div>
    </div>
  );
};

Header.propTypes = {
  background: PropTypes.oneOf(["normal"]),
};
