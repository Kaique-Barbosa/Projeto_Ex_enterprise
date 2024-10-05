"use client";

import React from "react";

const ThemeButton = () => {
  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }

  return <button onClick={toggleTheme}>Alterar tema</button>;
}

export default ThemeButton;
