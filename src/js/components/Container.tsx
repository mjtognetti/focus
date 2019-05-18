import React from "react";
import * as EdgeInsets from "../logic/EdgeInsets";

export interface Props {
  width?: number;
  height?: number;
  padding?: EdgeInsets.EdgeInsets;
  margin?: EdgeInsets.EdgeInsets;
  children?: React.ReactNode;
  color?: string;
}

export default class Container extends React.Component<Props> {
  render() {
    const { children } = this.props;
    const style: any = {};
    this.props.width && (style.width = this.props.width);
    this.props.height && (style.height = this.props.height);
    this.props.padding &&
      (style.padding = EdgeInsets.toCSSString(this.props.padding));
    this.props.margin &&
      (style.margin = EdgeInsets.toCSSString(this.props.margin));
    this.props.color && (style.backgroundColor = this.props.color);
    console.log(style);

    return <div style={style}>{children}</div>;
  }
}
