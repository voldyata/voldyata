const express = require('express')
const router = express.Router();
const upload = require('../mildwares/uploadimagem')
const adminController = require('../controllers/adminController');

router.post("/cadastrar", upload.single('imagem'), adminController.cadastrar)
router.put("/atualizar", adminController.atualizar)

module.exports = router;