import React from "react";

const Header = () => (
  <header className="bg-gray-900 py-10 shadow-md">
    <div className="container mx-auto flex items-center justify-center">
      <img
        src="/images/movie-png (1).webp"
        alt="Movies Ka Khazana Logo"
        className="h-12 w-12 mr-4 object-contain"
        style={{ marginLeft: "-2rem" }}
      />
      <h1 className="text-white text-5xl font-bold tracking-wide uppercase">
        Latest Movies Ka <span className="text-red-600">Khazana</span>
      </h1>
    </div>
  </header>
);

export default Header;