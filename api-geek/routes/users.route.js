const router = require("express").Router();
const schemaValidator = require("../middleware/checkDataType");
const schema = require("../utils/validations/client.validation");
const userService = require("../services/user.service");
const contratoService = require("../services/contrato.service");
const mail = require("../utils/mailer/nodemailer");

router.route("/").post(schemaValidator(schema), async (req, res, next) => {
    try {
        if (!req.body.vendedorid) return res.status(400).json({ message: "vendedor invalido" });
        let vendedor = req.body.vendedorid;
        delete req.body.vendedorid;
        let id = await new userService().register(req.body);
        await new contratoService().register({ vendedor, cliente: id, date: Date.now() })
        await mail(req.body.email, `<h1>Verificar correo</h1><p>https://equipo-geek.firebaseapp.com/home</p>`);
        res.status(200).json({ message: "created successfully", id })
    } catch (err) {
        next(err);
    }
})
    .get(async (req, res, next) => {
        try {
            let usuarios = await new userService().getAll(req.query);
            if (usuarios.length < 1) return res.status(400).json({ message: "usuarios no encontrados" });
            res.status(200).json(usuarios);
        } catch (err) {
            next(err);
        }
    });

router.route("/:id").get(async (req, res, next) => {
    try {
        let usuario = await new userService().getOne(req.params.id);
        if (!usuario) return res.status(400).json({ message: "usuario no encontrado" });
        res.status(200).json(usuario)
    } catch (err) {
        next(err);
    }
})
    .put(async (req, res, next) => {
        try {
            await new userService().update(req.params.id, req.body);
            res.status(200).json({ message: "updated successfully" });
        } catch (err) {
            next(err);
        }
    })
    .delete(async (req, res, next) => {
        try {
            await new userService().delete(req.params.id);
            res.status(200).json({ message: "deleted successfully" });
        } catch (err) {
            next(err);
        }
    })

router.route("/contratos/:id").get(async (req, res, next) => {
    try {
        let contratos = await new contratoService().getAll({ vendedor: req.params.id });
        res.status(200).json(contratos);
    } catch (err) {
        next(err);
    }
})
    .put(async (req, res, next) => {
        try {
            let params = { cliente: req.body.clienteid, vendedor: req.params.vendedorid }
            delete req.body.clientid;
            await new contratoService().update(params, req.body);
            res.status(200).json({ message: "updated successfully" });
        } catch (err) {
            next(err);
        }
    })

module.exports = router;