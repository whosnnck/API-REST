const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    genero : {
        type : String,
        required : true
    },

    pgi : {
        type : String,
        required : true
    },

    resumen : {
        type : String,
        required : true
    },

    calificacion : {
        type : Number,
        required : true
    },

    comentario : {
        type : String,
        required : true
    }

});

module.exports = mongoose.model('Game', gameSchema);
