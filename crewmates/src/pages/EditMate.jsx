import React from "react";
import { useParams } from "react-router-dom";
import "./EditMate.css";
import { supabase } from "../client";
import { useState } from "react";
import { useEffect } from "react";

const EditMate = () => {
  const { id } = useParams();

  // Add state for mate
  const [mate, setMate] = useState({});
  const [updatedMate, setUpdatedMate] = useState({
    name: "",
    occupation: "",
    quote: "",
  });

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
          setUpdatedMate(mateData);
        }
        if (error) {
          throw error;
        }
      } catch (error) {
        console.error("Error fetching mate details:", error);
      }
    };

    fetchMate();
  }, [id]);

  const editMate = async (event) => {
    event.preventDefault();

    try {
      const { data: updatedData, error } = await supabase
        .from("Crewmates")
        .update({
          name: updatedMate.name,
          occupation: updatedMate.occupation,
          quote: updatedMate.quote,
        })
        .eq("id", id);

      if (updatedData) {
        console.log("Mate updated successfully:", updatedData);
        window.location = "/";
      }

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error updating mate:", error);
    }
    window.location = "/";
  };

  const deleteMate = async (event) => {
    event.preventDefault();

    await supabase.from("Crewmates").delete().eq("id", id);

    window.location = "/";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Name: ", name, " value: ", value);
    setUpdatedMate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
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
      {mate ? (
        <form onSubmit={editMate}>
          <label for="title">Name</label> <br />
          <select id="name" name="name" onChange={handleChange}>
            <option value="">Select a Seinfeld Character</option>
            {seinfeldCharacters.map((character, index) => (
              <option key={index} value={updatedMate.name}>
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
            value={updatedMate.occupation}
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
            value={updatedMate.quote}
            onChange={handleChange}
          ></textarea>
          <br />
          <input type="submit" value="Update" />
          <button className="deleteButton" onClick={deleteMate}>
            Delete
          </button>
        </form>
      ) : (
        <p>Loading character details...</p>
      )}
    </div>
  );
};

export default EditMate;
