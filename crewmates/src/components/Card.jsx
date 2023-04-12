import React from "react";
import { useState } from "react";
import "./Card.css";
import more from "./more.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//import { supabase } from "../client";

const Card = (props) => {
  const history = useNavigate(); // Access the history object from react-router-dom

  const handleCardClick = () => {
    // Callback function to handle card click
    history(`/details/${props.id}`); // Navigate to details page with character id
  };

  return (
    <div className="Card">
      <Link to={"edit/" + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="name">Name: {props.name}</h2>
      <h3 className="occupation">Occupation: {props.occupation}</h3>
      <p className="quote">Quote: {props.quote}</p>
      <button onClick={handleCardClick}>View Details</button>
    </div>
  );
};

export default Card;
