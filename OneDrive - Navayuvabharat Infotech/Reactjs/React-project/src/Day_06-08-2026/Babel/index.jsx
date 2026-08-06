import React from "react";
import ReactDOM from "react-dom/client";
import Babel from "./Babel";


const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Babel/>
  </React.StrictMode>
);