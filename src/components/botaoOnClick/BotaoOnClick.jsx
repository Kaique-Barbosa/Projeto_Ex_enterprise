import React from "react";
import PropTypes from "prop-types";

const BotaoOnClick = ({ texto, css, funcaoOnclick }) => {
  return (
    <button
      className={`${css} w-fit px-4 py-2 hover:text-white rounded-lg border border-solid border-laranja-light-normal dark:border-laranja-dark-normal hover:bg-laranja-light-normal dark:hover:bg-laranja-dark-normal`}
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
