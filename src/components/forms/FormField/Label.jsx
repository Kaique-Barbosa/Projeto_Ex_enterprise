import React from "react";
import PropTypes from "prop-types";

export default function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {text}
    </label>
  );
}

Label.propsTypes = {
    htmlFor: PropTypes.string,
    text: PropTypes.string,
}