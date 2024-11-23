import React from "react";
import { twMerge } from "tailwind-merge";

export default function Description({ children, className }) {
  return <p className={twMerge("text-balance", className)}>{children}</p>;
}
