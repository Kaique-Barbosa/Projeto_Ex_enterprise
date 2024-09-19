"use client"

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Link = ({ padrO, className, text = "LINK" }) => {
  const [state, dispatch] = useReducer(reducer, {
    padrO: padrO || "default",
  });

  return (
    <div
      className={`flex items-center px-3 py-2 overflow-hidden rounded justify-center relative ${
        ["default", "header-hover"].includes(state.padrO) ? "w-[74px]" : ""
      } ${state.padrO === "menu-hover" ? "flex-col" : ""} ${state.padrO === "menu-hover" ? "gap-[4.8px]" : "gap-2.5"} ${
        state.padrO === "header-hover" ? "bg-cores-laranja" : ""
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div
        className={`font-fontes-fonte-normal-uppercase-regular w-fit mt-[-1.00px] tracking-[var(--fontes-fonte-normal-uppercase-regular-letter-spacing)] text-[length:var(--fontes-fonte-normal-uppercase-regular-font-size)] [font-style:var(--fontes-fonte-normal-uppercase-regular-font-style)] font-[number:var(--fontes-fonte-normal-uppercase-regular-font-weight)] leading-[var(--fontes-fonte-normal-uppercase-regular-line-height)] whitespace-nowrap relative ${
          state.padrO === "default" ? "text-cores-fonte" : "text-branco"
        }`}
      >
        {text}
      </div>
      {state.padrO === "menu-hover" && (
        <img
          className="relative self-stretch w-full h-[3px] mb-[-1.50px] ml-[-1.50px] mr-[-1.50px]"
          alt="Line"
          src="/img/line-2.svg"
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        padrO: "header-hover",
      };

    case "mouse_leave":
      return {
        ...state,
        padrO: "default",
      };
  }

  return state;
}

Link.propTypes = {
  padrO: PropTypes.oneOf(["header-hover", "menu-hover", "default"]),
  text: PropTypes.string,
};
