import React from "react";

class EmailVerificacion extends React.Component() {
  render() {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <div class="d-flex p-2 bd-highlight ">
            <h2>Esperando verificación...</h2>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <div class="d-flex p-2 bd-highlight ">
            <img src="./img/cargando.gif" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default EmailVerificacion;
