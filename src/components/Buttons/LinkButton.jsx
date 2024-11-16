import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";

const LinkButton = ({ href, alt, texto, className }) => {
  return (
    <>
      <Link
        href={href}
        alt={alt}
        className={classNames(
          " w-fit font-semibold px-4 py-2 rounded-3xl border border-solid border-accent hover:bg-accent hover:text-branco",
          className
        )}
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
