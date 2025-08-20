import React from "react";

export default function WhatIsContor() {
  return (
    <section id="about-contor" className="w-full bg-white py-14">
      <div className="mx-auto max-w-4xl px-6">
        <div className="md:flex md:gap-10 md:items-stretch">
          {/* Side label column, vertically centered on desktop */}
          <div className="md:w-1/3 mb-6 md:mb-0 md:flex md:flex-col md:justify-center md:self-stretch">
            <h2 className="text-left md:text-right text-xl md:text-2xl font-semibold tracking-tight">
              Our Mission at Contor
            </h2>
            <div className="mt-3 md:mt-0 h-px bg-black/10 md:hidden" />
          </div>

          {/* Content column with vertical rule */}
          <div className="md:w-2/3 border-l-4 border-black pl-6">
            <div className="max-w-[62ch]">
              <p className="text-[17px] leading-relaxed text-gray-900">
                We believe suncare should smell great — why put something on your body if you don’t like the smell?
              </p>
              <p className="mt-3 text-[17px] leading-relaxed text-gray-900">
                That’s why we built Contor—fragrance-forward SPF you’ll actually reach for, with protection you can trust.
              </p>
              <p className="mt-4 italic text-xl md:text-[20px] leading-snug text-gray-900">
                Smell your best, stay protected. That’s Contor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}