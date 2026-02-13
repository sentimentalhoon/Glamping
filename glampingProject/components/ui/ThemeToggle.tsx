"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 group"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === "light" && (
          <Sun className="w-5 h-5 text-secondary animate-in zoom-in duration-300" />
        )}
        {theme === "dark" && (
          <Moon className="w-5 h-5 text-secondary animate-in zoom-in duration-300" />
        )}
        {theme === "system" && (
          <Monitor className="w-5 h-5 text-secondary animate-in zoom-in duration-300" />
        )}
      </div>
      
      {/* Tooltip on hover */}
      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-primary text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 capitalize">
        Theme: {theme}
      </span>
    </button>
  );
}
