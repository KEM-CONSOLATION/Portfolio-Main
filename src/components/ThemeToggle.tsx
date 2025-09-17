"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 group"
        aria-label="Theme toggle"
      >
        <div className="relative w-6 h-6">
          <FaMoon className="absolute inset-0 w-6 h-6 text-blue-300" />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-lg bg-muted hover:bg-accent transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6">
        <FaSun 
          className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-75'
          }`}
        />
        <FaMoon 
          className={`absolute inset-0 w-6 h-6 text-blue-300 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-75'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
