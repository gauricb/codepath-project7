import React, { useState } from "react";
import "./CreateMate.css";
import { supabase } from "../client";

const CreateMate = () => {
  const [mate, setMate] = useState({
    name: "",
    occupation: "",
    quote: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Name: ", name, " value: ", value);
    setMate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createMate = async (event) => {
    event.preventDefault();
    console.log(supabase);

    const { data, error } = await supabase.from("Crewmates").insert({
      name: mate.name,
      occupation: mate.occupation,
      quote: mate.quote,
    });
    console.log(error);
    console.log(data);
    window.location = "/";
  };

  const seinfeldCharacters = [
    "Jerry Seinfeld",
    "George Costanza",
    "Elaine Benes",
    "Cosmo Kramer",
    "Newman",
    "Frank Costanza",
    "Estelle Costanza",
    "J. Peterman",
    "David Puddy",
  ];

  return (
    <div>
      <form onSubmit={createMate}>
        <label for="title">Name</label> <br />
        <select id="name" name="name" onChange={handleChange}>
          <option value="">Select a Seinfeld Character</option>
          {seinfeldCharacters.map((character, index) => (
            <option key={index} value={character}>
              {character}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label for="occupation">Occupation</label>
        <br />
        <input
          type="text"
          id="occupation"
          name="occupation"
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="quote">Quote</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="quote"
          name="quote"
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default CreateMate;
