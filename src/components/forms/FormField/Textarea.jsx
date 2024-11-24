"use client";

import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Textarea = forwardRef(({ placeholder, className, value, onChange }, ref) => {
  return (
    <textarea
      ref={ref}
      value={value}
      onChange={onChange}
      className={twMerge(
        "textarea p-2 border-2 border-neutral bg-white rounded-md hover:border-accent focus-visible:border-accent text-preto-800 w-full resize-none",
        className
      )}
      placeholder={placeholder}
    ></textarea>
  );
});

export default Textarea;
