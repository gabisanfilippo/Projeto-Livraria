const {sequelize, Livro} = require('../models/index')

const apiController = {
    listaLivros: async (req,res) => {
        const livros = await Livro.findAll()
        res.send(livros)
    },
    criarLivros: async (req,res) => {
        let query = req.query
        let values = Object.values(query)
        query.quantidade_paginas = parseInt(values[1])
        query.estoque = parseInt(values[4])
        Livro.create(query)
        //?titulo=HarryPotter&quantidade_paginas=700&autor=JKRowling&ano_lancamento=2000&estoque=75
    },
    editarLivros: async (req,res) => {
        let id = req.params.id
        let query = req.query
        let values = Object.values(query)
        query.quantidade_paginas = parseInt(values[1])
        query.estoque = parseInt(values[4])
        Livro.update(query,{where: {id: id}})
    },
    exibeLivroCadastrado: async (req,res) => {
        let query = req.query
        let values = Object.values(query)
        query.quantidade_paginas = parseInt(values[1])
        query.estoque = parseInt(values[4])
        res.send(query)
    }
}

module.exports = apiController