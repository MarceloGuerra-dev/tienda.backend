// El modelo se encarga de interactuar con los datos

//ruta para acceder a la data
const data = require("../../data.json");

class ProductosModel {
  static getAll() {
    if (!data)
      return {
        data: null,
        error: true,
      }
      return {data, error:false}
  }
}

module.exports = ProductosModel