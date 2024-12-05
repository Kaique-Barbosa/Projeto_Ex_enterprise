import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const LinkButton = ({
  children,
  href,
  alt,
  texto,
  className,
  style,
  color,
}) => {
  const styles = {
    normal: `bg-${color} hover:bg-${color}/75 border-none`,
    circle: "rounded-full bg-${color} hover:bg-${color}/75",
    outline: `bg-transparent text-secondary border-${color} hover:bg-${color}`,
    outlineCircle: `bg-transparent text-secondary rounded-full border-${color} hover:bg-${color}`,
    ghost: `bg-transparent border-none shadow-none hover:bg-${color}`,
  };

  return (
    <>
      <Link
        href={href}
        alt={alt}
        className={twMerge(
          "btn font-medium py-2 px-4",
          styles[style],
          className
        )}
      >
        {children}
        {texto}
      </Link>
    </>
  );
};

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.oneOf([
    "normal",
    "circle",
    "outline",
    "outlineCircle",
    "ghost",
  ]),
  color: PropTypes.string,
};

export default LinkButton;
