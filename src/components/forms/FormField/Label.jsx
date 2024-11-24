import React from "react";
import PropTypes from "prop-types";

export default function Label({ children }) {
  return (
    <label className="label">
      {children}
    </label>
  );
}

Label.propsTypes = {
    htmlFor: PropTypes.string,
    text: PropTypes.string,
}