import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { LoaderProvider } from "./contexts/LoaderContext";
import Loader from "./components/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LoaderProvider>
      <RouterProvider router={router} />
      <Loader />
    </LoaderProvider>
  </React.StrictMode>
);
