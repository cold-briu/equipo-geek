import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vendedor: {
				name: 'Pepito'
			}
		};
	}

	render() {
		return (
			<React.Fragment>
				<div className='container-fluid home_container'>
					<div className='row'>
						<div className='col mt-5 d-flex align-items-center justify-content-center flex-column'>
							<div className='mb-5'>
								<h3>BIENVENIDO {this.state.vendedor.name}</h3>
							</div>
							<Link to='/crear-contrato'>
								<button
									type='submit'
									className='btn btn-lg btn-block btn-success mb-4'
								>
									AGREGAR CONTRATO
								</button>
							</Link>
							<Link to='/'>
								<button
									type='submit'
									className='btn btn-lg btn-block btn-dark mb-4'
								>
									MIS CONTRATOS
								</button>
							</Link>
							<Link to='/'>
								<button type='submit' className='btn btn-lg btn-block btn-dark'>
									MIS USUARIOS
								</button>
							</Link>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
