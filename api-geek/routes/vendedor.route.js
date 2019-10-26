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
    .get(async (req, res, next) => {
        try {
            let vendedores = await new vendedorService().getAll(req.query);
            if (vendedores.length < 1) return res.status(400).json({ message: "vendedores no encontrados" });
            res.status(200).json(vendedores);
        } catch (err) {
            next(err);
        }
    });

router.route("/:id").get(async (req, res, next) => {
    try {
        let vendedor = await new vendedorService().getOne(req.params.id);
        if (!vendedor) return res.status(400).json({ message: "vendedor no encontrado" });
        res.status(200).json(vendedor)
    } catch (err) {
        next(err);
    }
})
    .put(async (req, res, next) => {
        try {
            await new vendedorService().update(req.params.id, req.body);
            res.status(200).json({ message: "updated successfully" });
        } catch (err) {
            next(err);
        }
    })
    .delete(async (req, res, next) => {
        try {
            await new vendedorService().delete(req.params.id);
            res.status(200).json({ message: "deleted successfully" });
        } catch (err) {
            next(err);
        }
    })
module.exports = router;