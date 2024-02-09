import React, { Component } from "react";
import "./Title";
export default class Title extends Component {
  titleClick(props) {
    props.updateBoard(props.loc, prop.turn);
  }
  render() {
    return (
      <div
        className={"title " + this.props.loc}
        onclick={() => this.titleClick(this.props)}
      >
        <p>{this.props.value}</p>
      </div>
    );
  }
}
