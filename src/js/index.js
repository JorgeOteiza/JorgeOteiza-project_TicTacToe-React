import React from "react";
import ReactDOM from "react-dom";
import "../styles/App.css";

import Modal from "./component/Modal.jsx";
import MainComponent from "./component/App.jsx"; // Importa el componente Main

class Main extends React.Component {
  // Cambia el nombre de la clase a Main o cualquier otro nombre
  constructor(props) {
    super(props);
    this.state = {
      showModal: true, // Inicialmente muestra el modal al cargar la página
    };
  }

  handleCloseModal = () => {
    this.setState({ showModal: false }); // Función para cerrar el modal
  };

  render() {
    return (
      <div>
        {this.state.showModal && (
          <Modal
            isOpen={true}
            onClose={this.handleCloseModal}
            onStartGame={() => {}}
          />
        )}
        <App /> {/* Renderiza tu aplicación principal */}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MainComponent /> {/* Usa Main como tu componente principal */}
  </React.StrictMode>,
  document.getElementById("root")
);
