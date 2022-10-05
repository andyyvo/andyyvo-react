import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";
import { FreelancePage } from "../pages/FreelancePage";
import { HomePage } from "../pages/HomePage";
import { WorkPage } from "../pages/WorkPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/freelance",
    element: <FreelancePage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
]);