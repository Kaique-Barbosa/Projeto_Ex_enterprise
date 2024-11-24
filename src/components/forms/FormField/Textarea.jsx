"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Textarea({
  id,
  name,
  placeholder,
  defaultValue = "",
  className,
}) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      id={id}
      name={name}
      className={twMerge(
        "textarea p-2 border-2 border-neutral bg-white rounded-md hover:border-accent focus-visible:border-accent text-preto-800 w-full resize-none",
        className
      )}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    >
        {defaultValue}
    </textarea>
  );
}
