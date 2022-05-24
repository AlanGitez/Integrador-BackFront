const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");
const models = require("./models");


const app = express();
const routes = require("./routes");

app.use(cors()); // esta librería es para poder trabajar front con back en localhost
app.use(morgan("dev"));

app.use("/api", routes); //todas las rutas empiezan con api
app.use("/", (req, res, next) => res.redirect("/api")); // me aseguro que si o si vaya para /api si entraste en otra ruta

db.sync({force:false})
.then(() => {
  app.listen(1337, () => console.log("escuchando en el puerto 1337"));
})