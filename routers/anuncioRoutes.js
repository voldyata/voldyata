const express = require('express');
const anuncioController = require('../controllers/anuncioController');
const upload = require('../mildwares/uploadimagem')
const router = express.Router();


router.post("/cadastrar",upload.single('imagem'), anuncioController.cadastrar)
router.get("/listar", anuncioController.listar)
router.get("/encontrar/:id", anuncioController.findbyid)
router.get("/encontrarnome/:nome", anuncioController.findbynome)
router.delete("/eliminar/:id", anuncioController.eliminar)
router.put("/atualizar", anuncioController.atualizar)

module.exports = router;