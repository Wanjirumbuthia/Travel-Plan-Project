import React from "react";
import "./app.css";
import Home from "./Section/Home/Home";
import About from "./Section/About/About";
import PlanNow from "./Section/Plan-Now/PlanNow";
import Login from "./Section/Login/Login";
import Navbar from "./Layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
          <Home />
      </div>
    </>
  );
}

export default App;
