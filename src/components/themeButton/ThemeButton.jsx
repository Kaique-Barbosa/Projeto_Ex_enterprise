"use client";

import MoonIcon from "@/icons/MoonIcon/MoonIcon";
import SunIcon from "@/icons/SunIcon/SunIcon";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      className="size-10 p-2 rounded-lg hover:bg-[#e3e4e63d]"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeButton;
