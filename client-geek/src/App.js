import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/* Componentes React*/
// import Registro_vendedor from './components/Registro_vendedor';
// import Login from './components/Login';

import registrarVendedor from './pages/registrarVendedor';
import loginVendedor from './pages/loginVendedor';
import home from './pages/home';

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
			</Switch>
		</BrowserRouter>
	);
}

export default App;
