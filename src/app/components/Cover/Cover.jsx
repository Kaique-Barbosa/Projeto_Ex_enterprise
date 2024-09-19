/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Cover = ({ className, cover = "/img/cover-4.svg" }) => {
  return <img className={`absolute w-[280px] h-[408px] top-0 left-0 ${className}`} alt="Cover" src={cover} />;
};

Cover.propTypes = {
  cover: PropTypes.string,
};
