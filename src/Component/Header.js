import React from "react";

const Header = () => (
  <header className="bg-gray-900 py-6 sm:py-10 shadow-md">
    <div className="container mx-auto flex items-center justify-center px-4">
      <img
        src="/images/movie-png (1).webp"
        alt="Movies Ka Khazana Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-4 object-contain"
        style={{ marginLeft: "-2rem" }}
      />
      <h1 className="text-white text-2xl sm:text-5xl font-bold tracking-wide uppercase text-center sm:text-left">
        Latest Movies Ka <span className="text-red-600">Khazana</span>
      </h1>
    </div>
  </header>
);

export default Header;
