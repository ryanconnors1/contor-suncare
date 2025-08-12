import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import WhatIsContor from "./components/WhatIsContor";
import Features from "./components/Features";
import WaitlistForm from "./components/WaitlistForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeadlineImage from "./components/HeadlineImage";
import BottleShowcase from "./components/BottleShowcase";
import { Link } from "react-scroll";

export default function App() {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const checkPosition = () => {
      const button = buttonRef.current;
      const headline = document.getElementById("headline-image");
      const waitlist = document.getElementById("waitlist");
      const footer = document.getElementById("footer");

      if (button && headline && waitlist && footer) {
        const buttonRect = button.getBoundingClientRect();
        const headlineRect = headline.getBoundingClientRect();
        const waitlistRect = waitlist.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        const overlaps = (sectionRect) =>
          buttonRect.bottom > sectionRect.top &&
          buttonRect.top < sectionRect.bottom;

        const isOverWhite = [
          overlaps(headlineRect),
          overlaps(waitlistRect),
          overlaps(footerRect),
        ].some(Boolean);

        setIsWhiteBackground(isOverWhite);
      }
    };

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", checkPosition);
    checkPosition();

    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  return (
    <main className="bg-[#F5F3EF] text-black flex flex-col items-center text-center relative">
      <Header />
      <HeadlineImage />
      <WhatIsContor />
      <BottleShowcase />
      <Features />
      <WaitlistForm />
      <FAQ />
      <Footer />

      {/* Floating CTA Button */}
      <Link
        to="waitlist"
        smooth={true}
        duration={500}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          ref={buttonRef}
          className={`px-8 py-4 rounded-full text-lg md:text-xl font-semibold animate-bounce transition ring-4 shadow-md ${
            isWhiteBackground
              ? "bg-white text-black ring-black hover:bg-gray-200"
              : "bg-black text-white ring-white hover:bg-[#222]"
          }`}
        >
          Join Waitlist
        </button>
      </Link>
    </main>
  );
}