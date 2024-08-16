//creo un server con express
const express = require("express");
const server = express();
//Activar variable de entorno con dotenv
require("dotenv").config();

const PORT = process.env.PORT || 3000;

//ruta raiz
server.get("/", (req, res) => {
  res.send("Tienda Inicio");
});

//Iniciar servidor
server.listen(PORT, () => {
  console.log(`Servidor en puerto http://localhost:${PORT}`);
});
