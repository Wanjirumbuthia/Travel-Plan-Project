import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/Layout/Landingpage/LandingPage";
import LoginForm from "./components/Section/Login/Login";
import Home from "./components/Section/Home/Home";
import About from "./components/Section/About/About";
import PlanNow from "./components/Section/Plan-Now/PlanNow";
import ParisTripCard from "./components/Section/Trips-Cards/ParisTripCard/ParisTripCard";
import BrazilTripCard from "./components/Section/Trips-Cards/BrazilTripcard/BrazilTripCard";
import NewyorkTripCard from "./components/Section/Trips-Cards/NewyorkTripCard/NewyorkTripCard";
import SydneyTripCard from "./components/Section/Trips-Cards/SydneyTripCard/SydneyTripCard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
        path: "/login",
        element: <LoginForm />,
    },
    {
        path: "/app",
        element: <App />,
    },
    {
      path: "/home",
      element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
},
    {
        path: "/plan",
        element: <PlanNow />,
    },
    {
        path: "/paris",
        element: <ParisTripCard />,
    },
    {
        path: "/brazil",
        element: <BrazilTripCard />,
    },
    {
        path: "/new_york",
        element: <NewyorkTripCard />,
    },
    {
        path: "/sydney",
        element: <SydneyTripCard />,
    }

  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <LandingPage />
      </RouterProvider>
    </React.StrictMode>
  );
