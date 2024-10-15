const { request, response } = require("express");
const { personajes } = require("../personajes"); // Base de datos simulada

// Obtener todos los personajes
const getPersonaje = (req = request, res = response) => {
    return res.json({
        ok: true,
        statusCode: 200,
        personajes
    });
};

// Obtener personaje por ID
const getPersonajeById = (req = request, res = response) => {
    const id = req.params.id;

    const personajeFound = personajes.find((personaje) => parseInt(personaje.id) === parseInt(id));

    if (personajeFound) {
        return res.json({
            ok: true,
            statusCode: 200,
            personaje: personajeFound
        });
    } else {
        return res.status(404).json({
            ok: false,
            statusCode: 404,
            message: "El personaje buscado no existe"
        });
    }
};

module.exports = {
    getPersonaje,
    getPersonajeById
};
