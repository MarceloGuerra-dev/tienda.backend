//creo un server con express
const express = require("express");
const server = express();

//ruta para acceder a la data
const data = require('./data.json')

//Activar variable de entorno con dotenv
require("dotenv").config();

const PORT = process.env.PORT || 3000;

//ruta raiz
server.get("/main", (req, res) => {
  res.send("Tienda Inicio");
});

//ruta productos
server.get('/productos', (req, res)=>{
    res.json(data)
})

//Iniciar servidor
server.listen(PORT, () => {
  console.log(`Servidor en puerto http://localhost:${PORT}`);
});
