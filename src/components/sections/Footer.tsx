import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative w-full bg-white py-10 px-0 border-t border-[#F5E9E0]">
      <div className=" flex flex-col md:flex-row max-w-7xl mx-auto items-start justify-between gap-8 px-6">
        {/* Left: Logo */}
        <div className="flex-1 min-w-[180px] flex items-start">
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
          <div className="flex flex-row w-full justify-between items-start gap-4">
            {/* Links */}
            <div className="flex flex-row gap-16">
              {/* Main */}
              <div>
                <div className="text-[#FFB726] text-xs font-semibold mb-3 tracking-widest uppercase">
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
                <div className="text-[#FFB726] text-xs font-semibold mb-3 tracking-widest uppercase">
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
                <div className="text-[#FFB726] text-xs font-semibold mb-3 tracking-widest uppercase">
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
            <div className="flex flex-row items-start gap-4 text-[#210B0B] text-2xl mt-1">
              <a href="#" aria-label="Discord" className="hover:text-[#FFB726]">
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.074.074 0 0 0-.079.037c-.34.607-.719 1.396-.984 2.013a18.524 18.524 0 0 0-5.453 0 12.51 12.51 0 0 0-.997-2.013.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.369a.069.069 0 0 0-.032.027C.533 9.09-.32 13.579.099 18.021a.08.08 0 0 0 .031.056c2.104 1.548 4.13 2.489 6.102 3.104a.077.077 0 0 0 .084-.027c.472-.65.892-1.34 1.249-2.066a.076.076 0 0 0-.041-.104c-.662-.251-1.293-.549-1.903-.892a.077.077 0 0 1-.008-.127c.128-.096.256-.197.378-.299a.074.074 0 0 1 .077-.01c3.993 1.825 8.285 1.825 12.251 0a.075.075 0 0 1 .078.009c.122.102.25.203.379.299a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.904.892.076.076 0 0 0-.04.105c.36.726.78 1.416 1.248 2.066a.076.076 0 0 0 .084.028c1.978-.615 4.004-1.556 6.107-3.104a.077.077 0 0 0 .03-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="hover:text-[#FFB726]"
              >
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.036 16.572c-.329 0-.271-.124-.462-.438l-1.15-3.787 8.84-5.23c.396-.225.687-.1.555.355l-1.51 6.13c-.108.438-.396.555-.805.355l-2.23-1.63-1.075 1.037c-.119.119-.219.219-.45.219zm-2.197-2.3l.877 2.7c.1.3.2.4.438.4.237 0 .329-.087.438-.4l.877-2.7 5.6-3.3c.237-.137.237-.225 0-.362l-5.6-3.3-.877-2.7c-.1-.3-.2-.4-.438-.4-.237 0-.329.087-.438.4l-.877 2.7-5.6 3.3c-.237.137-.237.225 0 .362l5.6 3.3z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#FFB726]">
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.354 3.5 12 3.5 12 3.5s-7.354 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.218 0 12 0 12s0 3.782.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.646 20.5 12 20.5 12 20.5s7.354 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.782 24 12 24 12s0-3.782-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="hover:text-[#FFB726]">
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.53 6.47a.75.75 0 0 1 1.06 1.06L13.56 12l5.03 5.03a.75.75 0 0 1-1.06 1.06L12.5 13.06l-5.03 5.03a.75.75 0 0 1-1.06-1.06L11.44 12 6.41 6.97a.75.75 0 0 1 1.06-1.06L12.5 10.94l5.03-5.03z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className="absolute bottom-2 right-6 text-xs text-[#210B0B]/40 font-medium bg-[#FFF6F1]/60 px-4 py-2 rounded-lg">
            © Projective 2025. All Rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
