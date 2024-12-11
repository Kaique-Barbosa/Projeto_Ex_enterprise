import React, { forwardRef } from "react";

const Select = forwardRef(({ children, value, onChange }, ref) => {
  return (
    <select
      className="select border-2 border-neutral hover:border-accent select-accent w-full bg-white text-preto-800 text-base"
      ref={ref}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
});

export default Select;
