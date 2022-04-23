import "./App.css";
import React, { useState } from "react";
import { Switch, Redirect, Route, Link } from "react-router-dom";
import AddColor from "./AddColor";
import Msg from "./msg";
import { TicTacToe } from "./TicTacToe";
import { NotFound } from "./NotFound";
import { MovieList } from "./MovieList";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";
import EditMovie from "./EditMovie";

function App() {
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST); // For adding new movies

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>

        <li>
          <Link to="/movies"> Movies </Link>
        </li>

        <li>
          <Link to="/add-movie"> Add Movies </Link>
        </li>

        <li>
          <Link to="/color-game"> Color Game </Link>
        </li>

        <li>
          <Link to="/TicTacToe"> TiK TAC TOE </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Msg />
        </Route>

        <Route path={"/movies/edit/:id"}>
          <EditMovie  />
        </Route>

        <Route path="/add-movie">
          {/* <AddColor /> */}
          <AddMovie />
        </Route>

        <Route path="/movies/:id">
          <MovieDetails />
        </Route>

        <Route path="/movies">
          <MovieList />
          {/* <MovieList  movieList={movieList} setMovieList={setMovieList} /> */}
        </Route>

        <Route path="/color-game">
          <AddColor />
        </Route>

        <Route path="/TicTacToe">
          <TicTacToe />
        </Route>

        {/* Redirect is used to redirect to a different page. */}

        <Route path="/films">
          <Redirect to="/movies" />
        </Route>

        <Route exact path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
