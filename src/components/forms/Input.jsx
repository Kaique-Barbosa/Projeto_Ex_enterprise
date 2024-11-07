import React from "react";

export default function Input({css, type, id, placeholder, required}) {
  return (
    <input
      className={`input border-2 dark:border-cinza-200_neutro border-preto-800 rounded bg-cinza-200 hover:border-laranja-light-normal dark:hover:border-laranja-dark-normal focus-visible:border-laranja-light-normal dark:focus-visible:border-laranja-dark-normal ${css}`}	
      placeholder={placeholder}
      type={type}
      id={id}
      required = {required}
    />
  );
}
