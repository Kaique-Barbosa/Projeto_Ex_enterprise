import React from "react";
import { twMerge } from "tailwind-merge";

export default function SubmitButton({
  loading,
  style,
  color,
  className,
  text,
}) {
  const styles = {
    normal: `bg-${color} hover:bg-${color}/75`,
    circle: `rounded-full bg-${color} hover:bg-${color}/75`,
    outline: `bg-transparent text-secondary border-${color} hover:bg-${color}`,
    outlineCircle: `bg-transparent text-secondary rounded-full border-${color} hover:bg-${color}`,
    ghost: `bg-transparent hover:bg-${color}`,
  };

  return (
    <button
      className={twMerge("btn font-medium py-2 px-4", styles[style], className)}
      type="submit"
      disabled={loading}
    >
      <span className={twMerge(loading && "loading loading-spinner")}></span>
      {text}
    </button>
  );
}
