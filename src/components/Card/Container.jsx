import React from "react";

export default function Container({ inverter, children }) {
  return (
    <div
      className={`flex flex-1 self-stretch flex-col ${
        inverter ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      {children}
    </div>
  );
}
