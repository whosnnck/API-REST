const express = require('express');
const gameSchema = require("../models/games");

const router = express.Router();

//Create new game
router.post('/game', (req, res) => {
    const game = gameSchema(req.body);
    game
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error})) 
});

//Get games
router.get('/game', (req, res) => {
    gameSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error})) 
});

//Get one game (searching)
router.get('/game/:id', (req, res) => {
    const { id } = req.params;
    gameSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error})) 
});

//Update game
router.put('/game/:id', (req, res) => {
    const { id } = req.params;
    const { name, genero, pgi, resumen, calificacion, comentario} = req.body
    gameSchema
    .updateOne({ _id: id }, {$set : {name, genero, pgi, resumen, calificacion, comentario}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error})) 
});

//Delete game
router.delete('/game/:id', (req, res) => {
    const { id } = req.params;
    gameSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error})) 
});


module.exports = router;
