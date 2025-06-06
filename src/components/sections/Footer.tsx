import Image from "next/image";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";

export function Footer() {
  return (
    <footer className="relative w-full bg-white pt-10 px-0 border-t border-[#F5E9E0]">
      <div className="flex flex-col pb-12 md:flex-row max-w-7xl mx-auto items-center md:items-start justify-between gap-8 px-6">
        {/* Left: Logo */}
        <div className="flex-1 min-w-[180px] flex items-center md:items-start justify-center md:justify-start md:mb-0">
          <Image
            src="/proj-logo.svg"
            alt="Projective Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </div>
        {/* Right: Links and Socials */}
        <div className="flex-[2] flex flex-col w-full">
          <div className="flex flex-col mb-12 md:mb-0 md:flex-row w-full justify-between items-center md:items-start gap-8">
            {/* Links */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8 md:mb-0 text-center md:text-start items-center md:items-start">
              {/* Main */}
              <div>
                <div className="text-[#FFB726] text-xs font-semibold mb-3 tracking-widest uppercase text-center md:text-left">
                  Main
                </div>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-[#1E0A0A] font-medium hover:text-[#FFB726] text-sm"
                    >
                      For Investors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#1E0A0A] font-medium hover:text-[#FFB726] text-sm"
                    >
                      For Builders
                    </a>
                  </li>
                </ul>
              </div>
              {/* About */}
              <div>
                <div className="text-[#FFB726] text-xs font-semibold mb-3 tracking-widest uppercase text-center md:text-left">
                  About
                </div>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-[#1E0A0A] font-medium hover:text-[#FFB726] text-sm"
                    >
                      Company
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#1E0A0A] font-medium hover:text-[#FFB726] text-sm"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#1E0A0A] font-medium hover:text-[#FFB726] text-sm"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              {/* Build */}
              <div>
                <div className="text-[#FFB726] text-xs font-semibold mb-3 tracking-widest uppercase text-center md:text-left">
                  Build
                </div>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-[#1E0A0A] font-medium hover:text-[#FFB726] text-sm"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex flex-row items-center justify-center md:items-start md:justify-end gap-4 text-[#210B0B] text-2xl mt-1">
              <a href="#" aria-label="Discord" className="hover:text-[#FFB726]">
                <FaDiscord />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="hover:text-[#FFB726]"
              >
                <SiTelegram />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#FFB726]">
                <FaYoutube />
              </a>
              <a href="#" aria-label="X" className="hover:text-[#FFB726]">
                <RiTwitterXFill />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="absolute bottom-0 w-[280px] left-1/2 -translate-x-1/2 right-0 md:left-auto md:translate-x-0 text-xs text-[#E3A092] font-medium bg-[#FFF6F1] px-6 py-4 rounded-2xl md:rounded-l-3xl text-center md:text-right md:mt-0">
        © Projective 2025. All Rights reserved.
      </div>
    </footer>
  );
}
