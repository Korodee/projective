import Image from "next/image";

export function ImpactSection() {
  return (
    <section className="relative w-full impact-clip -mt-36 bg-[#210B0B] bg-gradient-to-r from-[#210B0B] to-[#3A211F] pt-0 px-0 py-28 overflow-hidden">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.08 Q 0.5,0.18 1,0.08 L 1,0.92 Q 0.5,1.08 0,0.92 Z" />
          </clipPath>
        </defs>
      </svg>
      {/* Top right gradient accent */}
      <div className="absolute top-[-40px] right-[-80px] w-122 h-132 rounded-full bg-gradient-to-br from-[#FFB726]/25 to-transparent blur-3xl z-10 pointer-events-none" />

      <div className="relative z-20 max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-2 px-6 pt-15 md:pt-60">
        {/* Left: Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/solar.png"
              alt="Solar installation"
              width={600}
              height={360}
              className="w-full h-80 object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <h2 className="text-4xl md:text-5xl font-medium text-white mt-6 md:mt-0 leading-14 mb-6">
            We&apos;re helping out <br />
            Developers build a better <br />
            future; <span className="text-[#FFD166]">For the planet.</span>
          </h2>
          <p className="text-lg text-[#FAE8DD] mb-8">
            Lorem ipsum dolores est.
          </p>
        </div>
      </div>

      {/* Backed By Row */}
      <div className="relative z-20 max-w-5xl mx-auto mt-10 md:mt-28 flex flex-col items-center">
        <span className="text-[#FFB726] text-sm font-semibold mb-6 tracking-widest">
          BACKED BY
        </span>
        <div className="flex flex-wrap justify-center px-3 md:px-0 gap-8 w-full">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src="/investor.svg"
                alt="Investor logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
