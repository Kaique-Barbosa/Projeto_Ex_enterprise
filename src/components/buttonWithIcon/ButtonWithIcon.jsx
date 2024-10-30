import React from "react";

const BotaoOnClick = ({icon, texto, funcaoOnclick, css }) => {
  return (
    <button
      className={`w-fit px-4 py-2 hover:text-white rounded-lg border border-solid bg-laranja_light dark:bg-laranja_dark hover:bg-laranja_light dark:hover:bg-laranja_dark flex gap-2 items-center ${css}`}
      onClick={funcaoOnclick}
    >
      {icon}
      {texto}
    </button>
  );
};

export default BotaoOnClick;
