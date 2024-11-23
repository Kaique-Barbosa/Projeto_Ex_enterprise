import React from "react";

export default function Header({ children }) {
  return (
    <div className="h-60 md:h-full flex-1">
      {children}
    </div>
  );
}
