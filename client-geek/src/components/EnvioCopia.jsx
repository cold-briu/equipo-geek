import React from "react";

class EnvioCopia extends React.Component() {
  render() {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <div class="d-flex p-2 bd-highlight ">
            <h2>Se ha enviado una copia</h2>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <div class="d-flex p-2 bd-highlight ">
            <h5>Por favor verifica tu correo</h5>
            <a href="#">¿Aún no lo recibes?</a>
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

export default EnvioCopia;
