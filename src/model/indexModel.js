// El modelo se encarga de interactuar con los datos

//ruta para acceder a la data
//const data = require("../../data.json");
const {
  connectToMongoDb,
  disconnectToMongoDb,
} = require("../config/indexConfig");

class ProductosModel {
  static async getAll() {
    try {
      const clientMongo = await connectToMongoDb();
      if (!clientMongo) {
        throw Error("Error al conectar con mongo");
      }
      const result = await clientMongo.db('tienda').collection('productos').find().toArray()
      
      await disconnectToMongoDb();
      
      if (!result) 
        return { data: null, error: true }       
        return { data: result, error: false }
          
      
    } catch (error) {
      return error;
    }
  }
}

module.exports = ProductosModel;
