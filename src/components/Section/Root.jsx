import React from "react";
import classNames from "classnames";

export default function Root({ className, children }) {
  return (
    <section className={classNames("container max-w-9xl my-12", className)}>
      {children}
    </section>
  );
}
