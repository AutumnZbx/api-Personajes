const { request, response } = require("express");
const { personajes } = require("../personajes");


const getPersonaje = (req = request, res = response) =>{
    return res.json({
        ok : true,
        statusCode : 200,
        personajes
    });
};
const getPersonajeById = (req = request, res = response) => {
    const id = req.params.id;

    const personajeFound = 
        personajes.find((personaje) => {
        return parseInt(personaje.id) === parseInt(id)
    });

    if (personajeFound){
        return res.json({
            ok:true,
            statusCode : 200,
            personajeFound
        })
    } else {
        return res.json({
            ok : false,
            statusCode : 404,
            message : "El personaje buscado no existe"
        })
    };
};

module.exports = {
    getPersonaje,
    getPersonajeById,

};