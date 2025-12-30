import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 font-sans">
        {/* LETS TALK */}
        <a href="/contact">
          <button className="hidden sm:block px-6 py-2 rounded-full border border-gray-600 text-[15px] uppercase tracking-widest font-medium text-[#8f8f8f] hover:border-white transition">
            LET’S TALK
          </button>
        </a>

        {/* MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
        >
          <span
            className="relative block mt-2 w-5 h-[2px] bg-[#8f8f8f]
            before:content-['']
            before:absolute before:left-0 before:-top-2
            before:w-5 before:h-[2px] before:bg-[#8f8f8f]"
          />
        </button>
      </div>

      {/* SIDEBAR */}
      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
}
