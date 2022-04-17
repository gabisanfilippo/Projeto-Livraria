const {sequelize, Livro} = require('../models/index')

const apiController = {
    listaLivros: async (req,res) => {
        const livros = await Livro.findAll()
        res.send(livros)
    },
    criarLivros: async (req,res) => {
        /* var query = location.search.slice(1);
        var partes = query.split('&');
        var data = {};
        partes.forEach(function (parte) {
            var chaveValor = parte.split('=');
            var chave = chaveValor[0];
            var valor = chaveValor[1];
            data[chave] = valor;
        });
        Livro.push(data) */

        /* let query = window.location.search.split('&');

        //Criar objeto que vai conter os parametros
        let paramArray = {};

        //Passar por todos os parametros
        for (let i = 0; i < query.length; i++) {
            //Dividir os parametros chave e valor
            let param = query[i].split('=');

            //Adicionar ao objeto criado antes
            paramArray[param[0]] = param[1];
        }
        Livro.push(paramArray) */

        /* let query = req.query
        const livros = await Livro.findAll() */
        res.send('livros')
        //?titulo=HarryPotter&quantidade_paginas=700&autor=JKRowling&ano_lancamento=2000&estoque=75
    }
}

module.exports = apiController