import React from "react";

export default function Root({ children }) {
  return (
    <section
      className={`container w-full max-w-9xl flex flex-col gap-4 justify-center items-center min-h-[20rem] mt-20`}
    >
      {children}
    </section>
  );
}
