import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.createElement("div");
document.body.insertBefore(root, document.body.firstChild);

ReactDOM.render(<App />, root);
