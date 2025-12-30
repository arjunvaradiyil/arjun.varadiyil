import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SidebarMenu({ open, setOpen }) {
    const [active, setActive] = useState("HOME");

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-screen bg-[#0a0a0a] z-50 font-sans
        w-full sm:w-[60%] md:w-[50%] lg:w-[30%] overflow-y-auto overflow-x-hidden
        transform transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#2b2b2b]">
          <div className="text-[16px] text-[#8f8f8f] tracking-wide uppercase">
            <span className="text-[#ff4925] mr-3">■</span>
            Menu
          </div>

          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full border border-[#2b2b2b] flex items-center justify-center text-[#8f8f8f] hover:border-white transition"
          >
            ✕
          </button>
        </div>

        {/* NAV LINKS */}
        <nav className="px-10 py-2 font-anton">
            {["HOME", "WORKS", "ABOUT", "CONTACT"].map((item, i) => {
                const isActive = active === item;

                return (
                <div key={i} className="group">
                    <Link
                        to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                        onClick={() => {
                            setActive(item);
                            setOpen(false);
                        }}
                        className="relative block py-2 mt-5 text-[32px] sm:text-[40px] md:text-[48px] uppercase text-[#cacaca]
                        transition-all duration-300 leading-none scale-x-[0.9] origin-left"
                        style={{ letterSpacing: "-0.02em" }}
                        >
                        {item}

                        {isActive && (
                            <span className="inline-block ml-2 w-2 h-2 bg-[#ff4925] translate-y-[-0.15em]" />
                        )}

                        <span
                            className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#ff4925]
                            transition-all duration-500 group-hover:w-[50%]"
                        />
                    </Link>
                    <div className="h-px w-full bg-[#2b2b2b] mt-5" />
                </div>
                );
            })}
        </nav>

        {/* FOOTER INFO */}
        <div className="mt-12 px-10 space-y-8 text-sm lg:absolute lg:bottom-12 lg:left-0 lg:right-0">
          <div>
            <p className="text-[#8f8f8f] uppercase text-[14px] tracking-wide mb-2">(Email)</p>
            <p className="text-[#ff4925] text-[22px] sm:text-[20px] md:text-[20px] lg:text-[20px] font-semibold">
              gourinandhana028@gmail.com
            </p>
          </div>

          <div>
            <p className="text-[#8f8f8f] uppercase text-[14px] tracking-wide mb-3">(Socials)</p>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-[#cacaca] text-[22px] sm:text-[20px] md:text-[24px] lg:text-[22px]">
                {["LinkedIn", "Whatsapp", "Github", "Resume"].map((item, i) => (
                    <a
                    key={i}
                    href="#"
                    className="group relative inline-block w-fit"
                    >
                    <span className="relative inline-block pb-1">
                        {item} 

                        {/* underline */}
                        <span
                        className="
                            absolute left-0 bottom-0 h-[1px] w-0
                            bg-[#ff4925]
                            transition-all duration-300
                            group-hover:w-full
                        "
                        />
                    </span>
                    </a>
                ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
