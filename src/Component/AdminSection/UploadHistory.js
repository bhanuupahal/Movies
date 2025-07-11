import React from "react";

const UploadHistory = () => {
  // Dummy data
  const uploadedMovies = [
   
    {
      id: 3,
      name: "Dunki",
      genre: "Drama, Comedy",
      year: "2023",
      uploadedAt: "2025-07-08",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-gray-700 p-6 mt-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
         Recent Upload History
      </h2>

      {uploadedMovies.length === 0 ? (
        <p className="text-center text-white">No uploads yet.</p>
      ) : (
        <ul className="space-y-4">
          {uploadedMovies.map((movie) => (
            <li
              key={movie.id}
              className="border rounded-md p-4  transition"
            >
              <h3 className="text-xl font-semibold text-white">
                 {movie.name}
              </h3>
              <p className="text-sm text-white">
                Genre: {movie.genre} | Year: {movie.year}
              </p>
              <p className="text-sm text-white">
                Uploaded on: {movie.uploadedAt}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UploadHistory;
