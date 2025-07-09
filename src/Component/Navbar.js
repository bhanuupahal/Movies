import React from "react";
import { useNavigate } from "react-router-dom";

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

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <nav className="bg-gray-700 py-5 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Navbar Items  */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-10">
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
          {/* Search Bar Right */}
          <div className="flex items-center ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-l bg-gray-600 text-gray-100 focus:outline-none"
            />
            <button className="bg-yellow-400 px-3 py-2 rounded-r flex items-center justify-center hover:bg-yellow-500 transition">
              {/* Search Icon SVG */}
              <svg
                className="h-5 w-5 text-gray-800"
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
        </div>
      </nav>
      {/* Quick Links Buttons */}
      <div className="bg-gray-900 w-full">
        <div className="container mx-auto flex justify-center space-x-6 py-4">
          {quickLinks.map((btn) => (
            <button
              key={btn.label}
              className={`${btn.color} text-white font-bold py-6 px-12 rounded-xl shadow-lg text-xl lg:text-2xl transition-all duration-200`}
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