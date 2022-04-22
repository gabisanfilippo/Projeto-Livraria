const express = require("express");
const router = express.Router();

const apiController = require('../controllers/apiController')


router.get("/livros", apiController.listaLivros);

router.post("/livros/criar", apiController.criarLivros)
router.get("/livros/criar", apiController.exibeLivroCadastrado)

router.put("/livros/editar/:id", apiController.editarLivros)
router.get("/livros/editar/:id", apiController.exibeLivroCadastrado)

module.exports = router;