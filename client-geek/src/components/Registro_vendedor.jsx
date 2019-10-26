import React from 'react';
import { Link } from 'react-router-dom';

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

		const data = new FormData(e.target);
		console.log(e.target);
		console.log(data);

		document.querySelector('#register-redirect').click();
	}
	render() {
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-7 mx-auto mt-5 d-flex align-items-center justify-content-center flex-column'>
							<h3>REGISTRO</h3>
							<form
								action=''
								onSubmit={this.handleSubmit}
								className='justify-content-center w-100'
							>
								<input
									className='form-control'
									type='text'
									placeholder='Nombre Completo'
								/>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Nombre Completo</h6>
									</div>
								</div>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Numero de Documento</h6>
										<input
											className='form-control'
											type='number'
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
											placeholder='Fecha de Nacimiento'
										/>
									</div>
								</div>
								<div className='form-group '>
									<div className='col-12'>
										<h6>Genero</h6>
										<select name='' id=''>
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
