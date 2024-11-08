import React from "react";
import PropTypes from "prop-types";

const BotaoOnClick = ({ texto, css, funcaoOnclick }) => {
  return (
    <button
      className={`${css} w-fit px-4 py-2 hover:text-white rounded-lg border border-solid border-laranja-light dark:border-laranja-dark hover:bg-laranja-light dark:hover:bg-laranja-dark`}
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
