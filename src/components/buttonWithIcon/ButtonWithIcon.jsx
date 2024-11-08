import React from "react";

const BotaoWithIcon = ({icon, texto, funcaoOnclick, css }) => {
  return (
    <button
      className={`w-fit btn btn-accent px-4 py-2 text-white rounded flex gap-2 items-center text-base ${css}`}
      onClick={funcaoOnclick}
    >
      {icon}
      {texto}
    </button>
  );
};

export default BotaoWithIcon;
