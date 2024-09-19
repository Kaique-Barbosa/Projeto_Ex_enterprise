"use client"

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ExpandTrue } from "../../icons/ExpandTrue";
import { Icon21 } from "../../icons/Icon21";

export const Button = ({ expand, className, icon21StyleOverrideClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    expand: expand || false,
  });

  return (
    <div
      className={`border border-solid inline-flex items-center gap-2 px-3 py-2 rounded-2xl justify-center relative ${
        state.expand ? "border-cores-fonte-p-gina" : "border-cores-laranja"
      } ${state.expand ? "bg-cores-laranja" : ""} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="font-fontes-fonte-normal-uppercase w-fit mt-[-1.00px] tracking-[var(--fontes-fonte-normal-uppercase-letter-spacing)] text-[length:var(--fontes-fonte-normal-uppercase-font-size)] [font-style:var(--fontes-fonte-normal-uppercase-font-style)] text-cores-fonte-p-gina font-[number:var(--fontes-fonte-normal-uppercase-font-weight)] leading-[var(--fontes-fonte-normal-uppercase-line-height)] whitespace-nowrap relative">
        IR PARA A PÁGINA
      </div>
      {!state.expand && <Icon21 className={icon21StyleOverrideClassName} color="#E3E4E6" />}

      {state.expand && <ExpandTrue className="!relative !w-5 !h-5" />}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        expand: true,
      };

    case "mouse_leave":
      return {
        ...state,
        expand: false,
      };
  }

  return state;
}

Button.propTypes = {
  expand: PropTypes.bool,
};
