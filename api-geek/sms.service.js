const { tw_account, tw_token } = require('./config/config');

const client = require('twilio')(tw_account, tw_token);

client.messages
	.create({
		body: 'Hola amigos equipo geek',
		from: '+12014196925',
		to: '+573113391423'
	})
	.then(message => console.log(message.sid));
