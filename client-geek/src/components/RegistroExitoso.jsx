import React from "react";

class RegistroExitoso extends React.Component() {
  render() {
    return (
      <div>
        <div class="d-flex justify-content-center p-4">
          <div class="d-flex p-2 bd-highlight ">
            <h2>Su registro ha sido exitoso</h2>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <div class="d-flex p-2 bd-highlight ">
            <button class="btn btn-success">Continuar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistroExitoso;
