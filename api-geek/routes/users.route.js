const router = require("express").Router();
const schemaValidator = require("../middleware/checkDataType");
const schema = require("../utils/validations/user.validation");

router.route("/").post(schemaValidator(schema), (req, res, next) => {
    try {
        res.status(200).json({ message: "created successfully" })
    } catch (err) {
        next(err);
    }
})

module.exports = router;