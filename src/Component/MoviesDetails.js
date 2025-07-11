import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const [showModal, setShowModal] = useState(false);

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
        {/* Left - Recent Movies Sidebar or Button */}
        <div className="w-full md:w-1/4">
          {/* Desktop Sidebar */}
          <div className="hidden md:block bg-gradient-to-br from-red-600 to-red-400 p-4 rounded-lg shadow-lg">
            <h2 className="text-white text-lg font-bold mb-4">
               Recent Movies
            </h2>
            <ul className="space-y-3 text-white text-sm list-disc list-inside">
              <li>Moonwalk 2025 Hindi Dual Audio WEB-DL 720p - 480p - 1080p</li>
              <li>
                Karate Kid: Legends 2025 Hindi Dual Audio WEB-DL 720p - 480p -
                1080p
              </li>
              <li>Kapkapiii 2025 Hindi WEB-DL 720p - 480p - 1080p</li>
              <li>Aazam 2023 Hindi WEB-DL 720p - 480p - 1080p</li>
              <li>
                Robinhood 2025 Hindi Dual Audio WEB-DL 720p - 480p - 1080p
              </li>
              <li>
                Jurassic World: Rebirth 2025 Hindi HDTC 720p - 480p - 1080p
              </li>
              <li>Kuberaa 2025 Hindi Dual Audio WEB-DL 720p - 480p - 1080p</li>
              <li>
                Sri Sri Sri Raja Vaaru 2025 Hindi Dual Audio WEB-DL 720p - 480p
                - 1080p
              </li>
            </ul>
          </div>

          {/* Mobile Button */}
          <div className="block md:hidden mb-6">
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-blue-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
               View Recent Movies
            </button>
          </div>

          {/* Mobile Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="relative bg-white w-11/12 max-w-md rounded-lg shadow-xl p-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-3 text-gray-700 hover:text-red-600 text-2xl font-bold"
                >
                  &times;
                </button>

                <h3 className="text-lg font-bold text-gray-800 mb-4">
                   Recent Movies
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 max-h-72 overflow-y-auto pr-2">
                  <li>
                    Moonwalk 2025 Hindi Dual Audio WEB-DL 720p - 480p - 1080p
                  </li>
                  <li>
                    Karate Kid: Legends 2025 Hindi Dual Audio WEB-DL 720p - 480p
                    - 1080p
                  </li>
                  <li>Kapkapiii 2025 Hindi WEB-DL 720p - 480p - 1080p</li>
                  <li>Aazam 2023 Hindi WEB-DL 720p - 480p - 1080p</li>
                  <li>
                    Robinhood 2025 Hindi Dual Audio WEB-DL 720p - 480p - 1080p
                  </li>
                  <li>
                    Jurassic World: Rebirth 2025 Hindi HDTC 720p - 480p - 1080p
                  </li>
                  <li>
                    Kuberaa 2025 Hindi Dual Audio WEB-DL 720p - 480p - 1080p
                  </li>
                  <li>
                    Sri Sri Sri Raja Vaaru 2025 Hindi Dual Audio WEB-DL 720p -
                    480p - 1080p
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Poster and movies details  */}
        <div className="w-full md:w-3/4 bg-gray-800 p-4 sm:p-6 rounded-md shadow-md">
          <div className="flex flex-col sm:flex-row gap-6">
            <img
              src={movie.src}
              alt={movie.title}
              className="w-full sm:w-48 h-auto rounded-md shadow"
            />

            <div className="space-y-4 w-full">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
                {movie.title}
              </h1>


              <p className="text-lg sm:text-xl text-gray-200 italic">
                A mother transforms into the goddess Kali to battle a demon's
                curse involving fear, blood, and betrayal. {movie.description}
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
                  className="px-6 py-3 bg-red-500 text-black text-lg font-bold rounded hover:bg-red-600 transition text-center"
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
              <h3 className="text-2xl font-semibold mb-4">🎬 Watch Trailer</h3>
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

          <div className="mt-10 bg-gray-700 rounded-md p-6 shadow-md">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              💬 Comment Your Thought
            </h2>
            <form className="space-y-4">
              {/* Comment box */}
              <div>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Write your comment here..."
                ></textarea>
              </div>

              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your name"
                />
              </div>

              <button
                type="submit"
                className="bg-red-600 text-black font-bold px-6 py-3 rounded hover:bg-yellow-300 transition"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
