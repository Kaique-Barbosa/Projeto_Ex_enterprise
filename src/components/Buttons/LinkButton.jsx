import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";

const LinkButton = ({ href, alt, texto, className, style, color }) => {
  const styles = {
    normal: `btn-${color}`,
    circle: "rounded-full",
    outline: `bg-transparent text-secondary border-${color} hover:bg-${color}`,
    outlineCircle: `bg-transparent text-secondary rounded-full border-${color} hover:bg-${color}`,
    ghost: `bg-transparent hover:bg-${color}`,
  };

  return (
    <>
      <Link
        href={href}
        alt={alt}
        className={classNames("btn font-medium py-2 px-4", styles[style], className)}
      >
        {texto}
      </Link>
    </>
  );
};

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default LinkButton;
