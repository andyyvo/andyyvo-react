import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";
import { FreelancePage } from "../pages/FreelancePage";
import { HomePage } from "../pages/HomePage";
import { StylesPage } from "../pages/StylesPage";
import { WorkPage } from "../pages/WorkPage";

export const router = createBrowserRouter([
  /** home root */
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  /** about me */
  {
    path: "/about",
    element: <AboutPage />,
  },
  /** for collaborative freelance stuff? */
  {
    path: "/freelance",
    element: <FreelancePage />,
  },
  /** collection of my work */
  {
    path: "/work",
    element: <WorkPage />,
  },
  /** all of my AVO styles */
  {
    path: "/styles",
    element: <StylesPage />,
  },
]);