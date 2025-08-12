import React from "react";

export default function FAQ() {
  return (
    <section className="mt-24 w-full max-w-4xl px-6 text-left">
      <h3 className="text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h4 className="font-semibold mb-1">Is it greasy or sticky?</h4>
          <p className="text-gray-700 mb-6">
            Nope. Contor sprays on light, dries fast, and leaves zero residue.
          </p>

          <h4 className="font-semibold mb-1">Does it leave a white cast?</h4>
          <p className="text-gray-700">
            Not at all. It’s fully transparent — no ghost effect, even on deeper skin tones.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Is it reef-safe and skin-safe?</h4>
          <p className="text-gray-700 mb-6">
            Yes! We use reef-friendly ingredients and formulate with sensitive skin in mind.
          </p>

          <h4 className="font-semibold mb-1">Does it work as well as regular sunscreen?</h4>
          <p className="text-gray-700">
          Yes! Your skin won’t notice any difference. Everyone else will!
          </p>
        </div>
      </div>
    </section>
  );
}