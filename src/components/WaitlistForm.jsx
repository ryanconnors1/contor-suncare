import React, { useState } from "react";

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // TODO: paste your Google Apps Script Web App URL below once you deploy it
  const ENDPOINT = "https://script.google.com/macros/s/AKfycbwlRVwmH491VnQeAR77-eZxe_JSS5uBhZwqIEL8bLu5HEdNjTcoyrqnQKXD8J-70zqQ/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const email = form.email.value.trim();
    const scent = form.scent.value || "";
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const honey = form.website?.value || ""; // spam trap
    const referrer = document.referrer || "";
    const userAgent = navigator.userAgent || "";

    if (!email) {
      setLoading(false);
      setMessage("Please enter a valid email.");
      return;
    }

    // If the hidden honeypot is filled, silently ignore
    if (honey) {
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("scent", scent);
      formData.append("referrer", referrer);
      formData.append("userAgent", userAgent);

      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: formData
      });

      const result = await res.json();
      console.log("Server response:", result);

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Submission failed");
      }
      setMessage("You’re on the list. We’ll be in touch soon ✉️");
      form.reset();
    } catch (err) {
      console.error("Submission error:", err);
      console.log("Full error object:", JSON.stringify(err, null, 2));
      setMessage("Couldn’t submit right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="waitlist"
      className="w-full px-6 py-28 bg-black text-white flex flex-col items-center justify-center border-t-2 border-white/20"
    >
      <div className="max-w-2xl w-full">
        <div className="bg-white text-black rounded-3xl p-8 md:p-10 shadow-2xl ring-1 ring-black/10 mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-center">
            Get Early Access
          </h2>
          <p className="text-base md:text-lg text-neutral-700 mb-1 text-center">
            Early access. Exclusive discounts. First dibs on your scent.
          </p>
          <p className="text-xs md:text-sm text-neutral-500 mb-7 text-center">
            No spam — just launch updates.
          </p>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" />
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
              className="w-full px-5 py-3.5 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base text-black placeholder:text-neutral-500 text-left"
              required
            />

            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name"
              className="w-full px-5 py-3.5 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base text-black placeholder:text-neutral-500 text-left"
              required
            />

            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3.5 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base text-black placeholder:text-neutral-500 text-left"
              required
            />

            <label htmlFor="scent" className="sr-only">Favorite scent (optional)</label>
            <select
              id="scent"
              name="scent"
              className="w-full px-5 py-3.5 rounded-full border border-neutral-300 bg-white text-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>Select your favorite scent (optional)</option>
              <option value="Sorrento">Sorrento Edition</option>
              <option value="Nantucket">Nantucket Edition</option>
              <option value="Bali">Bali Edition</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3.5 rounded-full font-semibold text-base transition ${loading ? "bg-neutral-300 text-neutral-600 cursor-not-allowed" : "bg-black text-white hover:bg-neutral-900"}`}
            >
              {loading ? "Submitting…" : "Join Waitlist"}
            </button>
          </form>
          {message && (
            <p className="mt-3 text-sm text-center text-neutral-700" aria-live="polite">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
}