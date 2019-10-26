const vendedorService = require("../services/vendedor.service");
const bcrypt = require("bcrypt");
module.exports = async function (req, res, next) {
    try {
        let user = await new vendedorService().login(req.body.email);
        if (!user) return res.status(400).json({ message: "El email no está registrado", success: false });
        let checkPassword = await bcrypt.compare(req.body.password, user.password);
        if (!checkPassword) return res.status(400).json({ message: "Contraseña incorrecta", success: false });
        res.status(200).json({ success: true });
    } catch (err) {
        next(err);
    }
}