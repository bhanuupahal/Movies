import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const movieData = [
  {
    title: "TIGER",
    src: "/images/tiger.jpeg",
    description: "An action-packed thriller with twists and turns.",
    genre: "Action",
    releaseYear: 2025,
    rating: "7.5",
    cast: ["Hero X", "Heroine Y"],
    trailer: "https://www.youtube.com/embed/q1Clm3Ag4hA", // Embedded version for iframe
    downloadLink: "#",
  },
  {
    title: "MAA",
    src: "/images/maa.jpeg",
    description: "A heartwarming story of love and sacrifice.",
    genre: "Drama",
    releaseYear: 2025,
    rating: "8.2",
    cast: ["Actor A", "Actress B"],
    trailer: "https://www.youtube.com/embed/q1Clm3Ag4hA",
    downloadLink: "#",
  },
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieData[id];
  const navigate = useNavigate();

  if (!movie) {
    return (
      <div className="text-white text-center py-20 bg-black min-h-screen">
        <h2 className="text-2xl font-bold">Movie Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Side - RED BACKGROUND */}
        <div className="w-full md:w-1/4 bg-red-500 p-4 rounded-md shadow-md">
          <p className="text-white font-semibold">More movies link </p>
        </div>

        {/* Right Side - Poster + Details */}
        <div className="w-full md:w-3/4 bg-gray-800 p-4 sm:p-6 rounded-md shadow-md">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Poster */}
            <img
              src={movie.src}
              alt={movie.title}
              className="w-full sm:w-48 h-auto rounded-md shadow"
            />

            {/* Details */}
            <div className="space-y-4 w-full">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
                {movie.title}
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 italic">
                {movie.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-300">
                <p>
                  <span className="text-white font-semibold">🎬 Genre:</span>{" "}
                  {movie.genre}
                </p>
                <p>
                  <span className="text-white font-semibold">
                    📅 Release Year:
                  </span>{" "}
                  {movie.releaseYear}
                </p>
                <p>
                  <span className="text-white font-semibold">⭐ Rating:</span>{" "}
                  {movie.rating}
                </p>
                <p>
                  <span className="text-white font-semibold">👥 Cast:</span>{" "}
                  {movie.cast.join(", ")}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-start sm:justify-center">
                <a
                  href={`https://youtu.be/q1Clm3Ag4hA`}
                  className="px-6 py-3 bg-yellow-400 text-black text-lg font-bold rounded hover:bg-yellow-300 transition text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Now
                </a>
                <a
                  href={movie.downloadLink}
                  className="px-6 py-3 bg-green-500 text-white text-lg font-bold rounded hover:bg-green-400 transition text-center"
                  download
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* Trailer */}
          {movie.trailer && (
            <div className="mt-10 w-full">
              <h3 className="text-xl font-semibold mb-4">🎬 Watch Trailer</h3>
              <div className="w-full">
                <iframe
                  src={movie.trailer}
                  title="Trailer"
                  allowFullScreen
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-md shadow-lg"
                ></iframe>
              </div>
            </div>
          )}

          {/* Movie Info Section */}
          <div className="mt-10 bg-gray-700 rounded-md p-6 shadow-md">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              🎞️ Movie Info
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-200">
              <li>
                <strong>Title:</strong> {movie.title}
              </li>
              <li>
                <strong>Description:</strong> {movie.description}
              </li>
              <li>
                <strong>Genre:</strong> {movie.genre}
              </li>
              <li>
                <strong>Release Year:</strong> {movie.releaseYear}
              </li>
              <li>
                <strong>Rating:</strong> {movie.rating}
              </li>
              <li>
                <strong>Cast:</strong> {movie.cast.join(", ")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
