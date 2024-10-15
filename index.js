
const express = require("express");
const app = express();
const cors = require("cors");

const { getPersonaje, getPersonajeById } = require("./controller/getPersonaje");

const puerto = process.env.PORT || 3006;

app.use(cors());

// Ruta para obtener todos los personajes
app.get("/characters", getPersonaje);

// Ruta para obtener personaje por ID
app.get("/characters/:id", getPersonajeById);

app.listen(puerto, () => {
    console.log(`Conectado con éxito en puerto ${puerto}`);
});