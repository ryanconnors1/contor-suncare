import React from "react";
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-24 w-full bg-black text-white py-10 px-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Socials Section */}
        <div className="flex flex-col items-center space-y-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex gap-5">
            <a
              href="https://instagram.com/getcontorsuncare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram: @getcontorsuncare"
              title="Instagram: @getcontorsuncare"
              className="hover:text-gray-400 transition"
            >
              <FaInstagram className="text-2xl" aria-hidden="true" />
            </a>
            <a
              href="https://tiktok.com/@getcontorsuncare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok: @getcontorsuncare"
              title="TikTok: @getcontorsuncare"
              className="hover:text-gray-400 transition"
            >
              <FaTiktok className="text-2xl" aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com/getcontorsuncare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook: @getcontorsuncare"
              title="Facebook: @getcontorsuncare"
              className="hover:text-gray-400 transition"
            >
              <FaFacebook className="text-2xl" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/contorsuncare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter: @contorsuncare"
              title="Twitter: @contorsuncare"
              className="hover:text-gray-400 transition"
            >
              <FaTwitter className="text-2xl" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:contorsuncare@gmail.com"
              className="underline hover:text-gray-400"
            >
              contorsuncare@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
