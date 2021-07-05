import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w400//";

export default function Movie({ title, poster_path, overview, vote_average }) {
  function truncate(str) {
    return str.length > 20 ? str.substring(0, 20) + "..." : str;
  }

  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt="movie" />
      <div className="movie-info">
        <h3
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            cursor: "pointer",
          }}
        >
          {truncate(title)}
        </h3>
        <span style={{ color: "orange" }}>{vote_average}</span>
      </div>
      {/* <MovieDetails title={title} /> */}
    </div>
  );
}
