import React from "react";

export default function BottleShowcase() {
  return (
    <section className="mt-20 px-6 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
      <img
        src="/SorrentoBottle.png"
        alt="Sorrento Edition"
        className="w-auto max-h-[48rem] mx-auto object-contain"
      />
      <img
        src="/NantucketBottle.png"
        alt="Nantucket Edition"
        className="w-auto max-h-[48rem] mx-auto object-contain"
      />
      <img
        src="/BaliBottle.png"
        alt="Bali Edition"
        className="w-auto max-h-[48rem] mx-auto object-contain"
      />
    </section>
  );
}