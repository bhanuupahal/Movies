import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white border-t border-gray-800 py-6">
    <div className="container mx-auto flex flex-col items-center space-y-4">
      {/* Large image centered */}
      <div className="flex justify-center">
        <img
          src="/images/movie-png (2).webp"
          alt="Movie Logo"
          className="w-32 h-32 object-contain"
        />
      </div>
      {/* Centered content */}
      <div className="flex flex-col items-center space-y-2">
        <span className="font-extrabold text-3xl tracking-wide">
          Latest Movies Ka <span className="text-red-600">Khazana</span>
        </span>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-300 mt-2 text-center">
          <span>
            Contact Us (India):{" "}
            <a
              href="mailto:india@movieskhazana.com"
              className="underline"
            >
              india@movieskhazana.com 
            </a>
          </span>
          <span>
            Contact Us (USA):{" "}
            <a
              href="mailto:usa@movieskhazana.com"
              className="underline"
            >
              usa@movieskhazana.com
            </a>
          </span>
          <span>
            Contact Us (UK):{" "}
            <a
              href="mailto:uk@movieskhazana.com"
              className="underline"
            >
              uk@movieskhazana.com
            </a>
          </span>
        </div>
        <span className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Latest Movies Ka Khazana. All rights reserved.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;