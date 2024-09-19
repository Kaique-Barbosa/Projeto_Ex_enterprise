/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LinkAtual = ({
  normal,
  className,
  linkClassName,
  text = "LINK",
  lineClassName,
  line = "/img/line-1-1.svg",
}) => {
  return (
    <div className={`flex flex-col items-center gap-1.5 px-3 py-2 relative ${className}`}>
      <div
        className={`relative w-fit mt-[-1.00px] ml-[-2.50px] mr-[-2.50px] font-fontes-fonte-normal-uppercase-bold font-[number:var(--fontes-fonte-normal-uppercase-bold-font-weight)] text-cores-laranja text-[length:var(--fontes-fonte-normal-uppercase-bold-font-size)] tracking-[var(--fontes-fonte-normal-uppercase-bold-letter-spacing)] leading-[var(--fontes-fonte-normal-uppercase-bold-line-height)] whitespace-nowrap [font-style:var(--fontes-fonte-normal-uppercase-bold-font-style)] ${linkClassName}`}
      >
        {text}
      </div>
      <img
        className={`relative self-stretch w-full h-[2.5px] mb-[-1.25px] ml-[-1.25px] mr-[-1.25px] ${lineClassName}`}
        alt="Line"
        src={line}
      />
    </div>
  );
};

LinkAtual.propTypes = {
  normal: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
  line: PropTypes.string,
};
