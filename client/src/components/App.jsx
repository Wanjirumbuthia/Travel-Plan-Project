import React from "react";
import { Switch, Route } from "react-router-dom";
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
      {/* <div>
        <section><Home /></section>
        <section><Login /></section>
        <section><PlanNow /></section>
        <section><About /></section>
      </div> */}
    </>
  );
}

export default App;