
const express = require("express");
const app = express();
const puerto = 3006;
const cors = require("cors");

const { getPersonaje, getPersonajeById } = require("./controller/getPersonaje")

app.use(cors());


app.get("/", getPersonaje);

app.get("/:id", getPersonajeById);





app.listen(puerto ,() =>{
    console.log(`Conectado con éxito en puerto ${puerto}`)
});
