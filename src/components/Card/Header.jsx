import React from "react";

export default function Header({ children, flex, width }) {
  return (
    <div className={`${flex && "flex-1"} ${width && `w-[${width}]`} h-60 sm:h-full`}>
      {children}
    </div>
  );
}
