import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "./API";
import { EditMovieForm } from "./EditMovieForm";


export default function EditMovie () {

  const {id} = useParams()
  // const movie = movieList[id]
  const [movie, setMovie] = useState(null);



  useEffect(() => {
    fetch(`${API}/movie/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((datas) => setMovie(datas));
  }, [id]);



  return (
    <div>
{movie?<EditMovieForm movie={movie} />:<h2> loading...</h2>}
</div>
  );
}


