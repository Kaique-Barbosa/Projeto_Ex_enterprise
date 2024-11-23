import React from "react";
import { twMerge } from "tailwind-merge";

export default function Title({ children, className }) {
  return <h2 className={twMerge("text-pretty", className)}>{children}</h2>;
}
