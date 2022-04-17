const express = require("express");
const router = express.Router();

const apiController = require('../controllers/apiController')
const creatApiController = require('../controllers/creatApiController')

router.get("/livros", apiController.listaLivros);

router.post("/livros/criar", creatApiController.criarLivros)

module.exports = router;