const joi = require("@hapi/joi");

module.exports = function (data) {
    const schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required()
    });

    return schema.validate(data);
}