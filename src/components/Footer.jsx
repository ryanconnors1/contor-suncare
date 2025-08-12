import React from "react";
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-24 w-full bg-black text-white py-10 px-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-start gap-x-64 gap-y-8 text-center md:text-left">
        {/* Socials Section */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <a
            href="https://instagram.com/contorsuncareco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 transition"
          >
            <FaInstagram className="text-2xl" />
            @contorsuncareco
          </a>
          <a
            href="https://tiktok.com/@contorsuncareco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 transition"
          >
            <FaTiktok className="text-2xl" />
            @contorsuncareco
          </a>
          <a
            href="https://twitter.com/contorsuncareco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 transition"
          >
            <FaTwitter className="text-2xl" />
            @contorsuncareco
          </a>
          <a
            href="https://facebook.com/contorsuncareco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 transition"
          >
            <FaFacebook className="text-2xl" />
            @contorsuncareco
          </a>
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