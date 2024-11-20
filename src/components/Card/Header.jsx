import React from "react";
import classNames from "classnames";


export default function Header({ children, flex, widthFit }) {
  return (
    <div className={classNames("h-60 md:h-full", {"flex-1": flex, "md:w-fit": widthFit})}>
      {children}
    </div>
  );
}
