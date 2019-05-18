import React from "react";
import ListView from "./ListView";
import Card from "./Card";
import * as model from "../data/model";

export interface Props {
  cards: model.Card[];
}

export default class CardSpread extends React.Component<Props> {
  render() {
    const { cards } = this.props;
    return (
      <ListView>
        {cards.map(card => (
          <Card card={card} />
        ))}
      </ListView>
    );
  }
}
