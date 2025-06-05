import { Navbar } from "@/components/layout/Navbar";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[100vh] flex flex-col">
      <div className="w-full absolute top-0 left-0 z-10" />
      <Navbar />
      <div className="h-[87vh] bg-gradient-to-r from-[#FFB726] to-[#FFD858]">
        <div className="relative flex items-center mt-4 rounded-t-4xl px-3 py-3 bg-[#FFF6F1] overflow-hidden">
          {/* Background image and overlay */}
          <div className="absolute inset-0 h-[100vh] z-0">
            <div className="w-full h-full bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 bg-[#FFF6F1] opacity-92" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 w-full h-[87vh] flex flex-col lg:flex-row gap-6">
            {/* Left Content */}
            <div className="  items-center justify-center lg:w-1/2 px-[4rem] pt-[5rem] ">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/proj-logo.svg"
                  alt="Projective Logo"
                  width={207.16}
                  height={40}
                  style={{ width: "207.16px", height: "40px" }}
                  className="object-contain"
                />
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl font-medium text-gray-900 leading-[110%] mb-6">
                Time to <span className="text-[#FFB726]">change</span>
                <br />
                the world.
              </h1>

              {/* Description */}
              <p className="text-lg text-[#55311599] w-full lg:w-[83%] mb-6 leading-relaxed">
                Projective is a marketplace for commercial solar developers to
                finance their construction loans more efficiently via tokenizing
                the senior debt via RWAs.
              </p>

              {/* CTA Button */}
              <button className="bg-gradient-to-r from-[#FFB726] to-[#FFD858] cursor-pointer hover:bg-yellow-500 text-black px-14 font-medium py-2 rounded-full text-sm transition-colors duration-200 mb-40 shadow-lg">
                Get Started
              </button>

              {/* Scroll Indicator */}
              <div className="flex gap-4 items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#55311599]">
                  <ChevronDownIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-[#55311599] text-sm font-bold tracking-wide">
                  SCROLL TO LEARN MORE
                </span>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex-1  min-h-full">
              <div className="relative h-full">
                <div className="relative rounded-3xl h-full overflow-hidden w-full ">
                  <Image
                    src="/hero-img.jpg"
                    alt="Solar technician working on solar panels"
                    className="w-full h-full object-cover rounded-3xl"
                    width={1000}
                    height={1000}
                  />
                  {/* Transparent color overlay*/}
                  <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-[#FFB726]/50 to-transparent pointer-events-none" />
                  {/* Info Card */}
                  <div className="absolute left-6 bottom-13 bg-gradient-to-r from-[#FFB726] to-[#FFD858] rounded-2xl w-full md:w-[60%] p-4 shadow-lg opacity-80">
                    <div className="text-xs font-semibold tracking-wider uppercase mb-1 text-black">
                      NASHVILLE, TN
                    </div>
                    <div className="text-xl font-medium mb-1 text-white">
                      SolarLife Inc
                    </div>
                    <div className="text-md font-medium text-white">
                      $89,000
                    </div>
                  </div>
                  {/* Pagination Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
