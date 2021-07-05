import React, { useEffect, useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Movie from "./Movie";
import Navbar from "./Navbar";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=8f4b770dd036a39a993bd278fa769318&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=8f4b770dd036a39a993bd278fa769318&language=en-US&query=`;

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    movieSearch();
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    movieSearch();
  };

  const movieSearch = () => {
    if (searchValue === "") {
      setMovies(movies);
    } else {
      fetch(SEARCH_API + searchValue)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          console.log(movies);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="movie-wrapper">
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
        <div className="movie-container">
          {movies.length > 0 ? (
            movies.map((movie) => <Movie {...movie} />)
          ) : (
            <h1 style={{ marginTop: "200px" }}>No Movie Found</h1>
          )}
        </div>
      </div>
    </>
  );
}
