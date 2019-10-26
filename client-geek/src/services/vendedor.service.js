function vendedorAuth() {
	let vendedorIsAuth = false;
	let vendedorId = '';
	let vendedorData = '';
	const mainUrl = 'https://aka-geek.appspot.com';

	this.getAuth = function() {
		return vendedorIsAuth;
	};

	this.getvendedorData = function() {
		return vendedorId;
	};

	this.setAuth = async function(data) {
		try {
			const url = `${mainUrl}/api/usuarios/login`;
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

	this.register = async function(vendedor) {
		try {
			let response = await fetch(`${mainUrl}/api/usuarios`, {
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
