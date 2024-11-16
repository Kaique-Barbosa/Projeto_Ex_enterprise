import React from "react";
import classNames from "classnames";

export default function Description({ children, className }) {
  return <p className={classNames("text-balance", className)}>{children}</p>;
}
