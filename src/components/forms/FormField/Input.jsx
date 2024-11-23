import React from "react";
import PropTypes from "prop-types";

export default function Input({
  children,
  tabIndex,
  type,
  id,
  required,
  placeholder,
  name,
  onChange
}) {
  return (
    <div
      className="input h-fit p-2 border-2 border-neutral bg-cinza-100 rounded-md hover:border-accent has-[:focus-visible]:border-accent has-[:autofill]:bg-cinza-200 text-preto-800 flex items-center w-full"
      tabIndex={tabIndex}
    >
      <input type={type} id={id} name={name} className="flex-1 peer" required={required} placeholder={placeholder} onChange={onChange}/>
      {children}
    </div>
  );
}

Input.propsTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
