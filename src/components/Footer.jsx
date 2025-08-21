import React from "react";
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-24 w-full bg-black text-white py-10 px-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 text-center md:text-left">
        {/* Socials Section */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <ul className="flex gap-4 md:gap-0 md:flex-col md:space-y-2">
            <li>
              <a
                href="https://instagram.com/getcontorsuncare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram: @getcontorsuncare"
                title="Instagram: @getcontorsuncare"
                className="flex items-center gap-2 hover:text-gray-400 transition"
             >
                <FaInstagram className="text-2xl" aria-hidden="true" />
                <span className="hidden md:inline">@getcontorsuncare</span>
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@getcontorsuncare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok: @getcontorsuncare"
                title="TikTok: @getcontorsuncare"
                className="flex items-center gap-2 hover:text-gray-400 transition"
              >
                <FaTiktok className="text-2xl" aria-hidden="true" />
                <span className="hidden md:inline">@getcontorsuncare</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/getcontorsuncare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook: @getcontorsuncare"
                title="Facebook: @getcontorsuncare"
                className="flex items-center gap-2 hover:text-gray-400 transition"
              >
                <FaFacebook className="text-2xl" aria-hidden="true" />
                <span className="hidden md:inline">@getcontorsuncare</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/contorsuncare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter: @contorsuncare"
                title="Twitter: @contorsuncare"
                className="flex items-center gap-2 hover:text-gray-400 transition"
              >
                <FaTwitter className="text-2xl" aria-hidden="true" />
                <span className="hidden md:inline">@contorsuncare</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start">
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