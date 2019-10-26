const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { port } = require('./config/config');
const cors = require('cors');

app.use(express.json()).use(cors());

app.use('/api', require('./routes/login.route'));
app.use('/api/usuarios', require('./routes/users.route'));
app.use('/api/vendedores', require('./routes/vendedor.route'));

// Start the server
app.listen(port, () => {
	// const porti = 3500;
	// app.listen(porti, () => {
	console.log(`App listening on port ${port}`);
	console.log('Press Ctrl+C to quit.');
});

app.get('/', (req, res) => {
	res.status(200).send('Equipo Geek Api. ');
});

module.exports = app;
