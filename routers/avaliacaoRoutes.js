const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController')

router.post("/cadastrar", avaliacaoController.cadastrar)
router.get("/listar", avaliacaoController.listar)
router.get("/encontrar/:id", avaliacaoController.findbyid)
router.get("/encontrarnome/:nome", avaliacaoController.findbynome)
router.delete("/eliminar/:id", avaliacaoController.eliminar)
router.put("/atualizar", avaliacaoController.atualizar)

module.exports = router;