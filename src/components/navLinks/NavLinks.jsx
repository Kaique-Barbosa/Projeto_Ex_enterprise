"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";

export default function NavLinks({ title, path }) {
  const currentRoute = usePathname();

  return (
    <Link
      aria-disabled={currentRoute === path}
      href={path}
      className={`py-1 px-2 rounded uppercase ${
        currentRoute === path
          ? "text-accent pointer-events-none"
          : "hover:text-white hover:bg-accent"
      }`}
    >
      {title}
    </Link>
  );
}

NavLinks.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};
