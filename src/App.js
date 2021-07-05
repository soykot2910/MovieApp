import React from "react";
import MovieList from "./components/MovieList";
import MovieProvider from "./context/MovieContext";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/watchList" component={WatchList} />
        </Switch>
      </Router>
    </MovieProvider>
  );
}
