import React, { Component } from 'react';
import { Link } from "react-router-dom";

class crearContrato extends Component {
	state = {};
	render() {
		return (
			<div className='crearContrato_container full-container pt-5 text-center d-flex flex-column justify-content-center align-items-center align-content-center'>
				<h1 className='my-5'>Crea un nuevo contrato</h1>
				<div className='btns_container'>
                    <Link to="/misClientes">
					<button className='btn btn-success mb-5'>Seleccionar Cliente</button>
                    </Link>
					<br />
                    <Link to="/registrar-cliente">
					<button className='btn btn-primary'>Agregar nuevo Cliente</button>
                    </Link>
				</div>
			</div>
		);
	}
}

export default crearContrato;
