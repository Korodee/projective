"use client";

import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white backdrop-blur sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-4 md:px-0 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/proj-logo.svg"
            alt="Projective Logo"
            width={124.29}
            height={24}
            style={{ width: "124.29px", height: "24px" }}
            className="object-contain"
          />
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-gray-700 text-sm font-medium hover:text-yellow-500 transition"
          >
            For Investors
          </a>
          <a
            href="#"
            className="text-gray-700 text-sm font-medium hover:text-yellow-500 transition"
          >
            For Builders
          </a>
          <button className="flex items-center bg-[#1E0A0A] cursor-pointer rounded-2xl focus:outline-none shadow-[0_8px_12px_0_rgba(255,106,0,0.12)] overflow-hidden group transition-all duration-300 hover:shadow-[0_8px_16px_0_rgba(255,106,0,0.2)] hover:scale-[1.02]">
            <span className="flex p-2 items-center justify-center transition-all duration-300 group-hover:translate-x-4">
              <Image src="/symbol.svg" alt="Symbol" width={12} height={16} />
            </span>
            <span className="flex-1 px-8 py-2 rounded-2xl flex items-center justify-center h-full text-xs font-medium text-[#2B1816] bg-gradient-to-r from-[#FFD166] to-[#FFB800] transition-all duration-300 group-hover:from-[#FFD977] group-hover:to-[#FFC233] group-hover:translate-x-[-.9rem]">
              Get Started
            </span>
          </button>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-[#1E0A0A] flex items-center px-2 py-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="hidden">
          <a
            href="#"
            className="text-gray-700 text-base font-medium hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            For Investors
          </a>
          <a
            href="#"
            className="text-gray-700 text-base font-medium hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            For Builders
          </a>
          <button className="flex items-center bg-[#1E0A0A] cursor-pointer rounded-2xl focus:outline-none shadow-[0_8px_12px_0_rgba(255,106,0,0.12)] overflow-hidden group transition-all duration-300 hover:shadow-[0_8px_16px_0_rgba(255,106,0,0.2)] hover:scale-[1.02]">
            <span className="flex p-2 items-center justify-center transition-all duration-300 group-hover:translate-x-4">
              <Image src="/symbol.svg" alt="Symbol" width={12} height={16} />
            </span>
            <span className="flex-1 px-8 py-2 rounded-2xl flex items-center justify-center h-full text-xs font-medium text-[#2B1816] bg-gradient-to-r from-[#FFD166] to-[#FFB800] transition-all duration-300 group-hover:from-[#FFD977] group-hover:to-[#FFC233] group-hover:translate-x-[-.9rem]">
              Get Started
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
