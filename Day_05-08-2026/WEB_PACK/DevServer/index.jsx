import React from "react";
import ReactDOM from "react-dom/client";
import DevServer from "./DevServer";
import WebpackDevServer from "./WebpackDevServer";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<DevServer/>);
root.render(<WebpackDevServer/>);