const express = require('express')
const router = express.Router();
const upload = require('../mildwares/uploadimagem')
const usuarioController = require('../controllers/usuarioController');

router.post("/cadastrar", upload.single('imagem'), usuarioController.cadastrar)
router.get("/listar", usuarioController.listar)
router.get("/encontrar/:id", usuarioController.findbyid)
router.get("/encontrarnome/nome", usuarioController.findbynome)
router.delete("/eliminar/:id", usuarioController.eliminar)
router.put("/atualizar", usuarioController.atualizar)
router.post("/login", usuarioController.login)
router.put("/logout", usuarioController.logout)

module.exports = router;