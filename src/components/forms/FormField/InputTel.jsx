"use client";

import Input from "./Input";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function InputTel({
  id,
  name,
  placeholder,
  required,
  tabIndex,
}) {
  const [phone, setPhone] = useState("");

  function phoneMask(value) {
    let phone = value.replace(/\D/g, "");
    let formattedPhone = "";

    if (formattedPhone.length === 11) {
      formattedPhone = phone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (formattedPhone.length === 10) {
      formattedPhone = phone.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      formattedPhone = phone;
    }

    console.log(formattedPhone);
    return formattedPhone;
  }

  function handleChange(event) {
    setPhone(phoneMask(event.target.value));
  }

  return (
    <Input
      id={id}
      type="tel"
      name={name}
      placeholder={placeholder}
      required={required}
      tabIndex={tabIndex}
      onChange={handleChange}
    ></Input>
  );
}

InputTel.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  tabIndex: PropTypes.number,
};
