import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=`;

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(SEARCH_API + searchValue)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <header>
        <div className="heading">
          <h1>Movie Search</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              className="search"
              type="text"
              placeholder="Search.."
              value={searchValue}
              onChange={handleChange}
            />
            <input type="submit" value="Search" className="btn-search" />
          </div>
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie {...movie} />
        ))}
      </div>
    </>
  );
}
