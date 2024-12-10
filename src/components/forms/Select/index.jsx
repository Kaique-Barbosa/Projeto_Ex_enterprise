import React, { forwardRef } from "react";

const Select = forwardRef(({ children, value, onChange }, ref) => {
  return (
    <select
      className="select select-accent w-full bg-white text-preto-800"
      ref={ref}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
});

export default Select;
