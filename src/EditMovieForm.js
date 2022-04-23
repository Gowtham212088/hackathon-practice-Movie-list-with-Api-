import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { API } from "./API";

export function EditMovieForm({ movie }) {

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const history = useHistory();

  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
        label="name" />
      <TextField
        value={poster}
        type="text"
        onChange={(event) => setPoster(event.target.value)}
        label="poster" />
      <TextField
        value={rating}
        type="text"
        onChange={(event) => setRating(event.target.value)}
        label="rating" />
      <TextField
        value={summary}
        type="text"
        onChange={(event) => setSummary(event.target.value)}
        label="summary" />

      <TextField
        value={trailer}
        type="text"
        onChange={(event) => setTrailer(event.target.value)}
        label="trailer" />

      <Button
        variant="contained"
        color="warning"
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
          };
          // setMovieList([...movieList, newMovie]);
          //
          // const copyMovieList = [...movieList]
          // copyMovieList[id]= updatedMovie;
          // setMovieList(updatedMovie);
          // history.push('/movies')
          fetch(`${API}/movie/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(() => history.push('/movies'));

        }}
      >
        {" "}
        Edit Movie{" "}
      </Button>
    </div>

  );
}
