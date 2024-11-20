import React from "react";

export default function Root({ children, css }) {
  return (
    <div
      className={`${css} bg-cinza-200 dark:bg-preto-900 shadow-neutro flex h-fit md:min-h-80 w-full max-w-7xl items-center justify-center rounded-lg tracking-widest leading-tighter`}
    >
      {children}
    </div>
  );
}
