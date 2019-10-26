const joi = require("@hapi/joi");

function validateUser(data) {
    const Schema = joi.object({
        name: joi.string().required().min(2),
        email: joi.string().email().required(),
        phone: joi.string().required(),
        document: joi.string().required(),
        expedido: joi.required(),
        ciudadExpedido: joi.string().required(),
        birthday: joi.required(),
        genere: joi.string()
    }).unknown(true);

    return Schema.validate(data);
}

module.exports = validateUser 