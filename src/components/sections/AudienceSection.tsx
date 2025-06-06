import Image from "next/image";

export function AudienceSection() {
  return (
    <section className="w-full bg-[#FFF6F1] py-20 px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-6">
        {/* For Investors Card */}
        <div className="relative flex-1 bg-white rounded-3xl p-10 flex flex-col justify-between overflow-visible">
          {/* Floating Icon */}
          <div className="absolute -top-25 -right-5 md:-top-22 md:-right-5 z-10">
            <Image
              src="/per-big.svg"
              alt="Sun Icon"
              width={260}
              height={260}
              className="w-[200px] h-[200px] md:w-[260px] md:h-[260px]"
            />
          </div>

          <div className="mt-6">
            <span className="text-[#FFD166] text-sm font-semibold mb-2 tracking-widest uppercase z-20">
              LOREM IPSUM
            </span>
            <h3 className="text-4xl font-bold text-[#2B2233] mt-2 mb-4 z-20">
              For <span className="font-extrabold">Investors</span>
            </h3>
            <p className="text-lg text-[#2B2233] opacity-70 mb-8 z-20">
              Lorem ipsum dolores. Vita scriptum dolores sead est. Lorem ipsum
              dolores. Vita scriptum dolores sead est. Lorem ipsum dolores. Vita
              scriptum dolores sead est.
            </p>
            <button className="bg-[#1E0A0A] cursor-pointer text-white rounded-full px-8 py-3 text-base font-medium w-fit z-20 transition-all duration-300 hover:bg-[#2B1816] hover:scale-105 hover:shadow-xl">
              Learn more
            </button>
          </div>
        </div>
        {/* For Builders Card */}
        <div className="relative flex-1 bg-white rounded-3xl p-10 flex flex-col justify-between overflow-visible">
          {/* Floating Icon */}

          <div className="absolute -top-25 -right-5 md:-top-22 md:-right-5 z-10">
            <Image
              src="/con-big.svg"
              alt="Hammer Icon"
              width={260}
              height={260}
              className="w-[200px] h-[200px] md:w-[260px] md:h-[260px]"
            />
          </div>
          <div className="mt-6">
            <span className="text-[#FFD166] text-sm font-semibold mb-2 tracking-widest uppercase z-20">
              LOREM IPSUM
            </span>
            <h3 className="text-4xl font-bold text-[#2B2233] mt-2 mb-4 z-20">
              For <span className="font-extrabold">Builders</span>
            </h3>
            <p className="text-lg text-[#2B2233] opacity-70 mb-8 z-20">
              Lorem ipsum dolores. Vita scriptum dolores sead est. Lorem ipsum
              dolores. Vita scriptum dolores sead est. Lorem ipsum dolores. Vita
              scriptum dolores sead est.
            </p>
            <button className="bg-[#1E0A0A] cursor-pointer text-white rounded-full px-8 py-3 text-base font-medium w-fit z-20 transition-all duration-300 hover:bg-[#2B1816] hover:scale-105 hover:shadow-xl">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
