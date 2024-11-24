import React from "react";

export default function RadioButton({ value, checked, label, onChange }) {
  return (
    <label className="w-fit py-2 px-4 rounded-lg border-2 border-accent text-secondary font-medium hover:bg-accent hover:text-white has-[:checked]:bg-accent has-[:checked]:text-white cursor-pointer">
      <input
        type="radio"
        className="sr-only"
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <span className="text-sm">{label}</span>
    </label>
  );
}
