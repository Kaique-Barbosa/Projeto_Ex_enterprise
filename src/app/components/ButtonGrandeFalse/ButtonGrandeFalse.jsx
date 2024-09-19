/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon21 } from "../../icons/Icon21";

export const ButtonGrandeFalse = ({ className, icon21StyleOverrideClassName }) => {
  return (
    <div
      className={`flex w-80 items-center justify-center gap-2 px-4 py-2 relative rounded-[100px] border border-solid border-cores-laranja ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-normal text-cores-fonte-p-gina text-2xl tracking-[0.96px] leading-9 whitespace-nowrap">
        IR PARA A PÁGINA
      </div>
      <Icon21 className={icon21StyleOverrideClassName} color="white" />
    </div>
  );
};
