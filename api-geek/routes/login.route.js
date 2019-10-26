const router = require("express").Router();
const checkLogin = require("../middleware/validateLogin");
const checkDataType = require("../middleware/checkDataType");
const schema = require("../utils/validations/login.validation");

router.post("/", checkDataType(schema), checkLogin, async (req, res, next) => {
    try {
        res.status(200).json({ success: true });
    } catch (err) {
        next(err);
    }
})

router.post("/test", async (req, res, next) => {
    try {
        await mail("orlyn.rosales26@gmail.com", "Hola Orlyn :D");
        res.status(200).json("success");
    } catch (err) {
        next(err);
    }
})

module.exports = router;