import React from "react";
import { useParams, } from "react-router-dom";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";




export function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState({});



  useEffect(() => {
    fetch(`https://6228d2bb9fd6174ca8308614.mockapi.io/movie/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setMovie(data));
  }, []);
  const history = useHistory()
  // const movie = {}
  return (
    <div className="trailer-div">
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-container"> </div>

      <div className="movie-spec">
        <h3 className="movie-name"> {movie.name}</h3>

        <p className="movie-rating"> ⭐ {movie.rating} </p>
      </div>
      <p className="summary"> {movie.summary}</p>


<Button  
style={{width:"55px"}}
variant="outlined"
onClick={()=>history.goBack()}>
Back
</Button>


    </div>
  );
}
