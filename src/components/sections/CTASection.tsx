import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative w-full min-h-[380px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/CTA-img.png"
        alt="Solar CTA"
        fill
        className="object-cover w-full h-full absolute inset-0 z-0"
        priority
      />
      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full py-24">
        <span className="text-[#FFB726] text-lg font-semibold mb-4 tracking-widest uppercase">
          LOREM IPSUM
        </span>
        <h2 className="text-5xl md:text-6xl font-semibold text-white mb-12 text-center">
          Time to get started.
        </h2>
        <button className="bg-gradient-to-r from-[#FFD166] to-[#FFB800] text-[#2B1816] font-medium rounded-full px-12 py-2 text-sm shadow-md hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
