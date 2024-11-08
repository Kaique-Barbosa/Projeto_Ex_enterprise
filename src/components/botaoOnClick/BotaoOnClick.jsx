import React from "react";
import PropTypes from "prop-types";

const BotaoOnClick = ({ texto, css, funcaoOnclick }) => {
  return (
    <button
      className={`${css} w-fit px-4 py-2 hover:text-white rounded-lg border border-solid border-accent hover:bg-accent`}
      onClick={funcaoOnclick}
    >
      {texto}
    </button>
  );
};

BotaoOnClick.propTypes = {
  texto: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
};

export default BotaoOnClick;
