import React from "react";

export interface Props {
  children: React.ReactNode;
}

const style = {
  display: "flex",
  flexDirection: "column" as "column"
};

export default class Row extends React.Component<Props> {
  render() {
    return <div style={style}>{this.props.children}</div>;
  }
}
