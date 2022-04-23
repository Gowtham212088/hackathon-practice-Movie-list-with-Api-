import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { API } from "./API";


export function AddMovie() {



  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

 const history = useHistory() 

  return (

    <div className="add-movie-form">
      <TextField
        type="text"
        onChange={(event) => setName(event.target.value)}
        label="name" />
      <TextField
        type="text"
        onChange={(event) => setPoster(event.target.value)}
        label="poster" />
      <TextField
        type="text"
        onChange={(event) => setRating(event.target.value)}
        label="rating" />
      <TextField
        type="text"
        onChange={(event) => setSummary(event.target.value)}
        label="summary" />

<TextField
        type="text"
        onChange={(event) => setTrailer(event.target.value)}
        label="trailer" />

      <Button
        variant="contained"
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer:trailer
          };
          // setMovieList([...movieList, newMovie]);

          fetch (`${API}/movie/`,{
            method:"POST",
            body:JSON.stringify(newMovie),
            headers:{
              "Content-type":"application/json"
            }
          }).then(()=>history.push('/movies'))
               }}
      >
        {" "}
        Add Movie{" "}
      </Button>
    </div>

  );
}

