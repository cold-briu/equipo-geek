import React from 'react';
import { Link } from 'react-router-dom';
import vendedorService from '../services/vendedor.service';

class Registro_vendedor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: '',
			phone: '',
			document: '',
			birthday: '',
			city: '',
			genere: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();

		console.log(this.state);
		vendedorService.register(this.state);
		document.querySelector('#register-redirect').click();
	}
	render() {
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-7 mx-auto mt-5 d-flex align-items-center justify-content-center flex-column'>
							<h3>REGISTRO</h3>
							<button onClick={vendedorService.register}>test</button>
							<form
								action=''
								onSubmit={this.handleSubmit}
								className='justify-content-center w-100'
							>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Nombre Completo</h6>
										<input
											className='form-control'
											name='name'
											type='text'
											value={this.state.name}
											onChange={this.handleChange}
											placeholder='Nombre Completo'
										/>
									</div>
								</div>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Numero de Documento</h6>
										<input
											className='form-control'
											name='document'
											type='number'
											value={this.state.document}
											onChange={this.handleChange}
											placeholder='Numero de Documento'
										/>
									</div>
								</div>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Lugar de expedicion</h6>
										<input
											className='form-control'
											type='text'
											name='city'
											value={this.state.city}
											onChange={this.handleChange}
											placeholder='lugar expedicion'
										/>
									</div>
								</div>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Fecha de Nacimiento</h6>
										<input
											className='form-control'
											type='date'
											name='birthday'
											value={this.state.birthday}
											onChange={this.handleChange}
											placeholder='Fecha de Nacimiento'
										/>
									</div>
								</div>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Genero</h6>
										<select
											name=''
											id=''
											name='genere'
											value={this.state.genere}
											onChange={this.handleChange}
										>
											<option value='Hombre'>Hombre</option>
											<option value='Mujer'>Mujer</option>
										</select>
									</div>
								</div>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Correo Electronico</h6>
										<input
											className='form-control'
											type='text'
											name='email'
											value={this.state.email}
											onChange={this.handleChange}
											placeholder='Correo Electronico'
										/>
									</div>
								</div>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Numero de Celular</h6>
										<input
											className='form-control'
											type='number'
											name='phone'
											value={this.state.phone}
											onChange={this.handleChange}
											placeholder='Numero de Celular'
										/>
									</div>
								</div>
								<Link
									to='/home'
									id='register-redirect'
									className='d-none'
								></Link>
								<div className='col-12 text-center'>
									<button
										type='submit'
										className='btn btn-lg btn-dark btn-siguiente'
										name='Siguiente'
									>
										Registrarse
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Registro_vendedor;
