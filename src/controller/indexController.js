const ProductosModel = require('../model/indexModel')


class Productos {
    static async getAll(req, res) {
     const {data, error} =  ProductosModel.getAll()
     error ? res.status(400).json({error:'no hay datos'})
           : res.status(200).json(data)
    }
}

module.exports = Productos