import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

//f577b867
const API_URL = "http://www.omdbapi.com?apikey=f577b867";

const movie1 = {
  Poster: "N/A",
  Title: "Italian Spiderman",
  Type: "movie",
  Year: "2007",
  imdbID: "tt2705436",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(['']);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(`Spiderman`);
  }, []);

  return (
    <div className="app">
      <h1>MovieFlix</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />
        <img src={SearchIcon} alt="search"
         onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((x) => (
            <MovieCard movie={x} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> no movies found</h2>
        </div>
      )}

      <div className="container">
        <div className="movie">
          <MovieCard movie={movie1} />
        </div>
      </div>
    </div>
  );
};

export default App;
