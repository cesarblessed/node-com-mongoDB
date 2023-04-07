const mongoose = require("mongoose");

//Configurando mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/aprendendo", {
    useMongoClient : true
}).then(() => {
    console.log("MongoDB conectado...");
}).catch((err) => {
    console.log("Houve um erro ao se conectar: " + err);
})

// Model - Usuários

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
});

mongoose.model('usuarios', UsuarioSchema);