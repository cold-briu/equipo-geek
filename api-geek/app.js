const app = require('express')();
const bodyParser = require('body-parser');
const { port } = require('./config/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

app.use("/api/usuarios", require("./routes/users.route"));
app.use("/api/vendedores", require("./routes/vendedor.route"));

// Start the server
app.listen(port, () => {
	console.log(`App listening on port ${port}`);
	console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

app.get('/', (req, res) => {
	res
		.status(200)
		.send('Hello, world!')
		.end();
});

module.exports = app;
