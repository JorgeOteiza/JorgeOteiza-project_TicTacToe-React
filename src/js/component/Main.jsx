import React from "react";
import Modal from "./Modal.jsx"; // Asegúrate de importar el Modal correcto aquí

class MainComponent extends React.Component {
  // Cambia el nombre de la clase a MainComponent
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
        {/* Aquí puedes renderizar otros componentes si es necesario */}
      </div>
    );
  }
}

export default MainComponent; // Asegúrate de exportar la clase MainComponent
