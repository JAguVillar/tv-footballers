import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioPage from "./components/pages/InicioPage";
import VotacionPage from "./components/pages/VotacionPage";
import ResultadosPage from "./components/pages/ResultadosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicioPage />,
  },
  {
    path: "/votacion",
    element: <VotacionPage />,
  },
  {
    path: "/resultados",
    element: <ResultadosPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
