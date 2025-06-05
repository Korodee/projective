import Image from "next/image";

export function ImpactSection() {
  return (
    <section className="relative w-full bg-[#210B0B] bg-gradient-to-r from-[#210B0B] to-[#3A211F] pt-0 pb-20 px-0 overflow-hidden">
      {/* Top right gradient accent */}
      <div className="absolute top-[-40px] right-[-80px] w-122 h-132 rounded-full bg-gradient-to-br from-[#FFB726]/25 to-transparent blur-3xl z-10 pointer-events-none" />
      <div className="relative z-20 max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-2 px-6 pt-22">
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
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-14 mb-6">
            We&apos;re helping out
            <br />
            Developers build a better
            <br />
            future; <span className="text-[#FFD166]">For the planet.</span>
          </h2>
          <p className="text-lg text-[#FAE8DD] mb-8">
            Lorem ipsum dolores est.
          </p>
        </div>
      </div>
      {/* Backed By Row */}
      <div className="relative z-20 max-w-5xl mx-auto mt-28 flex flex-col items-center">
        <span className="text-[#FFB726] text-sm font-semibold mb-6 tracking-widest">
          BACKED BY
        </span>
        <div className="flex flex-wrap justify-center gap-8 w-full">
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
