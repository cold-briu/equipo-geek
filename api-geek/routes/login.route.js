const router = require("express").Router();
const checkLogin = require("../middleware/validateLogin");
const checkDataType = require("../middleware/checkDataType");
const schema = require("../utils/validations/login.validation")

router.post("/", checkDataType(schema), checkLogin, async (req, res, next) => {
    try {
        res.status(200).json({ success: true });
    } catch (err) {
        next(err);
    }
})

module.exports = router;