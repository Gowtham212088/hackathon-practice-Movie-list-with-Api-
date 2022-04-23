import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Counter } from "./Counter";
import { useHistory } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export function Movie({ name, rating, poster, summary, deleteButton,id }) {
  const styles = { color: rating > 8.5 ? "green" : "red" };

  const [show, setShow] = useState(true); // hOOK FOR CONDITIONAL STYLING
  const history = useHistory();

  // CONDITIONAL STYLING
  const sty = {
    display: show ? "block" : "none",
  };

  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <CardContent>
        <div className="Movie-specs">
          <h2 className="movie-name"> {name} </h2>
          <p className="movie-rating" style={styles}>
            {" "}
            ⭐ {rating}{" "}
          </p>
        </div>

        <div className="button">
          <IconButton onClick={() => setShow(!show)}>
            {show ? <ArrowDropDownIcon color="primary" /> : <ArrowDropUpIcon />}{" "}
          </IconButton>
          <IconButton onClick={()=>{
            history.push(`/movies/${id}`)
          }}>
            {" "}
            <InfoIcon color="primary" />{" "}
          </IconButton>
          {deleteButton}

          <IconButton onClick={()=>history.push(`/movies/edit/${id}`)}>
          <ModeEditIcon/>
          </IconButton>
          {/* CONDITIONAL RENDERING  */}
        </div>
        {show ? <p className="movie-summary"> {summary} </p> : ""}
      </CardContent>
      <CardActions>
        <Counter />
      
      </CardActions>
    </Card>
  );
}
