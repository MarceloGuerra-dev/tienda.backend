//creo un server con express
const express = require("express");
const server = express();
const routerProductos = require("./src/routes/indexRoutes");

//Activar variable de entorno con dotenv
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Permisos de CORS
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  next();
 });

//ruta raiz
server.get("/main", (req, res) => {
  res.status(200).send("Tienda Inicio");
});

//ruta productos
server.use("/main", routerProductos);

//Iniciar servidor
server.listen(PORT, () => {
  console.log(`Servidor en puerto http://localhost:${PORT}`);
});
