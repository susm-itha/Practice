import React from "react";
import ReactDOM from "react-dom/client";
import Bundle from "./Bundle";
import GenerateBundle from "./GenerateBundle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Bundle/>);
root.render(<GenerateBundle/>);