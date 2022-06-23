const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController')

router.post("/cadastrar", comentarioController.cadastrar)
router.get("/listar", comentarioController.listar)
router.get("/encontrar/:id", comentarioController.findbyid)
router.get("/encontrarnome/:nome", comentarioController.findbynome)
router.delete("/eliminar/:id", comentarioController.eliminar)
router.put("/atualizar", comentarioController.atualizar)

module.exports = router;