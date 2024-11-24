import React from "react";
import { twMerge } from "tailwind-merge";

export default function Error({ children, className }) {
  return <p className={twMerge("my-2 text-error text-sm", className)}>{children}</p>;
}
