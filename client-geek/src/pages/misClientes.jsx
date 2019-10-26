import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class misClientes extends Component {
	state = {
		clientes: [
			{
				name: 'cliente 1'
			},
			{
				name: 'cliente 2'
			}
		]
	};
	render() {
		return (
			<div className='misClientes_container full-container full-container pt-5 text-center d-flex flex-column justify-content-center align-items-center align-content-center'>
				<h1 className='my-5'>Mis clientes</h1>
				<div className='cards_container'>
					{!this.state.clientes
						? 'loading...'
						: this.state.clientes.map(cliente => (
								<div className='card my-5'>
									<div className='card-header'>{cliente.name}</div>
									<div className='card-body'>
										Some else data
										<br />
										<Link>
											<button className='btn btn-sm btn-primary'>
												crear contrato
											</button>
										</Link>
									</div>
								</div>
						  ))}
				</div>
			</div>
		);
	}
}

export default misClientes;
