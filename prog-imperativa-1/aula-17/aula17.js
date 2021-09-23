const express = require('express');

const app = new express();

app.get('/', function (requisicaoAoServidor, respostaDoServidor) {
    respostaDoServidor.send('Seja bem-vindo(a) à Aula 17 de Programação Imperativa I');
})

app.get('/sobre', function (requisicaoAoServidor, respostaDoServidor) {
    respostaDoServidor.send('Sobre o projeto');
})

app.listen(1234);