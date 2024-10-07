"use client";

import MoonIcon from "@/icons/MoonIcon/MoonIcon";
import SunIcon from "@/icons/SunIcon/SunIcon";
import React, { useEffect, useState } from "react";

const ThemeButton = () => {
  
  const [isDark, setIsDark] = useState(localStorage.getItem("chakra-ui-color-mode"));

  useEffect(() => {
    // localStorage.setItem("chakra-ui-color-mode", "dark");
    const theme = localStorage.getItem("chakra-ui-color-mode");
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  
  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("chakra-ui-color-mode", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("chakra-ui-color-mode", "dark");
      setIsDark(true);
    }
  }

  return (
    <button
      className="size-10 p-2 rounded-lg hover:bg-[#e3e4e63d]"
      onClick={toggleTheme}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeButton;
