import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/* Componentes React*/
// import Registro_vendedor from './components/Registro_vendedor';
// import Login from './components/Login';

import registrarVendedor from './pages/registrarVendedor';
import loginVendedor from './pages/loginVendedor';
import home from './pages/home';

import crearContrato from './pages/crearContrato';
import registrarCliente from './pages/registrarCliente';
import misClientes from './pages/misClientes';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/login' />
				</Route>
				<Route exact path='/registro' component={registrarVendedor} />
				<Route exact path='/login' component={loginVendedor} />
				<Route exact path='/home' component={home} />
				<Route exact path='/crear-contrato' component={crearContrato} />
				<Route exact path='/registrar-cliente' component={registrarCliente} />
				<Route exact path='/misClientes' component={misClientes} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
