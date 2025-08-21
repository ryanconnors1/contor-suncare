import React from "react";
import { FaSprayCan, FaShieldAlt, FaWind } from "react-icons/fa";

export default function Features() {
  return (
    <section className="mt-16 mb-24 px-6 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
      <div className="bg-black text-white rounded-2xl shadow-md p-6">
        <FaSprayCan className="text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Smells Incredible</h3>
        <p className="text-gray-300">Crafted with fine fragrance notes. Built for sensitive skin.</p>
      </div>
      <div className="bg-black text-white rounded-2xl shadow-md p-6">
        <FaShieldAlt className="text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">SPF 50 Protection</h3>
        <p className="text-gray-300">Broad‑spectrum SPF 50. Water & sweat resistant.</p>
      </div>
      <div className="bg-black text-white rounded-2xl shadow-md p-6">
        <FaWind className="text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Wide‑Spray Mist</h3>
        <p className="text-gray-300">Wide, even mist for quick, effortless application.</p>
      </div>
    </section>
  );
}