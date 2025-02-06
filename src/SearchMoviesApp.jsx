import React, { useEffect, useState } from "react";
import axios from "axios";
import ListMovies from "./components/ListMovies";

const SearchMoviesApp = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Para el título
  const [selectedMovie, setSelectedMovie] = useState(""); // Guarda la búsqueda final

  const [category, setCategory] = useState(""); // Para categorías
  const [type, setType] = useState("movie"); // Para seleccionar entre películas y series

  // const handleSearch = () => {
  //   setSelectedMovie(searchTerm); // Cuando presionen el botón, guarda la búsqueda final
  // };

  const handleSearch = async () => {
    if (!searchTerm) return; // Si el input está vacío, no buscar

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${searchTerm}&apikey=2c3f5d20`
      );

      if (response.data.Response === "True") {
        const rottenTomatoesRating =
          response.data.Ratings.find(
            (rating) => rating.Source === "Rotten Tomatoes"
          )?.Value || "N/A"; // Extraer el rating de Rotten Tomatoes

        setSelectedMovie({
          title: response.data.Title,
          year: response.data.Year,
          runtime: response.data.Runtime,
          genre: response.data.Genre,
          director: response.data.Director,
          actors: response.data.Actors,
          plot: response.data.Plot,
          language: response.data.Language,
          country: response.data.Country,
          poster: response.data.Poster,
          score: rottenTomatoesRating, // Agregar el score de Rotten Tomatoes
        });
      } else {
        setSelectedMovie(null); // Si no encuentra la película
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
      setSelectedMovie(null);
    }
  };

  return (
    <div className="movies-search-app">
      <h1>This is a Movies Search App</h1>
      <h2>With React + Vue</h2>
      <h2>The information of the movies was collected by OMDb API</h2>
      <hr />

      <div className="search-container">
        {/* Contenedor de búsqueda por título */}
        <div className="search-by-title">
          <h3>Search by Title</h3>
          <input
            type="text"
            placeholder="Write the title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Contenedor de búsqueda por categoría y tipo */}
        <div className="search-by-category-type">
          <h3>Search by Category & Type</h3>

          {/* Categoría */}
          <div className="category-filter">
            <h4>Category:</h4>
            <select
            // onChange={(e) => setCategory(e.target.value)}
            // value={category}
            >
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Horror">Horror</option>
              <option value="Drama">Drama</option>
            </select>
          </div>

          {/* Tipo de contenido */}
          <div className="type-filter">
            <h4>Type:</h4>
            <label>
              <input
                type="radio"
                value="movie"
                checked={type === "movie"}
                onChange={() => setType("movie")}
              />
              Movie
            </label>
            <label>
              <input
                type="radio"
                value="series"
                checked={type === "series"}
                onChange={() => setType("series")}
              />
              Series
            </label>
          </div>

          {/* Botón de búsqueda */}
          <button>Search</button>
        </div>
      </div>
      <ListMovies movieData={selectedMovie} />
    </div>
  );
};

export default SearchMoviesApp;
