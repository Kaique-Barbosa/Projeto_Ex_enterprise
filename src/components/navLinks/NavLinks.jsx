import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ title, path }) {

  const currentRoute = usePathname();

  return (
    <Link
      aria-disabled={currentRoute === path}
      href={path}
      className={`py-2 px-2 rounded-sm uppercase ${
        currentRoute === path
          ? "text-laranja_light dark:text-laranja_dark"
          : "hover:text-branco hover:bg-laranja_light dark:hover:bg-laranja_dark"
      }`}
    >
        {title}
    </Link>
  );
}
