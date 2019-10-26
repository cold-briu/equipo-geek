import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: '',
			phone: '',
			document: '',
			birthday: '',
			city: ''
		};
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit(e) {
		e.preventDefault();
		console.log(e);
		document.querySelector('#login-redirect').click();
	}

	render() {
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-7 mx-auto mt-5 d-flex align-items-center justify-content-center flex-column'>
							<h3>LOGIN</h3>
							<form action='' onSubmit={this.handleSubmit}>
								<div className='form-group'>
									<h6>Correo Electronico</h6>
									<input
										type='email'
										className='form-control'
										name='Text'
										placeholder='Correo Electronico'
										required
									/>
								</div>
								<div className='form-group'>
									<h6>Contraseña</h6>
									<input
										type='password'
										className='form-control'
										name='password'
										placeholder='Contraseña'
										required
									/>
								</div>
								<div className='text-center'>
									<Link
										to='/home'
										className='d-none'
										id='login-redirect'
									></Link>
									<button
										type='submit'
										className='form-control btn btn-lg btn-success'
										name='Siguiente'
									>
										Siguiente
									</button>
									<br />
									<span>
										<em>¿No tienes cuenta?</em>
									</span>
									<br />
									<Link to='/registro'>
										<button
											type='button'
											className='form-control btn btn-lg btn-regresar btn-dark'
											name='Registro'
										>
											Registro
										</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Login;
