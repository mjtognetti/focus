import React from "react";

export enum Axis {
  Horizontal,
  Vertical
}

export type Props = {
  children?: React.ReactNode;
  scrollDirection: Axis;
};

const styles = {
  [Axis.Vertical]: {
    display: "flex",
    flexDirection: "column" as "column",
    overflowY: "auto" as "auto",
    width: "100%",
    height: "100%"
  },
  [Axis.Horizontal]: {
    display: "flex",
    flexDirection: "row" as "row",
    overflowX: "auto" as "auto",
    width: "100%",
    height: "100%"
  }
};

export default class ListView extends React.Component<Props> {
  static defaultProps = {
    scrollDirection: Axis.Vertical
  };

  render() {
    const { children, scrollDirection } = this.props;
    const style = styles[scrollDirection];
    return <div style={style}>{children}</div>;
  }
}
