import React from "react";

const headingHandlers = {
  h1: (children, css) => (
    <h1 className={css} >
     {children}
    </h1>
  ),
  h2: (children, css) => (
    <h2 className={css} key={1}>
     {children}
    </h2>
  ),
  h3: (children, css) => (
    <h3 className={css} key={3}>
      {children}
    </h3>
  ),
  h4: (children, css) => (
    <h4 className={css} key={4}>
     {children}
    </h4>
  ),
  h5: (children, css) => (
    <h5 className={css} key={5}>
      {children}
    </h5>
  ),
  h6: (children, css) => (
    <h6 className={css} key={6}>
     {children}
    </h6>
  ),
};

const displayHeading = (type, children, css) => {
  const handler = headingHandlers[type] || headingHandlers.h1;
  return handler(children, css);
};

export const Heading = ({ type, children, css }) => {
  return displayHeading(type, children, css);
};


