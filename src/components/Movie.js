import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const IMG_API = "https://image.tmdb.org/t/p/w400//";

export default function Movie({ movie, type }) {
  const { title, poster_path, overview, release_date, vote_average } = movie;

  const {
    addMovieToWatchList,
    removeMovieFromWatchList,
    addMovieToWatched,
    removeMovieFromWatched,
    watchList,
    watched,
  } = useContext(MovieContext);

  let storedMovieList = watchList.find((o) => o.id === movie.id);
  let storeMovieWatched = watched.find((o) => o.id === movie.id);

  const watchListDisabled = storedMovieList
    ? true
    : storeMovieWatched
    ? true
    : false;

  const watchedDisabled = storeMovieWatched ? true : false;

  return (
    <div className="movie">
      <div className="img-container">
        <div className="movie-info">
          <h3>
            {title} ({release_date})
          </h3>
          <h4>Rating: {vote_average}</h4>
          <p>{type === "watched" ? overview : overview.substring(0, 250)}</p>
        </div>
        <img src={IMG_API + poster_path} alt="movie" />
      </div>
      {type === "watchList" ? (
        <div className="controls">
          <button
            className="btn"
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            Remove From Watchlist
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => {
              addMovieToWatched(movie.id) && removeMovieFromWatchList(movie.id);
            }}
          >
            Add To Watched
          </button>
        </div>
      ) : type === "watched" ? (
        <div className="controls" style={{ width: "230px", margin: "0 auto" }}>
          <button
            className="btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            Remove From Watched
          </button>
        </div>
      ) : (
        <div className="controls">
          <button
            className="btn"
            disabled={watchListDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add To Watchlist
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add To Watched
          </button>
        </div>
      )}
    </div>
  );
}
