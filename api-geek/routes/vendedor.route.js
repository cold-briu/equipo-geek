const router = require("express").Router();
const schemaValidator = require("../middleware/checkDataType");
const schema = require("../utils/validations/user.validation");
const vendedorService = require("../services/vendedor.service");

router.route("/").post(schemaValidator(schema), async (req, res, next) => {
    try {
        let id = await new vendedorService().register(req.body);
        res.status(200).json({ message: "created successfully", id });
    } catch (err) {
        next(err);
    }
})

module.exports = router;