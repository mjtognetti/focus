import React from "react";

export interface Props {
  children: React.ReactNode;
}

const style = {
  display: "flex",
  "flex-direction": "row"
};

export default class Row extends React.Component<Props> {
  render() {
    return <div style={style}>{this.props.children}</div>;
  }
}
