"use client";

import React, { forwardRef, useState } from "react";
import Input from "./Input";

const InputPassword = forwardRef(
  ({ placeholder, tabIndex, value, onChange }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <Input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        className="flex-1 peer"
        ref={ref}
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
);

export default InputPassword;
