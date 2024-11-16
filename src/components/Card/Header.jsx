import React from "react";
import classNames from "classnames";


export default function Header({ children, flex, widthFit }) {
  return (
    <div className={classNames("h-60 sm:h-full", {"flex-1": flex, "w-fit": widthFit})}>
      {children}
    </div>
  );
}
