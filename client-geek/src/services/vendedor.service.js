function vendedorAuth() {
	let vendedorIsAuth = false;
	let vendedorId = '';
	let vendedorData = '';
	const mainUrl = 'https://equipo-geek.appspot.com';

	this.getAuth = function() {
		return vendedorIsAuth;
	};

	this.getvendedorData = function() {
		return vendedorId;
	};

	this.setAuth = async function(/*data*/) {
		try {
			let data = {};
			const url = `${mainUrl}/api/vendedores`;
			const response = await fetch(url, {
				method: 'POST',

				cache: 'no-cache',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			});

			let authData = await response.json();

			if (response.status === 400) return authData.authRes;

			vendedorIsAuth = true;
			vendedorId = authData;
			return vendedorIsAuth;
		} catch (err) {
			console.error(err);
		}
	};

	const dummy = {
		name: 'alex okendo',
		email: 'alex@okendo.com',
		password: 'asd123',
		phone: 123345365,
		document: '123123123123',
		birthday: '132/11/123123',
		city: 'medellinu',
		genere: 'hola'
	};

	this.register = async function(vendedor = { ...dummy }) {
		try {
			let response = await fetch(`${mainUrl}/api/vendedores`, {
				method: 'POST',
				body: JSON.stringify(vendedor), // data can be `string` or {object}!
				headers: {
					'Content-Type': 'application/json'
				}
			});
			let data = await response.json();
			if (response.status === 400) return { error: true, message: data.error };
			return { error: false, id: data };
		} catch (error) {
			console.error(error);
		}
	};

	this.setHardAuth = () => {
		vendedorIsAuth = true;
	};

	this.setId = function(id) {
		vendedorId = id;
	};

	this.getId = function() {
		return vendedorId;
	};

	this.logout = function() {
		vendedorIsAuth = false;
	};
}

export default new vendedorAuth();
