import React from "react";
import { twMerge } from "tailwind-merge";

export default function Container({ inverter, children, className }) {
  return (
    <div
      className={twMerge(
        "flex flex-1 self-stretch flex-col",
        inverter ? "md:flex-row-reverse" : "md:flex-row",
        className
      )}
    >
      {children}
    </div>
  );
}
