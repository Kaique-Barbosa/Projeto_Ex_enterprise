import React from "react";
import classNames from "classnames";

export default function Title({ children, className }) {
  return <h2 className={classNames("text-pretty", className)}>{children}</h2>;
}
