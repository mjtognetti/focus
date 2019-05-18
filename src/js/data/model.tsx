export interface Model {
  focus: Card[];
  intent: Card[];
  deck: Card[];
}

export interface Card {
  title: String;
  description: String;
}
