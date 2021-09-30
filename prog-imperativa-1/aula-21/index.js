// Importar express
const express = require('express');
// Importar template engine
const handlebars  = require('express-handlebars');

// importar todas as rotas
const rotasProfessores = require('./rotas/professores');

const aplicativo = new express();

// CONFIGURAÇÕES DO PROJETO NODEJS
    // como gostaríamos de tratar os dados
aplicativo.use(express.json()); // Converte os valores do formulário para JSON.
aplicativo.use(express.urlencoded({ extended: true })); // for parsing aplicativolication/x-www-form-urlencoded

    // qual template engine vamos utilizar e qual a pasta será responsável pelas telas
aplicativo.set('views','./visualizacoes');
aplicativo.set('view engine', 'handlebars');
aplicativo.engine('handlebars', handlebars({ defaultLayout: 'modelo' }));

// Todas as rotas do projeto Nodejs
aplicativo.use('/professores', rotasProfessores);


aplicativo.listen(8081, () => console.log('Servidor funcionando!'));