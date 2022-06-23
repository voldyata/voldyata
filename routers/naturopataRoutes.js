const express = require('express');
const router = express.Router();
const upload = require('../mildwares/uploadimagem')
const naturopataController = require('../controllers/naturopataController')

router.post("/cadastrar",upload.single('imagem'), naturopataController.cadastrar)
router.get("/listar", naturopataController.listar)
router.get("/encontrar/:id", naturopataController.findbyid)
router.get("/encontrarnome/:nome", naturopataController.findbynome)
router.delete("/eliminar/:id", naturopataController.eliminar)
router.put("/atualizar", naturopataController.atualizar)

module.exports = router;