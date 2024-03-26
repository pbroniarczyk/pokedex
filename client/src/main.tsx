import React from "react";
import { Container } from "react-dom/client";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Record from "./components/Record";
import RecordList from "./components/RecordList";

import App from "./App.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RecordList />,
      },
    ],
  },
  {
    path: "/pokemon/:id",
    element: <App />,
    children: [
      {
        path: "/pokemon/:id",
        element: <Record />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
