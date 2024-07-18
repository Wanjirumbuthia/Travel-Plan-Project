import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Home from "./Section/Home/Home";
import About from "./Section/About/About";
import PlanNow from "./Section/Plan-Now/PlanNow";
import Login from "./Section/Login/Login";
import Navbar from "./Layout/Navbar";
import LandingPage from "./Layout/Landingpage/LandingPage";

function App() {
  return (
    <Router>
      <LandingPage />
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/plan-now" component={PlanNow} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
