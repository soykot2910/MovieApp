import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../context/MovieContext";

export default function WatchList() {
  const { watchList } = useContext(MovieContext);
  return (
    <div className="movie-wrapper" style={{ minHeight: "86vh" }}>
      <div className="movie-container">
        {watchList.length > 0 ? (
          watchList.map((movie) => (
            <Movie key={movie.id} movie={movie} type="watchList" />
          ))
        ) : (
          <h1 style={{ marginTop: "200px", marginBottom: "500px" }}>
            No Movies in Your Watch List!
          </h1>
        )}
      </div>
    </div>
  );
}
