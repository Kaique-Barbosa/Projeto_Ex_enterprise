import React from "react";

const headingHandlers = {
  h1: (content, css) => (
    <h1 className={css}>
      {content.map((span) => (
        <span className={span.css}>{span.text}</span>
      ))}
    </h1>
  ),
  h2: (content, css) => (
    <h2 className={css}>
      {content.map((span) => (
        <span className={span.css}>{span.text}</span>
      ))}
    </h2>
  ),
  h3: (content, css) => (
    <h3 className={css}>
      {content.map((span) => (
        <span className={span.css}>{span.text}</span>
      ))}
    </h3>
  ),
  h4: (content, css) => (
    <h4 className={css}>
      {content.map((span) => (
        <span className={span.css}>{span.text}</span>
      ))}
    </h4>
  ),
  h5: (content, css) => (
    <h5 className={css}>
      {content.map((span) => (
        <span className={span.css}>{span.text}</span>
      ))}
    </h5>
  ),
  h6: (content, css) => (
    <h6 className={css}>
      {content.map((span) => (
        <span className={span.css}>{span.text}</span>
      ))}
    </h6>
  ),
};

const displayHeading = (type, content, css) => {
  const handler = headingHandlers[type] || headingHandlers.h1;
  return handler(content, css);
};

const Heading = ({ type, content, css }) => {
  return displayHeading(type, content, css);
};

export default Heading;
