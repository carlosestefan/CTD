// 1. Importar o módulo Express
const Express = require('express');

// 2. Inicializar o Express
const app = new Express();

// 3. Definir as rotas
app.get('/', function(requisicaoAoServidor, respostaDoServidor) {
    // 3.1 Enviar resposta ao navegador
    respostaDoServidor.sendFile(__dirname + '/welcome/welcome.html');
});

    // 3.2 Definir outras rotas
    app.get('/sobre', (req, res) => res.send('Sobre o projeto'));

// 4. Definir a porta de acesso a aplicação
app.listen(2345);