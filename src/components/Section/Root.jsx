import React from "react";
import { twMerge } from "tailwind-merge";

export default function Root({ className, children }) {
  return (
    <section className={twMerge("container max-w-9xl my-12", className)}>
      {children}
    </section>
  );
}
