import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Card from "./components/Card";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BigCard from "./components/BigCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/:id", element: <BigCard /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
