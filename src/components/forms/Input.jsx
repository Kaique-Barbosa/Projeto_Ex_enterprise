import React from "react";

export default function Input({css, type, id, placeholder, required, tabIndex}) {
  
  return (
    <input
      className={`input h-fit p-2 border-2 border-neutral bg-cinza-100 rounded-md hover:border-accent focus-visible:border-accent text-preto-800 ${css}`}	
      placeholder={placeholder}
      type={type}
      id={id}
      required = {required}
      tabIndex={tabIndex}
    />
  );
}
