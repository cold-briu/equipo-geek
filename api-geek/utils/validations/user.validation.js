const joi = require("@hapi/joi");

function validateUser(data) {
    const Schema = joi.object({
        name: joi.string().required().min(2),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(255),
        phone: joi.string().required(),
        document: joi.string().required(),
        birthday: joi.required(),
        city: joi.string().required(),
        genere: joi.string()
    });

    return Schema.validate(data);
}

module.exports = validateUser 