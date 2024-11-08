import React from "react";

export default function Input({css, type, id, placeholder, required}) {


  return (
    <input
      className={`input h-fit p-2 border-2 dark:border-cinza-400 border-preto-800 rounded bg-cinza-200 hover:border-laranja-light dark:hover:border-laranja-dark focus-visible:border-laranja-light dark:focus-visible:border-laranja-dark text-preto-800 ${css}`}	
      placeholder={placeholder}
      type={type}
      id={id}
      required = {required}
    />
  );
}
