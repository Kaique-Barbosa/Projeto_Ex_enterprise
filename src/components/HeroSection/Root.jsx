import React from "react";

export default function Root({ children, height }) {
  return (
    <section
      className={`container w-full max-w-9xl flex flex-col gap-4 justify-center items-center min-h-[30rem]`}
    >
      {children}
    </section>
  );
}
