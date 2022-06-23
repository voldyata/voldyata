const express = require('express');
const router = express.Router();
const  nmController = require('../controllers/nmController')




router.post("/cadastrar", nmController.cadastrar)
router.get("/listar", nmController.listar)
router.get("/encontrar/:id", nmController.findbyid)
router.get("/encontrarnome/:nome", nmController.findbynome)
router.delete("/eliminar/:id", nmController.eliminar)
router.put("/atualizar", nmController.atualizar)




module.exports = router;0