import React, { useState } from "react";

const InputPassword = ({ css, id, placeholder, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`input border-2 dark:border-cinza-400 border-preto-800 rounded bg-cinza-200 hover:border-laranja-light dark:hover:border-laranja-dark focus-visible:border-laranja-light dark:focus-visible:border-laranja-dark flex items-center justify-between text-preto-800 ${css}`}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="flex-1"
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
