import React from "react";

const BotaoOnClick = ({icon, texto, funcaoOnclick, css }) => {
  return (
    <button
      className={`w-fit px-4 py-2 text-white rounded-lg border border-solid bg-laranja-light-normal dark:bg-laranja-dark-normal hover:bg-laranja-light-hover dark:hover:bg-laranja-dark-hover flex gap-2 items-center ${css}`}
      onClick={funcaoOnclick}
    >
      {icon}
      {texto}
    </button>
  );
};

export default BotaoOnClick;
