import React, { useState } from "react";

const ListMovies = ({ movieData }) => {
  return (
    <div className="search-result-container">
      <h2 className="search-result-title">Search Result:</h2>
      {movieData ? (
        <div className="movie-details">
          <div className="movie-poster-container">
            <img
              className="movie-poster"
              src={movieData.poster}
              alt={movieData.title}
            />
          </div>
          <div className="movie-info">
            <h3 className="movie-title">
              {movieData.title} ({movieData.year})
            </h3>
            <p className="movie-runtime">
              <strong>⏳ Runtime:</strong> {movieData.runtime}
            </p>
            <p className="movie-genre">
              <strong>🎭 Genre:</strong> {movieData.genre}
            </p>
            <p className="movie-director">
              <strong>🎬 Director:</strong> {movieData.director}
            </p>
            <p className="movie-actors">
              <strong>🎭 Actors:</strong> {movieData.actors}
            </p>
            <p className="movie-plot">
              <strong>📜 Plot:</strong> {movieData.plot}
            </p>
            <p className="movie-language">
              <strong>🌎 Language:</strong> {movieData.language}
            </p>
            <p className="movie-country">
              <strong>🏳️ Country:</strong> {movieData.country}
            </p>
            <p className="movie-score">
              <strong>🍅 Rotten Tomatoes Score:</strong> {movieData.score}
            </p>
          </div>
        </div>
      ) : (
        <p className="no-movie">No movie found</p>
      )}
    </div>
  );
};

export default ListMovies;
