import React, { Component } from "react";
import "../../styles/App.css";
import Annnouncement from "./Annnouncement";
import ResetButton from "./ResetButton";
import Title from "./Title";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      turn: "x",
      winner: null,
    };
  }

  updateBoard(loc, player) {}
  resetBoard() {
    this.setState({
      gameboard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      turn: "x",
      winner: null,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic Tac Toe</h1>
          <Annnouncement winner={this.state.winner} />
          <ResetButton reset={this.resetBoard.bind(this)} />
        </div>
        {this.state.gameBoard.map(
          function (value, i) {
            return (
              <Title
                key={i}
                loc={i}
                value={value}
                updateBoard={this.updateBoard.bind(this)}
                turn={this.state.turn}
              />
            );
          }.bind(this)
        )}
      </div>
    );
  }
}

export default App;
