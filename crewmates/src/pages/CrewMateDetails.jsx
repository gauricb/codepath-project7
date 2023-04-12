import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import jerryImage from "../assets/jerryImage.webp";
import georgeImage from "../assets/georgeImage.jpeg";
import elaineImage from "../assets/elaineImage.jpeg";
import kramerImage from "../assets/kramerImage.jpeg";
import newmanImage from "../assets/newmanImage.jpeg";
import puddyImage from "../assets/puddyImage.webp";
import petermanImage from "../assets/petermanImage.jpg";
import estelleImage from "../assets/estelleImage.webp";
import frankImage from "../assets/frankImage.jpg";

const CrewMateDetails = () => {
  const { id } = useParams();

  const [mate, setMate] = useState({ name: "", occupation: "", quote: "" });

  useEffect(() => {
    const fetchMate = async () => {
      try {
        const { data: mateData, error } = await supabase
          .from("Crewmates")
          .select("*")
          .eq("id", id)
          .single();
        if (mateData) {
          setMate(mateData);
        }
      } catch (error) {
        console.error("Error fetching mate details:", error);
      }
    };
    fetchMate();
  }, [id]);

  const renderSeinfeldCharacterImage = (name) => {
    switch (name) {
      case "Jerry Seinfeld":
        return jerryImage;
      case "George Costanza":
        return georgeImage;
      case "Elaine Benes":
        return elaineImage;
      case "Cosmo Kramer":
        return kramerImage;
      case "David Puddy":
        return puddyImage;
      case "Newman":
        return newmanImage;
      case "Frank Costanza":
        return frankImage;
      case "Estelle Costanza":
        return estelleImage;
      case "J. Peterman":
        return petermanImage;
      default:
        return "";
    }
  };

  return (
    <div className="CrewMateDetails">
      <img
        src={renderSeinfeldCharacterImage(mate.name)}
        alt="Seinfeld Character"
      />
      <h1>{mate.name}</h1>
      <h2>About</h2>
      <h3>Job: {mate.occupation}</h3>
      <h3>Quote: {mate.quote}</h3>
    </div>
  );
};
export default CrewMateDetails;
