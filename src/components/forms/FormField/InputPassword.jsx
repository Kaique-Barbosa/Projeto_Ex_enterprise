import React, { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";

export default function InputPassword({ id, placeholder, required, tabIndex, name }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      type={showPassword ? "text" : "password"}
      id={id}
      name={name}
      className="flex-1 peer"
      required={required}
      placeholder={placeholder}
      tabIndex={tabIndex}
    >
      <button
        type="button"
        onClick={toggleShowPassword}
        className="size-4 ml-2"
      >
        <span
          className={`iconify ${showPassword ? "mdi--eye-off" : "mdi--eye"}`}
        ></span>
      </button>
    </Input>
  );
}

InputPassword.propsTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  tabIndex: PropTypes.number,
};
