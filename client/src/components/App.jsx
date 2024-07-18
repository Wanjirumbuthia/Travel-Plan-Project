import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css";
import Home from "./Section/Home/Home";
import About from "./Section/About/About";
import PlanNow from "./Section/Plan-Now/PlanNow";
import Login from "./Section/Login/Login";
import Navbar from "./Layout/Navbar";
import LandingPage from "./Layout/Landingpage/LandingPage";

function App() {
  return (
    <>
    <LandingPage />
      {/* <Navbar />
      <div className="main-container">
      <section className="page page1">
          <Home />
        </section>
        <section className="page page2">
          <PlanNow />
          <div>
          </div>
        </section>
        <section className="page page3">
          <Login />
        </section>
        <section className="page page4">
        <About/>
        </section>
      </div> */}
    </>
  );
}

export default App;