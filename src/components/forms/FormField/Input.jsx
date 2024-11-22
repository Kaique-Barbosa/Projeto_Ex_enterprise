import React from "react";
import PropTypes from "prop-types";

export default function Input({
  children,
  tabIndex,
  type,
  id,
  required,
  placeholder
}) {
  return (
    <div
      className="input h-fit p-2 border-2 border-neutral bg-cinza-100 rounded-md hover:border-accent has-[:focus-visible]:border-accent has-[:autofill]:bg-cinza-200 text-preto-800 flex items-center justify-between w-full"
      tabIndex={tabIndex}
    >
      <input type={type} id={id} className="flex-1 peer" required={required} placeholder={placeholder} />
      {children}
    </div>
  );
}

Input.propsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};
