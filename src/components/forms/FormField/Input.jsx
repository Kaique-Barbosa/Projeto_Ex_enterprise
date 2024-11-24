import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(
  ({ children, tabIndex, type, placeholder, value, onChange }, ref) => {
    return (
      <div
        className="input h-fit p-2 border-2 border-neutral bg-white rounded-lg hover:border-accent has-[:focus-visible]:border-accent has-[:autofill]:bg-cinza-200 text-preto-800 flex items-center w-full"
        tabIndex={tabIndex}
      >
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          className="flex-1 peer"
          placeholder={placeholder}
        />
        {children}
      </div>
    );
  }
);

export default Input;

Input.propsTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
