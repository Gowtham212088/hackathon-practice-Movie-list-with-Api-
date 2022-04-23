import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./API";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies =()=>{
 fetch(`${API}/movie`, {
        method: "GET",
      })
        .then((data) => data.json())
        .then((data) => setMovieList(data))
  }

  useEffect(()=>getMovies(),[])


  const deleteMovie =(id)=>{
    fetch(`${API}/movie/${id}`,{
      method:"DELETE",
    }
    ).then(()=>getMovies())
  }
  
  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary, id }) => (
        <Movie
          key={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          deleteButton={
            <IconButton
            color="error"
              onClick={() => deleteMovie(id)}

              
            >
              {" "}
              <DeleteIcon />
            </IconButton>
          }
          id={id}
        />
      ))}
    </div>
  );
}
