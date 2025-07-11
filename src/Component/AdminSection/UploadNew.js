import React, { useState } from "react";

const UploadNew = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    genre: "",
    year: "",
    rating: "",
    cast: "",
    director: "",
    watchNow: "",
    downloadType: "url",
    downloadUrl: "",
    downloadFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🎬 Movie Data Submitted:", formData);
    alert("Movie uploaded successfully — the Oscars are calling! 🎉");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-6">
        🎥 Upload New Movie
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Movie Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. The Matrix"
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Reloaded"
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              placeholder="e.g. Action, Sci-Fi"
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Release Date</label>
            <input
              type="date"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Rating (0–5)</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              placeholder="e.g. 4.8"
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Cast</label>
            <input
              type="text"
              name="cast"
              value={formData.cast}
              onChange={handleChange}
              placeholder="e.g. Keanu Reeves"
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a short description of the movie..."
            rows="4"
            className="w-full p-3 border rounded-md focus:outline-blue-500"
          ></textarea>
        </div>

        {/* Watch Now */}
        <div>
          <label className="block mb-1 font-medium">Watch Now (URL)</label>
          <input
            type="url"
            name="watchNow"
            value={formData.watchNow}
            onChange={handleChange}
            placeholder="e.g. https://watchmovie.com/stream"
            className="w-full p-3 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Download Type Select */}
        <div>
          <label className="block mb-1 font-medium">Download Type</label>
          <select
            name="downloadType"
            value={formData.downloadType}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-blue-500"
          >
            <option value="url">Download via URL</option>
            <option value="file">Upload Video File</option>
          </select>
        </div>

        {/* Conditional Download Option */}
        {formData.downloadType === "url" ? (
          <div>
            <label className="block mb-1 font-medium">Download URL</label>
            <input
              type="url"
              name="downloadUrl"
              value={formData.downloadUrl}
              onChange={handleChange}
              placeholder="e.g. https://downloadlink.com/movie.mp4"
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
          </div>
        ) : (
          <div>
            <label className="block mb-1 font-medium">Upload Video File</label>
            <input
              type="file"
              name="downloadFile"
              accept="video/*"
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-10 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Upload Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadNew;
