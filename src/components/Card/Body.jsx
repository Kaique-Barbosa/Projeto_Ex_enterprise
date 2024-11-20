import React from "react";

export default function Body({ children }) {
  return (
    <div className="flex flex-col items-center md:items-start justify-center text-center md:text-start gap-8 p-6 flex-1">
      {children}
    </div>
  );
}
