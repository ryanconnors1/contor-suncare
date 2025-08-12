import React from "react";

export default function WaitlistForm() {
  return (
    <section
      id="waitlist"
      className="w-full px-6 py-24 bg-black text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Get Early Access
        </h2>
        <p className="text-lg text-gray-300 mb-1">
          Early access. Exclusive discounts. First dibs on your scent.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          No spam — just launch updates.
        </p>

        <form className="flex flex-col gap-4 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-2/3 px-5 py-4 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white text-base text-black placeholder:text-left"
            required
          />

          <select
            className="w-2/3 px-5 py-4 rounded-full border border-gray-600 text-black text-base bg-white focus:outline-none focus:ring-2 focus:ring-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select your favorite scent (optional)
            </option>
            <option value="Sorrento">Sorrento Edition</option>
            <option value="Nantucket">Nantucket Edition</option>
            <option value="Bali">Bali Edition</option>
          </select>

          <button
            type="submit"
            className="w-2/3 bg-white text-black px-6 py-4 rounded-full font-semibold text-base hover:bg-gray-200 transition"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}