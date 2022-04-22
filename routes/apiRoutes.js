const express = require("express");
const router = express.Router();

const apiController = require('../controllers/apiController')


router.get("/livros", apiController.listaLivros);

router.post("/livros/criar", apiController.criarLivros)

router.put("/livros/editar/:id", apiController.editarLivros)

module.exports = router;