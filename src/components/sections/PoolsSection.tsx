import Image from "next/image";

export function PoolsSection() {
  return (
    <section className="w-full bg-[#FFF6F1] py-24 px-0">
      {/* Top right gradient accent */}
      <div className="absolute top-[-40px] right-[-80px] w-122 h-132 rounded-full bg-gradient-to-br from-[#FFB726]/25 to-transparent blur-3xl z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start px-6">
        {/* Left: Heading and Subtext */}
        <div className="w-full my-auto md:w-[35%] flex flex-col justify-center items-start text-left">
          <span className="text-[#FFD166] text-sm font-semibold mb-2 tracking-widest uppercase">
            LOREM IPSUM
          </span>
          <h2 className="text-5xl font-semibold text-[#210B0B] mb-10">
            Our Pools
          </h2>
          <p className="text-lg text-[#210B0B] opacity-70">
            Lorem ipsum dolores.
          </p>
        </div>

        {/* Right: Pool Cards */}
        <div className="w-full md:w-[65%] flex flex-col md:flex-row gap-8 justify-end">
          {/* Permanent Pool Card */}
          <div className="bg-[#FFF6F1] rounded-4xl border w-full flex flex-col">
            <div className="py-4 px-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/per-small.svg"
                  alt="Permanent Pool"
                  width={32}
                  height={32}
                />
                <span className="text-[#210B0B] text-lg font-medium">
                  Permanent Pool I
                </span>
              </div>
            </div>
            <div className="bg-white rounded-4xl shadow-md py-6 w-full flex flex-col gap-2">
              <div className="text-sm text-[#FFD166] px-6 font-bold">
                INVESTED SUM
              </div>
              <div className="text-3xl font-medium px-6 text-[#1E0A0A] mb-4">
                $42,952.47
              </div>
              <div className="flex w-full bg-gradient-to-r from-[#FFD166] to-[#FFB800] overflow-hidden mb-4">
                <div className="flex-1 text-[#55311599] text-sm font-bold py-3 px-4 text-left">
                  INTEREST EARNED
                  <br />
                  <span className="text-xl text-[#1E0A0A] font-medium">
                    $10,321.98
                  </span>
                </div>
                <div className="flex-1 rounded-l-2xl bg-[#A5000033] text-[#55311599] text-sm font-bold py-3 px-4 text-left border-l border-[#FFD166]/40">
                  TOTAL ROI
                  <br />
                  <span className="text-xl text-[#1E0A0A] font-medium">
                    113%
                  </span>
                </div>
              </div>
              <div className="text-sm text-[#55311599] px-4 flex flex-col gap-[.4rem]">
                <div className="flex justify-between">
                  <span>Average APY</span>
                  <span className="font-medium text-[#1E0A0A]">18%</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest Earned</span>
                  <span className="font-medium text-[#1E0A0A]">$4,649.23</span>
                </div>
                <hr className="border-[#FAE8DD] my-2" />
                <div className="flex justify-between">
                  <span>Interest Schedule</span>
                  <span className="font-medium text-[#1E0A0A]">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Interest Date</span>
                  <span className="font-medium text-[#1E0A0A]">02/01/2025</span>
                </div>
                <div className="flex justify-between">
                  <span>End Date of Loan</span>
                  <span className="font-medium text-[#1E0A0A]">12/12/2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Construction Pool Card */}
          <div className="bg-[#FFF6F1] rounded-4xl border w-full flex flex-col">
            <div className="py-4 px-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/con-small.svg"
                  alt="Construction Pool"
                  width={32}
                  height={32}
                />
                <span className="text-[#210B0B] text-lg font-medium">
                  Construction Pool I
                </span>
              </div>
            </div>
            <div className="bg-white rounded-4xl shadow-md py-6 w-full flex flex-col gap-2">
              <div className="text-sm text-[#FFD166] px-6 font-bold">
                INVESTED SUM
              </div>
              <div className="text-3xl font-medium px-6 text-[#1E0A0A] mb-4">
                $42,952.47
              </div>
              <div className="flex w-full bg-gradient-to-r from-[#FFD166] to-[#FFB800] overflow-hidden mb-4">
                <div className="flex-1 text-[#55311599] text-sm font-bold py-3 px-4 text-left">
                  INTEREST EARNED
                  <br />
                  <span className="text-xl text-[#1E0A0A] font-medium">
                    $10,321.98
                  </span>
                </div>
                <div className="flex-1 rounded-l-2xl bg-[#A5000033] text-[#55311599] text-sm font-bold py-3 px-4 text-left border-l border-[#FFD166]/40">
                  TOTAL ROI
                  <br />
                  <span className="text-xl text-[#1E0A0A] font-medium">
                    113%
                  </span>
                </div>
              </div>
              <div className="text-sm text-[#55311599] px-4 flex flex-col gap-[.4rem]">
                <div className="flex justify-between">
                  <span>Average APY</span>
                  <span className="font-medium text-[#1E0A0A]">18%</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest Earned</span>
                  <span className="font-medium text-[#1E0A0A]">$4,649.23</span>
                </div>
                <hr className="border-[#FAE8DD] my-2" />
                <div className="flex justify-between">
                  <span>Interest Schedule</span>
                  <span className="font-medium text-[#1E0A0A]">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Interest Date</span>
                  <span className="font-medium text-[#1E0A0A]">02/01/2025</span>
                </div>
                <div className="flex justify-between">
                  <span>End Date of Loan</span>
                  <span className="font-medium text-[#1E0A0A]">12/12/2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
