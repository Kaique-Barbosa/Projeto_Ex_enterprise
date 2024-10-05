"use client";

import MoonIcon from "@/icons/MoonIcon/MoonIcon";
import SunIcon from "@/icons/SunIcon/SunIcon";
import React, { useState } from "react";

const ThemeButton = () => {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }

  return (
    <button
      className="size-12 p-2 rounded-lg hover:bg-[#e3e4e63d]"
      onClick={toggleTheme}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeButton;
