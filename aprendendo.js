const mongoose = require("mongoose");

//Configurando mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/aprendendo", {
    useNewUrlParser: true 
}).then(() => {
    console.log("MongoDB conectado...");
}).catch((err) => {
    console.log("Houve um erro ao se conectar: " + err);
})

// Model - Usuários
// definindo o model
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

// Collection
mongoose.model('usuarios', UsuarioSchema);

//Criando um novo usuário

const Usuario = mongoose.model('usuarios');


new Usuario({
    nome: "Julia",
    sobrenome: "Silva",
    email: "julia@gmail.com",
    idade: 26,
    pais: "Eua"
}).save().then(() => {
    console.log("Usuário criado com sucesso!");
}).catch((err) => {
    console.log("Houve um erro ao registrar usuário: " + err);
})