const {sequelize, Livro} = require('../models/index')

const creatApiController = {
    criarLivros: (req,res) => {
        res.send('oi')
    }
}

module.exports = creatApiController