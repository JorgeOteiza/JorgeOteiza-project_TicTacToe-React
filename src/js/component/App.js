import React, { Component } from "react";
import "./App.css";

import Annnouncement from "./Annnouncement";
import ResetButton from "./ResetButton";
import Title from "/Title";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    };
  }

  updateBoard(loc, player) {}
  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic Tac Toe</h1>
          <Annnouncement />
          <ResetButton />
        </div>
        {this.state.gameBoard.map(
          function (value, i) {
            <Title
              key={i}
              loc={i}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn={this.state.turn}
            />;
          }.bind(this)
        )}
      </div>
    );
  }
}

export default App;
