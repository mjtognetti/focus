import React from "react";
import Column from "./Column";
import * as model from "../data/model";
import Container from "./Container";
import * as EdgeInsets from "../logic/EdgeInsets";

export interface Props {
  card: model.Card;
}

export default class Card extends React.Component<Props> {
  render() {
    const { card } = this.props;
    return (
      <div style={{ backgroundColor: "#fff", padding: "5px" }}>
        <span>{card.title}</span>
        <p style={{ marginTop: "10px" }}>{card.description}</p>
      </div>
    );
  }
}
