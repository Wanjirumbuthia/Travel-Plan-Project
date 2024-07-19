import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/Layout/Landingpage/LandingPage";
import LoginForm from "./components/Section/Login/Login";
import PlanNow from "./components/Section/Plan-Now/PlanNow";

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
        path: "/plan",
        element: <PlanNow />,
    }

  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <LandingPage />
      </RouterProvider>
    </React.StrictMode>
  );
