const joi = require("@hapi/joi");

function validateUser(data) {
    const Schema = joi.object({
        name: joi.string().required().min(2).max(60),
        lastname: joi.string().required().min(5).max(60),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(20),
        phone: joi.string().required(),
        document: joi.string().required(),
        birthday: joi.required().integer()
    });

    return Schema;
}

module.exports = { validateUser }