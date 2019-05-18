import React from "react";
import CardSpread from "./CardSpread";
import Container from "./Container";
import Column from "./Column";
import ListView, { Axis } from "./ListView";
import * as model from "../data/model";
import * as EdgeInsets from "../logic/EdgeInsets";

const style = {
  height: "100%",
  width: "100%",
  position: "relative" as "relative"
};

// In flutter this applies to the child, but oh well!
function Expanded({ children }: { children: React.ReactNode }) {
  return <div style={style}>{children}</div>;
}

export interface Props {
  model: model.Model;
}

class Section extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Container width={320} padding={EdgeInsets.all(15)}>
        <Column>{children}</Column>
      </Container>
    );
  }
}

export interface FocusProps {
  cards: model.Card[];
}

class Focus extends React.Component<FocusProps> {
  render() {
    const { cards } = this.props;
    return (
      <Container
        color={"#e6e6e6"}
        margin={EdgeInsets.all(15)}
        padding={EdgeInsets.all(15)}
      >
        <h1>Focus</h1>
        <CardSpread cards={cards} />
      </Container>
    );
  }
}

export interface IntentProps {
  cards: model.Card[];
}

class Intent extends React.Component<IntentProps> {
  render() {
    const { cards } = this.props;
    return (
      <Container
        color={"#e6e6e6"}
        margin={EdgeInsets.all(15)}
        padding={EdgeInsets.all(15)}
      >
        <h1>Intent</h1>
        <CardSpread cards={cards} />
      </Container>
    );
  }
}

export interface DeckProps {
  cards: model.Card[];
}
class Deck extends React.Component<DeckProps> {
  render() {
    const { cards } = this.props;
    return (
      <Container
        color={"#e6e6e6"}
        margin={EdgeInsets.all(15)}
        padding={EdgeInsets.all(15)}
      >
        <h1>Deck</h1>
        <CardSpread cards={cards} />
      </Container>
    );
  }
}

export default class App extends React.Component<Props> {
  render() {
    const { model } = this.props;
    return (
      <Expanded>
        <ListView scrollDirection={Axis.Horizontal}>
          <Section>
            <Focus cards={model.focus} />
          </Section>
          <Section>
            <Intent cards={model.intent} />
          </Section>
          <Section>
            <Deck cards={model.deck} />
          </Section>
        </ListView>
      </Expanded>
    );
  }
}
