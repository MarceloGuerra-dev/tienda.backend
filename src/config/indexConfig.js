const dotenv = require('dotenv')
dotenv.config()

const {MongoClient} = require('mongodb')

//configuro la conexion a la base de datos 
const client = new MongoClient(process.env.MONGO_URL)

async function connectToMongoDb(){

    try {
        await client.connect()
        console.log('Conectado a Mongodb')
        return client
    } catch (error) {
        console.log('Error al conectar')
        return null

    }
}

async function disconnectToMongoDb(){
    try {
        await client.close()
        console.log('Desconectado de Mongodb')
    } catch (error) {
        console.log('Error al desconectar', error )
    }
}

module.exports = {connectToMongoDb, disconnectToMongoDb}