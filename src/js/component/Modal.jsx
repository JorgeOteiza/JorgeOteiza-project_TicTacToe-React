import React, { useState } from "react";
import "../../styles/Modal.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Modal = ({ isOpen, onClose, onStartGame }) => {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleStartGame = () => {
    // Verificar que se hayan ingresado nombres y se haya seleccionado un símbolo
    if (playerX && playerO && selectedSymbol) {
      onStartGame(playerX, playerO, selectedSymbol);
      onClose();
    } else {
      alert(
        "Por favor ingresa los nombres de los jugadores y selecciona un símbolo."
      );
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Selecciona tus opciones</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Jugador 1"
              value={playerX}
              onChange={(e) => setPlayerX(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Jugador 2"
              value={playerO}
              onChange={(e) => setPlayerO(e.target.value)}
            />
            <div className="btn-group" role="group" aria-label="Símbolos">
              <button
                type="button"
                className={`btn btn-primary ${
                  selectedSymbol === "X" ? "active" : ""
                }`}
                onClick={() => setSelectedSymbol("X")}
              >
                X
              </button>
              <button
                type="button"
                className={`btn btn-primary ${
                  selectedSymbol === "O" ? "active" : ""
                }`}
                onClick={() => setSelectedSymbol("O")}
              >
                O
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleStartGame}
            >
              Empezar Juego
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
