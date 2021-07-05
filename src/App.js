import React from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import MovieProvider from "./context/MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );
}
