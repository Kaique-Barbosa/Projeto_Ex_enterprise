import React, { useState } from "react";

const InputPassword = ({ css, id, placeholder, required, tabIndex }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`input h-fit p-2 border-2 border-neutral bg-cinza-100 rounded-md hover:border-accent has-[:focus-visible]:border-accent text-preto-800 flex items-center justify-between ${css}`}
      tabIndex={tabIndex}
    >
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="flex-1 peer"
        id={id}
        required={required}
      />
      <button type="button" onClick={toggleShowPassword} className="size-4">
        <span
          className={`iconify ${showPassword ? "mdi--eye-off" : "mdi--eye"}`}
        ></span>
      </button>
    </div>
  );
};

export default InputPassword;
