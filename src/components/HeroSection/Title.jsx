import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="text-center font-light text-accent text-[2.5rem] md:text-[2.75rem] lg:text-5xl">
      {children}
    </h1>
  );
}
