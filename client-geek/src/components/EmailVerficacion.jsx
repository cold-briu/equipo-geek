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
            <img
              src="https://pa1.narvii.com/6707/f4b9a2d144c3ae90e94cb16114b293c256a1bcef_hq.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EmailVerificacion;
