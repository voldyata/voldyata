const express = require('express');
const router = express.Router();
const medicamentoController = require('../controllers/medicamentoController');



router.post("/cadastrar", medicamentoController.cadastrar)
router.get("/listar", medicamentoController.listar)
router.get("/encontrar/:id", medicamentoController.findbyid)
router.get("/nome/:nome", medicamentoController.findbynome)
router.delete("/eliminar/:id", medicamentoController.eliminar)
router.put("/atualizar", medicamentoController.atualizar)
module.exports = router;