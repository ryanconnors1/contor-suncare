import React from "react";

export default function WhatIsContor() {
  return (
    <section id="about-contor" className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Big uppercase headline */}
        <h2 className="text-center uppercase font-sans font-medium tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl">
          We believe suncare
          <br className="hidden sm:block" />
          should smell great.
        </h2>

        {/* Centered serif body copy */}
        <div className="mt-6 mx-auto max-w-2xl text-center font-sans text-base sm:text-lg leading-relaxed text-gray-900 space-y-4">
          <p>Why put something on your body if you don’t like the smell?</p>
          <p>That’s why we built Contor — fragrance-forward SPF you’ll actually reach for, with protection you can trust.</p>
        </div>

        <p className="mt-6 sm:mt-8 text-center italic text-base sm:text-lg md:text-xl text-gray-900 font-medium">
          Smell great, stay protected. That’s Contor.
        </p>
      </div>
    </section>
  );
}