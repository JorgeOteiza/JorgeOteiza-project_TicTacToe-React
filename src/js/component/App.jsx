import React, { Component } from "react";
import "../../styles/App.css";
import Annnouncement from "./Annnouncement";
import ResetButton from "./ResetButton";
import Title from "./Title";
import Modal from "./Modal";
import Home from "./home.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      turn: "x",
      winner: null,
      isModalOpen: true,
    };
  }
  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  startGame(playerX, playerO, selectedSymbol) {
    console.log("Jugador X:", playerX);
    console.log("Jugador O:", playerO);
    console.log("Símbolo seleccionado:", selectedSymbol);
    this.setState({ modalOpen: false });
  }

  start;

  updateBoard(loc, player) {
    if (
      this.state.gameBoard[loc] === "x" ||
      this.state.gameBoard[loc] === "o" ||
      this.state.winner
    ) {
      //movimiento inválido
      return;
    }

    let currentGameBoard = this.state.gameBoard;
    currentGameBoard.splice(loc, 1, this.state.turn);
    this.setState({ gameBoard: currentGameBoard });

    let topRow =
      this.state.gameBoard[0] +
      this.state.gameBoard[1] +
      this.state.gameBoard[2];
    if (topRow.match(/xxx|ooo/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let middleRow =
      this.state.gameBoard[3] +
      this.state.gameBoard[4] +
      this.state.gameBoard[5];
    if (middleRow.match(/xxx|ooo/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let bottomRow =
      this.state.gameBoard[6] +
      this.state.gameBoard[7] +
      this.state.gameBoard[8];
    if (bottomRow.match(/xxx|ooo/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let leftCol =
      this.state.gameBoard[0] +
      this.state.gameBoard[3] +
      this.state.gameBoard[6];
    if (leftCol.match(/xxx|ooo/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let middleCol =
      this.state.gameBoard[1] +
      this.state.gameBoard[4] +
      this.state.gameBoard[7];
    if (middleCol.match(/xxx|ooo/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let rightCol =
      this.state.gameBoard[2] +
      this.state.gameBoard[5] +
      this.state.gameBoard[8];
    if (rightCol.match(/xxx|ooo/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let leftDiag =
      this.state.gameBoard[0] +
      this.state.gameBoard[4] +
      this.state.gameBoard[7];
    if (leftDiag.match(/xxx|ooo/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let rightDiag =
      this.state.gameBoard[2] +
      this.state.gameBoard[4] +
      this.state.gameBoard[6];
    if (rightDiag.match(/xxx|ooo/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let moves = this.state.gameBoard.join("").replace(/ /g, "");
    if (moves.lenght === 9) {
      this.setState({ winner: "d" });
    }
    this.setState({ turn: this.state.turn === "x" ? "o" : "x" });
  }

  resetBoard() {
    this.setState({
      gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      turn: "x",
      winner: null,
    });
  }

  handleStartGame(playerX, playerO, selectedSymbol) {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div className="container">
        {/* Renderiza el Modal solo si isModalOpen es true */}
        {this.state.isModalOpen && (
          <Modal
            isOpen={this.state.isModalOpen}
            onClose={() => this.setState({ isModalOpen: false })}
            onStartGame={(playerX, playerO, selectedSymbol) =>
              this.handleStartGame(playerX, playerO, selectedSymbol)
            }
          />
        )}
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
