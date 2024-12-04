import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Root = forwardRef(({ className, children }, ref) => {
  return (
    <section
      ref={ref}
      className={twMerge("container max-w-9xl my-12", className)}
    >
      {children}
    </section>
  );
});

export default Root;
