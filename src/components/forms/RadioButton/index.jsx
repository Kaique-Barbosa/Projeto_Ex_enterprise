import React from "react";

export default function RadioButton() {
  return (
    <label
      htmlFor="Option1"
      className="p-3 rounded-lg border-2 border-accent text-white font-semibold hover:bg-accent has-[:checked]:bg-accent has-[:checked]:text-white cursor-pointer"
      tabIndex="0"
    >
      <input
        className="sr-only"
        id="Option1"
        type="radio"
        tabIndex="-1"
        name="servico"
      />

      <span className="text-sm"> Consultoria </span>
    </label>
  );
}
