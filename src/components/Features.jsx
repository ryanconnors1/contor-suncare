import React from "react";
import { FaSprayCan, FaShieldAlt, FaHandsWash } from "react-icons/fa";

export default function Features() {
  return (
    <section className="mt-16 mb-24 px-6 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
      <div className="bg-black text-white rounded-2xl shadow-md p-6">
        <FaSprayCan className="text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Smells Incredible</h3>
        <p className="text-gray-300">Crafted with fine fragrance notes — no coconut, no chemicals.</p>
      </div>
      <div className="bg-black text-white rounded-2xl shadow-md p-6">
        <FaShieldAlt className="text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">SPF 50 Protection</h3>
        <p className="text-gray-300">Dermatologist-recommended, broad-spectrum UV defense.</p>
      </div>
      <div className="bg-black text-white rounded-2xl shadow-md p-6">
        <FaHandsWash className="text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">No Goop. Just Spray.</h3>
        <p className="text-gray-300">No white cast. No sticky hands. Just clean coverage.</p>
      </div>
    </section>
  );
}