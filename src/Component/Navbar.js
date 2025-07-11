import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Bollywood", path: "/bollywood" },
  { label: "Hollywood", path: "/hollywood" },
  { label: "Telegu", path: "/telegu" },
  { label: "Tamil", path: "/tamil" },
  { label: "TV Show", path: "/tvshow" },
  { label: "Genre", path: "/genre" },
];

const quickLinks = [
  {
    label: "Bollywood Movies",
    color: "bg-pink-600 hover:bg-pink-700",
  },
  {
    label: "Dual Audio Content",
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    label: "Hollywood Movies",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    label: "Join Our Telegram",
    color: "bg-blue-500 hover:bg-blue-600 text-gray-900",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false); 
  };

  return (
    <>
      <nav className="bg-gray-700 py-5 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Hamburger for mobile */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-gray-100 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          {/* Navbar Items */}
          <div className="flex-1 flex justify-center">
            <div className="hidden lg:flex space-x-10">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-gray-100 hover:text-yellow-400 font-semibold text-lg px-4 py-2 rounded transition-all duration-200 cursor-pointer ${
                    item.label === "Home" ? "font-bold tracking-wide" : ""
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          
          {/*  Search AND Login */}
          <div className="flex items-center gap-4 ml-2">
           
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-16 sm:w-24 px-2 py-1 rounded-l-full bg-gray-600 text-gray-100 focus:outline-none text-sm"
              />
              <button className="bg-yellow-400 px-2 py-1 rounded-r-full flex items-center justify-center hover:bg-yellow-500 transition h-8">
                <svg
                  className="h-4 w-4 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>

            {/* Login */}
            <Link
              to="/login"
              className="text-white hover:underline text-sm sm:text-base font-medium"
            >
              Login
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-gray-800 px-4 pt-4 pb-2">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-gray-100 hover:text-yellow-400 font-semibold text-lg px-4 py-2 rounded transition-all duration-200 cursor-pointer ${
                    item.label === "Home" ? "font-bold tracking-wide" : ""
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Quick Links Buttons */}
      <div className="bg-gray-900 w-full">
        <div className="container mx-auto grid grid-cols-2 sm:flex sm:flex-wrap justify-center space-x-0 sm:space-x-6 py-4 gap-2">
          {quickLinks.map((btn) => (
            <button
              key={btn.label}
              className={`${btn.color} text-white font-bold py-3 px-4 sm:py-4 sm:px-8 lg:py-6 lg:px-12 rounded-xl shadow-lg text-base sm:text-lg lg:text-2xl transition-all duration-200`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
