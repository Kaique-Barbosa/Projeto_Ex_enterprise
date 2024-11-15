import React from "react";

export default function Body({ children }) {
  return (
    <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-start gap-8 p-4 flex-1">
      {children}
    </div>
  );
}
