const router = require("express").Router();
const schemaValidator = require("../middleware/checkDataType");
const schema = require("../utils/validations/client.validation");
const userService = require("../services/user.service");
const contratoService = require("../services/contrato.service");

router.route("/").post(schemaValidator(schema), async (req, res, next) => {
    try {
        if (!req.body.vendedorid) return res.status(400).json({ message: "vendedor invalido" });
        let vendedor = req.body.vendedorid;
        delete req.body.vendedorid;
        let id = await new userService().register(req.body);
        await new contratoService().register({ vendedor, cliente: id, date: Date.now() })
        res.status(200).json({ message: "created successfully", id })
    } catch (err) {
        next(err);
    }
})

module.exports = router;