import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../context/MovieContext";

export default function Watched() {
  const { watched } = useContext(MovieContext);
  return (
    <div className="movie-wrapper" style={{ minHeight: "86vh" }}>
      <div className="movie-container">
        {watched.length > 0 ? (
          watched.map((movie) => <Movie movie={movie} type="watched" />)
        ) : (
          <h1 style={{ marginTop: "200px", marginBottom: "500px" }}>
            No Movies in Your List!
          </h1>
        )}
      </div>
    </div>
  );
}
