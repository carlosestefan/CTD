// Importar o express
const express = require('express');
// Iniciar o módulo de rotas
const rotas = express.Router();

// Importação do Controle de Professores

const {
    exibirListaProfs,
    retornarListaProfs,
    cadastrarProfessor
} = require('../controles/professores')

// ROTAS
rotas.get('/', exibirListaProfs);

rotas.get('/listar', retornarListaProfs);

rotas.post('/cadastrar', cadastrarProfessor);

module.exports = rotas;