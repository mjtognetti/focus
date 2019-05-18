import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const store = {
  cards: {},
  focus: [],
  intent: [],
  deck: []
};

const model = {
  focus: [
    {
      title: "First card",
      description: "The first actual card with a long description!"
    }
  ],
  intent: [
    {
      title: "INTENT CARD",
      description: "INtent card description"
    }
  ],
  deck: [
    {
      title: "Deck card",
      description: "Deck card description"
    }
  ]
};

const root = document.getElementById("root");
ReactDOM.render(<App model={model} />, root);
