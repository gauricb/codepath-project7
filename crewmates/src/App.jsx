import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import ReadMate from "./pages/ReadMate";
import EditMate from "./pages/EditMate";
import CreateMate from "./pages/CreateMate";
import CrewMateDetails from "./pages/CrewMateDetails";
import logo from "./assets/seinfeld-logo.png";

function App() {
  const crewmates = [
    {
      id: "1",
      name: "George Costanza",
      occupation: "General Manager of the Yankees",
      quote: "Serenity Now",
    },
  ];

  //set up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadMate data={crewmates} />,
    },
    {
      path: "/edit/:id",
      element: <EditMate data={crewmates} />,
    },
    {
      path: "/new",
      element: <CreateMate />,
    },
    {
      path: "/details/:id",
      element: <CrewMateDetails />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={logo} />
        <h1> Crewmates</h1>
        <Link to="/">
          <button className="headerBtn"> Crewmate Gallery 🔍 </button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Create Crewmate 🏆 </button>
        </Link>
      </div>
      {element}
    </div>
  );
}

export default App;
