import React from "react";

export default function InputTel({css, id, placeholder, required, tabIndex}) {

  function phoneHandler (event) {
    let input = event.target;
    let phone = input.value.replace(/\D/g, "");
    let formattedPhone = "";

    if (formattedPhone.length === 11) {
      formattedPhone = phone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (formattedPhone.length === 10) {
      formattedPhone = phone.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      formattedPhone = phone;
    }

    input.value = formattedPhone;
  }
  
  return (
    <input
      className={`input h-fit p-2 border-2 border-neutral bg-cinza-100 rounded-md hover:border-accent focus-visible:border-accent text-preto-800 ${css}`}	
      placeholder={placeholder}
      type="tel"
      id={id}
      required = {required}
      tabIndex={tabIndex}
      minLength={14}
      onInput={(e) => phoneHandler(e)}
    />
  );
}
