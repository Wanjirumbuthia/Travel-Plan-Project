import React from "react";
import "./app.css";
import Home from "./Section/Home/Home";
import About from "./Section/About/About";
import Login from "./Section/Login/Login";
import Navbar from "./Layout/Navbar";
import BrazilTripCard from "./Section/Trips-Cards/BrazilTripcard/BrazilTripCard";
import ParisTripCard from "./Section/Trips-Cards/ParisTripCard/ParisTripCard";
import NewyorkTripCard from "./Section/Trips-Cards/NewyorkTripCard/NewyorkTripCard";
import Sydney from "./Section/Trips-Cards/SydneyTripCard/SydneyTripCard"
import SydneyTripCard from "./Section/Trips-Cards/SydneyTripCard/SydneyTripCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
          <Home />
          
      </div>
      {/* <BrazilTripCard /> */}
      {/* <ParisTripCard /> */}
{/* <NewyorkTripCard /> */}
{/* <SydneyTripCard /> */}
      
    </>
  );
}

export default App;
