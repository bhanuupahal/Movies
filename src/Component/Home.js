import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  { src: "/images/maa.jpeg", label: "MAA (1-6-25)" },
  { src: "/images/ace.jpeg", label: "ACE (1-6-25)" },
  { src: "/images/bazzar.jpeg", label: "BAZZAR (1-6-25)" },
  { src: "/images/devar.jpeg", label: "DEVAR (1-6-25)" },
  { src: "/images/housefull5.jpg", label: "HOUSEFULL5 (1-6-25)" },
  { src: "/images/kalki.jpeg", label: "KALKI (1-6-25)" },
  { src: "/images/mahi.jpeg", label: "MAHI (1-6-25)" },
  { src: "/images/metro.jpg", label: "METRO (1-6-25)" },
  { src: "/images/salaar.jpeg", label: "SALAAR (1-6-25)" },
  { src: "/images/sitaare.jpg", label: "SITAARE (1-6-25)" },
  { src: "/images/superman.jpeg", label: "SUPERMAN (1-6-25)" },
  { src: "/images/tiger.jpeg", label: "TIGER (1-6-25)" },
];

const totalPages = 2;
function getShuffledImages(images, page) {
  const arr = [...images];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (i + page) % arr.length;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Home = () => {
  const [page, setPage] = useState(1);

  const shuffledImages = getShuffledImages(images, page);

  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {shuffledImages.map((img, idx) => (
          <Link
            to={`/movie/${idx}`}
            key={idx}
            className="p-2 cursor-pointer transition-transform flex flex-col items-center w-40 sm:w-48 md:w-56"
          >
            <div className="relative w-full flex justify-center">
              <img
                src={img.src}
                alt={`Movie ${idx + 1}`}
                className="rounded-lg shadow-lg object-contain bg-gray-800 transition-all duration-200 w-full h-64"
              />
              {img.label && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 px-2 py-1 rounded-b text-white text-sm font-bold w-full text-center"
                  style={{
                    maxWidth: "12rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {img.label}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded ${
              page === i + 1
                ? "bg-yellow-400 text-gray-900 font-bold"
                : "bg-gray-800 text-gray-200"
            } transition`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
