import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

const ReadMate = (props) => {
  const [mates, setMates] = useState([]);

  const fetchMates = async () => {
    const { data } = await supabase
      .from("Crewmates")
      .select()
      .order("created_at", { ascending: true });
    setMates(data);
  };

  useEffect(() => {
    fetchMates();
  }, [props]);

  return (
    <div className="ReadMates">
      {mates && mates.length > 0 ? (
        mates.map((mate, index) => (
          <Card
            key={mate.id}
            id={mate.id}
            name={mate.name}
            occupation={mate.occupation}
            quote={mate.quote}
          />
        ))
      ) : (
        <h2>{"No Crewmates Yet 😞"}</h2>
      )}
    </div>
  );
};

export default ReadMate;
