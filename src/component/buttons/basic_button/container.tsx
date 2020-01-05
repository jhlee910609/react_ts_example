import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "./presenter";

interface IContainerProps {
  text?: string;
}
interface IContainerState {}
export default class container extends PureComponent<
  IContainerProps,
  IContainerState
> {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    return <Button>{this.props.text}</Button>;
  }
}
