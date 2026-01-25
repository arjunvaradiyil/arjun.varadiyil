'use client';

import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 font-sans">
        {/* THEME TOGGLE BUTTON */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#8f8f8f] transition hover:bg-[#8f8f8f]"
        >
          {theme === "dark" ? (
            <Sun className="w-6 h-6 text-blue-500 dark:text-cyan-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-400" />
          )}
        </button>

        {/* MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#8f8f8f] transition hover:bg-[#8f8f8f] "
        >
          <span
            className="relative block mt-2 w-5 h-[2px] bg-gray-800 dark:bg-[#cacaca] 
            before:content-['']
            before:absolute before:left-0 before:-top-2
            before:w-5 before:h-[2px] before:bg-gray-800 dark:before:bg-[#cacaca]"
          />
        </button>
      </div>

      {/* SIDEBAR */}
      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
}
