import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
import Webpack from "./webpack";
import LoadersPlugins from "./Loaders&Plugins";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Webpack />);
root.render(<LoadersPlugins />);