"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="group relative rounded-lg bg-gray-700 p-3 transition-all duration-300 hover:bg-gray-600"
        aria-label="Theme toggle"
      >
        <div className="relative h-6 w-6">
          <FaMoon className="absolute inset-0 h-6 w-6 text-blue-300" />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-muted hover:bg-accent group relative rounded-lg p-3 transition-all duration-300"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative h-6 w-6">
        <FaSun
          className={`absolute inset-0 h-6 w-6 text-yellow-400 transition-all duration-300 ${
            theme === "light"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-75 rotate-180 opacity-0"
          }`}
        />
        <FaMoon
          className={`absolute inset-0 h-6 w-6 text-blue-300 transition-all duration-300 ${
            theme === "dark"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-75 -rotate-180 opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
