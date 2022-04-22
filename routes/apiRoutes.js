const express = require("express");
const router = express.Router();

const apiController = require('../controllers/apiController')


router.get("/livros", apiController.listaLivros);

router.post("/livros/criar", apiController.criarLivros)



module.exports = router;