import React from "react";

export default function FAQ() {
  return (
    <section className="mt-24 w-full max-w-4xl px-6 text-left">
      <h3 className="text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h4 className="font-semibold mb-1">Does it work as well as regular sunscreen?</h4>
          <p className="text-gray-700 mb-6">
            Yes! Your skin won’t notice any difference. Everyone else will!
          </p>

          <h4 className="font-semibold mb-1">How strong is the scent?</h4>
          <p className="text-gray-700">
            Noticeable, but not overpowering — a subtle trail.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-1">When will I get my bottle?</h4>
          <p className="text-gray-700 mb-6">
            Join the waitlist — we’ll email you as soon as your edition opens for early access.
          </p>

          <h4 className="font-semibold mb-1">Why would anyone ever use normal sunscreen again?</h4>
          <p className="text-gray-700">Great question! 🤭</p>
        </div>
      </div>
    </section>
  );
}